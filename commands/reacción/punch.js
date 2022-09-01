module.exports =  {
    
    name: 'punch',
    aliases: ['puñetear','golpear','golpe','puñete'],
    description: '👊 Tira un golpe a alguien.',
  
    async execute(client, message, args, Discord) { 

        var punch = [

            'https://i.imgur.com/FByyLiD.gif',
            'https://i.imgur.com/N9fAK38.gif',
            'https://i.imgur.com/sQQSLEN.gif',
            'https://i.imgur.com/g5ls2kd.gif',
            'https://i.imgur.com/OCuOKHG.gif',
            'https://i.imgur.com/JZeLGAp.gif',
            'https://i.imgur.com/HfaklOp.gif',
            'https://i.imgur.com/MOAt6UD.gif',
            'https://i.imgur.com/CzdvbDQ.gif',
            'https://i.imgur.com/Zv578BE.gif',
            'https://i.imgur.com/LSCiKz1.gif',
            'https://i.imgur.com/wRojpQF.gif',
            'https://i.imgur.com/mJqJZNU.gif',
            'https://i.imgur.com/ObeuD1A.gif',
            'https://i.imgur.com/ysr3Xwt.gif',
            'https://i.imgur.com/HAAL3Tu.gif',
            'https://i.imgur.com/Cu7ZUQC.gif',
            'https://i.imgur.com/Neff8LU.gif',
            'https://i.imgur.com/UXnMqVF.gif',
            'https://i.imgur.com/Ld3gtkq.gif',
            'https://i.imgur.com/7w1GLp2.gif',
            'https://i.imgur.com/Q8N0vRq.gif',
            'https://i.imgur.com/dNgSdql.gif',
            'https://i.imgur.com/CJ3Iyfq.gif',
            'https://i.imgur.com/s7wKCny.gif',
            'https://i.imgur.com/Y2vZAHz.gif',
            'https://i.imgur.com/I5CZQy7.gif',
            'https://i.imgur.com/zHNFIlg.gif',
            'https://i.imgur.com/iqDPAmU.gif',
            'https://i.imgur.com/BbtNbf3.gif',
        
        ]

        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
        let ramdonpunch = punch[Math.floor(Math.random()*punch.length)]
    
        if (!img || img.id === message.author.id) {
    
            return message.reply({embeds: [
            
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | ¿Te golpearías a ti mismo? <:maje:925927838492811295>`)
          
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        } else if (img.user.bot){
          
            return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
          
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | ¡Qué lindo eres pegándole a un bot! <:procesando:932177969017925632>`)
          
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
          
        } else {
    
            while (!ramdonpunch || ramdonpunch === null || ramdonpunch === '' || ramdonpunch === undefined) {
                
                ramdonpunch = punch[Math.floor(Math.random()*punch.length)]

            }
            
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Love 💞`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${message.author.username}** le dió un puñetazo a **${img.user.username}**.`)
            .setImage(ramdonpunch)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
      
        }

    }

}