const star = require('star-labs')

module.exports =  {
    
    name: 'confused',
    aliases: ['confundido'],
    description: '😕 ¿Confundido Potter?.',
    category: 'Reacción 😎',
    use: '<prefix>confused [@user/id]',
    owner: false,
    vip: false,
    slash: false,
  
    async execute(client, message, args, Discord) { 
 
        let confus = star.confused()
        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
   
        while (!confus || confus === null || confus === '' || confus === undefined) {
            
            confus = star.confused()
            
        }

        if (!img || img.id === message.author.id) {

            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Emotions 🤗`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${message.author.username}** está confundido <a:ConfusedDog:920965537020907541>`)
            .setImage(confus)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })

            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

        } else if (img.user.bot){
        
            return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
        
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | No quieras confundirme! <:nogarsias:932172183453712415>`)
        
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        
        } else {

            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Emotions 🤗`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${message.author.username}** está confundiendo a **${img.user.username}** <a:ConfusedDog:920965537020907541> `)
            .setImage(confus)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })

            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

      }

    }

}
