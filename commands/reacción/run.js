module.exports =  {
    
    name: 'run',
    aliases: ['correr','huir'],
    description: '🏃‍♂️ Huye de ahí soldado.',
    category: 'Reacción 😎',
    use: '<prefix>run [@user/id]',
    owner: false,
    vip: false,
    slash: false,
  
    async execute(client, message, args, Discord) { 
 
        var run = [

            'https://i.imgur.com/ri8U8Oq.gif',
            'https://i.imgur.com/axuyUbM.gif',
            'https://i.imgur.com/oTg29hJ.gif',
            'https://i.imgur.com/oAAMwZg.gif',
            'https://i.imgur.com/6aCI2bM.gif',
            'https://i.imgur.com/gB8tlSK.gif',
            'https://i.imgur.com/9PE3pcC.gif',
            'https://i.imgur.com/3PEJHEc.gif',
            'https://i.imgur.com/oLriqQz.gif',
            'https://i.imgur.com/G2Qwfwd.gif',
            'https://i.imgur.com/mV8hPZL.gif',
            'https://i.imgur.com/Ev94FZK.gif',
            'https://i.imgur.com/CNqXB4K.gif',
            'https://i.imgur.com/qMmtgBu.gif',
            'https://i.imgur.com/TmwxiH8.gif',
            'https://i.imgur.com/tkuUC73.gif',
            'https://i.imgur.com/K6SaFzc.gif',
            'https://i.imgur.com/E0K20l4.gif',
            'https://i.imgur.com/GXMX4oo.gif',
            'https://i.imgur.com/3RlM10R.gif',
        
        ]

        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
        let ramdonrun = run[Math.floor(Math.random()*run.length)]
        let desc

        while (!ramdonrun || ramdonrun === null || ramdonrun === '' || ramdonrun === undefined) {
                
            ramdonrun = run[Math.floor(Math.random()*run.length)]
            
        }

        if (!img || img.id === message.author.id) {
    
            desc = `**${message.author.username}** está huyendo de aquí!!! <a:correlewey:924448699583725608>`

        } else if (img.user.bot){
          
            return message.reply({ allowedMentions: { repliedUser: false }, embeds: [
          
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | ¿Huyendo de un bot? <:nogarsias:932172183453712415>`)
          
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
          
        } else {

            desc = `**${message.author.username}** está huyendo de **${img.user.username}**. <a:correlewey:924448699583725608>`

        }
            
        const embed = new Discord.MessageEmbed()
        .setAuthor({ name: `Midgard's Love 💞`, iconURL: client.user.avatarURL({ dynamic: true }) })
        .setDescription(desc)
        .setImage(ramdonrun)
        .setColor('RANDOM')
        .setTimestamp(new Date())
        .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })

        message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
      
        

    }

}