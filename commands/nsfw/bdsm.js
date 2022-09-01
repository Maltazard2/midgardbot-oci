const userSchema = require('../../models/userSchema');
const serverSchema = require('../../models/serverSchema')

module.exports =  {
    
    name: 'bdsm',
    aliases: [],
    description: '🔞 Comandos NSFW.',
    category: 'NSFW 🔥',
    use: '<prefix>bdsm [@user/id]',
    owner: false,
    vip: true,
    slash: false,
    
    async execute(client, message, args, Discord) { 
  
        var bdsm = [

            'https://i.imgur.com/Hy0V1iC.gif',
            'https://i.imgur.com/8oGpXrU.gif',
            'https://i.imgur.com/c4EFxn9.gif',
            'https://i.imgur.com/jDJWIGt.gif',
            'https://i.imgur.com/8Z7LM2B.gif',
            'https://i.imgur.com/vGpAh86.gif',
            'https://i.imgur.com/lMnc7pW.gif',
            'https://i.imgur.com/n6GGOvv.gif',
            'https://i.imgur.com/WZXys3O.gif',
            'https://i.imgur.com/Mta6efW.gif',
            'https://i.imgur.com/epQFpFi.gif',
            'https://i.imgur.com/HOmPI6P.gif',
            'https://i.imgur.com/0ynO0D4.gif',
            'https://i.imgur.com/bqVXZVK.gif',
            'https://i.imgur.com/yaZzKOx.gif',
            'https://i.imgur.com/MdC3U0t.gif',
            'https://i.imgur.com/vrOK8DX.gif',
            'https://i.imgur.com/nrz1ydQ.gif',
            'https://i.imgur.com/HkIWNkl.gif',
            'https://i.imgur.com/H5LbOho.gif',
            'https://i.imgur.com/SPiQCGN.gif',
            'https://i.imgur.com/O3dyxF5.gif',
            'https://i.imgur.com/kB3BeM9.gif',
            'https://i.imgur.com/wdYPJcB.gif',
            'https://i.imgur.com/JUXTleK.gif',
            'https://i.imgur.com/8tHvu6C.gif',
            'https://i.imgur.com/1hpqrsm.gif',
            'https://i.imgur.com/P3ErdGw.gif',
            'https://i.imgur.com/OM9VMoR.gif',
            'https://i.imgur.com/9a9gG3a.gif',
            'https://i.imgur.com/izsDbmR.gif',
            'https://i.imgur.com/53gmHjP.gif',
            'https://i.imgur.com/UejQ0LA.gif',
            'https://i.imgur.com/tXuqr1z.gif',
            'https://i.imgur.com/QtQe5GV.gif',
            'https://i.imgur.com/0XebYmY.gif',
            'https://i.imgur.com/9tsjVj6.gif',
            'https://i.imgur.com/Vx3EkWY.gif',
            'https://i.imgur.com/RiUebv8.gif',
            'https://i.imgur.com/YFKzL5B.gif',
            'https://i.imgur.com/Y33JQna.gif',
            'https://i.imgur.com/ECsF0eo.gif',
            'https://i.imgur.com/WF1x7G6.gif',
            'https://i.imgur.com/m4PYArW.gif',
            'https://i.imgur.com/HmbaGmh.gif',
            'https://i.imgur.com/QPWr1jM.gif',
            'https://i.imgur.com/L4uLf8K.gif',
            'https://i.imgur.com/168nhnq.gif',

        ]
  
        if(!message.channel.nsfw){
          
            return message.reply({embeds: [
  
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                .setThumbnail('https://media.discordapp.net/attachments/936039644959756319/936524707677741086/prohibido.gif?width=318&height=149')
                .setColor('RED')
                .setDescription(`<a:prohibido:936527618466009109> | ¡Oh rayos, no puedes hacer eso aquí pillín <:ojooo:925928526119571457>`)
  
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
        
        } else {

            try {
                
                let userData = await userSchema.findOne({idusuario: message.author.id})

                while(!userData){

                    let user = await userSchema.create({

                        idusuario: message.author.id,
                        username: message.author.username,

                    })
    
                    user.save();
                    console.log('Usuario Registrado ===> Id: '+ message.author.id + ' Username: ' + message.author.username)

                    userData = await userSchema.findOne({idusuario: message.author.id})

                }

                if (userData.vip === false){
                    
                    let serverData = await serverSchema.findOne({idserver: message.guild.id})

                    if(!serverData || serverData.premium === false){

                        return message.reply({ embeds: [
                    
                            new Discord.MessageEmbed()
                            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
                            .setColor('RED')
                            .setDescription(`<a:Verify2:931463492677017650> | Comando requiere Usuario VIP o Servidor Premium!`)
            
                        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

                    }
                
                }

            } catch (error) {

                console.log('Error al Buscar Usuario en Comando BDSM: '+ error)
                
            }
      
            let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
            let ramdonbdsm = bdsm[Math.floor(Math.random()*bdsm.length)]
            let desc 
    
            while (!ramdonbdsm || ramdonbdsm === null || ramdonbdsm === '' || ramdonbdsm === undefined) {
                
                ramdonbdsm = bdsm[Math.floor(Math.random()*bdsm.length)]
                
            }

            if (!img || img.id===message.author.id || img.user.bot) {
      
                desc = `A **${message.author.username}** le gusta rudo y salvage <a:sabroso:880695816497541180>`
          
            } else {
      
                desc = `**${message.author.username}** está dominando a **${img.user.username}** <a:sabroso:880695816497541180>.`
  
            }
  
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `🔞 | Midgard's Hot VIP 🔥`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(desc)
            .setImage(ramdonbdsm)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })

            const row = new Discord.MessageActionRow()
            .addComponents(

                new Discord.MessageButton()
                .setCustomId("otro")
                .setLabel("🔁")
                .setStyle("SUCCESS")

            )

            message.reply({ allowedMentions: { repliedUser: false}, 
                
                content: '||<a:fijadito:931432134797848607> Si no carga, da click al botón 🔁||',
                embeds: [embed], 
                components: [row] 

            }).then(async m => {
        
                let filter = int => int.isButton() && int.user.id == message.author.id 
        
                const collector = m.createMessageComponentCollector({ filter, max: 1, maxUsers: 1, maxComponents: 1, time: 60000 });
         
                collector.on("collect", async int => {
            
                    int.deferUpdate();
            
                    if (int.customId === "otro") {

                        ramdonbdsm = bdsm[Math.floor(Math.random()*bdsm.length)]
            
                        while (!ramdonbdsm || ramdonbdsm === null || ramdonbdsm === '' || ramdonbdsm === undefined) {
                
                            ramdonbdsm = bdsm[Math.floor(Math.random()*bdsm.length)]
                            
                        }

                        const nembed = new Discord.MessageEmbed()
                        .setAuthor({ name: `🔞 | Midgard's Hot VIP 🔥`, iconURL: client.user.avatarURL({ dynamic: true }) })
                        .setDescription(desc)
                        .setImage(ramdonbdsm)
                        .setColor('RANDOM')
                        .setTimestamp(new Date())
                        .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })

                        m.edit({ allowedMentions: { repliedUser: false}, content: ' ', embeds: [nembed], components: [] }).catch((e) => console.log('Error al enviar mensaje: '+e))
   
                    }
          
                });
    
                collector.on("end", (collected, reason) => {
            
                    if(collected < 1 || reason === 'time') return m.edit({ allowedMentions: { repliedUser: false}, content: ' ', components: [] }).catch((e) => console.log('Error al enviar mensaje: '+e))
             
                    console.log('Razón del término de colección de nsfw: '+reason)
         
                });
         
            })
            .catch((e) => console.log('Error al enviar mensaje: '+e))

        } 
      
    }
  
}