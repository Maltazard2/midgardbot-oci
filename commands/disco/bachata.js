module.exports =  {
    
    name: 'bachata',
    aliases: [],
    description: '💘',
    category: 'Disco',
    use: '<prefix>bachata [@user/id]',
    owner: false,
    vip: false,
  
    async execute(client, message, args, Discord) {

        var bachata = [

            'https://i.imgur.com/wdtE9n1.gif',
            'https://i.imgur.com/KSZJje0.gif',
            'https://i.imgur.com/fXKnH9U.gif',
            'https://i.imgur.com/nfuxkxk.gif',
            'https://i.imgur.com/gukZw4f.gif',
            'https://i.imgur.com/13OGTkM.gif',
            'https://i.imgur.com/Yuy6SVO.gif',
            'https://i.imgur.com/7EFVNwn.gif',
            'https://i.imgur.com/if5lCf4.gif',
            'https://i.imgur.com/XonzuIx.gif',
            'https://i.imgur.com/mBlaVVa.gif',
            'https://i.imgur.com/jjfB7zo.gif',
            'https://i.imgur.com/YwxEb5N.gif',
            'https://i.imgur.com/tjnPWoA.gif',
        
        ]

        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
        let ramdonbachata = bachata[Math.floor(Math.random()*bachata.length)]
       
        while (!ramdonbachata || ramdonbachata === null || ramdonbachata === '' || ramdonbachata === undefined) {
            
            ramdonbachata = bachata[Math.floor(Math.random()*bachata.length)]

        }
        
        if (!img || img.id === message.author.id) {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Disco`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`Miren a **${message.author.username}** como disfruta esa bachata.`)
            .setImage(ramdonbachata)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'  })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        } else if (img.user.bot){
          
            return message.reply({embeds: [
          
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | ¿Quieres ver como bailo? <:nogarsias:932172183453712415>`)
          
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
          
        } else {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Disco`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${img.user.username}**, está bachateando con ${message.author.username}.`)
            .setImage(ramdonbachata)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'  })
           
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
      
        }

    }

}