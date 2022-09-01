module.exports =  {
    
    name: 'messi',
    aliases: ['pulga','lionel'],
    description: '⚽ Comando VIP',
    category: 'VIP 💎',
    use: '<prefix>messi',
    owner: false,
    vip: true,
    slash: false,
  
    async execute(client, message, args, Discord) { 
 
        var messi = [

            'https://i.imgur.com/rrXaeqa.gif',
            'https://i.imgur.com/HSpfO6O.gif',
            'https://i.imgur.com/Tr76reS.gif',
            'https://i.imgur.com/5T4818G.gif',
            'https://i.imgur.com/jpkdUBa.gif',
            'https://i.imgur.com/46vltS9.gif',
            'https://i.imgur.com/0n0G1wk.gif',
            'https://i.imgur.com/gwkBupL.gif',
            'https://i.imgur.com/n2d8FBf.gif',
            'https://i.imgur.com/rsIOC32.gif',
            'https://i.imgur.com/Fy0yZFt.gif',
            'https://i.imgur.com/cVFJtZb.gif',
            'https://i.imgur.com/pKjJnob.gif',
            'https://i.imgur.com/fzeolJG.gif',
            'https://i.imgur.com/JvdgdXc.gif',
          
        ]   

        let ramdonm = messi[Math.floor(Math.random()*messi.length)]

        while (!ramdonm || ramdonm === null || ramdonm === '' || ramdonm === undefined) {
        
            ramdonm = messi[Math.floor(Math.random()*messi.length)]
            
        }

        const embed = new Discord.MessageEmbed()
        .setAuthor({ name: `Midgard's VIP`, iconURL: client.user.avatarURL({ dynamic: true }) })
        .setTitle('🇦🇷 | Lionel Messi 10')
        .setImage(ramdonm)
        .setColor('RANDOM')
        .setTimestamp(new Date())
        .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })

        message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
        
    }

}