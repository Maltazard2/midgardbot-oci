module.exports =  {
    
    name: 'agua',
    aliases: ['agüita','awita'],
    description: '💧',
    category: 'Cafetería',
    use: '<prefix>agua [@user/id]',
    owner: false,
    vip: false,
  
    async execute(client, message, args, Discord) {

        var agua = [

            'https://i.imgur.com/I37S2P0.gif',
            'https://i.imgur.com/qNbi6Ep.gif',
            'https://i.imgur.com/KwoLyzf.gif',
            'https://i.imgur.com/Kz0I9Pg.gif',
            'https://i.imgur.com/hZbVbQl.gif',
            'https://i.imgur.com/PFTmFHT.gif',
            'https://i.imgur.com/GIjpSYU.gif',
            'https://i.imgur.com/vBDDBEU.gif',
            'https://i.imgur.com/CvtvuFI.gif',
            'https://i.imgur.com/9dfrtha.gif',
            'https://i.imgur.com/Iu1ZzhV.gif',
            'https://i.imgur.com/hnHooUb.gif',
            'https://i.imgur.com/OJCHKM9.gif',
            'https://i.imgur.com/R56zWaH.gif',
            'https://i.imgur.com/qLpM7kX.gif',
            'https://i.imgur.com/mBUmCXA.gif',
            'https://i.imgur.com/UwdfMXi.gif',
            'https://i.imgur.com/4byupKM.gif',
            'https://i.imgur.com/R5QSwMq.gif',
            'https://i.imgur.com/v8rG4Za.gif',
            'https://i.imgur.com/XfoU3D4.gif',
        
        ]

        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
        let ramdonagua = agua[Math.floor(Math.random()*agua.length)]

        while (!ramdonagua || ramdonagua === null || ramdonagua === '' || ramdonagua === undefined) {
            
            ramdonagua = agua[Math.floor(Math.random()*agua.length)]
            
        }
    
        if (!img || img.id === message.author.id) {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Cafe`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${message.author.username}** está tomando awita.`)
            .setImage(ramdonagua)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'  })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        } else if (img.user.bot){
          
            return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
          
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | Los bots no toman agüita! <:nogarsias:932172183453712415>`)
          
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        } else {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Cafe`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${img.user.username}**, ${message.author.username} te invitó un poquito de awita.`)
            .setImage(ramdonagua)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'  })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

        }

    }

}