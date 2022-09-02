module.exports =  {
    
    name: 'avatar',
    aliases: ['av'],
    description: '🔎 Muestra el avatar de un usuario en el servidor.',
    category: 'Utilidad 💡',
    use: '<prefix>avatar [@user/id]',
    owner: false,
    vip: false,
    slash: true,

    async execute(client, message, args, Discord) {

        let img = message.mentions.users.first()

        if(!img){

            try {
          
            img = await client.users.fetch(args[0])

            } catch (error) {

            img = message.author
          
            }

        }

        if(!img || img.id === message.author.id){

            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Avatar de ${message.author.username}#${message.author.discriminator}`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setTitle('Imagen completa')
            .setDescription('[Click aquí]('+`${message.author.displayAvatarURL({ dynamic: true , size: 2048 }).replace('webp','png')}`+')')
            .setImage(`${message.author.displayAvatarURL({ dynamic: true , size: 2048 }).replace('webp','png')}`)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })

            return message.reply({ allowedMentions: { repliedUser: false}, embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

        } else if (img.avatarURL === null) {
    
            const e = new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | El usuario (${img.username}) no tiene avatar!`)
        
            return message.reply({ allowedMentions: { repliedUser: false}, embeds: [e]}).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        } else {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Avatar de ${img.username}#${img.discriminator}`,iconURL: client.user.avatarURL({ dynamic: true }) })
            .setTitle('Imagen completa')
            .setDescription('[Click aquí]('+`${img.displayAvatarURL({ dynamic: true , size: 2048 }).replace('webp','png')}`+')')
            .setImage(`${img.displayAvatarURL({ dynamic: true , size: 2048 }).replace('webp','png')}`)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })

            message.reply({ allowedMentions: { repliedUser: false}, embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
      
        }

    }

}