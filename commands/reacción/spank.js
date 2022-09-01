module.exports =  {
    
    name: 'spank',
    aliases: ['nalgada'],
    description: '🍑 Nalguea a alguien.',
    category: 'Reacción 😎',
    use: '<prefix>spank <@user/id>',
    owner: false,
    vip: false,
    slash: false,
  
    async execute(client, message, args, Discord) { 
 
        var spank = [

            'https://i.imgur.com/0iTnodV.gif',
            'https://i.imgur.com/4XTQFgq.gif',
            'https://i.imgur.com/dX9SR2N.gif',
            'https://i.imgur.com/3qT5Tb4.gif',
            'https://i.imgur.com/IAjl7pt.gif',
            'https://i.imgur.com/DqzsyBT.gif',
            'https://i.imgur.com/0xsBOYV.gif',
            'https://i.imgur.com/AEiaZAQ.gif',
            'https://i.imgur.com/EBWbt4i.gif',
            'https://i.imgur.com/fod5Y4Z.gif',
            'https://i.imgur.com/2k4FPL7.gif',
            'https://i.imgur.com/kEipzO9.gif',
            'https://i.imgur.com/PLbwOBb.gif',
            'https://i.imgur.com/ATcZfbn.gif',
            'https://i.imgur.com/UN238Xu.gif',
            'https://i.imgur.com/IFn8KGQ.gif',
            'https://i.imgur.com/J2HKrIY.gif',
            'https://i.imgur.com/6NmQC1H.gif',
            'https://i.imgur.com/hGSjUkk.gif',
            'https://i.imgur.com/O7VszU3.gif',
            'https://i.imgur.com/URaJsHb.gif',
            'https://i.imgur.com/WgoX8qN.gif',
            'https://i.imgur.com/H35eM5U.gif',
            'https://i.imgur.com/mIlyWTK.gif',
            'https://i.imgur.com/PQD4KC0.gif',
            'https://i.imgur.com/IHssiwQ.gif',
            'https://i.imgur.com/gfYDqSC.gif',
            'https://i.imgur.com/WO40Pug.gif',
            'https://i.imgur.com/vGs6WcP.gif',
            'https://i.imgur.com/wcgsNld.gif',
            'https://i.imgur.com/M5y8ohd.gif',
            'https://i.imgur.com/mE0vT16.gif',
            'https://i.imgur.com/QXpSVJP.gif',
            'https://i.imgur.com/z6m8GLJ.gif',
            'https://i.imgur.com/9Kn20Rd.gif',
            'https://i.imgur.com/n9oE3Bx.gif',
            'https://i.imgur.com/VGeq5HB.gif',
            'https://i.imgur.com/T1cNR0w.gif',
            'https://i.imgur.com/b8w7HpE.gif',
        
        ]

        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
        let ramdonspank = spank[Math.floor(Math.random()*spank.length)]
    
        if (!img || img.id === message.author.id) {
    
            return message.reply({embeds: [
            
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | ¿Te quieres autonalguear? <:procesando:932177969017925632>`)
          
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        } else if (img.user.bot){
          
            return message.reply({ allowedMentions: { repliedUser: false }, embeds: [
          
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | Rica nalgada pero <:nogarsias:932172183453712415>`)
          
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
          
        } else {

            while (!ramdonspank || ramdonspank === null || ramdonspank === '' || ramdonspank === undefined) {
                
                ramdonspank = spank[Math.floor(Math.random()*spank.length)]
                
            }
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Love 💞`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${message.author.username}** le da una rica nalgada a **${img.user.username}** <a:Nalgada:880315282101526598>.`)
            .setImage(ramdonspank ? ramdonspank : null)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })

            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
      
        }

    }

}