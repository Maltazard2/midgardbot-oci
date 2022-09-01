const Canvas = require('canvas')

module.exports =  {
    
    name: 'banner',
    aliases: ['cartel'],
    description: '🔎 Muestra el banner de un usuario en el servidor.',

    async execute(client, message, args, Discord) {

        let usuario = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0])) || message.author;

        let canvas = Canvas.createCanvas(966, 70); //Creamos un nuevo canvas.

        let ctx = canvas.getContext("2d");

        let user = await client.users.fetch(usuario.id, {force: true})

        if (!user.hexAccentColor && !user.bannerURL() || user.bot) {
    
            const e = new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | El usuario (${user.username}) no tiene un banner o un color personalizado.!`)
        
            return message.reply({ embeds: [e]}).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        }

        ctx.fillStyle = (await user).hexAccentColor;

        ctx.fillRect(0, 0, canvas.width, canvas.height);
  
        let img = await canvas.toBuffer();

        if(!user.bannerURL()) return message.reply({ allowedMentions: { repliedUser: false}, 
            
            files: [{
              
                attachment: img,
                name: "hex.png"

            }],
            
            embeds: [
              
                new Discord.MessageEmbed() 
                .setImage("attachment://hex.png")
                .setTitle('El usuario no tiene un banner pero aquí esta su color personalizado!')
                .setColor(user.hexAccentColor ? user.hexAccentColor : 'RANDOM')
                .setDescription(`${user.hexAccentColor.toUpperCase()}`) 
                .setTimestamp(new Date())
                .setAuthor({ name: 'Color de '+user.tag, iconURL: client.user.avatarURL({ dynamic: true }) })
                .setThumbnail(user.displayAvatarURL() ? user.displayAvatarURL({ dynamic: true}) : client.user.avatarURL({ dynamic: true }) )
                .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })

            ],
          
        }).catch((e) => console.log('Error al enviar mensaje: '+e))

        message.reply({ allowedMentions: { repliedUser: false}, 
            
            embeds: [
              
                new Discord.MessageEmbed() 
                .setDescription('[Click aquí]('+`${user.bannerURL({ size: 2048, format: 'gif' })}`+')')
                .setTitle('Imagen completa')
                .setImage(user.bannerURL({ size: 2048, format: 'gif' }))
                .setColor(`COLOR_CUSTOM`)
                .setTimestamp(new Date())
                .setAuthor({ name: 'Banner de '+user.tag, iconURL: client.user.avatarURL({ dynamic: true }) })
                .setThumbnail(user.displayAvatarURL() ? user.displayAvatarURL({ dynamic: true}) : client.user.avatarURL({ dynamic: true }) )
                .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })

            ],
        
        }).catch((e) => console.log('Error al enviar mensaje: '+e))

    }

}