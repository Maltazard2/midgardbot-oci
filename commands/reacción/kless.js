module.exports =  {
    
    name: 'kless',
    aliases: ['kl','kiss-less'],
    description: '😘 Un beso entre mujeres.',
  
    async execute(client, message, args, Discord) { 

        var kl = [     
            
            'https://i.imgur.com/65eHdL3.gif',
            'https://i.imgur.com/8bdoXnE.gif',
            'https://i.imgur.com/a28Nhh9.gif',
            'https://i.imgur.com/7oPqG6A.gif',
            'https://i.imgur.com/YrCF750.gif',
            'https://i.imgur.com/uGSkGmt.gif',
            'https://i.imgur.com/o7jTJbL.gif',
            'https://i.imgur.com/iCnnLCL.gif',
            'https://i.imgur.com/PgAH0M1.gif',
            'https://i.imgur.com/ZPpEqM5.gif',
            'https://i.imgur.com/g3BC5M3.gif',
            'https://i.imgur.com/MIfctoS.gif',
            'https://i.imgur.com/deNZIEB.gif',
            'https://i.imgur.com/19fpk3I.gif',
            'https://i.imgur.com/xHb5FIG.gif',
            'https://i.imgur.com/rF3Agbt.gif',
            'https://i.imgur.com/JUvFwnV.gif',
            'https://i.imgur.com/xupADlh.gif',
            'https://i.imgur.com/zoLsGAf.gif',
            'https://i.imgur.com/wVpYCgo.gif',
            'https://i.imgur.com/2MlOxZl.gif',
            'https://i.imgur.com/qVObhUi.gif',
            'https://i.imgur.com/q7cSEGh.gif',
            'https://i.imgur.com/MEX3Hgd.gif',
            'https://i.imgur.com/TZSJXta.gif',
            'https://i.imgur.com/poB3Sxw.gif',
            'https://i.imgur.com/xecr5sE.gif',
            'https://i.imgur.com/cKd3tH4.gif',
            'https://i.imgur.com/GEjg8C2.gif',
            'https://i.imgur.com/XoXq41U.gif',
            'https://i.imgur.com/0J3GGge.gif',
            'https://i.imgur.com/hJD2mYA.gif',
            'https://i.imgur.com/eJxyLd7.gif',
            'https://i.imgur.com/AW2bSRT.gif',
            'https://i.imgur.com/mJuyanm.gif',
            'https://i.imgur.com/l2tZSo2.gif',
            'https://i.imgur.com/h6TjDfP.gif',
            'https://i.imgur.com/z8dBMhg.gif',
            'https://i.imgur.com/2vIucU5.gif',
            'https://i.imgur.com/YqihFX0.gif',
            'https://i.imgur.com/9kPo9OT.gif',
            'https://i.imgur.com/D025kfB.gif',
            'https://i.imgur.com/tHufvAC.gif',
            'https://i.imgur.com/2EtAozR.gif',
            'https://i.imgur.com/e9vPOQu.gif',
            'https://i.imgur.com/Nz2Vq3W.gif',
            'https://i.imgur.com/z8wolxd.gif',
            'https://i.imgur.com/grekZ4S.gif',
            'https://i.imgur.com/Er5gU6X.gif',
            'https://i.imgur.com/Hm0Gjw6.gif',
            'https://i.imgur.com/GXmzNPN.gif',
            'https://i.imgur.com/9cPwvwt.gif',
            'https://i.imgur.com/71stgvY.gif',
            'https://i.imgur.com/6vC6EMO.gif',
            'https://i.imgur.com/5pQtKUQ.gif',
            'https://i.imgur.com/SfkeiTS.gif',
            'https://i.imgur.com/hoxv9xP.gif',
            'https://i.imgur.com/QsK9MUF.gif',
            'https://i.imgur.com/QF2OUrp.gif',
            'https://i.imgur.com/0WjBAfw.gif',
            'https://i.imgur.com/RQ5k9AG.gif',
            'https://i.imgur.com/8RuRWyW.gif',
            'https://i.imgur.com/4h9vPX5.gif',
            'https://i.imgur.com/0teSZuz.gif',
            'https://i.imgur.com/A56rpCo.gif',
            'https://i.imgur.com/jRPOrt2.gif',
            'https://i.imgur.com/YdOvUGT.gif',
            'https://i.imgur.com/qCyIbwI.gif',
            'https://i.imgur.com/YXFGTvK.gif',
            'https://i.imgur.com/g0WTRnj.gif',
          
        ]

        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
        let ramdonkl = kl[Math.floor(Math.random()*kl.length)]

        if (!img || img.id === message.author.id) return message.reply({embeds: [
          
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | ¿Te besarías a ti mismo? <:burbujita:930399322183458867>`)
        
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        if (img.user.bot) return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
          
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | Gracias por ese beso! <:mmm:932177122968076338>`)
        
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        while (!ramdonkl || ramdonkl === null || ramdonkl === '' || ramdonkl === undefined) {
            
            ramdonkl = kl[Math.floor(Math.random()*kl.length)]

        }
        
        const embed = new Discord.MessageEmbed()
        .setAuthor({ name: `Midgard's Love 💞`, iconURL: client.user.avatarURL({ dynamic: true }) })
        .setDescription(`**${message.author.username}** y **${img.user.username}** se están dando un rico chape <a:sabroso:932177227792146433> Disfrútenlo chicas!!! <:GatoLove:925929538863628318> `)
        .setImage(ramdonkl)
        .setColor('RANDOM')
        .setTimestamp(new Date())
        .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })
  
        message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

    }

}