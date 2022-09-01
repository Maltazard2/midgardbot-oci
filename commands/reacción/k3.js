module.exports =  {
    
    name: 'k3',
    aliases: ['ktres','kiss-3','kiss3','kisstres'],
    description: '😘 Un beso de a 3.',
  
    async execute(client, message, args, Discord) { 

        var k3 = [
            
            'https://i.imgur.com/TuYLaF9.gif',
            'https://i.imgur.com/YbOda32.gif',
            'https://i.imgur.com/hptDyaj.gif',
            'https://i.imgur.com/sJRlW7W.gif',
            'https://i.imgur.com/u4NbxEP.gif',
            'https://i.imgur.com/gRfJZwC.gif',
            'https://i.imgur.com/BiDykt1.gif',
            'https://i.imgur.com/7tqBrCb.gif',
            'https://i.imgur.com/Hj1GwFP.gif',
            'https://i.imgur.com/uGcOCnX.gif',
            'https://i.imgur.com/6xfUl4l.gif',
            'https://i.imgur.com/0umXKlB.gif',
            'https://i.imgur.com/cPdj6Nw.gif',
            'https://i.imgur.com/jc3H5mr.gif',
            'https://i.imgur.com/jgOc5Wi.gif',
            'https://i.imgur.com/gWd4JSO.gif',
            'https://i.imgur.com/89AYd9S.gif',
            'https://i.imgur.com/yB9bBPl.gif',
           
        ]

        let mencionados = message.mentions.users.first(2)
        let datos = []
        let img1, img2

        for(let ls of mencionados){

            try {
            
                datos.push(ls)

                if(datos.length === 0){

                    img1 = message.guild.members.resolve(client.users.cache.get(args[0]));
                    img2 = message.guild.members.resolve(client.users.cache.get(args[1]));
        
                } else if(datos.length === 1){

                    img1 = message.guild.members.resolve(datos[0])
                    img2 = message.guild.members.resolve(client.users.cache.get(args[0]) || client.users.cache.get(args[1]));
        
                } else if(datos.length === 2){

                    img1 = message.guild.members.resolve(datos[0]);
                    img2 = message.guild.members.resolve(datos[1]);
                    
                } else{

                    img1 = message.guild.members.resolve(client.users.cache.get(args[0]));
                    img2 = message.guild.members.resolve(client.users.cache.get(args[1]));
        
                }
                
            } catch (error) {
                
                console.log('Error al obtener mencionados en comando K3 - ' + error)
    
                return message.reply({embeds: [
              
                    new Discord.MessageEmbed()
                    .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                    .setColor('RED')
                    .setDescription(`<a:Verify2:931463492677017650> | Ocurrió un error inesperado, inténtelo de nuevo!`)
                
                ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
    
            }

        }

        if(img1 === undefined && img2 === undefined){
            
            img1 = message.guild.members.resolve(client.users.cache.get(args[0]));
            img2 = message.guild.members.resolve(client.users.cache.get(args[1]));
        
        }

        if (!img1 || !img2 || img1.id === message.author.id || img2.id === message.author.id) return message.reply({embeds: [
          
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | Necesitas mencionar a 2 personas más... <:burbujita:930399322183458867>`)
        
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        if (img1.user.bot || img2.user.bot) return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
          
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | Necesitas mencionar a 2 personas más... <:burbujita:930399322183458867>`)
        
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        let ramdonk3 = k3[Math.floor(Math.random()*k3.length)]

        while (!ramdonk3 || ramdonk3 === null || ramdonk3 === '' || ramdonk3 === undefined) {
            
            ramdonk3 = k3[Math.floor(Math.random()*k3.length)]

        }

        const embed = new Discord.MessageEmbed()
        .setAuthor({ name: `Midgard's Love 💞`, iconURL: client.user.avatarURL({ dynamic: true }) })
        .setDescription(`**${message.author.username}** se está besando con **${img1.user.username}** y **${img2.user.username}** <:mmm:880308330894090241>`)
        .setImage(ramdonk3)
        .setColor('RANDOM')
        .setTimestamp(new Date())
        .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })
  
        message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

    }

}