const { Collection } = require('mongoose');
const userSchema = require('../../models/userSchema');

module.exports =  {
    
    name: 'rob',
    aliases: ['robar'],
    description: '🏴 Roba algunas coins de cualquier miembro del servidor.',
    category: 'Economía 💰',
    use: '<prefix>rob <@user/id>',
    owner: false,
    vip: false,
    slash: false,
  
    async execute(client, message, args, Discord) { 

        let usuario = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));

        if(!usuario) return message.reply({embeds: [
       
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
            .setThumbnail('https://i.imgur.com/7DX9FLZ.gif')
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | Necesitas mencionar correctamente a alguien!`)
      
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        if(usuario.id === message.author.id) return message.reply({embeds: [
        
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
            .setThumbnail('https://i.imgur.com/7DX9FLZ.gif')
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | No te puedes robar a ti mismo!`)
      
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        if(usuario.user.bot) return message.reply({embeds: [
        
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
            .setThumbnail('https://i.imgur.com/7DX9FLZ.gif')
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | No tienes el poder suficiente para robarle a los bots!`)
      
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        let usuario1 = await userSchema.findOne({ idusuario: message.author.id})
        let usuario2 = await userSchema.findOne({ idusuario: usuario.id})

        while(!usuario1){

            let user = await userSchema.create({

                idusuario: message.author.id,
                username: message.author.username

            })

            user.save();
            console.log('Usuario Registrado ===> Id: '+ message.author.id + ' Username: ' + message.author.username)

            usuario1 = await userSchema.findOne({ idusuario: message.author.id})

        } 
        
        while(!usuario2){

            let user = await userSchema.create({

                idusuario: usuario.id,
                username: usuario.username

            })

            user.save();
            console.log('Usuario Registrado ===> Id: '+ usuario.id + ' Username: ' + usuario.username)

            usuario2 = await userSchema.findOne({ idusuario: usuario.id})
            
        }

        if(usuario1.rob > Date.now()) return message.reply({embeds: [
          
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
            .setThumbnail('https://i.imgur.com/7DX9FLZ.gif')
            .setColor('RED')
            .setDescription('<a:tiempogif:931434689481285662> | Puedes volver a robar en : '+((usuario1.rob - Date.now())/1000).toFixed()+' segundos')
        
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        if(usuario2.dinero === 0) return message.reply({embeds: [

            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
            .setThumbnail('https://i.imgur.com/7DX9FLZ.gif')
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | ¿Cómo te atreves a robarle a los pobres?`)
      
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        let ganarob = usuario2.dinero === 0 ? 0 : Math.floor((80 * usuario2.dinero)/100)
        let pierderob = usuario1.dinero === 0 ? Math.floor((10 * 2000) / 100) : Math.floor((10 * usuario1.dinero) / 100)
        let chance = Math.floor(Math.random()*11)

        if(chance < 3){
        
            let update = await userSchema.findOneAndUpdate({idusuario: usuario.id},
                {

                    dinero: usuario2.dinero - ganarob,
                    total: usuario2.dinero + usuario2.banco - ganarob

                })

            update.save()

            let update2 = await userSchema.findOneAndUpdate({idusuario: message.author.id},
                {

                    dinero: usuario1.dinero + ganarob,
                    total: usuario1.dinero + usuario1.banco + ganarob,
                    rob: (Date.now()+(1000*30))

                })

            update2.save()

            const e = new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
            .setColor('GREEN')
            .setThumbnail('https://i.imgur.com/7DX9FLZ.gif')
            .setDescription(`<a:Verify1:931463354357276742> | Le has robado <a:money:930397094924124180> `+ ganarob.toLocaleString('en-US') + ' a ' + usuario.toString())
            .setTimestamp()
        
            message.reply({ allowedMentions: { repliedUser: false}, embeds: [e]}).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        } else {

            let update = await userSchema.findOneAndUpdate({idusuario: message.author.id},
                {

                    dinero: usuario1.dinero - pierderob,
                    total: usuario1.dinero + usuario1.banco - pierderob,
                    rob: (Date.now()+(1000*30))

                })

            update.save()

            const e = new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
            .setColor('RED')
            .setThumbnail('https://i.imgur.com/JxnV5vn.jpg')
            .setDescription(`<a:Verify2:931463492677017650> | Qué malo eres robando, acabas de ser capturado y perdiste <a:money:930397094924124180> `+ pierderob.toLocaleString('en-US'))
            .setTimestamp()
        
            message.reply({ allowedMentions: { repliedUser: false}, embeds: [e]}).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        }

    }

}