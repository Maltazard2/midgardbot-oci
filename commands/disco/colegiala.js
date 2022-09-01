module.exports =  {
    
    name: 'colegiala',
    aliases: [],
    description: '🤤',
    category: 'Disco',
    use: '<prefix>colegiala [@user/id]',
    owner: false,
    vip: false,
  
    async execute(client, message, args, Discord) {

        var colegiala = [

            'https://i.imgur.com/VJ2kXN4.gif',
            'https://i.imgur.com/v4jFfXa.gif',
            'https://i.imgur.com/Dam6Z7b.gif',
            'https://i.imgur.com/C1cQz1N.gif',
            'https://i.imgur.com/DuABdGD.gif',
            'https://i.imgur.com/NVZx8ge.gif',
            'https://i.imgur.com/KOrvHiF.gif',
            'https://i.imgur.com/4aAIkXc.gif',
            'https://i.imgur.com/8mVH3qo.gif',
            'https://i.imgur.com/AOw52N4.gif',
            'https://i.imgur.com/STS0SeU.gif',
            'https://i.imgur.com/SBSdhRm.gif',
            'https://i.imgur.com/qoJT0VQ.gif',
            'https://i.imgur.com/LEeqgGx.gif',
            'https://i.imgur.com/KnkCcbk.gif',
            'https://i.imgur.com/ll1nAvI.gif',
            'https://i.imgur.com/DZJ61Dj.gif',
            'https://i.imgur.com/BiIJWiz.gif',
            'https://i.imgur.com/SUW8x23.gif',
            'https://i.imgur.com/YiVZIZc.gif',
            'https://i.imgur.com/LgMzRS8.gif',
            'https://i.imgur.com/cgcgq3G.gif',
            'https://i.imgur.com/NcJKze6.gif',
            'https://i.imgur.com/U0yv80k.gif',
            'https://i.imgur.com/deicWs6.gif',
            'https://i.imgur.com/gqWGz7b.gif',
            'https://i.imgur.com/tbC5bc2.gif',
            'https://i.imgur.com/B81SPgi.gif',
            'https://i.imgur.com/kkEW4xo.gif',
            'https://i.imgur.com/98HCXhN.gif',
            'https://i.imgur.com/DFt2lT4.gif',
            'https://i.imgur.com/6oAmO7I.gif',
            'https://i.imgur.com/4DfOAKv.gif',
            'https://i.imgur.com/xl5f8TB.gif',
            'https://i.imgur.com/eZRju5M.gif',
            'https://i.imgur.com/RlhNB8I.gif',
        
        ]

        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
        let ramdoncolegiala = colegiala[Math.floor(Math.random()*colegiala.length)]

        while (!ramdoncolegiala || ramdoncolegiala === null || ramdoncolegiala === '' || ramdoncolegiala === undefined) {
         
            ramdoncolegiala = colegiala[Math.floor(Math.random()*colegiala.length)]

        }
        
        if (!img || img.id === message.author.id) {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Disco`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${message.author.username}** pidió una colegiala y no la quiere compartir. <:gaaa:925926944254611487>`)
            .setImage(ramdoncolegiala)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'  })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        } else if (img.user.bot){
          
            return message.reply({embeds: [
          
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | Rico, pero <:nogarsias:932172183453712415>`)
          
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
          
        } else {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Disco`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`Opa! **${img.user.username}**, mira esta colegiala que ${message.author.username} te trajo. <:uyy:880315359197024286>`)
            .setImage(ramdoncolegiala)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'  })
           
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
      
        }

    }

}