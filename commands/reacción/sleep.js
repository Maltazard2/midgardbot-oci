const star = require('star-labs')

module.exports =  {
    
    name: 'sleep',
    aliases: ['durmiendo','dormir','mimir'],
    description: '😴 ¿Ya tienes sueño?.',
  
    async execute(client, message, args, Discord) { 

        let sleep = star.sleep()
        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
        
        while (!sleep || sleep === null || sleep === '' || sleep === undefined) {
            
            sleep = star.sleep()

        }
        
        if (!img || img.id === message.author.id) {
  
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Emotions 🤗`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${message.author.username}** se fue a dormir <a:mimir:936550105765523477>`)
            .setImage(sleep)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })

            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
  
        } else if (img.user.bot){
          
            return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
          
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | Yo no duermo, gracias! <:nogarsias:932172183453712415>`)
          
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
          
        } else {
  
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Emotions 🤗`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${img.user.username}**, ${message.author.username} te ha invitado a dormir juntos <a:mimir:936550105765523477>`)
            .setImage(sleep)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })

            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
  
        }
        
    }

}