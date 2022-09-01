module.exports =  {
    
    name: 'te',
    aliases: ['té','tesito'],
    description: '🧉',
    category: 'Cafetería ☕',
    use: '<prefix>te [@user/id]',
    owner: false,
    vip: false,
    slash: false,
  
    async execute(client, message, args, Discord) {

        var te = [

            'https://i.imgur.com/EQPDLSK.gif',
            'https://i.imgur.com/yUJgyZP.gif',
            'https://i.imgur.com/OXWYtJI.gif',
            'https://i.imgur.com/Kpv4VGY.gif',
            'https://i.imgur.com/2j3PxCp.gif',
            'https://i.imgur.com/FV726Ch.gif',
            'https://i.imgur.com/cu4Inzw.gif',
            'https://i.imgur.com/GlXl4Vm.gif',
            'https://i.imgur.com/mydxY6f.gif',
            'https://i.imgur.com/bE6GurU.gif',
        
        ]

        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
        let ramdonte = te[Math.floor(Math.random()*te.length)]
      
        while (!ramdonte || ramdonte === null || ramdonte === '' || ramdonte === undefined) {
            
            ramdonte = te[Math.floor(Math.random()*te.length)]

        }
        
        if (!img || img.id === message.author.id) {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Cafe`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${message.author.username}** está relajándose con un tesito.`)
            .setImage(ramdonte)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'  })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        } else if (img.user.bot){
          
            return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
          
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | Nada mal un buen tesito! <:nogarsias:932172183453712415>`)
          
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        } else {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Cafe`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${img.user.username}**, ponte cómodo y relájate, que ${message.author.username} te ha invitado un tesito.`)
            .setImage(ramdonte)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'  })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
      
        }

    }

}