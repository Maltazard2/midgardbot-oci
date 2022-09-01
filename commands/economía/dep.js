const { Collection } = require('mongoose');
const userSchema = require('../../models/userSchema');

module.exports =  {
    
    name: 'depositar',
    aliases: ['dep','guardar'],
    description: '🏦 Deposita tu dinero en el banco.',
    category: 'Economía 💰',
    use: '<prefix>dep <monto/all>',
    owner: false,
    vip: false,
    slash: false,
  
    async execute(client, message, args, Discord) { 

        let buscarUsuario = await userSchema.findOne({idusuario: message.author.id})

        while(!buscarUsuario){

            let user = await userSchema.create({

                idusuario: message.author.id,
                username: message.author.username

            })

            user.save();
            console.log('Usuario Registrado ===> Id: '+ message.author.id + ' Username: ' + message.author.username)

            buscarUsuario = await userSchema.findOne({idusuario: message.author.id})

        }

        if(!args[0]) return message.reply({embeds: [

            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
            .setThumbnail('https://i.imgur.com/orPDDAs.gif')
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | Ingresa un monto a depositar!`)

        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
        
        else if(buscarUsuario.dinero === 0) return message.reply({embeds: [

            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
            .setThumbnail('https://i.imgur.com/orPDDAs.gif')
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | No tienes dinero para depositar!`)

        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        else if(buscarUsuario.dinero < parseInt(args[0])) return message.reply({embeds: [

            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
            .setThumbnail('https://i.imgur.com/orPDDAs.gif')
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | No tienes ese monto para depositar. Actualmente tienes <a:money:930397094924124180> `+ buscarUsuario.dinero.toLocaleString('en-US'))

        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        if(args[0].toLowerCase() === 'all'){

            try {

                let update = await userSchema.findOneAndUpdate({ idusuario: message.author.id },
                    {
    
                        dinero: 0,
                        banco: buscarUsuario.banco + buscarUsuario.dinero
    
                    });

                update.save();

                const e = new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
                .setThumbnail('https://i.imgur.com/orPDDAs.gif')
                .setColor('GREEN')
                .setDescription(`<a:Verify1:931463354357276742> | Has depositado <a:money:930397094924124180> `+ buscarUsuario.dinero.toLocaleString('en-US')+ ' al banco')
                .setTimestamp()
        
                message.reply({ allowedMentions: { repliedUser: false}, embeds: [e]}).catch((e) => console.log('Error al enviar mensaje: '+e))
    
            } catch (error) {

                console.log('Error al depositar todo el dinero: '+error)
                message.reply('Hubo un error interno. Por favor, inténtelo de nuevo.').catch((e) => console.log('Error al enviar mensaje: '+e))
          
            }

            
        } else {

            if(isNaN(parseInt(args[0]))) return message.reply({embeds: [

                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
                .setThumbnail('https://i.imgur.com/orPDDAs.gif')
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | Ingresa un número válido a depositar!`)

            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

            let numero = parseInt(args[0])
  
            try {

                let update = await userSchema.findOneAndUpdate({ idusuario: message.author.id },
                    {
    
                        dinero: buscarUsuario.dinero - numero,
                        banco: buscarUsuario.banco + numero
    
                    })

                update.save()
                
                const e = new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
                .setThumbnail('https://i.imgur.com/orPDDAs.gif')
                .setColor('GREEN')
                .setDescription(`<a:Verify1:931463354357276742> | Has depositado <a:money:930397094924124180> `+ numero.toLocaleString('en-US') + ' al banco')
                .setTimestamp()
          
                message.reply({ allowedMentions: { repliedUser: false}, embeds: [e]}).catch((e) => console.log('Error al enviar mensaje: '+e))

            } catch (error) {

                console.log('Error al depositar '+numero+' : '+error)
                message.reply('Hubo un error interno. Por favor, inténtelo de nuevo.').catch((e) => console.log('Error al enviar mensaje: '+e))
          
            }

        }

    }

}