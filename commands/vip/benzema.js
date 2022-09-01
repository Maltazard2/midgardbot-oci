module.exports =  {
    
    name: 'benzema',
    aliases: ['karim'],
    description: '⚽ Comando VIP',
    category: 'VIP 💎',
    use: '<prefix>benzema',
    owner: false,
    vip: true,
    slash: false,
  
    async execute(client, message, args, Discord) { 
 
        var ben = [

            'https://i.imgur.com/0RWuqCR.gif',
            'https://i.imgur.com/JFZqm41.gif',
            'https://i.imgur.com/tdN76Ln.gif',
            'https://i.imgur.com/HVbtcEC.gif',
            'https://i.imgur.com/F6G67jM.gif',
            'https://i.imgur.com/r7qXg1c.gif',
            'https://i.imgur.com/bIBPa7U.gif',
            'https://i.imgur.com/Lkoq8yc.gif',
          
        ]  

        let ramdonb = ben[Math.floor(Math.random()*ben.length)]

        while (!ramdonb || ramdonb === null || ramdonb === '' || ramdonb === undefined) {

            ramdonb = ben[Math.floor(Math.random()*ben.length)]
            
        }
        
        const embed = new Discord.MessageEmbed()
        .setAuthor({ name: `Midgard's VIP`, iconURL: client.user.avatarURL({ dynamic: true }) })
        .setTitle('🇫🇷 | Karim Benzema 9')
        .setImage(ramdonb)
        .setColor('RANDOM')
        .setTimestamp(new Date())
        .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })

        message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
        
    }

}