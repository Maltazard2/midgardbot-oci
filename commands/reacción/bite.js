const anime = require('anime-actions')

module.exports =  {
    
    name: 'bite',
    aliases: ['morderse','morder'],
    description: '😬 ¡Muérdeme!.',
    category: 'Reacción 😎',
    use: '<prefix>bite [@user/id]',
    owner: false,
    vip: false,
    slash: false,
  
    async execute(client, message, args, Discord) { 

        let bite = await anime.bite()
        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
   
        while (!bite || bite === null || bite === '' || bite === undefined) {
            
            bite = await anime.bite()

        }

        if (!img || img.id === message.author.id) {

            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Emotions 🤗`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${message.author.username}** se está mordiendo solo <a:incomodo:943361621416353842>`)
            .setImage(bite)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })

            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

        } else if (img.user.bot){
        
            return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
        
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | Muérdeme <:estaaa:887059768710135839>`)
        
            ]})
        
        } else {

            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Emotions 🤗`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${message.author.username}** está mordiendo a **${img.user.username}** <:abby:931432327354155038> `)
            .setImage(bite)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })

            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

        }

    }

}