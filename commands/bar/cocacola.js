module.exports =  {
    
    name: 'cocacola',
    aliases: ['cocacolas'],
    description: '🥤',
    category: 'Bar 🥂',
    use: '<prefix>cocacola [@user/id]',
    owner: false,
    vip: false,
    slash: false,
  
    async execute(client, message, args, Discord) {

        var cocacola = [

            'https://i.imgur.com/bY0bxRW.gif',
            'https://i.imgur.com/JfqkTvC.gif',
            'https://i.imgur.com/5QAcy9W.gif',
            'https://i.imgur.com/i7NSEep.gif',
            'https://i.imgur.com/CGhVRut.gif',
            'https://i.imgur.com/QdsY4YZ.gif',
            'https://i.imgur.com/WItTWo2.gif',
            'https://i.imgur.com/QHpPrIp.gif',
            'https://i.imgur.com/gV8Nwr7.gif',
            'https://i.imgur.com/T0u0JmN.gif',
            'https://i.imgur.com/YtWmRaC.gif',
            'https://i.imgur.com/8xbBTjB.gif',
            'https://i.imgur.com/r85KCtS.gif',
            'https://i.imgur.com/zAA1JTp.gif',
            'https://i.imgur.com/t680Ykc.gif',
            'https://i.imgur.com/MINHoHW.gif',
            'https://i.imgur.com/Eereo2q.gif',
            'https://i.imgur.com/LuiVvai.gif',
            'https://i.imgur.com/FyzDDKJ.gif',
            'https://i.imgur.com/90kkKm7.gif',
        
        ]

        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
        let ramdoncocacola = cocacola[Math.floor(Math.random()*cocacola.length)]

        while (!ramdoncocacola || ramdoncocacola === null || ramdoncocacola === '' || ramdoncocacola === undefined) {
            
            ramdoncocacola = cocacola[Math.floor(Math.random()*cocacola.length)]

        }

        if (!img || img.id === message.author.id) {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Bar`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${message.author.username}** está refrescándose con una Coca Cola.`)
            .setImage(ramdoncocacola)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        } else if (img.user.bot) {

            return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
          
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL()})
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | La cocacola daña nuestros circuitos! <:nogarsias:932172183453712415>`)
          
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        } else {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Bar`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${img.user.username}**, ${message.author.username} te invitó una Coca Cola... Disfrútala!`)
            .setImage(ramdoncocacola)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

        }

    }

}