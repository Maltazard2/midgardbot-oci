module.exports =  {
    
    name: 'pussy',
    aliases: ['vagina','coño','panocha'],
    description: '🔞 Comandos NSFW.',
    
    async execute(client, message, args, Discord) { 
  
        var pussy = [

            'https://i.imgur.com/RjPfhBc.gif',
            'https://i.imgur.com/mxWkIXn.gif',
            'https://i.imgur.com/P9rnnkp.gif',
            'https://i.imgur.com/zlSd6Xr.gif',
            'https://i.imgur.com/Dh83cEg.gif',
            'https://i.imgur.com/VWnVJCh.gif',
            'https://i.imgur.com/CLDp8rJ.gif',
            'https://i.imgur.com/TY752hE.gif',
            'https://i.imgur.com/VehlzMJ.gif',
            'https://i.imgur.com/azXKg02.gif',
            'https://i.imgur.com/2GNCPFl.gif',
            'https://i.imgur.com/VQY19kt.gif',
            'https://i.imgur.com/vtI6C6k.gif',
            'https://i.imgur.com/kol2lRz.gif',
            'https://i.imgur.com/lhQqNxz.gif',
            'https://i.imgur.com/lzMX83p.gif',
            'https://i.imgur.com/zViDNxk.gif',
            'https://i.imgur.com/KF8HDYD.gif',
            'https://i.imgur.com/He7BrNm.gif',
            'https://i.imgur.com/YDMSrEB.gif',
            'https://i.imgur.com/sCls4Vg.gif',
            'https://i.imgur.com/WvMsiBx.gif',
            'https://i.imgur.com/yZzcHsf.gif',
            'https://i.imgur.com/XmBGw64.gif',
            'https://i.imgur.com/YPsO8SW.gif',
            'https://i.imgur.com/R4L8uVh.gif',
            'https://i.imgur.com/lr00LDl.gif',
            'https://i.imgur.com/dVoCsY1.gif',
            'https://i.imgur.com/4Xct6D1.gif',
            'https://i.imgur.com/CgKWCJh.gif',
            'https://i.imgur.com/EqV8aLO.gif',
            'https://i.imgur.com/vnM5dLF.gif',
            'https://i.imgur.com/8TrkPwn.gif',
            'https://i.imgur.com/MUWUXfc.gif',
            'https://i.imgur.com/pMsQWOI.gif',
            'https://i.imgur.com/BaruwDh.gif',
            'https://i.imgur.com/fYxlGuD.gif',
            'https://i.imgur.com/AJFELrP.gif',
          
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
            let ramdonpussy = pussy[Math.floor(Math.random()*pussy.length)]
            let desc 
    
            while (!ramdonpussy || ramdonpussy === null || ramdonpussy === '' || ramdonpussy === undefined) {
                
                ramdonpussy = pussy[Math.floor(Math.random()*pussy.length)]
                
            }

            if (!img || img.id===message.author.id || img.user.bot) {
      
                desc = `**${message.author.username}** mira esa papaya <a:pandanoveo:880306441926352916> `
          
            } else {
      
                desc = `**${message.author.username}** le está viendo la panocha a **${img.user.username}** <a:pandanoveo:880306441926352916> `
  
            }
  
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `🔞 | Midgard's Hot 🔥`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(desc)
            .setImage(ramdonpussy)
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

                        ramdonpussy = pussy[Math.floor(Math.random()*pussy.length)]
                        
                        while (!ramdonpussy || ramdonpussy === null || ramdonpussy === '' || ramdonpussy === undefined) {
                            
                            ramdonpussy = pussy[Math.floor(Math.random()*pussy.length)]
                            
                        }

                        const nembed = new Discord.MessageEmbed()
                        .setAuthor({ name: `🔞 | Midgard's Hot 🔥`, iconURL: client.user.avatarURL({ dynamic: true }) })
                        .setDescription(desc)
                        .setImage(ramdonpussy)
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