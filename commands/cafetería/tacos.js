module.exports =  {
    
    name: 'tacos',
    aliases: ['taquitos'],
    description: '🌮',
    category: 'Cafetería',
    use: '<prefix>tacos [@user/id]',
    owner: false,
    vip: false,
  
    async execute(client, message, args, Discord) {

        var tacos = [

            'https://i.imgur.com/cmZ1ZxV.gif',
            'https://i.imgur.com/BDiVsbq.gif',
            'https://i.imgur.com/f9aASpZ.gif',
            'https://i.imgur.com/euUJ56u.gif',
            'https://i.imgur.com/ZzmPSTh.gif',
            'https://i.imgur.com/uWRW5yU.gif',
            'https://i.imgur.com/XErfhSu.gif',
            'https://i.imgur.com/rJl8F9b.gif',
            'https://i.imgur.com/jaIOr2s.gif',
            'https://i.imgur.com/WWuKq4H.gif',
            'https://i.imgur.com/kWHVqhi.gif',
            'https://i.imgur.com/VRS1Upr.gif',
            'https://i.imgur.com/pP2uF8x.gif',
            'https://i.imgur.com/3pWIbBI.gif',
            'https://i.imgur.com/ZXrvmiw.gif',
            'https://i.imgur.com/BlSYSbO.gif',
            'https://i.imgur.com/2iJ3THI.gif',
            'https://i.imgur.com/veYGieY.gif',
            'https://i.imgur.com/tjGX332.gif',
            'https://i.imgur.com/AgbHf76.gif',
        
        ]

        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
        let ramdontacos = tacos[Math.floor(Math.random()*tacos.length)]

        while (!ramdontacos || ramdontacos === null || ramdontacos === '' || ramdontacos === undefined) {
            
            ramdontacos = tacos[Math.floor(Math.random()*tacos.length)]

        }
        
        if (!img || img.id === message.author.id) {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Cafe`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${message.author.username}** está comiendo unos tacos.`)
            .setImage(ramdontacos)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'  })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        } else if (img.user.bot) {

            return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
          
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | Se me antoja... pero <:nogarsias:932172183453712415>`)
          
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        } else {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Cafe`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${img.user.username}**, ${message.author.username} te invitó un rico taco.`)
            .setImage(ramdontacos)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'  })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

        }

    }

}