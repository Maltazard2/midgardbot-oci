module.exports =  {
    
    name: 'tamales',
    aliases: ['tamal'],
    description: '🌽',
    category: 'Cafetería ☕',
    use: '<prefix>tamales [@user/id]',
    owner: false,
    vip: false,
    slash: false,
  
    async execute(client, message, args, Discord) {

        var tamales = [

            'https://i.imgur.com/v3ZRtji.gif',
            'https://i.imgur.com/wM1MDLt.gif',
            'https://i.imgur.com/4YM8rtx.gif',
            'https://i.imgur.com/CzXiJgI.gif',
            'https://i.imgur.com/sTJ40sB.gif',
            'https://i.imgur.com/AKYQ4wC.gif',
            'https://i.imgur.com/Xgu2tnb.gif',
            'https://i.imgur.com/Vs3wvWK.gif',
            'https://i.imgur.com/CNAqfZX.gif',
            'https://i.imgur.com/PBCyrHp.gif',
            'https://i.imgur.com/ZfZsg7U.gif',
        
        ]

        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
        let ramdontamales = tamales[Math.floor(Math.random()*tamales.length)]

        while (!ramdontamales || ramdontamales === null || ramdontamales === '' || ramdontamales === undefined) {
            
            ramdontamales = tamales[Math.floor(Math.random()*tamales.length)]

        }
        
        if (!img || img.id === message.author.id) {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Cafe`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${message.author.username}** está comiendo unos tamales.`)
            .setImage(ramdontamales)
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
            .setDescription(`**${img.user.username}**, ${message.author.username} te invitó un rico tamal.`)
            .setImage(ramdontamales)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'  })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

        }

    }

}