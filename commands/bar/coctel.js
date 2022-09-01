module.exports =  {
    
    name: 'coctel',
    aliases: ['trago'],
    description: '🍸',
    category: 'Bar 🥂',
    use: '<prefix>coctel [@user/id]',
    owner: false,
    vip: false,
    slash: false,
  
    async execute(client, message, args, Discord) {

        var coctel = [

            'https://i.imgur.com/F4fUJfO.gif',
            'https://i.imgur.com/f2xB8kR.gif',
            'https://i.imgur.com/EW6D9iK.gif',
            'https://i.imgur.com/D0EGcs9.gif',
            'https://i.imgur.com/2Wp9suL.gif',
            'https://i.imgur.com/JQKkhV9.gif',
            'https://i.imgur.com/X1qYUju.gif',
            'https://i.imgur.com/ePPLhw6.gif',
            'https://i.imgur.com/taiDl7o.gif',
            'https://i.imgur.com/ooBxuR8.gif',
            'https://i.imgur.com/sqBtnRi.gif',
            'https://i.imgur.com/4PXeDDQ.gif',
            'https://i.imgur.com/EzzjVRm.gif',
            'https://i.imgur.com/X9vUn5e.gif',
            'https://i.imgur.com/Fe4GHRH.gif',
            'https://i.imgur.com/qIZJpZu.gif',
            'https://i.imgur.com/VtXDoqQ.gif',
            'https://i.imgur.com/zaHF6hE.gif',
            'https://i.imgur.com/KWso8pA.gif',
            'https://i.imgur.com/02DNavb.gif',
        
        ]

        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
        let ramdoncoctel = coctel[Math.floor(Math.random()*coctel.length)]

        while (!ramdoncoctel || ramdoncoctel === null || ramdoncoctel === '' || ramdoncoctel === undefined) {

            ramdoncoctel = coctel[Math.floor(Math.random()*coctel.length)]
            
        }
        
        if (!img || img.id === message.author.id) {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Bar`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${message.author.username}** está saboreando su delicioso coctel.`)
            .setImage(ramdoncoctel)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        } else if (img.user.bot) {

            return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
          
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL()})
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | Se ve delicioso! <:nogarsias:932172183453712415>`)
          
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        } else {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Bar`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${img.user.username}**, disfruta este coctel que te ha invitado ${message.author.username}.`)
            .setImage(ramdoncoctel)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

        }

    }

}