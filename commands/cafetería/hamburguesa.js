module.exports =  {
    
    name: 'hamburguesa',
    aliases: ['burger','hamburguesas'],
    description: '🍔',
    category: 'Cafetería ☕',
    use: '<prefix>burger [@user/id]',
    owner: false,
    vip: false,
    slash: false,
  
    async execute(client, message, args, Discord) {

        var hamburguesa = [

            'https://i.imgur.com/3dmN32f.gif',
            'https://i.imgur.com/u9z85Ho.gif',
            'https://i.imgur.com/jO0LnmP.gif',
            'https://i.imgur.com/1dYebrN.gif',
            'https://i.imgur.com/CXPc7O4.gif',
            'https://i.imgur.com/bukvs6v.gif',
            'https://i.imgur.com/gjEKJ81.gif',
            'https://i.imgur.com/QlHGI3B.gif',
            'https://i.imgur.com/aXrJIol.gif',
            'https://i.imgur.com/yKw07i1.gif',
            'https://i.imgur.com/9jpoghY.gif',
            'https://i.imgur.com/wnLBxg9.gif',
            'https://i.imgur.com/qkZAHM5.gif',
            'https://i.imgur.com/7v1xaF6.gif',
            'https://i.imgur.com/0nRL5qq.gif',
            'https://i.imgur.com/CCWjrq5.gif',
            'https://i.imgur.com/duKQIwf.gif',
            'https://i.imgur.com/Rgrj0XO.gif',
            'https://i.imgur.com/ZShDTO1.gif',
            'https://i.imgur.com/JurScXo.gif',
        
        ]

        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
        let ramdonhamburguesa = hamburguesa[Math.floor(Math.random()*hamburguesa.length)]

        while (!ramdonhamburguesa || ramdonhamburguesa === null || ramdonhamburguesa === '' || ramdonhamburguesa === undefined) {
            
            ramdonhamburguesa = hamburguesa[Math.floor(Math.random()*hamburguesa.length)]

        }
        
        if (!img || img.id === message.author.id) {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Cafe`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${message.author.username}** está comiendo una sabrosa hamburguesa.`)
            .setImage(ramdonhamburguesa)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'  })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        } else if (img.user.bot) {

            return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
          
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | Los bots no comen carne! <:nogarsias:932172183453712415>`)
          
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        } else {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Cafe`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${img.user.username}**, ${message.author.username} te invitó una gran hamburguesa.`)
            .setImage(ramdonhamburguesa)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'  })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

        }

    }

}