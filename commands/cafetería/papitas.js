module.exports =  {
    
    name: 'papitas',
    aliases: ['papas'],
    description: '🍟',
    category: 'Cafetería',
    use: '<prefix>papitas [@user/id]',
    owner: false,
    vip: false,
  
    async execute(client, message, args, Discord) {

        var papitas = [

            'https://i.imgur.com/qq5YVkJ.gif',
            'https://i.imgur.com/2xs7ou2.gif',
            'https://i.imgur.com/hrzWKnF.gif',
            'https://i.imgur.com/5IHowVR.gif',
            'https://i.imgur.com/M2nNASA.gif',
            'https://i.imgur.com/kvaDntZ.gif',
            'https://i.imgur.com/Y4puuW9.gif',
            'https://i.imgur.com/O0JJP8n.gif',
            'https://i.imgur.com/rB65q7h.gif',
            'https://i.imgur.com/6vPTIag.gif',
            'https://i.imgur.com/tZRauwg.gif',
            'https://i.imgur.com/L0Mg1Mc.gif',
            'https://i.imgur.com/zMD9FoK.gif',
            'https://i.imgur.com/3ZnJHqi.gif',
            'https://i.imgur.com/DYq4weh.gif',
            'https://i.imgur.com/nRGTrUf.gif',
            'https://i.imgur.com/mKELqvy.gif',
            'https://i.imgur.com/d6kMJYh.gif',
            'https://i.imgur.com/5lDH4dE.gif',
            'https://i.imgur.com/f16Nwyd.gif',
        
        ]

        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
        let ramdonpapitas = papitas[Math.floor(Math.random()*papitas.length)]

        while (!ramdonpapitas || ramdonpapitas === null || ramdonpapitas === '' || ramdonpapitas === undefined) {
            
            ramdonpapitas = papitas[Math.floor(Math.random()*papitas.length)]

        }
        
        if (!img || img.id === message.author.id) {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Cafe`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`A **${message.author.username}** se le antojaron unas crocantes papitas. 🍟`)
            .setImage(ramdonpapitas)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'  })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        } else if (img.user.bot) {

            return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
          
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | Los bots no comen papitas! <:nogarsias:932172183453712415>`)
          
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        } else {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Cafe`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${img.user.username}**, ${message.author.username} te invitó unas sabrosas y deliciosas papitas. 🍟`)
            .setImage(ramdonpapitas)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'  })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

        }

    }

}