module.exports =  {
    
    name: 'cumbia',
    aliases: [],
    description: '🕺',
    category: 'Disco',
    use: '<prefix>cumbia [@user/id]',
    owner: false,
    vip: false,
  
    async execute(client, message, args, Discord) {

        var cumbia = [

            'https://i.imgur.com/QkX7LBW.gif',
            'https://i.imgur.com/TInnWrW.gif',
            'https://i.imgur.com/AeB0ZIu.gif',
            'https://i.imgur.com/2FsIMmn.gif',
            'https://i.imgur.com/Xms53Qa.gif',
            'https://i.imgur.com/lw8sXPJ.gif',
            'https://i.imgur.com/HKSIpkE.gif',
            'https://i.imgur.com/6uF2u66.gif',
            'https://i.imgur.com/1r7mdOF.gif',
            'https://i.imgur.com/uZaA18q.gif',
        
        ]
        
        var cumbia2 = [

            'https://i.imgur.com/LGQYZqo.gif',
            'https://i.imgur.com/kTlnzaz.gif',
            'https://i.imgur.com/cvlFEMG.gif',
            'https://i.imgur.com/YCIQUdt.gif',
            'https://i.imgur.com/r36gsBq.gif',
            'https://i.imgur.com/AoJFbst.gif',
            'https://i.imgur.com/GJ5POx4.gif',
            'https://i.imgur.com/ZdMfCTa.gif',
            'https://i.imgur.com/ES64yHC.gif',
            'https://i.imgur.com/hwXANwf.gif',

        ]

        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
        let ramdoncumbia = cumbia[Math.floor(Math.random()*cumbia.length)]
        let ramdoncumbia2 = cumbia2[Math.floor(Math.random()*cumbia2.length)]

        while (!ramdoncumbia || ramdoncumbia === null || ramdoncumbia === '' || ramdoncumbia === undefined) {
            
            ramdoncumbia = cumbia[Math.floor(Math.random()*cumbia.length)]

        }
        
        while (!ramdoncumbia2 || ramdoncumbia2 === null || ramdoncumbia2 === '') {
            
            ramdoncumbia2 = cumbia2[Math.floor(Math.random()*cumbia2.length)]
            
        }

        if (!img || img.id === message.author.id) {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Disco`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${message.author.username}** está bailando un pinche cumbión bien loco.`)
            .setImage(ramdoncumbia2)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'  })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        } else if (img.user.bot){
          
            return message.reply({embeds: [
          
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | Soy un bot, no bailo! <:nogarsias:932172183453712415>`)
          
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
          
        } else {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Disco`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`A **${img.user.username}** y ${message.author.username} les va bien los pasitos de cumbia.`)
            .setImage(ramdoncumbia)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'  })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
      
        }

    }

}