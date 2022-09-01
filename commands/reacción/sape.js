const { Collection } = require('mongoose');
const userSchema = require('../../models/userSchema');

module.exports =  {
    
    name: 'sape',
    aliases: ['sapear'],
    description: '🤯 Dale un sape a alguien',
    category: 'Reacción 😎',
    use: '<prefix>sape <@user/id>',
    owner: false,
    vip: false,
    slash: false,
  
    async execute(client, message, args, Discord) { 

        var sape = [

          'https://i.imgur.com/FezdREk.gif',
          'https://i.imgur.com/FfeHEmN.gif',
          'https://i.imgur.com/e8jyxOd.gif',
          'https://i.imgur.com/BP4IvYq.gif',
          'https://i.imgur.com/3sVtcTm.gif',
          'https://i.imgur.com/QNwm7C6.gif',
          'https://i.imgur.com/u5XHF88.gif',
          'https://i.imgur.com/m34Iq3Z.gif',
          'https://i.imgur.com/2N6Jlea.gif',
          'https://i.imgur.com/HA7dQjj.gif',
          'https://i.imgur.com/5Q1DSmZ.gif',
          'https://i.imgur.com/Rdt3ydP.gif',
          'https://i.imgur.com/roK0y7M.gif',
          'https://i.imgur.com/fo8OexI.gif',
          'https://i.imgur.com/aEVtnWT.gif',
          'https://i.imgur.com/hdC7hG7.gif',
          'https://i.imgur.com/DL2evFQ.gif',
          'https://i.imgur.com/bivL9Z2.gif',
          'https://i.imgur.com/IkhvpVU.gif',
          'https://i.imgur.com/V2WHFAR.gif',
          'https://i.imgur.com/U3QLaS4.gif',
        
        ]

        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
        let ramdonsape = sape[Math.floor(Math.random()*sape.length)]

        while (!ramdonsape || ramdonsape === null || ramdonsape === '' || ramdonsape === undefined) {
          
          ramdonsape = sape[Math.floor(Math.random()*sape.length)]
        
        }

        if (!img || img.id===message.author.id) return message.reply({embeds: [
          
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | ¿Te darías un autosape? <:procesando:932177969017925632>`)
        
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        if (img.user.bot) return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
          
          new Discord.MessageEmbed()
          .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
          .setColor('RED')
          .setDescription(`<a:Verify2:931463492677017650> | ¡Qué lindo eres sapeando a un bot! <:procesando:932177969017925632>`)
        
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
  
        let usuario2 = await userSchema.findOne({idusuario: img.id})
        let text

        while(!usuario2){
 
          let user = await userSchema.create({

            idusuario: img.id,
            username: img.username,

          })

          user.save();
          console.log('Usuario Registrado ===> Id: '+ img.id + ' Username: ' + img.username)

          usuario2 = await userSchema.findOne({idusuario: img.id})

        }
    
        let update = await userSchema.findOneAndUpdate({idusuario: img.id},
          {

              sape: usuario2.sape + 1
      
          });
          
        update.save()

        if((usuario2.sape + 1) === 1){
          
          text = '**'+(usuario2.sape + 1)+'** sape'
        
        } else{
          
          text = '**'+(usuario2.sape + 1)+'** sapes'
        
        }
          
        const embed = new Discord.MessageEmbed()
        .setAuthor({ name: `Midgard's Love 💞`, iconURL: client.user.avatarURL({ dynamic: true }) })
        .setDescription(`**${message.author.username}** le dió un sape a **${img.user.username}**. <:nojao:891551822387486721>\n<a:flechad:880330587678838784> *${img.user.username}* ha recibido ${text} en total.`)
        .setImage(ramdonsape)
        .setColor('RANDOM')
        .setTimestamp(new Date())
        .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })

        message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

    }

}