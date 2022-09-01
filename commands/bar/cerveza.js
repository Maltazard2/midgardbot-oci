module.exports =  {
    
    name: 'cerveza',
    aliases: ['cervezas','beer','chelas','chela'],
    description: '🍺',
    category: 'Bar',
    use: '<prefix>cerveza [@user/id]',
    owner: false,
    vip: false,
  
    async execute(client, message, args, Discord) {

        var cerveza = [

            'https://i.imgur.com/SFkZePt.gif',
            'https://i.imgur.com/hI00IAo.gif',
            'https://i.imgur.com/AfGjiCM.gif',
            'https://i.imgur.com/HhzqLYa.gif',
            'https://i.imgur.com/vjfIATg.gif',
            'https://i.imgur.com/uuF6I0W.gif',
            'https://i.imgur.com/LWIsknV.gif',
            'https://i.imgur.com/5vMjbUf.gif',
            'https://i.imgur.com/ofCIlPj.gif',
            'https://i.imgur.com/Iu8sQF3.gif',
            'https://i.imgur.com/RqyKUK1.gif',
            'https://i.imgur.com/Ymp9djj.gif',
            'https://i.imgur.com/nCdXshe.gif',
            'https://i.imgur.com/PL02ZrC.gif',
            'https://i.imgur.com/ZDy6Qv7.gif',
            'https://i.imgur.com/L21kQC0.gif',
            'https://i.imgur.com/oBakiLu.gif',
            'https://i.imgur.com/fTtRcyg.gif',
            'https://i.imgur.com/DNKjfzK.gif',
            'https://i.imgur.com/GSJC9fd.gif',
        
        ]

        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
        let ramdoncerveza = cerveza[Math.floor(Math.random()*cerveza.length)]

        while (!ramdoncerveza || ramdoncerveza === null || ramdoncerveza === '' || ramdoncerveza === undefined) {
            
            ramdoncerveza = cerveza[Math.floor(Math.random()*cerveza.length)]

        }

        if (!img || img.id === message.author.id) {

            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Bar`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${message.author.username}** está tomando una cervecita.`)
            .setImage(ramdoncerveza)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        } else if (img.user.bot) {

            return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
          
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | Los bots no toman cerveza, no nos causa nada pero igual! <:nogarsias:932172183453712415>`)
          
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        } else {

            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Bar`, iconURL: client.user.avatarURL({ dynamic: true })})
            .setDescription(`Hey, **${img.user.username}**, disfruta tu cerveza invitada por ${message.author.username}.`)
            .setImage(ramdoncerveza)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

        }

    }

}