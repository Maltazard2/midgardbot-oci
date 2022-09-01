module.exports =  {
    
    name: 'halls',
    aliases: [],
    description: '🤯',
    category: 'Cafetería ☕',
    use: '<prefix>halls [@user/id]',
    owner: false,
    vip: false,
    slash: false,
  
    async execute(client, message, args, Discord) {

        var halls = [

            'https://i.imgur.com/2WsGEWf.gif',
            'https://i.imgur.com/7is7AXa.gif',
            'https://i.imgur.com/sQPjxJ9.gif',
            'https://i.imgur.com/RJDzK5H.gif',
            'https://i.imgur.com/XaQjYUw.gif',
            'https://i.imgur.com/nUnBbW7.gif',
            'https://i.imgur.com/kJw6Flu.gif',
            'https://i.imgur.com/WyFqCCc.gif',
            'https://i.imgur.com/7xP85lX.gif',

        ]

        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
        let ramdonhalls = halls[Math.floor(Math.random()*halls.length)]

        while (!ramdonhalls || ramdonhalls === null || ramdonhalls === '' || ramdonhalls === undefined) {
            
            ramdonhalls = halls[Math.floor(Math.random()*halls.length)]

        }
        
        if (!img || img.id === message.author.id) {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Cafe`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`A **${message.author.username}** le gusta con halls. <a:sabroso:880695816497541180>`)
            .setImage(ramdonhalls)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'  })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        } else if (img.user.bot) {

            return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
          
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | Tentativo, pero... <:nogarsias:932172183453712415>`)
          
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        } else {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Cafe`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`${message.author.username} invitó a **${img.user.username}** a probar un suculento halls. <a:sabroso:880695816497541180>`)
            .setImage(ramdonhalls)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'  })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

        }

    }

}