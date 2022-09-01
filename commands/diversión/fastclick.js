const { FastClick } = require('leaf-utils');
const blSchema = require('../../models/blSchema');

module.exports =  {
    
    name: 'fastclick',
    aliases: ['fastc','fc','first','fast'],
    description: '💢 ¿Quién es más rápido?',
  
    async execute(client, message, args, Discord) {

        let usuario = message.mentions.users.first() || message.guild.members.resolve(client.users.cache.get(args[0]));

        if(!usuario) return message.reply({embeds: [
       
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | Necesitas mencionar con quién jugar!`)
      
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
        
        try {
        
          let userbl = await blSchema.findOne({idusuario: usuario.id})
  
          if(userbl)
          {
  
              console.log('Usuario en Lista Negra ===> Id: '+ usuario.id + ' Username: ' + usuario.username)
              
              const e = new Discord.MessageEmbed()
              .setAuthor({ name: message.author.username+'#'+message.author.discriminator, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
              .setColor('RED')
              .setDescription('<a:Verify2:931463492677017650> | ¡No puedes jugar con el usuario mencionado debido a que está en mi Black List! <:nimoro:887176572711342120>')
            
              return message.reply({embeds: [e]}).catch((e) => console.log('Error al enviar mensaje: '+e))
  
          }
  
      } catch (error) {
  
          console.log('Error al buscar (comando) en la Tabla BL: '+ error)
  
      }
        await FastClick({

            message: message,
            slash_command: false,
            time: 300000,
            opponent: usuario,
            embed: {
              title: 'Fast Click',
              color: 'RANDOM'
            },
            challenge: {
              acceptButton: 'Si',
              denyButton: 'No',
            },
            buttons: {
              correctText: 'Click en este botón para ganar',
              wrongText: 'Aquí no',
            },
            colors: {
              correctButton: 'SUCCESS',
              wrongButton: 'DANGER',
            },
            noUser: 'Deberías mencionar a un usuario',
            startMessage: 'El botón aparecerá en unos segundos... Buena suerte!',
            mainMessage: 'Haz Click en el botón correcto para Ganar',
            acceptMessage: '{{opponent}} Has sido desafiado por {{player}}',
            cancelMessage: '{{opponent}} Se rehusa a jugar contigo!',
            winMessage: '{{winner}} Ganó en {{time}} segundos!',
            wrongClick: '{{winneruser}} Ganó porque {{loser}} dió click en el botón equivocado!',
            endMessage: 'Juego no aceptado a tiempo',
            authorOnly: 'No puedes usar estos botones'

        }).catch((e) => console.log('Error al enviar mensaje: '+e))

    }

}