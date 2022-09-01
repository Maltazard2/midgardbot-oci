module.exports =  {
    
    name: 'porro',
    aliases: ['mota'],
    description: '🚬',
    category: 'Bar',
    use: '<prefix>porro [@user/id]',
    owner: false,
    vip: false,
  
    async execute(client, message, args, Discord) {

        var porro = [

            'https://i.imgur.com/J1JoZRU.gif',
            'https://i.imgur.com/40IRVRg.gif',
            'https://i.imgur.com/wuGfzfP.gif',
            'https://i.imgur.com/qHb0ka4.gif',
            'https://i.imgur.com/CVqBERT.gif',
            'https://i.imgur.com/itF0ay3.gif',
            'https://i.imgur.com/SQUGkQv.gif',
            'https://i.imgur.com/kUBjSc6.gif',
            'https://i.imgur.com/EdGXZNA.gif',
            'https://i.imgur.com/AegYAYj.gif',
            'https://i.imgur.com/zHbsTUD.gif',
            'https://i.imgur.com/w84tYfk.gif',
            'https://i.imgur.com/FF90Ep6.gif',
            'https://i.imgur.com/12wJ7oW.gif',
            'https://i.imgur.com/E95mn5b.gif',
            'https://i.imgur.com/OKDT2K3.gif',
            'https://i.imgur.com/qZfp44Z.gif',
            'https://i.imgur.com/AAi43sW.gif',
            'https://i.imgur.com/369MFNt.gif',
            'https://i.imgur.com/YZYF3zi.gif',

        ]

        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
        let ramdonporro = porro[Math.floor(Math.random()*porro.length)]

        while (!ramdonporro || ramdonporro === null || ramdonporro === '' || ramdonporro === undefined) {
            
            ramdonporro = porro[Math.floor(Math.random()*porro.length)]
            
        }

        if (!img || img.id === message.author.id) {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Bar`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${message.author.username}** está volando con un porro de mota.`)
            .setImage(ramdonporro)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'  })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        } else if (img.user.bot) {

            return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
          
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | Los bots no necesitan porro! <:nogarsias:932172183453712415>`)
          
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        } else {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Bar`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${img.user.username}**, disfruta de esta mota que te ha invitado ${message.author.username}.`)
            .setImage(ramdonporro)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'  })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

        }

    }

}