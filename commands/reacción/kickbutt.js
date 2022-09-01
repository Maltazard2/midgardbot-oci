const star = require('star-labs')

module.exports =  {
    
    name: 'kickbutt',
    aliases: ['patear','patada'],
    description: '🦶 Tira una pateada a alguien.',
    category: 'Reacción 😎',
    use: '<prefix>kickbutt <@user/id>',
    owner: false,
    vip: false,
    slash: false,
  
    async execute(client, message, args, Discord) { 

        let kick = star.kick()
        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
   
        if (!img || img.id === message.author.id) {

            return message.reply({embeds: [
          
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | ¿A quién quieres patear? <:pepemaje:880303225109110814>`)
        
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        } else if (img.user.bot){
        
            return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
        
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | ¡No puedes conmigo! <:nogarsias:932172183453712415>`)
        
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
        
        } else {

            while (!kick || kick === null || kick === '' || kick === undefined) {
                
                kick = star.kick()
                
            }

            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Emotions 🤗`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${img.user.username}**, ${message.author.username} te dió una patada <a:ThisGonnaBGud_retrasados:887057491081449512>`)
            .setImage(kick)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })

            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

        }

    }

}