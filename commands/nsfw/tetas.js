module.exports =  {
    
  name: 'tetas',
  aliases: ['boobs'],
  description: '🔞 Comandos NSFW.',
  
  async execute(client, message, args, Discord) { 

    var tetas = [

      'https://i.imgur.com/L9UJVbZ.gif',
      'https://i.imgur.com/tbyVISE.gif',
      'https://i.imgur.com/7eECSgk.gif',
      'https://i.imgur.com/b5tGjeZ.gif',
      'https://i.imgur.com/XVy5RRJ.gif',
      'https://i.imgur.com/RWVZ1jI.gif',
      'https://i.imgur.com/wdreyFb.gif',
      'https://i.imgur.com/vRDO6Oe.gif',
      'https://i.imgur.com/xrM2Lhu.gif',
      'https://i.imgur.com/jVWNqp3.gif',
      'https://i.imgur.com/eeAPJKZ.gif',
      'https://i.imgur.com/0MkTTpM.gif',
      'https://i.imgur.com/RknLitk.gif',
      'https://i.imgur.com/ltLyVgA.gif',
      'https://i.imgur.com/ZLEiCdV.gif',
      'https://i.imgur.com/SHbVHlc.gif',
      'https://i.imgur.com/deh52Fu.gif',
      'https://i.imgur.com/xYunqOA.gif',
      'https://i.imgur.com/xtCXl1I.gif',
      'https://i.imgur.com/JvXyr1m.gif',
      'https://i.imgur.com/qeYNKVd.gif',
      'https://i.imgur.com/kj7DjmA.gif',
      'https://i.imgur.com/4nVdS0X.gif',
      'https://i.imgur.com/oTVdAzu.gif',
      'https://i.imgur.com/Zs6CugB.gif',
      'https://i.imgur.com/FripRne.gif',
      'https://i.imgur.com/oocifhn.gif',
      'https://i.imgur.com/zWzIcou.gif',
      'https://i.imgur.com/gXIyQyV.gif',
      'https://i.imgur.com/QWKb0o5.gif',
      'https://i.imgur.com/7dGE8EW.gif',
      'https://i.imgur.com/L1vv8Td.gif',
      'https://i.imgur.com/113HxYg.gif',
      'https://i.imgur.com/vjOsx1w.gif',
      'https://i.imgur.com/P8E0KDN.gif',
      'https://i.imgur.com/T2rSeSl.gif',
      'https://i.imgur.com/lqlqqYE.gif',
      'https://i.imgur.com/AQSAgEX.gif',
      'https://i.imgur.com/OQGeVPa.gif',
          
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
      let ramdontetas = tetas[Math.floor(Math.random()*tetas.length)]
      let desc

      while (!ramdontetas || ramdontetas === null || ramdontetas === '' || ramdontetas === undefined) {
        
        ramdontetas = tetas[Math.floor(Math.random()*tetas.length)]
        
      }
  
      if (!img || img.id===message.author.id || img.user.bot) {
    
        desc = `**${message.author.username}** mira estos melones <a:pandanoveo:880306441926352916> `
        
      } else {
    
        desc = `**${message.author.username}**, mira los melones que tiene **${img.user.username}** <a:pandanoveo:880306441926352916> `

      }

      const embed = new Discord.MessageEmbed()
      .setAuthor({ name: `🔞 | Midgard's Hot 🔥`, iconURL: client.user.avatarURL({ dynamic: true }) })
      .setDescription(desc)
      .setImage(ramdontetas)
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

                      ramdontetas = tetas[Math.floor(Math.random()*tetas.length)]
                      
                      while (!ramdontetas || ramdontetas === null || ramdontetas === '' || ramdontetas === undefined) {
                        
                        ramdontetas = tetas[Math.floor(Math.random()*tetas.length)]
                        
                      }

                        const nembed = new Discord.MessageEmbed()
                        .setAuthor({ name: `🔞 | Midgard's Hot 🔥`, iconURL: client.user.avatarURL({ dynamic: true }) })
                        .setDescription(desc)
                        .setImage(ramdontetas)
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