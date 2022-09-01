module.exports =  {
    
    name: 'kuni',
    aliases: [],
    description: '🔞 Comandos NSFW.',
    
    async execute(client, message, args, Discord) { 
  
        var lick = [

            'https://i.imgur.com/cSRA7Sh.gif',
            'https://i.imgur.com/7Bb4ihC.gif',
            'https://i.imgur.com/h1tQ2eV.gif',
            'https://i.imgur.com/RqzgCjT.gif',
            'https://i.imgur.com/nEUPOAt.gif',
            'https://i.imgur.com/pmtMaz2.gif',
            'https://i.imgur.com/C8YIkeL.gif',
            'https://i.imgur.com/JOxzBT4.gif',
            'https://i.imgur.com/OfZ6s5q.gif',
            'https://i.imgur.com/qFbShiB.gif',
            'https://i.imgur.com/dVVIA8Z.gif',
            'https://i.imgur.com/SYRoozd.gif',
            'https://i.imgur.com/lT81RAE.gif',
            'https://i.imgur.com/2nfG4mS.gif',
            'https://i.imgur.com/Yhu6Yuq.gif',
            'https://i.imgur.com/72EfFP5.gif',
            'https://i.imgur.com/r5UQfj2.gif',
            'https://i.imgur.com/NifWUIB.gif',
            'https://i.imgur.com/5D8daos.gif',
            'https://i.imgur.com/eFjUcpm.gif',
            'https://i.imgur.com/7rXMPXj.gif',
            'https://i.imgur.com/cOoxCBa.gif',
            'https://i.imgur.com/Pl57LKM.gif',
            'https://i.imgur.com/2CJZ6OI.gif',
            'https://i.imgur.com/LZU1QqK.gif',
            'https://i.imgur.com/OQKOQrc.gif',
            'https://i.imgur.com/0l57XzU.gif',
            'https://i.imgur.com/5dlfJVD.gif',
            'https://i.imgur.com/cpZBi9b.gif',
            'https://i.imgur.com/qWKgzx2.gif',
            'https://i.imgur.com/F5LEC8c.gif',
            'https://i.imgur.com/2I3qPql.gif',
            'https://i.imgur.com/I6BYhHP.gif',
            'https://i.imgur.com/6aRbyik.gif',
            'https://i.imgur.com/faD4VN9.gif',
            'https://i.imgur.com/slWfOrF.gif',
            'https://i.imgur.com/4ZBk5hF.gif',
            'https://i.imgur.com/UsVniRo.gif',
            'https://i.imgur.com/wK6DJXI.gif',
            'https://i.imgur.com/k7sekHC.gif',
            'https://i.imgur.com/5HQjMAa.gif',
            'https://i.imgur.com/SO4g6DM.gif',
            'https://i.imgur.com/uinyKyW.gif',
            'https://i.imgur.com/gSgKmDc.gif',
            'https://i.imgur.com/uuHnS02.gif',
            'https://i.imgur.com/CZOtnkt.gif',
            'https://i.imgur.com/1ZOH1js.gif',
            'https://i.imgur.com/svqMeqK.gif',
            'https://i.imgur.com/8fhzw81.gif',
            'https://i.imgur.com/6StUpkE.gif',
            'https://i.imgur.com/PoqSEXi.gif',
            'https://i.imgur.com/YOouyEV.gif',
            'https://i.imgur.com/HfrbiFE.gif',
            'https://i.imgur.com/uYNupsD.gif',
            'https://i.imgur.com/08XP7Io.gif',
            'https://i.imgur.com/SA2Byo6.gif',
            'https://i.imgur.com/jWrKfJk.gif',
            'https://i.imgur.com/6u83NPy.gif',
            'https://i.imgur.com/8DyYIbA.gif',
            'https://i.imgur.com/wMiJNOq.gif',
            'https://i.imgur.com/31zx0BP.gif',
            'https://i.imgur.com/x254HWG.gif',
            'https://i.imgur.com/tVHO6aM.gif',
            'https://i.imgur.com/uZHkGQY.gif',
            'https://i.imgur.com/EfC3xCp.gif',
          
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
      
            let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
            let ramdonlick = lick[Math.floor(Math.random()*lick.length)]
            let desc 
    
            while (!ramdonlick || ramdonlick === null || ramdonlick === '' || ramdonlick === undefined) {
             
                ramdonlick = lick[Math.floor(Math.random()*lick.length)]
                
            }

            if (!img || img.id===message.author.id || img.user.bot) {
      
                desc = `A **${message.author.username}** le provocó lamer coños <a:sabroso:880695816497541180>`
          
            } else {
      
                desc = `**${message.author.username}** le está haciendo un buen oral a **${img.user.username}** <a:sabroso:880695816497541180>.`
  
            }
  
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `🔞 | Midgard's Hot 🔥`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(desc)
            .setImage(ramdonlick)
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

           
                        ramdonlick = lick[Math.floor(Math.random()*lick.length)]
                        
                        while (!ramdonlick || ramdonlick === null || ramdonlick === '' || ramdonlick === undefined) {
                        
                            ramdonlick = lick[Math.floor(Math.random()*lick.length)]
                            
                        }

                        const nembed = new Discord.MessageEmbed()
                        .setAuthor({ name: `🔞 | Midgard's Hot 🔥`, iconURL: client.user.avatarURL({ dynamic: true }) })
                        .setDescription(desc)
                        .setImage(ramdonlick)
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