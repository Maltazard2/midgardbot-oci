module.exports =  {
    
    name: 'welcome',
    aliases: ['wlc','bienvenido','bienvenida'],
    description: '🤞 Muestra un embed de bienvenida.',

    async execute(client, message, args, Discord) {

        var welcome = [

            'https://i.imgur.com/lrCrOHL.gif',
            'https://i.imgur.com/f1G5dcG.gif',
            'https://i.imgur.com/AQNJVuV.gif',
            'https://i.imgur.com/qVqnEG0.gif',
            'https://i.imgur.com/3hWr6pW.gif',
            'https://i.imgur.com/SbrE2kK.gif',
            'https://i.imgur.com/HSzzqNX.gif',
            'https://i.imgur.com/aKwbNL2.gif',
            'https://i.imgur.com/tqGvmk9.gif',
            'https://i.imgur.com/vgorIfC.gif',
            'https://i.imgur.com/3oYaE3t.gif',
            'https://i.imgur.com/l6cymKg.gif',
            'https://i.imgur.com/L4hxVZF.gif',
            'https://i.imgur.com/J6cBi0L.gif',
            'https://i.imgur.com/IMNJnwF.gif',
            'https://i.imgur.com/FIzxGki.gif',
            'https://i.imgur.com/eMvv7hf.gif',
            'https://i.imgur.com/9ZJHqCC.gif',
            'https://i.imgur.com/mazyilZ.gif',
            'https://i.imgur.com/5cmDDkl.gif',
            'https://i.imgur.com/zYnoqMZ.gif',
            'https://i.imgur.com/BXuPZ0W.gif',
            'https://i.imgur.com/V8qDELi.gif',
            'https://i.imgur.com/7WukHVY.gif',
            'https://i.imgur.com/mwzvMI7.gif',
            'https://i.imgur.com/R4qzZi9.gif',
            'https://i.imgur.com/NNilk07.gif',
            'https://i.imgur.com/VHyUBmB.gif',
            'https://i.imgur.com/7YIT9QR.gif',
            'https://i.imgur.com/ZP5hbxs.gif',
            'https://i.imgur.com/RARNlfn.gif',
            'https://i.imgur.com/3peLKnN.gif',
            'https://i.imgur.com/JGOz5Ro.gif',
            'https://i.imgur.com/ETDiKBV.gif',
            'https://i.imgur.com/hW12nh3.gif',
            'https://i.imgur.com/v29RCSG.gif',
            'https://i.imgur.com/dczGaWU.gif',
            'https://i.imgur.com/evOBF9j.gif',
            'https://i.imgur.com/QXyWlNy.gif',
            'https://i.imgur.com/ZBYxm4d.gif',
        
        ]

        let img = message.mentions.users.first()

        if(!img){

            try {
          
            img = await client.users.fetch(args[0])

            } catch (error) {

            img = message.author
          
            }

        }

        if(img.bot) return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
            
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | No puedes darle la bienvenida a un bot!`)
        
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
      
        if(!img || img.id===message.author.id) return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
            
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | Debes mencionar o colocar id!`)
        
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        let ramdonwelcome = welcome[Math.floor(Math.random()*welcome.length)]
    
        while (!ramdonwelcome || ramdonwelcome === null || ramdonwelcome === '' || ramdonwelcome === undefined) {
            
            ramdonwelcome = welcome[Math.floor(Math.random()*welcome.length)]
            
        }

        const embed = new Discord.MessageEmbed()
        .setThumbnail(img.displayAvatarURL() ? img.displayAvatarURL({ dynamic: true }).replace('webp','png') : client.user.avatarURL({ dynamic: true }) )
        .setTitle(`Bienvenid@ <:abby:931432327354155038> **${img.username}** <a:pepedance:880928616416968745>`)
        .setDescription(`<a:exclama2:880930071731392512> Gracias por unirte!!! <a:sc_ositobailin:880930467774365707> Espero que lo disfrutes. <a:abdul_dance:880930576683630662>`)
        .setImage(ramdonwelcome)
        .setColor('RANDOM')
        .setTimestamp(new Date())
        .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true, size: 2048 }) : 'https://media.discordapp.net/attachments/880312288593195028/904603928375726120/Midgard_GIF_AVATAR.gif' })
    
        message.reply({ allowedMentions: { repliedUser: false}, embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

    }

}