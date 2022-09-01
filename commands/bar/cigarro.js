module.exports =  {
    
    name: 'cigarro',
    aliases: [],
    description: '🚬',
    category: 'Bar 🥂',
    use: '<prefix>cigarro [@user/id]',
    owner: false,
    vip: false,
    slash: false,
  
    async execute(client, message, args, Discord) {

        var cigarro = [

            'https://i.imgur.com/Q5TMAeK.gif',
            'https://i.imgur.com/GaX8ZfY.gif',
            'https://i.imgur.com/LAkLDEQ.gif',
            'https://i.imgur.com/rUzCo1u.gif',
            'https://i.imgur.com/snOr3Iz.gif',
            'https://i.imgur.com/bBCe9O4.gif',
            'https://i.imgur.com/NPXAy2T.gif',
            'https://i.imgur.com/71C5R4n.gif',
            'https://i.imgur.com/HM58pJs.gif',
            'https://i.imgur.com/KSmiiYL.gif',
            'https://i.imgur.com/0vkFUYH.gif',
            'https://i.imgur.com/QAnuYrx.gif',
            'https://i.imgur.com/e2kLFDJ.gif',
            'https://i.imgur.com/Ujdxj2A.gif',
            'https://i.imgur.com/loWIxyi.gif',
            'https://i.imgur.com/cwrjLac.gif',
            'https://i.imgur.com/pa6ScZT.gif',
            'https://i.imgur.com/rtFTUcS.gif',
            'https://i.imgur.com/PgzGzl6.gif',
            'https://i.imgur.com/kzPYQVk.gif',
        
        ]

        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
        let ramdoncigarro = cigarro[Math.floor(Math.random()*cigarro.length)]

        while (!ramdoncigarro || ramdoncigarro === null || ramdoncigarro === '' || ramdoncigarro === undefined) {
            
            ramdoncigarro = cigarro[Math.floor(Math.random()*cigarro.length)]

        }

        if (!img || img.id === message.author.id) {

            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Bar`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${message.author.username}** está fumando un cigarrito.`)
            .setImage(ramdoncigarro)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        } else if (img.user.bot) {

            return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
          
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL()})
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | Los bots no fuman! <:nogarsias:932172183453712415>`)
          
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        } else {

            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Bar`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`Hey **${img.user.username}**, ${message.author.username} ha compartido un cigarro contigo.`)
            .setImage(ramdoncigarro)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

        }

    }

}