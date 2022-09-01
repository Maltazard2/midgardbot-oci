const { Collection } = require('mongoose');
const userSchema = require('../../models/userSchema');
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports =  {
    
    name: 'marry',
    aliases: [],
    description: '💍 Contrae matrimonio con algún miembro del servidor. Sólo puedes casarte una única vez.',
  
    async execute(client, message, args, Discord) { 

        var propuest = [

            'https://i.imgur.com/uLU2SAT.gif',
            'https://i.imgur.com/tkkidDZ.gif',
            'https://i.imgur.com/uAnG0ve.gif',
            'https://i.imgur.com/1UGj1rl.gif',
            'https://i.imgur.com/2KeiMHz.gif',
            'https://i.imgur.com/i84TtvB.gif',
            'https://i.imgur.com/rgVRwKD.gif',
            'https://i.imgur.com/yMOAI4R.gif',

        ]
      
        var acepta = [

            'https://i.imgur.com/6jG7G56.gif',
            'https://i.imgur.com/xPqZQDY.gif',
            'https://i.imgur.com/73xb7Ff.gif',
            'https://i.imgur.com/YU0oJUN.gif',
            'https://i.imgur.com/Q6i9FR1.gif',
            'https://i.imgur.com/YqEhvS8.gif',
            'https://i.imgur.com/Py8X4af.gif',
            'https://i.imgur.com/KzClUr6.gif',
            'https://i.imgur.com/hMoXaCG.gif',
          
        ]
      
        var rechaza = [

            'https://i.imgur.com/6pWZZzb.gif',
            'https://i.imgur.com/9gJdb1j.gif',
            'https://i.imgur.com/2m2rnfH.gif',
            'https://i.imgur.com/uVTohBB.gif',
            'https://i.imgur.com/NV2mGO3.gif',
            'https://i.imgur.com/nXdcOd6.gif',
            'https://i.imgur.com/6yMosEB.gif',
          
        ]
      
        var plantado = [

            'https://i.imgur.com/idIgNUx.gif',
            'https://i.imgur.com/t0rVbGj.gif',
            'https://i.imgur.com/eWHQLN6.gif',
            'https://i.imgur.com/lsCMRcx.gif',
          
        ]

        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
        let ramdonp = propuest[Math.floor(Math.random()*propuest.length)]
        let ramdona = acepta[Math.floor(Math.random()*acepta.length)]
        let ramdonr = rechaza[Math.floor(Math.random()*rechaza.length)]
        let ramdonpl = plantado[Math.floor(Math.random()*plantado.length)]

        while (!ramdonp || ramdonp === null || ramdonp === '' || ramdonp === undefined) {

          ramdonp = propuest[Math.floor(Math.random()*propuest.length)]
          
        }
        
        while (!ramdona || ramdona === null || ramdona === '' || ramdona === undefined) {

          ramdona = acepta[Math.floor(Math.random()*acepta.length)]
          
        }
        
        while (!ramdonr || ramdonr === null || ramdonr === '' || ramdonr === undefined) {

          ramdonr = rechaza[Math.floor(Math.random()*rechaza.length)]
          
        }
        
        while (!ramdonpl || ramdonpl === null || ramdonpl === '' || ramdonpl === undefined) {

          ramdonpl = plantado[Math.floor(Math.random()*plantado.length)]
          
        }
        
        if (!img || img.id === message.author.id) return message.reply({embeds: [
        
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | ¿Te casarías contigo mismo? <:burbujita:930399322183458867>`)
      
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        if (img.user.bot) return message.reply({embeds: [
        
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | No puedes casarte con un bot! <:pepemaje:932177727589589013>`)
      
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        let usuario1 = await userSchema.findOne({ idusuario: message.author.id })
        let usuario2 = await userSchema.findOne({ idusuario: img.id })

        while(!usuario1){
 
            let user = await userSchema.create({

              idusuario: message.author.id,
              username: message.author.username,

            })

            user.save();
            console.log('Usuario Registrado ===> Id: '+ message.author.id + ' Username: ' + message.author.username)

            usuario1 = await userSchema.findOne({ idusuario: message.author.id })

        }

      while(!usuario2){
 
        let user = await userSchema.create({

          idusuario: img.id,
          username: img.username,

        })

        user.save();
        console.log('Usuario Registrado ===> Id: '+ img.id + ' Username: ' + img.username)

        usuario2 = await userSchema.findOne({ idusuario: img.id })
        
      }

      if(usuario1.marry !== 'Soltero(a)' ){

        let id = await client.users.fetch(usuario1.marry)
        
        if(id.id === img.id) return message.reply({embeds: [
          
          new Discord.MessageEmbed()
          .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
          .setColor('RED')
          .setDescription(`<:GatoLove:925929538863628318> | ¡Qué lindo(a) eres! Ya estás casado(a) con **`+img.user.username+'** <:yonofui:931433119859503194>')
        
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        else return message.reply({embeds: [
          
          new Discord.MessageEmbed()
          .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
          .setColor('RED')
          .setDescription(`<a:Verify2:931463492677017650> | No puedes contraer matrimonio porque estás casado(a) con **`+id.username+'#'+id.discriminator+'**!!!')
        
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

      } else {

        if(usuario2.marry !== 'Soltero(a)') return message.reply({embeds: [
          
          new Discord.MessageEmbed()
          .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
          .setColor('RED')
          .setDescription(`<a:Verify2:931463492677017650> | No puedes contraer matrimonio porque <@${img.id}> ya está casado(a)!!!`)
        
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

      }
   
      message.reply({ allowedMentions: { repliedUser: false}, embeds: [
          
        new Discord.MessageEmbed()
          .setColor('RANDOM')
          .setAuthor({ name: `Midgard's Love 💞`, iconURL: client.user.avatarURL({ dynamic: true }) })
          .setTitle('💟 Propuesta de Matrimonio 💍')
          .setDescription(img.toString() + "¿Deseas casarte con "+message.author.toString()+" ?")
          .setImage(ramdonp)
          .setTimestamp(new Date())
          .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })
        ],
        components: [
          new MessageActionRow().addComponents([
            new MessageButton()
              .setCustomId("accept")
              .setLabel("SI")
              .setStyle("SUCCESS"),
            new MessageButton()
              .setCustomId("deny")
              .setLabel("NO")
              .setStyle("DANGER")
          ])
        ]
      }).then(async m => {
      
        let filter = int => int.isButton() && int.user.id == img.id 
       
        const collector = m.createMessageComponentCollector({ filter, max: 1, maxUsers: 1, maxComponents: 1, time: 60000 });
        
        collector.on("collect", async int => {
          
          int.deferUpdate();
          
          if (int.customId === "accept") {
            
            try {

              let update = await userSchema.findOneAndUpdate({ idusuario: message.author.id },
                {
    
                    marry: img.id
    
                });
  
              update.save();
  
              let update2 = await userSchema.findOneAndUpdate({ idusuario: img.id },
                {
    
                    marry: message.author.id
    
                });
  
              update2.save();

              m.edit({embeds: [
                new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setAuthor({ name: `Midgard's Love 💞`, iconURL: client.user.avatarURL({ dynamic: true }) })
                .setTitle('👰 Noche de Boda 🤵')
                .setDescription('💖 Felicidades!!! '+img.toString() + " y "+message.author.toString()+". Ahora están casados 🔥.")
                .setImage(ramdona)
                .setTimestamp(new Date())
                .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })
              ], components: []
              }).catch((e) => console.log('Error al enviar mensaje: '+e))
              
            } catch (error) {

              console.log('Error al casarse - '+message.author.id+' y '+img.id+' - Error: '+error)
              return message.reply('Hubo un error interno. Por favor, inténtelo de nuevo.').catch((e) => console.log('Error al enviar mensaje: '+e))
            
            }

          } else if (int.customId === "deny") {
            
            m.edit({embeds: [
              new Discord.MessageEmbed()
              .setColor('RANDOM')
              .setAuthor({ name: `Midgard's Love 💞`, iconURL: client.user.avatarURL({ dynamic: true }) })
              .setDescription(img.toString() + " ha rechazado la propuesta de "+message.author.toString()+" <:yonofui:931433119859503194>")
              .setImage(ramdonr)
              .setTimestamp(new Date())
              .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })
          ],
              components: []
            }).catch((e) => console.log('Error al enviar mensaje: '+e))
          
          }
        });
  
        collector.on("end", (collected, reason) => {
          
          if(collected < 1) return m.edit({embeds: [
            new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setAuthor({ name: `Midgard's Love 💞`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setTitle('⌛ Propuesta sin Respuesta 💔')
            .setDescription(img.toString() + " no ha respondido la propuesta de "+message.author.toString()+" <:yonofui:931433119859503194>")
            .setImage(ramdonpl)
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })

          ],components: []
          }).catch((e) => console.log('Error al enviar mensaje: '+e))

          console.log('Razón del término de colección de marry: '+reason)
          
        });
        
      }).catch((e) => console.log('Error al enviar mensaje: '+e))

    }

}