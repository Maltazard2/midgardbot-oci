module.exports =  {
    
    name: 'galletas',
    aliases: ['galleta','cookies'],
    description: '🍪',
    category: 'Cafetería ☕',
    use: '<prefix>galletas [@user/id]',
    owner: false,
    vip: false,
    slash: false,
  
    async execute(client, message, args, Discord) {

        var galletas = [

            'https://i.imgur.com/0uFEKNK.gif',
            'https://i.imgur.com/BMCaT7d.gif',
            'https://i.imgur.com/lpTN5Vw.gif',
            'https://i.imgur.com/dJNLEbW.gif',
            'https://i.imgur.com/oTn0gof.gif',
            'https://i.imgur.com/hswxsfj.gif',
            'https://i.imgur.com/sB9il3y.gif',
            'https://i.imgur.com/nonZz7i.gif',
            'https://i.imgur.com/ZEN6idq.gif',
            'https://i.imgur.com/N0sMvEI.gif',
            'https://i.imgur.com/JCAL4vp.gif',
            'https://i.imgur.com/TBHHxQb.gif',
            'https://i.imgur.com/WAJ9nHg.gif',
            'https://i.imgur.com/2L25Jpz.gif',
            'https://i.imgur.com/2iiji06.gif',
            'https://i.imgur.com/EsuWD6z.gif',
            'https://i.imgur.com/43iq07g.gif',
            'https://i.imgur.com/8exUk8v.gif',
            'https://i.imgur.com/IVTfNow.gif',
            'https://i.imgur.com/utlGnEB.gif',
        
        ]

        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
        let ramdongalletas = galletas[Math.floor(Math.random()*galletas.length)]

        while (!ramdongalletas || ramdongalletas === null || ramdongalletas === '' || ramdongalletas === undefined) {
            
            ramdongalletas = galletas[Math.floor(Math.random()*galletas.length)]

        }
        
        if (!img || img.id === message.author.id) {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Cafe`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`A **${message.author.username}** se le antojaron unas galletitas.`)
            .setImage(ramdongalletas)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'  })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        } else if (img.user.bot) {

            return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
          
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | Los bots no comen galletas! <:nogarsias:932172183453712415>`)
          
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        } else {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Cafe`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${img.user.username}**, ${message.author.username} te invitó unas sabrosas galletitas.`)
            .setImage(ramdongalletas)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'  })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

        }

    }

}