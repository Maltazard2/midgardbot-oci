module.exports =  {
    
    name: 'cr7',
    aliases: ['bicho','siu'],
    description: '⚽ Comando VIP',
  
    async execute(client, message, args, Discord) { 
 
        var cr7 = [

            'https://i.imgur.com/o09WKss.gif',
            'https://i.imgur.com/VqMDUeL.gif',
            'https://i.imgur.com/ENR9DoV.gif',
            'https://i.imgur.com/qsjLmha.gif',
            'https://i.imgur.com/RBQD0d3.gif',
            'https://i.imgur.com/Q9QdJCb.gif',
            'https://i.imgur.com/avYeDLz.gif',
            'https://i.imgur.com/BSebp50.gif',
            'https://i.imgur.com/qzDYbwq.gif',
            'https://i.imgur.com/FsHlRCZ.gif',
            'https://i.imgur.com/qjltjjo.gif',
            'https://i.imgur.com/4DZXZGp.gif',
            'https://i.imgur.com/OQut6p2.gif',
            'https://i.imgur.com/5sYj5x0.gif',
            'https://i.imgur.com/3bdHRsi.gif',
          
        ]  

        let ramdonc = cr7[Math.floor(Math.random()*cr7.length)]

        while (!ramdonc || ramdonc === null || ramdonc === '' || ramdonc === undefined) {
            
            ramdonc = cr7[Math.floor(Math.random()*cr7.length)]

        }
        
        const embed = new Discord.MessageEmbed()
        .setAuthor({ name: `Midgard's VIP`, iconURL: client.user.avatarURL({ dynamic: true }) })
        .setTitle('🇵🇹 | Cristiano Ronaldo 7')
        .setImage(ramdonc)
        .setColor('RANDOM')
        .setTimestamp(new Date())
        .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })

        message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
        
    }

}