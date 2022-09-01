module.exports =  {
    
    name: 'suck',
    aliases: [],
    description: '🔞 Comandos NSFW.',
    category: 'NSFW 🔥',
    use: '<prefix>suck [@user/id]',
    owner: false,
    vip: false,
    slash: false,
    
    async execute(client, message, args, Discord) { 
  
        var suck = [

            'https://i.imgur.com/8tNDy0b.gif',
            'https://i.imgur.com/eN2pDzF.gif',
            'https://i.imgur.com/yepHf1C.gif',
            'https://i.imgur.com/3yDLdW3.gif',
            'https://i.imgur.com/n22Et3Y.gif',
            'https://i.imgur.com/OKdYLjB.gif',
            'https://i.imgur.com/Aq4geKh.gif',
            'https://i.imgur.com/YVBeTp2.gif',
            'https://i.imgur.com/ZNXtTU5.gif',
            'https://i.imgur.com/LX79Thw.gif',
            'https://i.imgur.com/uqhMbWp.gif',
            'https://i.imgur.com/nYOKzRG.gif',
            'https://i.imgur.com/IkIe9jH.gif',
            'https://i.imgur.com/53DDlqk.gif',
            'https://i.imgur.com/DOu3fd9.gif',
            'https://i.imgur.com/WzHXSLX.gif',
            'https://i.imgur.com/KuagFzk.gif',
            'https://i.imgur.com/wPh8T3y.gif',
            'https://i.imgur.com/Oveu78B.gif',
            'https://i.imgur.com/rZ74uhd.gif',
            'https://i.imgur.com/bYa2Zjj.gif',
            'https://i.imgur.com/uAvs5UM.gif',
            'https://i.imgur.com/YOPeuhI.gif',
            'https://i.imgur.com/XtsVk8w.gif',
            'https://i.imgur.com/hMsxdgg.gif',
            'https://i.imgur.com/2HG1qnN.gif',
            'https://i.imgur.com/Nw4A6Sp.gif',
            'https://i.imgur.com/2XOgxy2.gif',
            'https://i.imgur.com/6E9kkuT.gif',
            'https://i.imgur.com/jiTVlOM.gif',
            'https://i.imgur.com/5x4uc5I.gif',
            'https://i.imgur.com/yw9FTFz.gif',
            'https://i.imgur.com/8jkU29V.gif',
            'https://i.imgur.com/W8kYDRy.gif',
            'https://i.imgur.com/exA8lQg.gif',
            'https://i.imgur.com/d2hpR2A.gif',
            'https://i.imgur.com/mSobSzh.gif',
            'https://i.imgur.com/T9geBv1.gif',
            'https://i.imgur.com/cs04hw4.gif',
          
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
            let ramdonsuck = suck[Math.floor(Math.random()*suck.length)]
            let desc 
    
            while (!ramdonsuck || ramdonsuck === null || ramdonsuck === '' || ramdonsuck === undefined) {
                
                ramdonsuck = suck[Math.floor(Math.random()*suck.length)]
                
            }

            if (!img || img.id===message.author.id || img.user.bot) {
      
                desc = `A **${message.author.username}** le provocó chupar pollas <a:sabroso:880695816497541180>`
          
            } else {
      
                desc = `**${message.author.username}** se está comiendo la verga de **${img.user.username}** <a:sabroso:880695816497541180>.`
  
            }
  
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `🔞 | Midgard's Hot 🔥`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(desc)
            .setImage(ramdonsuck)
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

                        ramdonsuck = suck[Math.floor(Math.random()*suck.length)]
                        
                        while (!ramdonsuck || ramdonsuck === null || ramdonsuck === '' || ramdonsuck === undefined) {
                            
                            ramdonsuck = suck[Math.floor(Math.random()*suck.length)]
                            
                        }

                        const nembed = new Discord.MessageEmbed()
                        .setAuthor({ name: `🔞 | Midgard's Hot 🔥`, iconURL: client.user.avatarURL({ dynamic: true }) })
                        .setDescription(desc)
                        .setImage(ramdonsuck)
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