module.exports =  {
    
    name: 'salsa',
    aliases: [],
    description: '💃',
    category: 'Disco',
    use: '<prefix>salsa [@user/id]',
    owner: false,
    vip: false,
  
    async execute(client, message, args, Discord) {

        var salsa = [

            'https://i.imgur.com/KB2EX6g.gif',
            'https://i.imgur.com/Sr6F0OR.gif',
            'https://i.imgur.com/91uYc4k.gif',
            'https://i.imgur.com/kjbETtG.gif',
            'https://i.imgur.com/V5CxOfl.gif',
            'https://i.imgur.com/IzdcjYN.gif',
            'https://i.imgur.com/xTVq90k.gif',
            'https://i.imgur.com/JHJL6NG.gif',
            'https://i.imgur.com/TX5yWK1.gif',
            
        ]
        
        var salsa2 = [

            'https://i.imgur.com/gaFtzDM.gif',
            'https://i.imgur.com/3IHh4HQ.gif',
            'https://i.imgur.com/Q6UobIG.gif',
            'https://i.imgur.com/ZgO5kc4.gif',
            'https://i.imgur.com/HTVZqmG.gif',
            'https://i.imgur.com/fkijJF8.gif',
                    
        ]

        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
        let ramdonsalsa = salsa[Math.floor(Math.random()*salsa.length)]
        let ramdonsalsa2 = salsa2[Math.floor(Math.random()*salsa2.length)]
      
        while (!ramdonsalsa || ramdonsalsa === null || ramdonsalsa === '' || ramdonsalsa === undefined) {
            
            ramdonsalsa = salsa[Math.floor(Math.random()*salsa.length)]

        }
        
        while (!ramdonsalsa2 || ramdonsalsa2 === null || ramdonsalsa2 === '') {
            
            ramdonsalsa2 = salsa2[Math.floor(Math.random()*salsa2.length)]

        }
        
        if (!img || img.id === message.author.id) {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Disco`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${message.author.username}** salsea como los dioses.`)
            .setImage(ramdonsalsa2)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'  })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        } else if (img.user.bot){
          
            return message.reply({embeds: [
          
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | Yo si salseo como los dioses! <:nogarsias:932172183453712415>`)
          
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
          
        } else {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Disco`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${img.user.username}** y ${message.author.username} están salseando juntos.`)
            .setImage(ramdonsalsa)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'  })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
      
        }

    }

}