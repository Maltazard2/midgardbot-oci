module.exports =  {
    
    name: 'kill',
    aliases: ['matar','asesinar'],
    description: '💀 Mata a alguien.',
  
    async execute(client, message, args, Discord) { 

        var kill = [

            'https://i.imgur.com/5BApkqY.gif',
            'https://i.imgur.com/VBqef6F.gif',
            'https://i.imgur.com/XFfTyfK.gif',
            'https://i.imgur.com/vHe65zu.gif',
            'https://i.imgur.com/B6SVJ2T.gif',
            'https://i.imgur.com/8vlN0gA.gif',
            'https://i.imgur.com/KTGyjls.gif',
            'https://i.imgur.com/Zc20hLG.gif',
            'https://i.imgur.com/NITtgd5.gif',
            'https://i.imgur.com/P3YDR3w.gif',
            'https://i.imgur.com/0MxXIQa.gif',
            'https://i.imgur.com/kycmwlk.gif',
            'https://i.imgur.com/dFn0a10.gif',
            'https://i.imgur.com/Bqo6YgL.gif',
            'https://i.imgur.com/EUKOROy.gif',
            'https://i.imgur.com/C7jcYSq.gif',
            'https://i.imgur.com/69EuJLw.gif',
            'https://i.imgur.com/g7HuvD3.gif',
            'https://i.imgur.com/MXX7zDY.gif',
            'https://i.imgur.com/zVWnjhp.gif',
            'https://i.imgur.com/1RWcGe6.gif',
            'https://i.imgur.com/vDDmWO9.gif',
            'https://i.imgur.com/1ujRzCE.gif',
            'https://i.imgur.com/DAkZr1o.gif',
            'https://i.imgur.com/3DWtmJZ.gif',
        
        ]

        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
        let ramdonkill = kill[Math.floor(Math.random()*kill.length)]
    
        if (!img || img.id === message.author.id) {
    
            return message.reply({embeds: [
            
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | ¡Que alguién lo detenga, por favor! <a:stitchsad:925931908918046790>`)
          
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        } else if (img.user.bot){
          
            return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
          
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | ¡No puedes matar a un bot! <:pepemaje:932177727589589013>`)
          
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
          
        } else {

            while (!ramdonkill || ramdonkill === null || ramdonkill === '' || ramdonkill === undefined) {
                
                ramdonkill = kill[Math.floor(Math.random()*kill.length)]

            }
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Emotions 🤗`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${message.author.username}** acaba de masacrar a **${img.user.username}**.`)
            .setImage(ramdonkill)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })

            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
      
        }

    }

}
    