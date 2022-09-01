module.exports =  {
    
    name: 'jugo',
    aliases: ['juguito'],
    description: '🧃',
    category: 'Cafetería',
    use: '<prefix>jugo [@user/id]',
    owner: false,
    vip: false,
  
    async execute(client, message, args, Discord) {

        var jugo = [

            'https://i.imgur.com/UCk9FDS.gif',
            'https://i.imgur.com/LjNDvxU.gif',
            'https://i.imgur.com/6vmQTJZ.gif',
            'https://i.imgur.com/mfyJOJV.gif',
            'https://i.imgur.com/2FY827c.gif',
            'https://i.imgur.com/V3MpuWA.gif',
            'https://i.imgur.com/2ZRKh5t.gif',
            'https://i.imgur.com/pCWrjRj.gif',
            'https://i.imgur.com/EagMgUQ.gif',
            'https://i.imgur.com/sjSlISV.gif',
            'https://i.imgur.com/yG7mmMr.gif',
            'https://i.imgur.com/MFyPGRO.gif',
            'https://i.imgur.com/cQkskYn.gif',
            'https://i.imgur.com/q89QbCc.gif',
            'https://i.imgur.com/6TVbNYp.gif',
            'https://i.imgur.com/HtpTY1p.gif',
            'https://i.imgur.com/J2cBGbq.gif',
            'https://i.imgur.com/JXqLtnQ.gif',
            'https://i.imgur.com/CBH5fla.gif',
            'https://i.imgur.com/UcTdSYn.gif',
        
        ]

        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
        let ramdonjugo = jugo[Math.floor(Math.random()*jugo.length)]

        while (!ramdonjugo || ramdonjugo === null || ramdonjugo === '' || ramdonjugo === undefined) {
            
            ramdonjugo = jugo[Math.floor(Math.random()*jugo.length)]

        }
        
        if (!img || img.id === message.author.id) {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Cafe`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${message.author.username}** está tomando un delicioso juguito.`)
            .setImage(ramdonjugo)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'  })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        } else if (img.user.bot) {

            return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
          
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | Los bots no toman juguito! <:nogarsias:932172183453712415>`)
          
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        } else {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Cafe`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${img.user.username}**, ${message.author.username} te invitó un juguito.`)
            .setImage(ramdonjugo)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'  })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

        }

    }

}