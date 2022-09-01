module.exports =  {
    
    name: 'dado',
    aliases: ['dice'],
    description: '🎲 Lanza un dado al azar.',
  
    async execute(client, message, args, Discord) {

        let links = [
            
            'https://i.imgur.com/e8Ta8Qg.png',
            'https://i.imgur.com/VV05Ww9.png',
            'https://i.imgur.com/yHvON5O.png',
            'https://i.imgur.com/hJZjV4m.png',
            'https://i.imgur.com/e6HV74c.png',
            'https://i.imgur.com/yN78VZK.png',
            
        ]

        var dado = links[Math.floor(Math.random() * links.length)]

        while (!dado || dado === null || dado === '' || dado === undefined) {
        
            dado = links[Math.floor(Math.random() * links.length)]
            
        }

        const embed = new Discord.MessageEmbed() 
        .setAuthor({ name: `Midgard's Fun`, iconURL: client.user.avatarURL({ dynamic: true }) })
        .setTitle(`🎲 **${message.author.username}** ha tirado el dado.`)
        .setDescription('El dado a caído en:')
        .setImage(dado)
        .setColor('RANDOM')
        .setTimestamp(new Date())
        .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })
        
        message.reply({ allowedMentions: { repliedUser: false}, embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

    }

}