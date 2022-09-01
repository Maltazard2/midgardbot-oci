const star = require('star-labs')

module.exports =  {
    
    name: 'suicide',
    aliases: ['suicidar','suicidio'],
    description: '💀 ¿Te harás la automorisión?.',
  
    async execute(client, message, args, Discord) { 

        let suic = star.suicide()
  
        while (!suic || suic === null || suic === '' || suic === undefined) {
            
            suic = star.suicide()

        }
        
        const embed = new Discord.MessageEmbed()
        .setAuthor({ name: `Midgard's Sad 😔`, iconURL: client.user.avatarURL({ dynamic: true }) })
        .setDescription(`**${message.author.username}** se ha suicidado... <a:suicide:881550681239064626>`)
        .setImage(suic)
        .setColor('RANDOM')
        .setTimestamp(new Date())
        .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })

        message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

    }

}