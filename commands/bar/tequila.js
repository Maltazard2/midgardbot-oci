module.exports =  {
    
    name: 'tequila',
    aliases: ['tequilas'],
    description: '🥃',
    category: 'Bar 🥂',
    use: '<prefix>tequila [@user/id]',
    owner: false,
    vip: false,
    slash: false,
  
    async execute(client, message, args, Discord) {

        var tequila = [

            'https://i.imgur.com/0ZsqX93.gif',
            'https://i.imgur.com/IOio5ZD.gif',
            'https://i.imgur.com/uBgPbSY.gif',
            'https://i.imgur.com/k5ERnCo.gif',
            'https://i.imgur.com/dt4mSke.gif',
            'https://i.imgur.com/oWNw1lU.gif',
            'https://i.imgur.com/gDKRbiw.gif',
            'https://i.imgur.com/42RVArz.gif',
            'https://i.imgur.com/oJUC44T.gif',
            'https://i.imgur.com/wunem8e.gif',
            'https://i.imgur.com/kXb1Z2B.gif',
            'https://i.imgur.com/NS14Ssb.gif',
            'https://i.imgur.com/LZu1b3r.gif',
            'https://i.imgur.com/TQzO6xh.gif',
            'https://i.imgur.com/5xK9s7t.gif',
            'https://i.imgur.com/hckl8FP.gif',
            'https://i.imgur.com/2I69tdW.gif',
            'https://i.imgur.com/3lrEmC6.gif',
            'https://i.imgur.com/ii1s2pn.gif',
            'https://i.imgur.com/uaLYyi5.gif',
            'https://i.imgur.com/g2LftD9.gif',
            'https://i.imgur.com/qRYizDR.gif',
            'https://i.imgur.com/iE9ls0I.gif',
            'https://i.imgur.com/Ju70wFN.gif',
            'https://i.imgur.com/fKNw00a.gif',
            'https://i.imgur.com/BEJgh8f.gif',
            'https://i.imgur.com/O7hUs03.gif',
            'https://i.imgur.com/dZUWudx.gif',
            'https://i.imgur.com/A56ZJ2T.gif',
            'https://i.imgur.com/H18qbVc.gif',
        
        ]

        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
        let ramdontequila = tequila[Math.floor(Math.random()*tequila.length)]

        while (!ramdontequila || ramdontequila === null || ramdontequila === '' || ramdontequila === undefined) {
            
            ramdontequila = tequila[Math.floor(Math.random()*tequila.length)]
            
        }

        if (!img || img.id === message.author.id) {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Bar`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${message.author.username}** está disfrutando un tequilita.`)
            .setImage(ramdontequila)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'  })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        } else if (img.user.bot) {

            return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
          
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | Delicioso, pero... <:nogarsias:932172183453712415>`)
          
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        } else {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Bar`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`Hey, **${img.user.username}**, toma este tequila invitado por ${message.author.username}.`)
            .setImage(ramdontequila)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'  })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

        }

    }

}