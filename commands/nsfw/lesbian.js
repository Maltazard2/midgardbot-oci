const userSchema = require('../../models/userSchema');
const serverSchema = require('../../models/serverSchema')

module.exports =  {
    
    name: 'lesbian',
    aliases: ['less','lésbico','lesbico'],
    description: '🔞 Comandos NSFW.',
    category: 'NSFW 🔥',
    use: '<prefix>lesbian [@user/id]',
    owner: false,
    vip: true,
    slash: false,
    
    async execute(client, message, args, Discord) { 
  
        var less = [

            'https://i.imgur.com/jWyqNQg.gif',
            'https://i.imgur.com/cH41Kz6.gif',
            'https://i.imgur.com/tKDKsa4.gif',
            'https://i.imgur.com/W0DFOpW.gif',
            'https://i.imgur.com/0JNssqH.gif',
            'https://i.imgur.com/wpDuRBS.gif',
            'https://i.imgur.com/Q5ChfFC.gif',
            'https://i.imgur.com/uutSm0q.gif',
            'https://i.imgur.com/H7W3Xtn.gif',
            'https://i.imgur.com/RsaiyOM.gif',
            'https://i.imgur.com/VRYPkRM.gif',
            'https://i.imgur.com/BDuq0aH.gif',
            'https://i.imgur.com/441vOKe.gif',
            'https://i.imgur.com/JSvYUEg.gif',
            'https://i.imgur.com/B7kTeGK.gif',
            'https://i.imgur.com/tezGho9.gif',
            'https://i.imgur.com/LiiaZZJ.gif',
            'https://i.imgur.com/cbGk59E.gif',
            'https://i.imgur.com/7HQDHLr.gif',
            'https://i.imgur.com/QjE3WDs.gif',
            'https://i.imgur.com/BaZYp6r.gif',
            'https://i.imgur.com/Y5zxoWX.gif',
            'https://i.imgur.com/vy331j3.gif',
            'https://i.imgur.com/YXF6J0O.gif',
            'https://i.imgur.com/Wd8CP1G.gif',
            'https://i.imgur.com/MKXPbqO.gif',
            'https://i.imgur.com/3EfE0yG.gif',
            'https://i.imgur.com/70ebZEP.gif',
            'https://i.imgur.com/BqUEwqe.gif',
            'https://i.imgur.com/9OsnARs.gif',
            'https://i.imgur.com/isKdmZF.gif',
            'https://i.imgur.com/zXQv2lu.gif',
            'https://i.imgur.com/fA9DMlr.gif',
            'https://i.imgur.com/NkMzNJE.gif',
            'https://i.imgur.com/fJheQpe.gif',
            'https://i.imgur.com/F8FXl8J.gif',
            'https://i.imgur.com/05xVM7m.gif',
            'https://i.imgur.com/Lrn0t96.gif',
            'https://i.imgur.com/P0T8SLp.gif',
            'https://i.imgur.com/6pLdjDR.gif',
            'https://i.imgur.com/j0KQOsH.gif',
            'https://i.imgur.com/J5Br0Jh.gif',
            'https://i.imgur.com/GRRYEcG.gif',
            'https://i.imgur.com/fQwM0Xk.gif',

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

                console.log('Error al Buscar Usuario en Comando Lesbian: '+ error)
                
            }
      
            let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
            let ramdonless = less[Math.floor(Math.random()*less.length)]
            let desc 
    
            while (!ramdonless || ramdonless === null || ramdonless === '' || ramdonless === undefined) {
                
                ramdonless = less[Math.floor(Math.random()*less.length)]
                
            }

            if (!img || img.id===message.author.id || img.user.bot) {
      
                desc = `**${message.author.username}** está buscando una morrita para un rico tijerazo <a:sabroso:880695816497541180>`
          
            } else {
      
                desc = `**${message.author.username}** y **${img.user.username}** están tijereando <a:sabroso:880695816497541180>.`
  
            }
  
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `🔞 | Midgard's Hot VIP 🔥`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(desc)
            .setImage(ramdonless)
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

           
                        ramdonless = less[Math.floor(Math.random()*less.length)]
                        
                        while (!ramdonless || ramdonless === null || ramdonless === '' || ramdonless === undefined) {
                            
                            ramdonless = less[Math.floor(Math.random()*less.length)]
                            
                        }

                        const nembed = new Discord.MessageEmbed()
                        .setAuthor({ name: `🔞 | Midgard's Hot VIP 🔥`, iconURL: client.user.avatarURL({ dynamic: true }) })
                        .setDescription(desc)
                        .setImage(ramdonless)
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