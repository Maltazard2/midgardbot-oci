module.exports =  {
    
    name: 'gansito',
    aliases: ['gansitos'],
    description: '🍪',
    category: 'Cafetería ☕',
    use: '<prefix>gansito [@user/id]',
    owner: false,
    vip: false,
    slash: false,
  
    async execute(client, message, args, Discord) {

        var gansito = [

            'https://i.imgur.com/K8xVw7a.gif',
            'https://i.imgur.com/rJEinll.gif',
            'https://i.imgur.com/b67dChy.gif',
            'https://i.imgur.com/STIbMYr.gif',
            'https://i.imgur.com/wQQD20U.gif',
            'https://i.imgur.com/Yuj0mga.gif',
            'https://i.imgur.com/ybPOVqO.gif',
            'https://i.imgur.com/GmrVEKh.gif',
            'https://i.imgur.com/3hhjCyj.gif',
            'https://i.imgur.com/fEVHtNH.gif',
            'https://i.imgur.com/J6rQdPU.gif',
            'https://i.imgur.com/xQ2cw9D.gif',

        ]

        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
        let ramdongansito = gansito[Math.floor(Math.random()*gansito.length)]

        while (!ramdongansito || ramdongansito === null || ramdongansito === '' || ramdongansito === undefined) {
            
            ramdongansito = gansito[Math.floor(Math.random()*gansito.length)]

        }
        
        if (!img || img.id === message.author.id) {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Cafe`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`A **${message.author.username}** se le antojó un rico pastelito.`)
            .setImage(ramdongansito)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'  })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        } else if (img.user.bot) {

            return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
          
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | Los bots no comen gansito! <:nogarsias:932172183453712415>`)
          
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        } else {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Cafe`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${img.user.username}**, ${message.author.username} te invitó unos deliciosos gansitos.`)
            .setImage(ramdongansito)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'  })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

        }

    }

}