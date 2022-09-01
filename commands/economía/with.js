const { Collection } = require('mongoose');
const userSchema = require('../../models/userSchema');

module.exports =  {
    
    name: 'with',
    aliases: ['retirar','wd'],
    description: '🏧 Retira tu dinero del banco.',
    category: 'Economía 💰',
    use: '<prefix>with <cantidad/all>',
    owner: false,
    vip: false,
    slash: false,
  
    async execute(client, message, args, Discord) { 

        let buscarUsuario

        try {

            buscarUsuario = await userSchema.findOne({ idusuario: message.author.id })
            
            while(!buscarUsuario){

                let user = await userSchema.create({
    
                    idusuario: message.author.id,
                    username: message.author.username
    
                })
    
                user.save();
                console.log('Usuario Registrado ===> Id: '+ message.author.id + ' Username: ' + message.author.username)
                
                buscarUsuario = await userSchema.findOne({ idusuario: message.author.id })

            }

        } catch (error) {

            console.log('Error al obtener usuario: '+error)
            return message.reply('Ha ocurrido un error inesperado. Vuelva a ejecutar el comando.').catch((e) => console.log('Error al enviar mensaje: '+e))
            
        }

        if(!args[0]) return message.reply({embeds: [

            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
            .setThumbnail('https://i.imgur.com/96WfDDC.gif')
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | Ingresa un monto a retirar!`)

        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        else if(buscarUsuario.banco === 0) return message.reply({embeds: [

            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
            .setThumbnail('https://i.imgur.com/96WfDDC.gif')
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | No tienes dinero para retirar!`)

        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        else if(buscarUsuario.banco < parseInt(args[0])) return message.reply({embeds: [

            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
            .setThumbnail('https://i.imgur.com/96WfDDC.gif')
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | No tienes ese monto para retirar. Actualmente tienes en tu banco <a:money:930397094924124180> `+ buscarUsuario.banco.toLocaleString('en-US'))

        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        if(args[0].toLowerCase() === 'all'){

            try {

                let update = await userSchema.findOneAndUpdate({ idusuario: message.author.id },
                    {
    
                        dinero: buscarUsuario.dinero + buscarUsuario.banco,
                        banco: 0
    
                    });

                update.save();

                const e = new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
                .setThumbnail('https://i.imgur.com/96WfDDC.gif')
                .setColor('GREEN')
                .setDescription(`<a:Verify1:931463354357276742> | Has retirado <a:money:930397094924124180> `+ buscarUsuario.banco.toLocaleString('en-US')+ ' del banco')
                .setTimestamp()
        
                message.reply({ allowedMentions: { repliedUser: false}, embeds: [e]}).catch((e) => console.log('Error al enviar mensaje: '+e))

                
            } catch (error) {

                console.log('Error al retirar todo el dinero: '+error)
                message.reply('Hubo un error interno. Por favor, inténtelo de nuevo.').catch((e) => console.log('Error al enviar mensaje: '+e))
          
            }
        
        } else {

            if(isNaN(parseInt(args[0]))) return message.reply({embeds: [

                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
                .setThumbnail('https://i.imgur.com/96WfDDC.gif')
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | Ingresa un número válido para retirar!`)

            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

            let numero = parseInt(args[0])

            try {

                let update = await userSchema.findOneAndUpdate({ idusuario: message.author.id },
                    {
    
                        dinero: buscarUsuario.dinero + numero,
                        banco: buscarUsuario.banco - numero
    
                    })

                update.save()

                const e = new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
                .setThumbnail('https://i.imgur.com/96WfDDC.gif')
                .setColor('GREEN')
                .setDescription(`<a:Verify1:931463354357276742> | Has retirado <a:money:930397094924124180> `+ numero.toLocaleString('en-US') + ' del banco')
                .setTimestamp()
          
                message.reply({ allowedMentions: { repliedUser: false}, embeds: [e]}).catch((e) => console.log('Error al enviar mensaje: '+e))
                
            } catch (error) {

                console.log('Error al retirar '+numero+' : '+error)
                message.reply('Hubo un error interno. Por favor, inténtelo de nuevo.').catch((e) => console.log('Error al enviar mensaje: '+e))
          
            }
        
            
        }

    }

}