module.exports =  {
    
    name: 'clorox',
    aliases: [],
    description: '🙄 ¿Te apetece un poco de clorox?.',
  
    async execute(client, message, args, Discord) {

        var clorox = [

            'https://i.imgur.com/GoTJf5X.gif',
            'https://i.imgur.com/gksEfz4.gif',
            'https://i.imgur.com/F0YEDS9.gif',
            'https://i.imgur.com/U1lS0S6.gif',
            'https://i.imgur.com/F0PJgGt.gif',
            'https://i.imgur.com/AWFy8D9.gif',
            'https://i.imgur.com/OUJ2et7.gif',
            'https://i.imgur.com/I3Pk6G9.gif',
            'https://i.imgur.com/RM5qIWH.gif',
            'https://i.imgur.com/LpRn5yD.gif',
            'https://i.imgur.com/5sgUb39.gif',
            'https://i.imgur.com/ERfEAx1.gif',
            'https://i.imgur.com/LLTwxuz.gif',
            'https://i.imgur.com/uBQj6OY.gif',
            'https://i.imgur.com/MnofYKj.gif',
        
        ]

        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
        let ramdonclorox = clorox[Math.floor(Math.random()*clorox.length)]

        while (!ramdonclorox || ramdonclorox === null || ramdonclorox === '' || ramdonclorox === undefined) {
            
            ramdonclorox = clorox[Math.floor(Math.random()*clorox.length)]

        }

        if (!img || img.id === message.author.id) {
  
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Sad 😔`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${message.author.username}** se ahoga con un buen clorox!`)
            .setImage(ramdonclorox)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })

            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
  
        } else if (img.user.bot){
        
            return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
        
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | ¿Clorox? <:nogarsias:932172183453712415>`)
        
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
        
        } else {
  
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Sad 😔`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${img.user.username}**, vamos a ahogarnos en la soledad con un clorox invitado por ${message.author.username}.`)
            .setImage(ramdonclorox)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })

            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        }

    }

}