const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = { 

    name: 'suggestion',
    aliases: ['sugerencia','sugerir'],
    description: '🟡 Envía una sugerencia para mejorar el bot.',
  
    async execute(client, message, args, Discord) {
  
      const embedercancel = new Discord.MessageEmbed()
      .setDescription('<a:Verify2:931463492677017650> | Sugerencia cancelada. <:aisaMexicana:925926704097161216>')
      .setColor('RANDOM')
  
      const embednoconf = new Discord.MessageEmbed()
      .setDescription('<a:Verify2:931463492677017650> | ¡No confirmaste a tiempo! <:enojado:931434000751394867>')
      .setColor('RANDOM')
  
      const bSi = new MessageButton()
        .setCustomId("accept")
        .setLabel("SI")
        .setStyle("SUCCESS")
    
      const bNo = new MessageButton()
        .setCustomId("deny")
        .setLabel("NO")
        .setStyle("DANGER")

      let reporte = args.join(' ');
      if(!reporte){

        const e = new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | **Debes agregar una sugerencia para enviar al desarrollador!**`)
          
          return message.channel.send({embeds: [e]}).catch((e) => console.log('Error al enviar mensaje: '+e))
      }

      let sv = client.guilds.cache.get('777620055344545842')
      let channel = sv.channels.cache.get('874922451040083978')
  
      let usera = message.author;
  
      const embed = new Discord.MessageEmbed()
        .setThumbnail(`https://i.imgur.com/KWgasJi.gif`)
        .setTitle('<a:corazonBlack_FD:880526799736557679> | Sugerencia')
        .setDescription(`**${usera.username}** ¿Estás segur@ que quieres dar esta sugerencia? ¡Usar mal el comando causará la prohibición!`)
        .addField('Sugerencia: ','> ' + (reporte ? reporte : 'Ninguna'))
        .setColor('RANDOM')
        .setTimestamp(new Date())
        .setFooter({ text: `Developer Team - Midgard Bot`,  iconURL: `${message.author.displayAvatarURL({ dynamic: true })}` })
    
      setTimeout(() => message.delete(), 100)
      
      message.channel.send({ 
        
        embeds: [embed], 
        components: [
          new MessageActionRow()
          .addComponents([bSi,bNo])
        ] 
      }).then(async m => {
              
        let filter = int => int.isButton() && int.user.id == message.author.id
         
        const collector = m.createMessageComponentCollector({ filter, max: 1, maxUsers: 1, maxComponents: 1, time: 60000 });
        
        collector.on("collect", async int => {
            
          int.deferUpdate();
            
          if (int.customId === "accept") {
  
            let bugco = new Discord.MessageEmbed()
            .setThumbnail(`https://i.imgur.com/KWgasJi.gif`)
            .setTitle('<a:corazonBlack_FD:880526799736557679> | Sugerencia')
            .setColor('RANDOM')
            .setDescription('Sugerencia realizada con éxito! <a:clap:881331231021756437>')
            .addField('Sugerencia: ', '> ' + (reporte ? reporte : 'Ninguna'))
            .setTimestamp(new Date())
            .setFooter({ text: `Por: ${usera.id}`, iconURL: `${message.author.displayAvatarURL({ dynamic: true })}` })

            m.edit({ 
              embeds: [bugco],
              components: []
            }).catch((e) => console.log('Error al enviar mensaje: '+e))
  
            let bugre = new Discord.MessageEmbed()
            .setThumbnail(`https://i.imgur.com/KWgasJi.gif`)
            .setTitle('<a:corazonBlack_FD:880526799736557679> | Sugerencia')
            .setColor('RANDOM')
            .addField('Ha llegado la siguiente sugerencia: ', '> ' + (reporte ? reporte : ' Ninguna'))
            .setTimestamp(new Date())
            .setFooter({ text: `Por: ${usera.id}`, iconURL: `${message.author.displayAvatarURL({ dynamic: true })}` })
    
          channel.send({ embeds: [bugre]}).catch((e) => console.log('Error al enviar mensaje: '+e))
     
          } else if (int.customId === "deny") {
  
            m.edit({
              embeds : [embedercancel],
              components: []
            }).catch((e) => console.log('Error al enviar mensaje: '+e))
            
          }
        });
    
        collector.on("end", (collected, reason) => {
            
          if(collected.size < 1) return m.edit({ 
            embeds: [embednoconf],
            components: []
          }).catch((e) => console.log('Error al enviar mensaje: '+e))

          console.log('Razón del término de colección de la sugerencia: '+reason)
            
        });
          
      }).catch((e) => console.log('Error al enviar mensaje: '+e))

    }
      
  }