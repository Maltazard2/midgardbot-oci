module.exports =  {
    
    name: 'huca',
    aliases: ['hooka','hookah'],
    description: '🚬',
    category: 'Bar 🥂',
    use: '<prefix>huca [@user/id]',
    owner: false,
    vip: false,
    slash: false,
  
    async execute(client, message, args, Discord) {

        var huca = [

            'https://i.imgur.com/gH5qWP5.gif',
            'https://i.imgur.com/EXUSSvG.gif',
            'https://i.imgur.com/axVgGlg.gif',
            'https://i.imgur.com/2zFbnAO.gif',
            'https://i.imgur.com/R1N4L3Y.gif',
            'https://i.imgur.com/2PWIbaN.gif',
            'https://i.imgur.com/kTvPiWf.gif',
            'https://i.imgur.com/6EPurhz.gif',
            'https://i.imgur.com/GX0vbZl.gif',
            'https://i.imgur.com/QNicFCC.gif',
            'https://i.imgur.com/LrQ6u9n.gif',
            'https://i.imgur.com/PoKCLKd.gif',
            'https://i.imgur.com/aZpzeRj.gif',
            'https://i.imgur.com/OQ8rcOe.gif',
            'https://i.imgur.com/U3QQVd5.gif',
            'https://i.imgur.com/BDFa22v.gif',
            'https://i.imgur.com/7XiA0hy.gif',
            'https://i.imgur.com/dbenv5j.gif',
            'https://i.imgur.com/tldj6eG.gif',
            'https://i.imgur.com/5bpCpqV.gif',
        
        ]

        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
        let ramdonhuca = huca[Math.floor(Math.random()*huca.length)]

        while (!ramdonhuca || ramdonhuca === null || ramdonhuca === '' || ramdonhuca === undefined) {
            
            ramdonhuca = huca[Math.floor(Math.random()*huca.length)]
            
        }

        if (!img || img.id === message.author.id) {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Bar`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`A **${message.author.username}** le apeteció una pipa bien potente.`)
            .setImage(ramdonhuca)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        } else if (img.user.bot) {

            return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
          
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL()})
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | ¿Huca? ¿Qué es eso? <:nogarsias:932172183453712415>`)
          
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        } else {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Bar`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${img.user.username}**, disfruta de la hookah que te invitó ${message.author.username}.`)
            .setImage(ramdonhuca)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'  })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

        }

    }

}