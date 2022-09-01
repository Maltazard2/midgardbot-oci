module.exports =  {
    
    name: 'redbull',
    aliases: ['redbulls'],
    description: '🥤',
    category: 'Bar',
    use: '<prefix>redbull [@user/id]',
    owner: false,
    vip: false,
  
    async execute(client, message, args, Discord) {

        var redbull = [

            'https://i.imgur.com/j1EivMH.gif',
            'https://i.imgur.com/bm7xk0E.gif',
            'https://i.imgur.com/HY6QZWQ.gif',
            'https://i.imgur.com/qhwrfZ8.gif',
            'https://i.imgur.com/e8txaob.gif',
            'https://i.imgur.com/t4H0xs9.gif',
            'https://i.imgur.com/GI50JD5.gif',
            'https://i.imgur.com/I9uQWZb.gif',
            'https://i.imgur.com/tIAg3ky.gif',
            'https://i.imgur.com/EqZolGg.gif',
            'https://i.imgur.com/nbtoaeq.gif',
            'https://i.imgur.com/POuEn64.gif',
            'https://i.imgur.com/h5DsE1c.gif',
            'https://i.imgur.com/wFs77pP.gif',
            'https://i.imgur.com/QJNIZJ6.gif',
            'https://i.imgur.com/bO0ZmAZ.gif',
            'https://i.imgur.com/CESyzrH.gif',
            'https://i.imgur.com/lYyfVIu.gif',
            'https://i.imgur.com/gcQOZ6h.gif',
            'https://i.imgur.com/yiGLLjZ.gif',
        
        ]

        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
        let ramdonredbull = redbull[Math.floor(Math.random()*redbull.length)]

        while (!ramdonredbull || ramdonredbull === null || ramdonredbull === '' || ramdonredbull === undefined) {
            
            ramdonredbull = redbull[Math.floor(Math.random()*redbull.length)]

        }
        
        if (!img || img.id === message.author.id) {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Bar`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${message.author.username}** está energizándose con un Red Bull.`)
            .setImage(ramdonredbull)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'  })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        } else if (img.user.bot) {

            return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
          
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | Con o sin redbull podemos estar despiertos toda la noche! <:nogarsias:932172183453712415>`)
          
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        } else {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Bar`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${img.user.username}**, ${message.author.username} te invitó una lata de Red Bull.`)
            .setImage(ramdonredbull)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'  })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

        }

    }

}