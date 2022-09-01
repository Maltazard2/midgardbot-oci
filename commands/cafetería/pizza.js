module.exports =  {
    
    name: 'pizza',
    aliases: ['pizzas'],
    description: '🍕',
    category: 'Cafetería',
    use: '<prefix>pizza [@user/id]',
    owner: false,
    vip: false,
  
    async execute(client, message, args, Discord) {

        var pizza = [

            'https://i.imgur.com/KBOi5Wa.gif',
            'https://i.imgur.com/BB4Ydk0.gif',
            'https://i.imgur.com/eo6S1m3.gif',
            'https://i.imgur.com/YKt6J8n.gif',
            'https://i.imgur.com/zAQRdpV.gif',
            'https://i.imgur.com/4LLNxAC.gif',
            'https://i.imgur.com/fVVOnT0.gif',
            'https://i.imgur.com/Jh1QZcm.gif',
            'https://i.imgur.com/PC86BMW.gif',
            'https://i.imgur.com/mi29KeQ.gif',
            'https://i.imgur.com/cRf1MdP.gif',
            'https://i.imgur.com/g3kcwA9.gif',
            'https://i.imgur.com/SKX5BHE.gif',
            'https://i.imgur.com/50CO1zx.gif',
            'https://i.imgur.com/1PxHPXo.gif',
            'https://i.imgur.com/pBIxGM1.gif',
            'https://i.imgur.com/qTiqRAK.gif',
            'https://i.imgur.com/plnmtic.gif',
            'https://i.imgur.com/pnkuk3R.gif',
            'https://i.imgur.com/DZDTlBf.gif',
        
        ]

        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
        let ramdonpizza = pizza[Math.floor(Math.random()*pizza.length)]

        while (!ramdonpizza || ramdonpizza === null || ramdonpizza === '' || ramdonpizza === undefined) {
            
            ramdonpizza = pizza[Math.floor(Math.random()*pizza.length)]

        }
        
        if (!img || img.id === message.author.id) {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Cafe`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${message.author.username}** está comiendo una riquísima pizza.`)
            .setImage(ramdonpizza)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'  })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        } else if (img.user.bot) {

            return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
          
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | La pizza nos causa indigestión! <:nogarsias:932172183453712415>`)
          
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        } else {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Cafe`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${img.user.username}**, ${message.author.username} te invitó una sabrosa pizza.`)
            .setImage(ramdonpizza)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'  })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

        }

    }

}