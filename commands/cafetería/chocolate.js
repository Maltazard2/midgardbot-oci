module.exports =  {
    
    name: 'chocolate',
    aliases: ['choco'],
    description: '🍫',
    category: 'Cafetería ☕',
    use: '<prefix>chocolate [@user/id]',
    owner: false,
    vip: false,
    slash: false,
  
    async execute(client, message, args, Discord) {

        var chocolate = [

            'https://i.imgur.com/VMCCY7F.gif',
            'https://i.imgur.com/ABkiQxp.gif',
            'https://i.imgur.com/KYghHcF.gif',
            'https://i.imgur.com/CfNGnxB.gif',
            'https://i.imgur.com/LUeHKSz.gif',
            'https://i.imgur.com/DIyfddN.gif',
            'https://i.imgur.com/pSlQawj.gif',
            'https://i.imgur.com/BcU1zHS.gif',
            'https://i.imgur.com/7uDSlzd.gif',
            'https://i.imgur.com/qKKZRYA.gif',
            'https://i.imgur.com/jQ9ZJP7.gif',
            'https://i.imgur.com/9KGKElk.gif',
            'https://i.imgur.com/BDgd0qy.gif',
            'https://i.imgur.com/pEpwAAy.gif',
            'https://i.imgur.com/Nn0DBTy.gif',
            'https://i.imgur.com/mJe6gDn.gif',
            'https://i.imgur.com/AplzUL8.gif',
            'https://i.imgur.com/hdKDUkW.gif',
            'https://i.imgur.com/o7jSaWs.gif',
            'https://i.imgur.com/miesJ7g.gif',
        
        ]

        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
        let ramdonchocolate = chocolate[Math.floor(Math.random()*chocolate.length)]

        while (!ramdonchocolate || ramdonchocolate === null || ramdonchocolate === '' || ramdonchocolate === undefined) {
            
            ramdonchocolate = chocolate[Math.floor(Math.random()*chocolate.length)]

        }
        
        if (!img || img.id === message.author.id) {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Cafe`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${message.author.username}** está comiendo un delicioso chocolate.`)
            .setImage(ramdonchocolate)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'  })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        } else if (img.user.bot) {

            return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
          
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | Nos encanta el chocolate! Pero... <:nogarsias:932172183453712415>`)
          
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        } else {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Cafe`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${img.user.username}**, ${message.author.username} te invitó un rico chocolate.`)
            .setImage(ramdonchocolate)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'  })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

        }

    }

}