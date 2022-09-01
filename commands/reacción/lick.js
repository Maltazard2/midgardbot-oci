const star = require('star-labs')

module.exports =  {
    
    name: 'lick',
    aliases: ['lamer','lamida','lamiendo'],
    description: '😜 ¡Qué rico!.',
    category: 'Reacción 😎',
    use: '<prefix>lick <@user/id>',
    owner: false,
    vip: false,
    slash: false,
  
    async execute(client, message, args, Discord) { 

        let lick = star.lick()
        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));

        if (!img || img.id === message.author.id) {

            return message.reply({embeds: [
        
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | ¿Te lamerías a ti mismo? <:pepemaje:932177727589589013>`)
        
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        } else if (img.user.bot){
        
            return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
        
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | <:nogarsias:932172183453712415>`)
        
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
        
        } else {

            while (!lick || lick === null || lick === '' || lick === undefined) {
                
                lick = star.lick()
                
            }

            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Emotions 🤗`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${message.author.username}** está lamiendo a **${img.user.username}** <:mmm:880308330894090241>`)
            .setImage(lick)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })

            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

        }

    }

}