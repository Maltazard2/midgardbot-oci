const star = require('star-labs')

module.exports =  {
    
    name: 'feed',
    aliases: ['comer','comiendo','eat'],
    description: '😋 ¿Con hambre?.',
    category: 'Reacción 😎',
    use: '<prefix>feed [@user/id]',
    owner: false,
    vip: false,
    slash: false,
  
    async execute(client, message, args, Discord) { 

        let feed = star.feed()
        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));

        while (!feed || feed === null || feed === '' || feed === undefined) {
            
            feed = star.feed()
        }
        
        if (!img || img.id === message.author.id) {

            return message.reply({embeds: [
          
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | Cómete <:esta:925931250303250512>`)
        
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        } else if (img.user.bot){
        
            return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
        
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | Ya comí! <:nogarsias:932172183453712415>`)
        
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
        
        } else {

            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Emotions 🤗`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${message.author.username}** le dió de comer a **${img.user.username}** <a:Zuii:890684724673150996>`)
            .setImage(feed)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })

            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

      }

    }

}