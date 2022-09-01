module.exports =  {
    
    name: 'pillow',
    aliases: ['almohada','pillow-fight'],
    description: '💥 ¿Alguien dijo guerra de almohadas?',
  
    async execute(client, message, args, Discord) { 
 
        var pillow = [

            'https://i.imgur.com/Yd32bqd.gif',
            'https://i.imgur.com/t3xOwB8.gif',
            'https://i.imgur.com/Rvkx7DY.gif',
            'https://i.imgur.com/RoPYMnl.gif',
            'https://i.imgur.com/6U7FB5U.gif',
            'https://i.imgur.com/sRLcvRj.gif',
            'https://i.imgur.com/Ex2hEoA.gif',
            'https://i.imgur.com/yuWUbBT.gif',
            'https://i.imgur.com/T6jatsu.gif',
            'https://i.imgur.com/NWbj629.gif',
            'https://i.imgur.com/sU8bm3E.gif',
            'https://i.imgur.com/1b8IKqD.gif',
            'https://i.imgur.com/tVi9Hrt.gif',
            'https://i.imgur.com/AXBIrGO.gif',
            'https://i.imgur.com/t0jCVsg.gif',
            'https://i.imgur.com/T65jEFS.gif',
            'https://i.imgur.com/7i81qHE.gif',
            'https://i.imgur.com/BbU6RrJ.gif',
            'https://i.imgur.com/Wq76mIQ.gif',
            'https://i.imgur.com/bra1YTT.gif',
            'https://i.imgur.com/EX7ZoVh.gif',
            'https://i.imgur.com/E0xVXtT.gif',
            'https://i.imgur.com/HdUfBed.gif',
        
        ]

        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
        let ramdonpillow = pillow[Math.floor(Math.random()*pillow.length)]
        let desc

        while (!ramdonpillow || ramdonpillow === null || ramdonpillow === '' || ramdonpillow === undefined) {
                
            ramdonpillow = pillow[Math.floor(Math.random()*pillow.length)]
            
        }

        if (!img || img.id === message.author.id) {
    
            desc = `**${message.author.username}** está peleando solo con las almohadas!!! <:vengapeliemos:888338491371569192>`

        } else if (img.user.bot){
          
            return message.reply({ allowedMentions: { repliedUser: false }, embeds: [
          
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | ¿Guerra de almohadas conmigo? <:nogarsias:932172183453712415>`)
          
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
          
        } else {

            desc = `**${message.author.username}** le tiró un almohadazo a **${img.user.username}**. <a:pandapelea:966839507213221938>`

        }
            
        const embed = new Discord.MessageEmbed()
        .setAuthor({ name: `Midgard's Love 💞`, iconURL: client.user.avatarURL({ dynamic: true }) })
        .setDescription(desc)
        .setImage(ramdonpillow)
        .setColor('RANDOM')
        .setTimestamp(new Date())
        .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })

        message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
      
    }

}