module.exports =  {
    
    name: 'vino',
    aliases: ['vinos','wine'],
    description: '🍷',
    category: 'Bar',
    use: '<prefix>vino [@user/id]',
    owner: false,
    vip: false,
  
    async execute(client, message, args, Discord) {

        var vino = [

            'https://i.imgur.com/MSX4r11.gif',
            'https://i.imgur.com/qDaNfmW.gif',
            'https://i.imgur.com/TmcpDEJ.gif',
            'https://i.imgur.com/NMCz57S.gif',
            'https://i.imgur.com/QsGB3do.gif',
            'https://i.imgur.com/i5IarzS.gif',
            'https://i.imgur.com/XNEylbs.gif',
            'https://i.imgur.com/m2sfPnt.gif',
            'https://i.imgur.com/xOlfDti.gif',
            'https://i.imgur.com/N2lDX9i.gif',
            'https://i.imgur.com/HVC3gfw.gif',
            'https://i.imgur.com/cgIvUBG.gif',
            'https://i.imgur.com/b7v4A9G.gif',
            'https://i.imgur.com/HKy3cCq.gif',
            'https://i.imgur.com/qfxHckd.gif',
            'https://i.imgur.com/ffZMMyu.gif',
            'https://i.imgur.com/PTtYAxz.gif',
            'https://i.imgur.com/z6soA6U.gif',
            'https://i.imgur.com/kuDyKJs.gif',
            'https://i.imgur.com/iiPReqi.gif',
        
        ]

        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
        let ramdonvino = vino[Math.floor(Math.random()*vino.length)]

        while (!ramdonvino || ramdonvino === null || ramdonvino === '' || ramdonvino === undefined) {
            
            ramdonvino = vino[Math.floor(Math.random()*vino.length)]
            
        }

        if (!img || img.id === message.author.id) {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Bar`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${message.author.username}** está disfrutando un rico vino.`)
            .setImage(ramdonvino)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'  })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        } else if (img.user.bot) {

            return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
          
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | Eso si estaría cool!`)
          
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        } else {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Bar`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${img.user.username}**, aquí te traigo una copa de vino invitado por ${message.author.username}.`)
            .setImage(ramdonvino)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'  })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

        }

    }

}