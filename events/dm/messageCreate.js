module.exports = async (client, Discord, message) => {
    
    if(message.channel.type != "DM" ) return

    console.log('Mensaje enviado 1 al dm por ' + message.author + ' - Mensaje: ' + (message.content ? message.content : 'Ningún mensaje registrado'))
        
    let sv = client.guilds.cache.get('777620055344545842')
    let channel = sv.channels.cache.get('961915794705485844')
  
    if(message.content.length >= 1000) return channel.send('Mensaje demasiado largo, enviado al dm por: '+message.author).catch((e) => console.log('Error al enviar mensaje del dm al canal: '+e))
    
    const embed = new Discord.MessageEmbed()
    .setThumbnail(`https://i.imgur.com/fnkXBPo.gif`)
    .setAuthor({ name: 'MaltaBot', iconURL: client.user.avatarURL({ dynamic: true }) })
    .setTitle('📢 | Mensaje directo')
    .addField('Autor: ', `<a:flech:931432469935312937> ${message.author}`)
    .addField('Mensaje: ', '> ' + message.content)
    .setColor('RANDOM')
    .setTimestamp(new Date())
    .setFooter({ text: `Id: ${message.author.id}`, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
  
    console.log('Mensaje enviado 2 al dm por ' + message.author + ' - Mensaje: ' + (message.content ? message.content : 'Ningún mensaje registrado'))
    return channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje del dm al canal: '+e))
    
}