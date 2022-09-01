module.exports =  {
    
    name: 'perreo',
    aliases: ['twerk'],
    description: '🍑',
    category: 'Disco',
    use: '<prefix>perreo [@user/id]',
    owner: false,
    vip: false,
  
    async execute(client, message, args, Discord) {

        var perreo = [

            'https://i.imgur.com/9PPlfqV.gif',
            'https://i.imgur.com/K8xx67w.gif',
            'https://i.imgur.com/WCOvVSv.gif',
            'https://i.imgur.com/DhVvKyP.gif',
            'https://i.imgur.com/D5sFfZB.gif',
            'https://i.imgur.com/0u3otbU.gif',
            'https://i.imgur.com/pXUSQ2N.gif',
            'https://i.imgur.com/AYAdWJM.gif',
            'https://i.imgur.com/DUYSNnH.gif',
            'https://i.imgur.com/tBrxqAI.gif',
            'https://i.imgur.com/vGJBxqk.gif',
            'https://i.imgur.com/BO03nWP.gif',
            'https://i.imgur.com/rYgpp0J.gif',
            'https://i.imgur.com/3NdvRsF.gif',
            'https://i.imgur.com/0prEGTY.gif',
            'https://i.imgur.com/ZUMj2WL.gif',
            'https://i.imgur.com/dKMhYNa.gif',
            'https://i.imgur.com/bTPwx5B.gif',
            'https://i.imgur.com/6HPLMbM.gif',
            'https://i.imgur.com/sBeZVvu.gif',
            'https://i.imgur.com/2HinAgk.gif',
            'https://i.imgur.com/MY9MMLR.gif',
            'https://i.imgur.com/CamzFIl.gif',
            'https://i.imgur.com/iNeR6aB.gif',
            'https://i.imgur.com/NHX1RWs.gif',
            'https://i.imgur.com/2qzSXRS.gif',
            'https://i.imgur.com/IYAZksa.gif',
            'https://i.imgur.com/l8mm6oA.gif',
            'https://i.imgur.com/g3RlYFc.gif',
            'https://i.imgur.com/zm2abqh.gif',
            'https://i.imgur.com/sBU735X.gif',
            'https://i.imgur.com/H7h3qEY.gif',
            'https://i.imgur.com/T6daXgu.gif',
            'https://i.imgur.com/eB2xG4B.gif',
            'https://i.imgur.com/y7GjUe4.gif',
            'https://i.imgur.com/PnkN2lW.gif',
            'https://i.imgur.com/MpIBukj.gif',
            'https://i.imgur.com/i4Ar9zM.gif',
            'https://i.imgur.com/cTN3KN8.gif',
            'https://i.imgur.com/DXCsXEC.gif',
            'https://i.imgur.com/PZdpMW8.gif',
            'https://i.imgur.com/aN5h3I3.gif',
            'https://i.imgur.com/8bCUEKT.gif',
            'https://i.imgur.com/EHL2wb9.gif',
            'https://i.imgur.com/u5eDzJa.gif',
            'https://i.imgur.com/YHa9aKy.gif',
            'https://i.imgur.com/78JiX1G.gif',
            'https://i.imgur.com/xzFujqy.gif',
            'https://i.imgur.com/FOz1LY3.gif',
            'https://i.imgur.com/2K1WNU9.gif',
            'https://i.imgur.com/5j8o65D.gif',
            'https://i.imgur.com/fr3tCQN.gif',
            'https://i.imgur.com/E8SaXlS.gif',
            'https://i.imgur.com/8giTAEB.gif',

        ]

        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
        let ramdonperreo = perreo[Math.floor(Math.random()*perreo.length)]

        while (!ramdonperreo || ramdonperreo === null || ramdonperreo === '' || ramdonperreo === undefined) {
            
            ramdonperreo = perreo[Math.floor(Math.random()*perreo.length)]

        }
        
        if (!img || img.id === message.author.id) {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Disco`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${message.author.username}** está perreando hasta el piso.`)
            .setImage(ramdonperreo)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'  })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        } else if (img.user.bot){
          
            return message.reply({embeds: [
          
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | Los bots no vamos a fiestas! <:nogarsias:932172183453712415>`)
          
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
          
        } else {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Disco`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${img.user.username}**, ${message.author.username} te está perreando duro contra el muro. <a:perreom:930719549131735040>`)
            .setImage(ramdonperreo)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'  })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
      
        }

    }

}