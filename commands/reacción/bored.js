const anime = require('anime-actions')

module.exports =  {
    
    name: 'bored',
    aliases: ['aburrido'],
    description: '🙄 ¡Aburrido!.',
    category: 'Reacción 😎',
    use: '<prefix>bored',
    owner: false,
    vip: false,
    slash: false,
  
    async execute(client, message, args, Discord) { 

        let bored = await anime.bored()

        while (!bored || bored === null || bored === '' || bored === undefined) {
            
            bored = await anime.bored()

        }

        const embed = new Discord.MessageEmbed()
        .setAuthor({ name: `Midgard's Emotions 🤗`, iconURL: client.user.avatarURL({ dynamic: true }) })
        .setDescription(`**${message.author.username}** está aburrid@ <:yonofui:931433119859503194>`)
        .setImage(bored)
        .setColor('RANDOM')
        .setTimestamp(new Date())
        .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })

        message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
       
    }

}