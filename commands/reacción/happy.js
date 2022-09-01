const star = require('star-labs')

module.exports =  {
    
    name: 'happy',
    aliases: ['feliz','alegre','smile'],
    description: '😀 Demuestra tu modo feliz.',
  
    async execute(client, message, args, Discord) { 

        let happy = star.happy()

        while (!happy || happy === null || happy === '' || happy === undefined) {
        
            happy = star.happy()
            
        }

        const embed = new Discord.MessageEmbed()
        .setAuthor({ name: `Midgard's Emotions 🤗`, iconURL: client.user.avatarURL({ dynamic: true }) })
        .setDescription(`**${message.author.username}** se puso modo feliz <a:6975wolfparty:901266259256168508>`)
        .setImage(happy)
        .setColor('RANDOM')
        .setTimestamp(new Date())
        .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })

        message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

    }

}