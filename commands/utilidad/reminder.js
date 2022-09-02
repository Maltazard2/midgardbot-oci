const prefixSchema = require('../../models/serverSchema');

module.exports =  {
    
  name: 'reminder',
  aliases: ['rm','remindme'],
  description: '⏰ Establece un recordatorio.',
  category: 'Utilidad 💡',
  use: '<prefix>rm <tiempo> <mensaje>',
  owner: false,
  vip: false,
  slash: true,

  async execute(client, message, args, Discord) {

    let buscarprefix, prefix
    try {

        buscarprefix = await prefixSchema.findOne({idserver: message.guild.id})

        if(buscarprefix){

            prefix = buscarprefix.prefix

        } else {

            prefix = process.env.PREFIX

        }

    } catch (error) {

        console.log('Error al buscar Prefix en Servidor: '+ message.guild.id + ' - ' + error)
        prefix = process.env.PREFIX

    }

    let obtener = args[0]
    let mensaje = args.slice(1).join(' ')
    
    if (!obtener) {
          
      return message.reply({ allowedMentions: { repliedUser: false}, embeds: [

        new Discord.MessageEmbed()
        .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
        .setColor('RED')
        .setDescription('<a:Verify2:931463492677017650> | Debes agregar un tiempo: `'+prefix+'remindme <tiempo en s,m,h> <recordatorio>`')

      ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
    
    } else if(!mensaje) {
    
      return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
        
        new Discord.MessageEmbed()
        .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
        .setColor('RED')
        .setDescription('<a:Verify2:931463492677017650> | Debes decirme qué debo recordar: `'+prefix+'remindme <tiempo en s,m,h> <recordatorio>`')

      ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
          
    } else {

      function reminder() {
    
        message.reply({embeds: [

          new Discord.MessageEmbed()
          .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
          .setColor('RANDOM')
          .setDescription('<a:exclama2:880930071731392512> | Tengo este recordatorio para ti: \n\n> ' + mensaje)
    
        ]}).catch((e) => console.log('Error al enviar recordatorio debido a: '+e))

      }
    
      switch (obtener.slice(-1)){
    
        case 's': {
    
          if (obtener.slice(0, -1) > 60) return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
            
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
            .setColor('RED')
            .setDescription('<a:Verify2:931463492677017650> | El tiempo no puede ser mayor de 60 segundos. Utiliza (m, s, h)!')

          ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
    
          var msDelay = obtener.slice(0, -1)*1000
              
          message.reply({ allowedMentions: { repliedUser: false}, embeds: [
            
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
            .setColor('RANDOM')
            .setDescription('<a:reloj:931434883916652564> | Acabas de establecer un recordatorio en ' + obtener.slice(0, -1) + ' segundos:\n\n<a:flech:931432469935312937> '+mensaje)

          ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

          setTimeout(reminder, msDelay)
              
          break

        }
    
        case 'm': {
    
          if (obtener.slice(0, -1) > 60) return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
            
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
            .setColor('RED')
            .setDescription('<a:Verify2:931463492677017650> | El tiempo no puede ser mayor de 60 minutos. Utiliza (m, s, h)!')
          
          ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

          var msDelay = obtener.slice(0, -1)*60000
              
          message.reply({ allowedMentions: { repliedUser: false}, embeds: [
            
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
            .setColor('RANDOM')
            .setDescription('<a:reloj:931434883916652564> | Acabas de establecer un recordatorio en ' + obtener.slice(0, -1) + ' minutos:\n\n<a:flech:931432469935312937> '+mensaje)
            
          ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

          setTimeout(reminder, msDelay)
              
          break

        }
    
        case 'h': {
    
          if (obtener.slice(0, -1) > 24) return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
            
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
            .setColor('RED')
            .setDescription('<a:Verify2:931463492677017650> | El tiempo no puede ser mayor de 24 horas. Utiliza (m, s, h)!')
          
          ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
            
          var msDelay = obtener.slice(0, -1)*3600000
              
          message.reply({ allowedMentions: { repliedUser: false}, embeds: [

            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
            .setColor('RANDOM')
            .setDescription('<a:reloj:931434883916652564> | Acabas de establecer un recordatorio en ' + obtener.slice(0, -1) + ' horas:\n\n<a:flech:931432469935312937> '+mensaje)
          
          ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
            
          setTimeout(reminder, msDelay)
              
          break

        }
    
        default: {
    
          message.reply({ allowedMentions: { repliedUser: false}, embeds: [

            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
            .setColor('RED')
            .setDescription('<a:Verify2:931463492677017650> | Lo estás haciendo mal, es:\n\n> <1 - 60>s <recordatorio>\n> <1 - 60>m <recordatorio>\n> <1 -  24>h <recordatorio>\n\n ____Ejemplo:____\n```'+prefix+'rm 1m Recordar ir a sacar a mi perro```')
          
          ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
              
          break;
            
        }

      }
    
    }

  }

}