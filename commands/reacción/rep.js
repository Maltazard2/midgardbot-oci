const { Collection } = require('mongoose');
const userSchema = require('../../models/userSchema');

module.exports =  {
    
    name: 'rep',
    aliases: ['carisma','cari'],
    description: '🤠 Da un punto de carisma.',
    category: 'Reacción 😎',
    use: '<prefix>rep <@user/id>',
    owner: true,
    vip: false,
    slash: false,
  
    async execute(client, message, args, Discord) { 

        let usuario2 = await userSchema.findOne({ idusuario: message.author.id})

        while (!usuario2) {
            
            let user = await userSchema.create({

                idusuario: message.author.id,
                username: message.author.username,

            })

            user.save();
            console.log('Usuario Registrado ===> Id: '+ message.author.id + ' Username: ' + message.author.username)

            usuario2 = await userSchema.findOne({ idusuario: message.author.id})

        }
  
        let cooldown = ((usuario2.crep - Date.now())/1000)
        let h = ((cooldown / 3600)-1).toFixed()
        let m = ((((cooldown % 3600)-1)/60)-1).toFixed()
        let mensaje
          
        if(h > 1){
          
            if(m > 1){
            
                mensaje = h + ' horas y ' + m + ' minutos'
          
            } else if(m === 1){
            
                mensaje = h + ' horas y ' + m + ' minuto'
          
            } else if(m < 1){
          
                mensaje = h + ' horas'
         
            }
       
        } else if(h === 1){
          
            if(m > 1){
            
                mensaje = h + ' hora y ' + m + ' minutos'
          
            } else if(m === 1){
            
                mensaje = h + ' hora y ' + m + ' minuto'
          
            } else if(m < 1){
            
                mensaje = h + ' hora'
          
            }
        
        } else if(h < 1){
          
            if(m > 1){
            
                mensaje = m + ' minutos'
          
            } else if(m === 1){
            
                mensaje = m + ' minuto'
          
            }
        
        }
  
        if(usuario2.crep > Date.now()) return message.reply({embeds: [
            
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
            .setColor('RED')
            .setDescription('<a:tiempogif:931434689481285662> | Puedes volver a dar rep en : **'+ mensaje+'**')
            
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
  
        let usuario = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
  
        if(!usuario) {
  
            const e = new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | Debes mencionar correctamente a alguien o colocar una id válida!`)
          
           return message.reply({embeds: [e]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        }
  
        if(usuario){
       
            if(usuario.id === message.author.id) return message.reply({embeds: [
            
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | No te puedes dar **rep** a ti mismo!`)
          
            ]})
    
            if(usuario.user.bot) return message.reply({embeds: [
            
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | No puedes dar **rep** a un bot!`)
          
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
  
            let usuario1 = await userSchema.findOne({ idusuario: usuario.id})
            let text
  
            if(!usuario1){
  
                let user = await userSchema.create({
    
                    idusuario: usuario.id,
                    username: usuario.username,
    
                })
    
                user.save();
                console.log('Usuario Registrado ===> Id: '+ usuario.id + ' Username: ' + usuario.username)
    
            }
  
            let update1 = await userSchema.findOneAndUpdate({idusuario: usuario.id},
                {

                    rep: usuario1.rep + 1
            
                });

            update1.save()

            let update2 = await userSchema.findOneAndUpdate({idusuario: message.author.id},
                {

                    crep: (Date.now() + (6 * (60 * (1000 * 60))))

                });
  
            update2.save()

            function reminder() {
      
                message.author.send('<a:exclama2:880930071731392512> | ¡Ya puedes volver a dar rep!').catch((e) => console.log('Error al enviar mensaje: '+e))
    
            }
  
            if((usuario1.rep+1) === 1){
            
                text = '`'+(usuario1.rep+1)+'` punto'
          
            } else{
            
                text = '`'+(usuario1.rep+1)+'` puntos'
          
            }
    
            const server = message.guild
    
            const e = new Discord.MessageEmbed()
            .setAuthor({ name: server.name, iconURL: server.iconURL() ? server.iconURL({ dynamic: true }) : client.user.avatarURL({ dynamic: true }) })
            .setTitle('Carisma Diario 💟')
            .setColor('RANDOM')
            .setDescription(`Felicidades! | <@${usuario.id}> | Has recibido **1** punto de carisma.\n`+'Ahora tienes '+text+' en total!')
            .setTimestamp()
            .setFooter({ text: `MidgardBot`, iconURL: client.user.avatarURL({ dynamic: true }) })
  
            const bRm = new Discord.MessageButton()
    
            .setCustomId('primary')
            .setLabel('Recuérdame')
            .setStyle('PRIMARY')
            .setEmoji('⏰')
  
            message.channel.send({embeds: [e], components: [
    
                new Discord.MessageActionRow()
                .addComponents(bRm)
          
            ]}).then(async m => {
          
                let filter = int => int.isButton() && int.user.id == message.author.id //Agregamos el filtro para que solo permita que el miembro mencionado interactue con los botones.
           
                const collector = m.createMessageComponentCollector({ filter, time: 60000 /* Tiempo para que el miembro interatue con los botones */ });
            
                collector.on("collect", async int => {
              
                    int.deferUpdate();
           
                    if (int.customId === "primary") {

                        await message.reply({ 
                            
                            content: '<a:reloj:931434883916652564> | Acabas de establecer un recordatorio en 6 horas para volver a dar rep. No olvides de activar los mensajes directos!', 
                            ephemeral: true
                        
                        }).then(m => setTimeout(() => m.delete(), 5000)).catch((e) => console.log('Error al enviar mensaje: '+e))
                        
                        var msDelay = 6*3600000
                        
                        setTimeout(reminder, msDelay)
  
                        m.edit({ components: []}).catch((e) => console.log('Error al enviar mensaje: '+e))
  
                    }
      
                });
      
                collector.on("end", (collected, reason) => {
              
                    if(collected < 1) return m.edit({components: [
                
                        new Discord.MessageActionRow()
                        .addComponents(bRm.setDisabled(true))
              
                    ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

                    console.log('Razón del término de colección de rep: '+reason)

                });
         
            }).catch((e) => console.log('Error al enviar mensaje: '+e))
  
        }
    
    }

}