module.exports =  {
    
    name: 'hi',
    aliases: ['hola','saludar'],
    description: '👋 Saluda a un miembro del servidor o a todos.',
    category: 'Reacción 😎',
    use: '<prefix>hi [@user/id]',
    owner: false,
    vip: false,
    slash: false,
  
    async execute(client, message, args, Discord) {

        var hi = [

            'https://i.imgur.com/bMZ60j8.gif',
            'https://i.imgur.com/Dq0hjem.gif',
            'https://i.imgur.com/0xJnDbc.gif',
            'https://i.imgur.com/rOSUdNO.gif',
            'https://i.imgur.com/qHDoZxf.gif',
            'https://i.imgur.com/IeMk5bl.gif',
            'https://i.imgur.com/RcEI2VC.gif',
            'https://i.imgur.com/iRHko5F.gif',
            'https://i.imgur.com/DdV1Cxw.gif',
            'https://i.imgur.com/BvL1Tgy.gif',
            'https://i.imgur.com/uizGDvS.gif',
            'https://i.imgur.com/g2xOwUZ.gif',
            'https://i.imgur.com/urNenpz.gif',
            'https://i.imgur.com/jbExGz2.gif',
            'https://i.imgur.com/B5gmXSL.gif',

        ]

        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
        let ramdonhi = hi[Math.floor(Math.random()*hi.length)]
     
        while (!ramdonhi || ramdonhi === null || ramdonhi === '' || ramdonhi === undefined) {
            
            ramdonhi = hi[Math.floor(Math.random()*hi.length)]

        }
        
        if (!img || img.id === message.author.id) {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Emotions 🤗`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${message.author.username}** está saludando a todos.`)
            .setImage(ramdonhi)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })

            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        } else if (img.bot){
          
            return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
          
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | Holi, soy tu bot de confianza! <:burbujita:930399322183458867>`)
          
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
          
        } else {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Love 💞`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${img.user.username}**, está saludando a ${message.author.username}.`)
            .setImage(ramdonhi)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })

            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        }

    }

}