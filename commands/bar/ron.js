module.exports =  {
    
    name: 'ron',
    aliases: [],
    description: '🥃',
    category: 'Bar',
    use: '<prefix>ron [@user/id]',
    owner: false,
    vip: false,
  
    async execute(client, message, args, Discord) {

        var ron = [

            'https://i.imgur.com/ekduktl.gif',
            'https://i.imgur.com/xvhrsp3.gif',
            'https://i.imgur.com/v7ED7dD.gif',
            'https://i.imgur.com/HNRBNAU.gif',
            'https://i.imgur.com/uP1oeYQ.gif',
            'https://i.imgur.com/H2pd9gi.gif',
            'https://i.imgur.com/Oxg3qDC.gif',
            'https://i.imgur.com/YOxbTxq.gif',
            'https://i.imgur.com/Kkuo2Vi.gif',
            'https://i.imgur.com/GpXeHDH.gif',
            'https://i.imgur.com/G8dNT89.gif',
            'https://i.imgur.com/MEGKbq2.gif',
            'https://i.imgur.com/2i3Y38G.gif',
            'https://i.imgur.com/otPsCni.gif',
            'https://i.imgur.com/BvhnWHZ.gif',
            'https://i.imgur.com/W7usjro.gif',
            'https://i.imgur.com/3GNlvXr.gif',
            'https://i.imgur.com/DPHR84W.gif',
            'https://i.imgur.com/R15kmOs.gif',
            'https://i.imgur.com/fdiGAZK.gif',
        
        ]

        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
        let ramdonron = ron[Math.floor(Math.random()*ron.length)]

        while (!ramdonron || ramdonron === null || ramdonron === '' || ramdonron === undefined) {

            ramdonron = ron[Math.floor(Math.random()*ron.length)]

        }
        
        if (!img || img.id === message.author.id) {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Bar`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${message.author.username}** está celebrando con un roncito.`)
            .setImage(ramdonron)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'  })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        } else if (img.user.bot) {

            return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
          
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | Los bots no toman ron! <:nogarsias:932172183453712415>`)
          
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        } else {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Bar`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${img.user.username}**, agradécele a ${message.author.username} porque te está invitando un ron.`)
            .setImage(ramdonron)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'  })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

        }

    }

}