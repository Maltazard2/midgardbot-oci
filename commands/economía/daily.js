const { Collection } = require('mongoose');
const userSchema = require('../../models/userSchema');

module.exports =  {
    
    name: 'daily',
    aliases: ['diaria','claim'],
    description: '🏆 Reclama tu recompensa diaria por utilizar mis comandos.\n Asegúrate de haber votado antes en Top.gg para recibir el doble de coins.',
  
    async execute(client, message, args, Discord) { 

        let buscarUsuario = await userSchema.findOne({idusuario: message.author.id})

        let numero

        if(message.member.roles.cache.find(r => r.id === '886772939549184052')){

            numero = 2000

        } else {

            numero = 1000

        }

        while(!buscarUsuario){

            let user = await userSchema.create({

                idusuario: message.author.id,
                username: message.author.username

            })

            user.save();
            console.log('Usuario Registrado ===> Id: '+ message.author.id + ' Username: ' + message.author.username)
            
            buscarUsuario = await userSchema.findOne({idusuario: message.author.id})

        }

        let cooldown = ((buscarUsuario.daily - Date.now())/1000)
        let h = ((cooldown / 3600)-1).toFixed()
        let m = ((((cooldown % 3600)-1)/60)-1).toFixed()
        let mensaje
        
        if(h > 1)
        {
          
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

        if(buscarUsuario.daily > Date.now()) return message.reply({
            
            embeds: [
          
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
                .setThumbnail('https://i.imgur.com/nMfywso.gif')
                .setColor('RED')
                .setDescription('<a:tiempogif:931434689481285662> | Ya has reclamado tu recompensa hoy! Puedes volver en: **'+ mensaje+'** \nRecuerda que si apoyas al servidor votando en **Top.gg** podrás ganar el doble de coins.\n\n[Click aquí para votar](https://top.gg/servers/777620055344545842/vote)')
          
            ], components: [
            
                new Discord.MessageActionRow()
                .addComponents(

                    new Discord.MessageButton()
                    .setLabel('VOTAR') 
                    .setStyle('LINK') 
                    .setURL('https://top.gg/servers/777620055344545842/vote') 

                )

            ]

        }).catch((e) => console.log('Error al enviar mensaje: '+e))

        try {

            let update = await userSchema.findOneAndUpdate({ idusuario: message.author.id },
                {
    
                    dinero: buscarUsuario.dinero + numero,
                    total: buscarUsuario.total + numero,
                    daily: (Date.now() + (12 * (60 * (1000 * 60))))
    
                });

            update.save();
                
        } catch (error) {

            console.log('Error al actualiza dinero del daily: '+error)
                
        }

        function reminder() {

            const emb = new Discord.MessageEmbed()
            .setAuthor({ name: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : client.user.avatarURL({ dynamic: true }) })
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true }).replace('webp','png'))
            .setTitle(`⏰ | Recordatorios Activados`)
            .setDescription('<a:exclama2:880930071731392512> | Tu última recompensa diaria fue reclamada hace 12 horas. ¡Ya puedes volver a usar el comando `daily` para canjear tus coins extras.\n\n Asegúrate de haber votado antes por el servidor en Top.gg para obtener el doble de beneficios. \n\n <a:flech:931432469935312937> Link: https://top.gg/servers/777620055344545842/vote')
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `MidgardBot`, iconURL: client.user.avatarURL()})
    
            message.author.send({ embeds: [emb]}).catch(err => console.log('Error al enviar recordatorio de daily al dm de: '+message.author.username+' - Error: '+err))

        }

        const server = message.guild

        const e = new Discord.MessageEmbed()
        .setAuthor({ name: server.name, iconURL: server.iconURL() ? server.iconURL({ dynamic: true }) : client.user.avatarURL({ dynamic: true }) })
        .setTitle('Recompensa Diaria 💵')
        .setThumbnail('https://i.imgur.com/nMfywso.gif')
        .setColor(buscarUsuario.color ? buscarUsuario.color : 'RANDOM')
        .setDescription(`Felicidades **${message.author.username}**! Has recibido <a:money:930397094924124180> **` + numero.toLocaleString('en-US') + `** como recompensa diaria.\n¡Muchas gracias por usar mis comandos!`)
        .setTimestamp()
        .setFooter({ text: `MidgardBot`, iconURL: client.user.avatarURL()})

        const bRm = new Discord.MessageButton()
        .setCustomId('primary')
        .setLabel('Recuérdame')
        .setStyle('PRIMARY')
        .setEmoji('⏰')
      
        message.reply({ allowedMentions: { repliedUser: false}, embeds: [e], components: [

            new Discord.MessageActionRow()
            .addComponents(bRm)

        ]}).then(async m => {
      
            let filter = int => int.isButton() && int.user.id == message.author.id 
       
            const collector = m.createMessageComponentCollector({ filter, time: 60000 });
        
            collector.on("collect", async int => {
          
                int.deferUpdate();
       
                if (int.customId === "primary") {

                    await message.reply({ 

                        content: '<a:reloj:931434883916652564> | Acabas de establecer un recordatorio en 12 horas para reclamar tu recompensa diaria. No olvides de activar los mensajes directos!', 
                        ephemeral: true

                    }).then(m => setTimeout(() => m.delete(), 5000)).catch((e) => console.log('Error al enviar mensaje: '+e))

                    var msDelay = 12*3600000
                    setTimeout(reminder, msDelay);

                    m.edit({components: []}).catch((e) => console.log('Error al enviar mensaje: '+e))
  
                }
  
            });
  
            collector.on("end", (collected,reason) => {
          
                if(collected < 1) return m.edit({components: [

                    new Discord.MessageActionRow()
                    .addComponents(bRm.setDisabled(true))

                ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

                console.log('Razón del término de colección: '+reason)
            });
        
        }).catch((e) => console.log('Error al enviar mensaje: '+e))

    }

}