module.exports =  {
    
    name: 'roll',
    aliases: [],
    description: '🔢 Saca un número al azar.',
    category: 'Diversión 🤣',
    use: '<prefix>roll [max]',
    owner: false,
    vip: false,
    slash: false,
  
    async execute(client, message, args, Discord) {

        if(!args[0])
        {

            var num = Math.floor(Math.random() * 101)

            const embed = new Discord.MessageEmbed() 
            .setAuthor({ name: `Midgard's Fun`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`🔢 **${message.author.username}** ha tirado un roll de (**100**) y ha obtenido un **${num}**`)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })
            
            message.reply({ allowedMentions: { repliedUser: false}, embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

        } else {

            if(isNaN(args[0])) return message.reply({ embeds: [

                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | Ingresa un número válido!`)
      
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

            var num = Math.floor(Math.random() * args[0])

            const embed = new Discord.MessageEmbed() 
            .setAuthor({ name: `Midgard's Fun`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`🔢 **${message.author.username}** ha tirado un roll de (**${args[0]}**) y ha obtenido un **${num}**`)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })
            
            message.reply({ allowedMentions: { repliedUser: false}, embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

        }

    }

}