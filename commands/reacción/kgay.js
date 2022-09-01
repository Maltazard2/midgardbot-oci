module.exports =  {
    
    name: 'kgay',
    aliases: ['kg','kiss-gay'],
    description: '😘 Un beso entre hombres.',
    category: 'Reacción 😎',
    use: '<prefix>kg <@user/id>',
    owner: false,
    vip: false,
    slash: false,
  
    async execute(client, message, args, Discord) { 

        var kg = [
            
            'https://i.imgur.com/Tx6y06X.gif',
            'https://i.imgur.com/kSXp4F1.gif',
            'https://i.imgur.com/dWUZIni.gif',
            'https://i.imgur.com/2SKVI7x.gif',
            'https://i.imgur.com/8UxbW97.gif',
            'https://i.imgur.com/E6YJbHN.gif',
            'https://i.imgur.com/ED15BaF.gif',
            'https://i.imgur.com/ZWveei0.gif',
            'https://i.imgur.com/9Y3vwdI.gif',
            'https://i.imgur.com/RTAlrrH.gif',
            'https://i.imgur.com/4nfokuM.gif',
            'https://i.imgur.com/0wnfeps.gif',
            'https://i.imgur.com/T4uqxUh.gif',
            'https://i.imgur.com/HnikIw7.gif',
            'https://i.imgur.com/qEFokxu.gif',
            'https://i.imgur.com/b9mRlns.gif',
            'https://i.imgur.com/AjXulgp.gif',
            'https://i.imgur.com/I0HYf1y.gif',
            'https://i.imgur.com/uRyPceY.gif',
            'https://i.imgur.com/PKZJp0l.gif',
            'https://i.imgur.com/Ds6MHkG.gif',
            'https://i.imgur.com/gJkUyAB.gif',
            'https://i.imgur.com/BAZnXb0.gif',
            'https://i.imgur.com/mqG3CXM.gif',
            'https://i.imgur.com/7E8mFQb.gif',
            'https://i.imgur.com/knpc6HF.gif',
            'https://i.imgur.com/a5AkE45.gif',
            'https://i.imgur.com/2DeUfAs.gif',
            'https://i.imgur.com/UHcWgPm.gif',
            'https://i.imgur.com/l4iAWZD.gif',
            'https://i.imgur.com/Uv4wy1e.gif',
            'https://i.imgur.com/xHn5hzv.gif',
            'https://i.imgur.com/LQyCfd5.gif',
            'https://i.imgur.com/KJ2XfrI.gif',
            'https://i.imgur.com/7eFJ994.gif',
            'https://i.imgur.com/UuZWqpv.gif',
            'https://i.imgur.com/S3RtWo4.gif',
            'https://i.imgur.com/huCJC8J.gif',
            'https://i.imgur.com/jiMRskn.gif',
            'https://i.imgur.com/35gmKBF.gif',
            'https://i.imgur.com/4Ecitf4.gif',
            'https://i.imgur.com/bJayiNy.gif',
            'https://i.imgur.com/NOGCMIG.gif',
            'https://i.imgur.com/suqAIwc.gif',
            'https://i.imgur.com/kZ231eG.gif',
            'https://i.imgur.com/CHHjBla.gif',
            'https://i.imgur.com/iH4NqZ4.gif',
            'https://i.imgur.com/aRVYjxP.gif',
            'https://i.imgur.com/yL2keVR.gif',
            'https://i.imgur.com/rLGe05K.gif',
            'https://i.imgur.com/ngxJC16.gif',
            'https://i.imgur.com/zCMAFK3.gif',
            'https://i.imgur.com/amODFTL.gif',
            'https://i.imgur.com/SlvZv6Y.gif',
            
        ]

        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
        let ramdonkg = kg[Math.floor(Math.random()*kg.length)]

        while (!ramdonkg || ramdonkg === null || ramdonkg === '' || ramdonkg === undefined) {
            
            ramdonkg = kg[Math.floor(Math.random()*kg.length)]
        
        }

        if (!img || img.id === message.author.id) return message.reply({embeds: [
          
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | ¿Te besarías a ti mismo? <:burbujita:930399322183458867>`)
        
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        if (img.user.bot) return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
          
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | Gracias por ese beso! <:mmm:932177122968076338>`)
        
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        const embed = new Discord.MessageEmbed()
        .setAuthor({ name: `Midgard's Love 💞`, iconURL: client.user.avatarURL({ dynamic: true }) })
        .setDescription(`**${message.author.username}** y **${img.user.username}** se están besando mientras se manosean <a:sabroso:932177227792146433>`)
        .setImage(ramdonkg)
        .setColor('RANDOM')
        .setTimestamp(new Date())
        .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })
  
        message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

    }

}