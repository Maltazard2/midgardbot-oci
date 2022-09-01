module.exports =  {
    
    name: 'culo',
    aliases: ['ass','trasero'],
    description: '🔞 Comandos NSFW.',
    
    async execute(client, message, args, Discord) { 
  
        var culo = [

            'https://i.imgur.com/UE98v5i.gif',
            'https://i.imgur.com/B77iz8W.gif',
            'https://i.imgur.com/oENnwR5.gif',
            'https://i.imgur.com/lzR5pQp.gif',
            'https://i.imgur.com/GWbowGw.gif',
            'https://i.imgur.com/FwGxOPm.gif',
            'https://i.imgur.com/R8geO00.gif',
            'https://i.imgur.com/pjQEhBV.gif',
            'https://i.imgur.com/IbJOnVo.gif',
            'https://i.imgur.com/hPhEcfn.gif',
            'https://i.imgur.com/6wJZN7o.gif',
            'https://i.imgur.com/yrrXNIo.gif',
            'https://i.imgur.com/H3oJyVF.gif',
            'https://i.imgur.com/yw39zrC.gif',
            'https://i.imgur.com/3JoW8gG.gif',
            'https://i.imgur.com/StTAXJZ.gif',
            'https://i.imgur.com/zA29CBv.gif',
            'https://i.imgur.com/7u2YAEp.gif',
            'https://i.imgur.com/xPxwTZo.gif',
            'https://i.imgur.com/1IXkek0.gif',
            'https://i.imgur.com/hdbtVR9.gif',
            'https://i.imgur.com/HDBDIiI.gif',
            'https://i.imgur.com/iEnLO0o.gif',
            'https://i.imgur.com/PyDrmVw.gif',
            'https://i.imgur.com/pbTy0K1.gif',
            'https://i.imgur.com/TYqbjOV.gif',
            'https://i.imgur.com/HXjz2uA.gif',
            'https://i.imgur.com/pKf3xdw.gif',
            'https://i.imgur.com/Pl3f8yj.gif',
            'https://i.imgur.com/4MmjeEu.gif',
            'https://i.imgur.com/riH0naD.gif',
            'https://i.imgur.com/70XpwTi.gif',
            'https://i.imgur.com/HKYjASi.gif',
            'https://i.imgur.com/HticrQm.gif',
            'https://i.imgur.com/jGNlc4T.gif',
            'https://i.imgur.com/BGddgdf.gif',
            'https://i.imgur.com/e4tP0Um.gif',
            'https://i.imgur.com/NWRagg6.gif',
            'https://i.imgur.com/JLldul3.gif',
            'https://i.imgur.com/XbG3DBa.gif',
            'https://i.imgur.com/AWGhbtE.gif',
            'https://i.imgur.com/wpiwIAj.gif',
            'https://i.imgur.com/xCD8eht.gif',
            'https://i.imgur.com/zlo2XDN.gif',
            'https://i.imgur.com/3Cq1s5j.gif',
            'https://i.imgur.com/j3w4Rvj.gif',
            'https://i.imgur.com/voQKBdp.gif',
            'https://i.imgur.com/KlLUgst.gif',
            'https://i.imgur.com/kd3NJnA.gif',
            'https://i.imgur.com/BgViz8w.gif',
            'https://i.imgur.com/xb49bPK.gif',
            'https://i.imgur.com/B8kxgsw.gif',
          
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
            let ramdonculo = culo[Math.floor(Math.random()*culo.length)]
            let desc 
    
            while (!ramdonculo || ramdonculo === null || ramdonculo === '' || ramdonculo === undefined) {
                
                ramdonculo = culo[Math.floor(Math.random()*culo.length)]

            }
            
            if (!img || img.id===message.author.id || img.user.bot) {
      
                desc = `**${message.author.username}** mira ese perro culazo <a:pandanoveo:880306441926352916> `
          
            } else {
      
                desc = `Omg!!! **${message.author.username}** mira ese perro culazo que tiene **${img.user.username}** <a:pandanoveo:880306441926352916> `
  
            }
  
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `🔞 | Midgard's Hot 🔥`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(desc)
            .setImage(ramdonculo)
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

                        ramdonculo = culo[Math.floor(Math.random()*culo.length)]
            
                        while (!ramdonculo || ramdonculo === null || ramdonculo === '' || ramdonculo === undefined) {
                
                            ramdonculo = culo[Math.floor(Math.random()*culo.length)]

                        }

                        const nembed = new Discord.MessageEmbed()
                        .setAuthor({ name: `🔞 | Midgard's Hot 🔥`, iconURL: client.user.avatarURL({ dynamic: true }) })
                        .setDescription(desc)
                        .setImage(ramdonculo)
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