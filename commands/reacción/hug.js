const { Collection } = require('mongoose');
const userSchema = require('../../models/userSchema');

module.exports =  {
    
    name: 'hug',
    aliases: ['abrazar','abrazo'],
    description: '🤗 Da un abrazo a un miembro del servidor.',
  
    async execute(client, message, args, Discord) { 
        
        var hug = [
        
            'https://i.imgur.com/BZBogvM.gif',
            'https://i.imgur.com/VkR863b.gif',
            'https://i.imgur.com/ru7hyk8.gif',
            'https://i.imgur.com/CDFGEb6.gif',
            'https://i.imgur.com/SiUQ7wo.gif',
            'https://i.imgur.com/zLCUkzd.gif',
            'https://i.imgur.com/EqAKB1C.gif',
            'https://i.imgur.com/sxjaZ6e.gif',
            'https://i.imgur.com/gushF7T.gif',
            'https://i.imgur.com/QphU771.gif',
            'https://i.imgur.com/sZyLoNE.gif',
            'https://i.imgur.com/sMUu7Ej.gif',
            'https://i.imgur.com/Q0Ww38t.gif',
            'https://i.imgur.com/4bKAopL.gif',
            'https://i.imgur.com/hHF0Neg.gif',
            'https://i.imgur.com/AyA0RRl.gif',
            'https://i.imgur.com/nsKZF2w.gif',
            'https://i.imgur.com/KybgYDU.gif',
            'https://i.imgur.com/DuSlY5T.gif',
            'https://i.imgur.com/xr36rMK.gif',
            'https://i.imgur.com/H6WGHy3.gif',
            'https://i.imgur.com/CQ3HnfZ.gif',
            'https://i.imgur.com/u4APgJL.gif',
            'https://i.imgur.com/ge7Wzig.gif',
            'https://i.imgur.com/nU7uuHZ.gif',
            'https://i.imgur.com/2mSap9d.gif',
            'https://i.imgur.com/YlrBWn3.gif',
            'https://i.imgur.com/j1O6u9f.gif',
            'https://i.imgur.com/JmeA4u8.gif',
            'https://i.imgur.com/pX0j0Ae.gif',
            'https://i.imgur.com/5dMuitS.gif',
            'https://i.imgur.com/wPQM3Fe.gif',
            'https://i.imgur.com/vJdFPgN.gif',
            'https://i.imgur.com/qsdRxlo.gif',
            'https://i.imgur.com/AQrcTmO.gif',
            'https://i.imgur.com/3PFgUfw.gif',
            'https://i.imgur.com/xK2sFhN.gif',
            'https://i.imgur.com/6runyrQ.gif',
            'https://i.imgur.com/kvwBlKu.gif',
            'https://i.imgur.com/NAitbTh.gif',
    
        ]
    
        var hug2 = [
            
            'https://i.imgur.com/yGqVQus.gif',
            'https://i.imgur.com/QZXIPGa.gif',
            'https://i.imgur.com/6TlKwup.gif',
            'https://i.imgur.com/JIWaRG6.gif',
            'https://i.imgur.com/qPEVkQA.gif',
            'https://i.imgur.com/Uyp6ovv.gif',
            'https://i.imgur.com/2hi3wV9.gif',
            'https://i.imgur.com/g84fKzH.gif',
            'https://i.imgur.com/YEvjKOg.gif',
            'https://i.imgur.com/ASI3v12.gif',
    
        ]

        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
        let ramdonhug = hug[Math.floor(Math.random()*hug.length)]
        let ramdonhug2 = hug2[Math.floor(Math.random()*hug2.length)]

        console.log('Ramdonhug1: ' + ramdonhug + ' - Length: ' + hug.length)
        console.log('Ramdonhug2: ' + ramdonhug2)

        while (!ramdonhug || ramdonhug === null || ramdonhug === '' || ramdonhug === undefined) {
            
            ramdonhug = hug[Math.floor(Math.random() * hug.length)]

        }
        
        while (!ramdonhug2 || ramdonhug2 === null || ramdonhug2 === '' || ramdonhug2 === undefined) {
            
            ramdonhug2 = hug2[Math.floor(Math.random()*hug2.length)]

        }

        console.log('2Ramdonhug1: ' + ramdonhug)
        console.log('2Ramdonhug2: ' + ramdonhug2)
        
        if (!img || img.id === message.author.id) {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Love 💞`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${message.author.username}** se está abrazando a sí mismo.`)
            .setImage(await ramdonhug2)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })

            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        } else if (img.user.bot){
          
            return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
          
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | Gracias por ese abrazo, lo necesitaba! <:burbujita:930399322183458867>`)
          
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
          
        } else {

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

                    hug: usuario2.hug + 1
            
                });
            
            update.save()

            if((usuario2.hug + 1) === 1){
                
                text = '**'+(usuario2.hug + 1)+'** abrazo'

            } else{
            
                text = '**'+(usuario2.hug + 1)+'** abrazos'
          
            }
        
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Love 💞`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${message.author.username}** está abrazando a **${img.user.username}**. <:burbujita:925927258789666826>\n<a:flechad:880330587678838784> *${img.user.username}* ha recibido ${text} en total.`)
            .setImage(await ramdonhug)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })

            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
      
        }

    }

}