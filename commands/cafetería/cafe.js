module.exports =  {
    
    name: 'cafe',
    aliases: ['café','cafecito'],
    description: '☕',
    category: 'Cafetería ☕',
    use: '<prefix>cafe [@user/id]',
    owner: false,
    vip: false,
    slash: false,
  
    async execute(client, message, args, Discord) {
 
        var cafe = [

            'https://i.imgur.com/M7KsF4w.gif',
            'https://i.imgur.com/ftVp2o7.gif',
            'https://i.imgur.com/GvELZ7W.gif',
            'https://i.imgur.com/qbpIBpM.gif',
            'https://i.imgur.com/WkGMLlH.gif',
            'https://i.imgur.com/On6W6im.gif',
            'https://i.imgur.com/n2qck89.gif',
            'https://i.imgur.com/9BRMrk3.gif',
            'https://i.imgur.com/gFyimVJ.gif',
            'https://i.imgur.com/NBTg8MK.gif',
            'https://i.imgur.com/bX4Lnit.gif',
            'https://i.imgur.com/1382z4N.gif',
            'https://i.imgur.com/5brl8wd.gif',
            'https://i.imgur.com/VgseScD.gif',
            'https://i.imgur.com/4naToU4.gif',
            'https://i.imgur.com/tZAcsEz.gif',
            'https://i.imgur.com/f6aU5Zm.gif',
            'https://i.imgur.com/rYFNapk.gif',
            'https://i.imgur.com/GdhDgWX.gif',
            'https://i.imgur.com/dD0ku5Z.gif',
            
        ]

        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
        let ramdoncafe = cafe[Math.floor(Math.random()*cafe.length)]

        while (!ramdoncafe || ramdoncafe === null || ramdoncafe === '' || ramdoncafe === undefined) {
            
            ramdoncafe = cafe[Math.floor(Math.random()*cafe.length)]

        }
        
        if (!img || img.id === message.author.id) {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Cafe`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${message.author.username}** tomó una taza de café.`)
            .setImage(ramdoncafe)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'  })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        } else if (img.user.bot) {

            return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
          
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | Mucho café nos pone nerviosos! <:nogarsias:932172183453712415>`)
          
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        } else {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Cafe`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${img.user.username}**, ${message.author.username} te invitó una taza de café.`)
            .setImage(ramdoncafe)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'  })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

        }

    }

}