const { Collection } = require('mongoose');
const userSchema = require('../../models/userSchema');
const prefixSchema = require('../../models/serverSchema');

module.exports =  {
    
    name: 'cock-fight',
    aliases: ['cf'],
    description: '🐤 Apuesta en las peleas de pollos y gana más coins.\n [prefix]cf <cantidad | all>`',
    category: 'Economía 💰',
    use: '<prefix>cf <apuesta>',
    owner: false,
    vip: false,
    slash: false,
  
    async execute(client, message, args, Discord) { 

        let buscarprefix, prefix
        try {

            buscarprefix = await prefixSchema.findOne({idserver: message.guild.id})

            if(buscarprefix){

                prefix = buscarprefix.prefix

            } else {

                prefix = process.env.PREFIX

            }

        } catch (error) {

            console.log('Error al Prefix en Servidor: '+ message.guild.id + ' - ' + error)
            prefix = process.env.PREFIX

        }

        let buscarUsuario = await userSchema.findOne({idusuario: message.author.id})

        if(!buscarUsuario || buscarUsuario.ck < 1) return message.reply({embeds: [
          
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
            .setThumbnail('https://i.imgur.com/pxLIA6b.gif')
            .setColor('RED')
            .setDescription('<a:Verify2:931463492677017650> | No cuentas con tu propio pollito! Adquiere uno usando el comando `'+prefix+'buy ck`')
        
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        if(buscarUsuario.ck >= 1){

            if(!args[0]) return message.reply({embeds: [

                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
                .setThumbnail('https://i.imgur.com/pxLIA6b.gif')
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | Ingresa un monto para apostar!`)
  
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

            if(buscarUsuario.dinero === 0) return message.reply({embeds: [

                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
                .setThumbnail('https://i.imgur.com/pxLIA6b.gif')
                .setColor('RED')
                .setDescription('<a:Verify2:931463492677017650> | No tienes dinero para apostar! Primero debes retirar un monto.')
  
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
  
            if(buscarUsuario.dinero < parseInt(args[0])) return message.reply({embeds: [
  
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
                .setThumbnail('https://i.imgur.com/pxLIA6b.gif')
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | No tienes ese monto para apostar. Actualmente tienes <a:money:930397094924124180> `+ buscarUsuario.dinero.toLocaleString('en-US'))
  
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

            let chance = Math.floor(Math.random()*11)

            if(args[0].toLowerCase() === 'all'){

                if(chance > 5){

                    try {

                        let update = await userSchema.findOneAndUpdate({ idusuario: message.author.id },
                            {
                
                                dinero: buscarUsuario.dinero + buscarUsuario.dinero,
                                total: buscarUsuario.total + buscarUsuario.dinero
                
                            });
            
                        update.save();

                        const e = new Discord.MessageEmbed()
                        .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
                        .setThumbnail('https://i.imgur.com/pxLIA6b.gif')
                        .setColor('GREEN')
                        .setDescription(`<a:Verify1:931463354357276742> |Tu pollito ganó la pelea y obtuviste <a:money:930397094924124180> `+ (buscarUsuario.dinero*2).toLocaleString('en-US'))
                        .setTimestamp()
                        .setFooter({ text: `Probabilidad obtenida: ${chance}0%` })
          
                        message.reply({ allowedMentions: { repliedUser: false}, embeds: [e]}).catch((e) => console.log('Error al enviar mensaje: '+e))
       
                    } catch (error) {
            
                        console.log('Error al actualizar dinero del ck: '+error)
                        message.reply('Hubo un error interno. Por favor, inténtelo de nuevo.').catch((e) => console.log('Error al enviar mensaje: '+e))
      
                    }
          
                    
                } else {

                    try {

                        let update = await userSchema.findOneAndUpdate({ idusuario: message.author.id },
                            {
                
                                dinero: buscarUsuario.dinero - buscarUsuario.dinero,
                                total: buscarUsuario.total - buscarUsuario.dinero,
                                ck: 0
                
                            });
            
                        update.save();

                        const e = new Discord.MessageEmbed()
                        .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
                        .setThumbnail('https://i.imgur.com/pxLIA6b.gif')
                        .setColor('RED')
                        .setDescription(`<a:Verify2:931463492677017650> |Tu pollito murió 💀 y perdiste toda la apuesta!`)
                        .setTimestamp()
                        .setFooter({ text: `Probabilidad obtenida: ${chance}0%` })
          
                        message.reply({ allowedMentions: { repliedUser: false}, embeds: [e]}).catch((e) => console.log('Error al enviar mensaje: '+e))
           
                    } catch (error) {
            
                        console.log('Error al actualizar dinero del ck: '+error)
                        message.reply('Hubo un error interno. Por favor, inténtelo de nuevo.').catch((e) => console.log('Error al enviar mensaje: '+e))
          
                    }

                }
          
            } else {
  
                if(isNaN(parseInt(args[0]))) return message.reply({embeds: [
  
                    new Discord.MessageEmbed()
                    .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
                    .setThumbnail('https://i.imgur.com/pxLIA6b.gif')
                    .setColor('RED')
                    .setDescription(`<a:Verify2:931463492677017650> | Ingresa un número válido para apostar!`)
  
                ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
  
                let numero = parseInt(args[0])

                if(chance > 5){

                    try {

                        let update = await userSchema.findOneAndUpdate({ idusuario: message.author.id },
                            {
                
                                dinero: buscarUsuario.dinero + numero,
                                total: buscarUsuario.total + numero
                
                            });
            
                        update.save();
                        
                        const e = new Discord.MessageEmbed()
                        .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
                        .setThumbnail('https://i.imgur.com/pxLIA6b.gif')
                        .setColor('GREEN')
                        .setDescription(`<a:Verify1:931463354357276742> |Tu pollito ganó la pelea y obtuviste <a:money:930397094924124180> `+ (numero*2).toLocaleString('en-US'))
                        .setTimestamp()
                        .setFooter({ text: `Probabilidad obtenida: ${chance}0%` })
          
                        message.reply({ allowedMentions: { repliedUser: false}, embeds: [e]}).catch((e) => console.log('Error al enviar mensaje: '+e))
    
                            
                    } catch (error) {
            
                        console.log('Error al actualiza dinero del ck: '+error)
                        message.reply('Hubo un error interno. Por favor, inténtelo de nuevo.').catch((e) => console.log('Error al enviar mensaje: '+e))
          
                    }

                } else {

                    try {

                        let update = await userSchema.findOneAndUpdate({ idusuario: message.author.id },
                            {
                
                                dinero: buscarUsuario.dinero - numero,
                                total: buscarUsuario.total - numero,
                                ck: 0
                
                            });
            
                        update.save();
                       
                        const e = new Discord.MessageEmbed()
                        .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
                        .setThumbnail('https://i.imgur.com/pxLIA6b.gif')
                        .setColor('RED')
                        .setDescription(`<a:Verify2:931463492677017650> |Tu pollito murió 💀 y perdiste toda la apuesta!`)
                        .setTimestamp()
                        .setFooter({ text: `Probabilidad obtenida: ${chance}0%` })
          
                        message.reply({ allowedMentions: { repliedUser: false}, embeds: [e]}).catch((e) => console.log('Error al enviar mensaje: '+e))
               
                    } catch (error) {
            
                        console.log('Error al actualiza dinero del ck: '+error)
                        message.reply('Hubo un error interno. Por favor, inténtelo de nuevo.').catch((e) => console.log('Error al enviar mensaje: '+e))
           
                    }

                }
  
            }
      
        }

    }

}