module.exports =  {
    
    name: 'chicle',
    aliases: ['chicles'],
    description: '🍡',
    category: 'Cafetería',
    use: '<prefix>chicle [@user/id]',
    owner: false,
    vip: false,
  
    async execute(client, message, args, Discord) {

        var chicle = [

            'https://i.imgur.com/mSwE2lk.gif',
            'https://i.imgur.com/bn5fqQp.gif',
            'https://i.imgur.com/0LXyYPu.gif',
            'https://i.imgur.com/9jd872d.gif',
            'https://i.imgur.com/5OzI8dt.gif',
            'https://i.imgur.com/EuKbGBR.gif',
            'https://i.imgur.com/zKqRdcT.gif',
            'https://i.imgur.com/1QlUs5Y.gif',
            'https://i.imgur.com/7PH29JK.gif',
            'https://i.imgur.com/jlTCvcx.gif',
            'https://i.imgur.com/RT10VsU.gif',
            'https://i.imgur.com/0MMEDDh.gif',
            'https://i.imgur.com/hdlyTYt.gif',
            'https://i.imgur.com/zQihXMH.gif',
            'https://i.imgur.com/t44HcLQ.gif',
            'https://i.imgur.com/nLQHWS5.gif',
            'https://i.imgur.com/k95AUpT.gif',
            'https://i.imgur.com/x8eulrp.gif',
            'https://i.imgur.com/h45oIoe.gif',
            'https://i.imgur.com/RYel5U4.gif',
            'https://i.imgur.com/nsQjDIw.gif',
            'https://i.imgur.com/hS1p55S.gif',
            'https://i.imgur.com/z0ImOrm.gif',

        ]

        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
        let ramdonchicle = chicle[Math.floor(Math.random()*chicle.length)]

        while (!ramdonchicle || ramdonchicle === null || ramdonchicle === '' || ramdonchicle === undefined) {
            
            ramdonchicle = chicle[Math.floor(Math.random()*chicle.length)]

        }
        
        if (!img || img.id === message.author.id) {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Cafe`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`A **${message.author.username}** se le antojó mascar chicle. <:Y_moriste:897241205111418920>`)
            .setImage(ramdonchicle)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'  })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        } else if (img.user.bot) {

            return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
          
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | ¿Te imaginas el desastre si los bots mascaramos chicle? <:nogarsias:932172183453712415>`)
          
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        } else {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Cafe`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`${message.author.username} le invitó un rico chicle a **${img.user.username}**. <:Y_moriste:897241205111418920>`)
            .setImage(ramdonchicle)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'  })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

        }

    }

}