module.exports =  {
    
    name: 'kcheek',
    aliases: ['kc','kiss-cheek'],
    description: '😘 Un beso en la mejilla.',
    category: 'Reacción 😎',
    use: '<prefix>kc <@user/id>',
    owner: false,
    vip: false,
    slash: false,
  
    async execute(client, message, args, Discord) { 

        var kc = [
            
            'https://i.imgur.com/y8K1ZA2.gif',
            'https://i.imgur.com/2ukuk1j.gif',
            'https://i.imgur.com/nB9dHgT.gif',
            'https://i.imgur.com/9Low3in.gif',
            'https://i.imgur.com/cgs3Dky.gif',
            'https://i.imgur.com/DFrFJs0.gif',
            'https://i.imgur.com/YTSg1TX.gif',
            'https://i.imgur.com/FIVxoUv.gif',
            'https://i.imgur.com/YmNm82n.gif',
            'https://i.imgur.com/XyVpKi8.gif',
            'https://i.imgur.com/bsyD3cE.gif',
            'https://i.imgur.com/NKdSYzP.gif',
            'https://i.imgur.com/YWSP9J4.gif',
            'https://i.imgur.com/lWpXEZI.gif',
            'https://i.imgur.com/S3ac6LI.gif',
            'https://i.imgur.com/WRZbNx1.gif',
            'https://i.imgur.com/taZoRAw.gif',
            'https://i.imgur.com/gvFhzbw.gif',
            'https://i.imgur.com/1ZD9jdF.gif',
            'https://i.imgur.com/wfoyjnp.gif',
            'https://i.imgur.com/I1MFszx.gif',
            'https://i.imgur.com/19vIlMU.gif',
            'https://i.imgur.com/0KfA77Q.gif',
            'https://i.imgur.com/dhZtnRh.gif',
            'https://i.imgur.com/FvMgxZW.gif',
            'https://i.imgur.com/inBjxsM.gif',
            'https://i.imgur.com/EQyNaeu.gif',
            'https://i.imgur.com/0Z9Jryz.gif',
            'https://i.imgur.com/BrwjqZC.gif',
            'https://i.imgur.com/IUris2y.gif',
            'https://i.imgur.com/rUy4mrN.gif',
            'https://i.imgur.com/TT5kbWV.gif',
            'https://i.imgur.com/biF6Z16.gif',
            'https://i.imgur.com/LhCqYbu.gif',
            'https://i.imgur.com/wHlmsn2.gif',
            'https://i.imgur.com/8YHgOD7.gif',
            'https://i.imgur.com/ldWKego.gif',
            'https://i.imgur.com/C4zOujI.gif',
            'https://i.imgur.com/zV41Cif.gif',
            'https://i.imgur.com/aqQ4pRx.gif',
            
        ]

        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
        let ramdonkc = kc[Math.floor(Math.random()*kc.length)]

        while (!ramdonkc || ramdonkc === null || ramdonkc === '' || ramdonkc === undefined) {
            
            ramdonkc = kc[Math.floor(Math.random()*kc.length)]

        }
        
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

        const embed = new Discord.MessageEmbed()
        .setAuthor({ name: `Midgard's Love 💞`, iconURL: client.user.avatarURL({ dynamic: true }) })
        .setDescription(`**${message.author.username}** le da un beso en la mejilla a **${img.user.username}** <:burbujita:930399322183458867>`)
        .setImage(ramdonkc)
        .setColor('RANDOM')
        .setTimestamp(new Date())
        .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })
  
        message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

    }

}