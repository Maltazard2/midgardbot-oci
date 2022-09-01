module.exports =  {
    
    name: 'berenjena',
    aliases: ['pito','banana'],
    description: '😈 Descubre cuánto te mide.',
    category: 'Diversión 🤣',
    use: '<prefix>berenjena [@user/id]',
    owner: false,
    vip: false,
    slash: false,
  
    async execute(client, message, args, Discord) {

        let users = message.mentions.users.first()

        if(!users){

            try {
          
                users = await client.users.fetch(args[0])

            } catch (error) {

                users = message.author
          
            }

        }

        if(users.bot) return message.reply({ embeds: [
        
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | **¿En serio quieres ver cuánto me mide?**...Los bots somos poderosos por algo! <a:ositovino:932917500218339379>`)
      
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        const random = Math.floor(Math.random() * 21);
      
        let heard = '';
        let image = '';

        if(random === 20){
          
            heard='😎';
            image='https://i.imgur.com/9T3I5Xj.gif';
    
        } else if(random < 20 && random > 15){
          
            heard='😲';
            image='https://i.imgur.com/sRDEaKz.gif';
    
        } else if(random < 15 && random > 10){
          
            heard='🤨';
            image='https://i.imgur.com/pURCHiL.gif';
    
        } else if(random < 10 && random > 5){
          
            heard='😬';
            image='https://i.imgur.com/5gsRdLH.gif';
    
        } else if(random < 5 && random > 0){
          
            heard='🤡';
            image='https://i.imgur.com/1jk66IM.gif';
    
        } else if(random === 0){
          
            heard='🚩';
            image='https://i.imgur.com/XUSvnYx.gif';
    
        }

        if(!users || users.id === message.author.id){

            if(message.author.id==='753435606410985573')
            {

                //var rm = ['15','16','17','18','19','20']
                const r = Math.floor(Math.random() * (21 - 15)) + 15;
          
                const embed = new Discord.MessageEmbed()
                .setAuthor({ name: `Midgard's Love`, iconURL: client.user.avatarURL({ dynamic: true }) })
                .setTitle(`¿Cuánto te mide? 🍆`)
                .setDescription(`😎 ¡La berenjena de **${message.author.username}** mide **${r}** centímetros! 😎`)
                .setImage(`https://i.imgur.com/9T3I5Xj.gif`)
                .setColor('RANDOM')
                .setTimestamp(new Date())
                .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })
          
                message.reply({ allowedMentions: { repliedUser: false}, embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

            } else {

                const embed = new Discord.MessageEmbed()
                .setAuthor({ name: `Midgard's Love`, iconURL: client.user.avatarURL({ dynamic: true }) })
                .setTitle(`¿Cuánto te mide? 🍆`)
                .setDescription(`${heard} ¡La berenjena de **${message.author.username}** mide **${random}** centímetros! ${heard}`)
                .setImage(`${image}`)
                .setColor('RANDOM')
                .setTimestamp(new Date())
                .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })
          
                message.reply({ allowedMentions: { repliedUser: false}, embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
        
            }

        } else {

            if(users.id==='753435606410985573')
            {
                
                //var rm = ['15','16','17','18','19','20']
                const r = Math.floor(Math.random() * (21 - 15)) + 15;
          
                const embed = new Discord.MessageEmbed()
                .setAuthor({ name: `Midgard's Love`, iconURL: client.user.avatarURL({ dynamic: true }) })
                .setTitle(`¿Cuánto te mide? 🍆`)
                .setDescription(`😎 ¡La berenjena de **${users.username}** mide **${r}** centímetros! 😎`)
                .setImage(`https://i.imgur.com/9T3I5Xj.gif`)
                .setColor('RANDOM')
                .setTimestamp(new Date())
                .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })
          
                message.reply({ allowedMentions: { repliedUser: false}, embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
        
            } else {

                const embed = new Discord.MessageEmbed()
                .setAuthor({ name: `Midgard's Love`, iconURL: client.user.avatarURL({ dynamic: true }) })
                .setTitle(`¿Cuánto te mide? 🍆`)
                .setDescription(`${heard} ¡La berenjena de **${users.username}** mide **${random}** centímetros! ${heard}`)
                .setImage(`${image}`)
                .setColor('RANDOM')
                .setTimestamp(new Date())
                .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })
          
                message.reply({ allowedMentions: { repliedUser: false}, embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
          
            }
      
        }

    }

}