module.exports =  {
    
    name: 'sad',
    aliases: ['triste','depre'],
    description: '😔 Mood Sad.',
    category: 'Reacción 😎',
    use: '<prefix>sad [@user/id]',
    owner: false,
    vip: false,
    slash: false,
  
    async execute(client, message, args, Discord) { 
 
        var sad = [

            'https://i.imgur.com/4HM5R3I.gif',
            'https://i.imgur.com/nDA3YDH.gif',
            'https://i.imgur.com/w1Fk6Ly.gif',
            'https://i.imgur.com/RIINAJS.gif',
            'https://i.imgur.com/pjE5n6x.gif',
            'https://i.imgur.com/a9TP6Tu.gif',
            'https://i.imgur.com/wyf6XGS.gif',
            'https://i.imgur.com/zC6WZhE.gif',
            'https://i.imgur.com/MMAIS5B.gif',
            'https://i.imgur.com/BfTmLaR.gif',
            'https://i.imgur.com/HJwUAlH.gif',
            'https://i.imgur.com/7KKadU6.gif',
            'https://i.imgur.com/Wc25Pay.gif',
            'https://i.imgur.com/j5tFm37.gif',
            'https://i.imgur.com/RNdvtWw.gif',
            'https://i.imgur.com/NvAGBuH.gif',
            'https://i.imgur.com/L5GRXB5.gif',
            'https://i.imgur.com/c0HQPy6.gif',
            'https://i.imgur.com/UGqqvVl.gif',
            'https://i.imgur.com/4uuewA2.gif',
        
        ]

        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
        let ramdonsad = sad[Math.floor(Math.random()*sad.length)]
    
        while (!ramdonsad || ramdonsad === null || ramdonsad === '' || ramdonsad === undefined) {
            
            ramdonsad = sad[Math.floor(Math.random()*sad.length)]

        }
        
        if (!img || img.id === message.author.id) {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Sad 😔`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${message.author.username}** se puso modo depre.`)
            .setImage(ramdonsad)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })

            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        } else if (img.user.bot){
          
            return message.reply({ allowedMentions: { repliedUser: false }, embeds: [
          
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | ¡Yo no ando sad! <:nogarsias:932172183453712415>`)
          
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
          
        } else {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Sad 😔`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${message.author.username}** y **${img.user.username}** andan modo sad.`)
            .setImage(ramdonsad)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })

            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
      
        }

    }

}