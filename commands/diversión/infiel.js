module.exports =  {
    
    name: 'infiel',
    aliases: ['infidelidad'],
    description: '💔 Descubre tu % de infidelidad.',
  
    async execute(client, message, args, Discord) {

        let users = message.mentions.users.first()

        if(!users){

            try {
          
                users = await client.users.fetch(args[0])

            } catch (error) {

                users = message.author
          
            }

        }

        if(users.bot) return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
        
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | **¿En serio crees que es infiel como tú?**...Los bots son los más leales!`)
      
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        const random = Math.floor(Math.random() * 101);

        let heard = '';
        let image = '';

        if(random === 0){
          
            heard='😎';
            image='https://i.imgur.com/mc0XTQG.gif';
    
        } else if(random < 20 && random >0){
          
            heard='😲';
            image='https://i.imgur.com/GTCNuLV.gif';
    
        } else if(random < 50){
          
            heard='🤨';
            image='https://i.imgur.com/OmKvl3D.gif';
    
        } else if(random < 70){
          
            heard='😬';
            image='https://i.imgur.com/TVCx6pY.gif';
    
        } else if(random < 90){
          
            heard='🤥';
            image='https://i.imgur.com/2u2q5dC.gif';
    
        } else if(random < 100){
          
            heard='🤡';
            image='https://i.imgur.com/dC0vR23.gif';
    
        } else if(random === 100){
          
            heard='🚩';
            image='https://i.imgur.com/SWhqDqi.gif';
    
        }

        if(!users || users.id === message.author.id){

            if(message.author.id==='753435606410985573')
            {

                const r = Math.floor(Math.random() * 11);
          
                const embed = new Discord.MessageEmbed()
                .setAuthor({ name: `Midgard's Love`, iconURL: client.user.avatarURL({ dynamic: true }) })
                .setTitle(`Nivel de Infidelidad`)
                .setDescription(`${message.author.username} es ${r}% infiel! 😎`)
                .setImage(`https://i.imgur.com/mc0XTQG.gif`)
                .setColor('RANDOM')
                .setTimestamp(new Date())
                .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })
          
                message.reply({ allowedMentions: { repliedUser: false}, embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
        
            } else {

                const embed = new Discord.MessageEmbed()
                .setAuthor({ name: `Midgard's Love`, iconURL: client.user.avatarURL({ dynamic: true }) })
                .setTitle(`Nivel de Infidelidad`)
                .setDescription(`${message.author.username} es ${random}% infiel! ${heard}`)
                .setImage(`${image}`)
                .setColor('RANDOM')
                .setTimestamp(new Date())
                .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })
          
                message.reply({ allowedMentions: { repliedUser: false},  embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
            
            }

        } else {

            if(users.id==='753435606410985573')
            {

                const r = Math.floor(Math.random() * 11);

                const embed = new Discord.MessageEmbed()
                .setAuthor({ name: `Midgard's Love`, iconURL: client.user.avatarURL({ dynamic: true }) })
                .setTitle(`Nivel de Infidelidad`)
                .setDescription(`${users.username} es ${r}% infiel! 😎`)
                .setImage(`https://i.imgur.com/mc0XTQG.gif`)
                .setColor('RANDOM')
                .setTimestamp(new Date())
                .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })
          
                message.reply({ allowedMentions: { repliedUser: false}, embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: ' + e))
        
            } else {

                const embed = new Discord.MessageEmbed()
                .setAuthor({ name: `Midgard's Love`, iconURL: client.user.avatarURL({ dynamic: true }) })
                .setTitle(`Nivel de Infidelidad`)
                .setDescription(`${users.username} es ${random}% infiel! ${heard}`)
                .setImage(`${image}`)
                .setColor('RANDOM')
                .setTimestamp(new Date())
                .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })
          
                message.reply({ allowedMentions: { repliedUser: false}, embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: ' + e))
          
            }

        }

    }

}