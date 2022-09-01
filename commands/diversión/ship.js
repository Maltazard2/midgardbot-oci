module.exports =  {
    
    name: 'ship',
    aliases: ['love','amor'],
    description: '💕 Mide tu nivel de amor con un usuario mencionado.',
    category: 'Diversión 🤣',
    use: '<prefix>ship [@user/id]',
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

        const random = Math.floor(Math.random() * 101);
        let heard = '';
        let image = '';
    
        if(random < 20){
          
            heard=':face_exhaling:';
            image='https://media1.tenor.com/images/786aed6fa64f20409b1cb1ed4177cd20/tenor.gif?itemid=15906189';
    
        } else if(random < 50){
          
            heard=':broken_heart:';
            image='https://media.tenor.com/images/20294fd142a28d99f778db3647d8a576/tenor.gif';
    
        } else if(random < 80){
          
            heard=':sparkling_heart:';
            image='https://i.pinimg.com/originals/34/c9/e3/34c9e30b1a77bcd1aaedbebbdaf107e3.gif';
    
        } else if(random < 101){
          
            heard=':heart:';
            image='https://i.gifer.com/9mZB.gif';
    
        }

        if (!users || users.id === message.author.id) {
          
            const rand = message.guild.members.cache.random();

            let resp = ['El porcentaje de `'+message.author.username+'` & `'+rand.user.username+'` es: ','Oh vaya, calculo que el amor de `'+message.author.username+'` & `'+rand.user.username+'` es un: ','`'+message.author.username+'` & `'+rand.user.username+'` tienen un: ']
    
            let msg = resp[Math.floor(Math.random() * resp.length)] 

            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Love`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setTitle(`${msg}`)
            .setDescription(`${heard} ${random} % ${heard}`)
            .setImage(`${image}`)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })
          
            message.reply({ allowedMentions: { repliedUser: false}, embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

        } else if(users.bot){

            return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
          
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | No puedo calcular eso con un bot!`)
            
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        } else {

            let resp = ['El porcentaje de `'+message.author.username+'` & `'+users.username+'` es: ','Oh vaya, calculo que el amor de `'+message.author.username+'` & `'+users.username+'` es un: ','`'+message.author.username+'` & `'+users.username+'` tienen un: ']
    
            let msg = resp[Math.floor(Math.random() * resp.length)] 
          
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Love`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setTitle(`${msg}`)
            .setDescription(`${heard} ${random} % ${heard}`)
            .setImage(`${image}`)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })
          
            message.reply({ allowedMentions: { repliedUser: false}, embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

        }

    }

}