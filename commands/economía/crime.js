const { Collection } = require('mongoose');
const userSchema = require('../../models/userSchema');

module.exports =  {
    
    name: 'crime',
    aliases: ['crimen'],
    description: '💢 Ejecuta un crimen.',
    category: 'Economía 💰',
    use: '<prefix>crime',
    owner: false,
    vip: false,
    slash: false,
  
    async execute(client, message, args, Discord) { 

        var asalto = [

            'Junto con tus amigos, han asaltado el banco de Midgard y lograron robar: <a:money:930397094924124180> ',
            'Pero que buen asalto! En total conseguiste: <a:money:930397094924124180> ',
            'Lograste asaltar a unos pobres terrícolas, aquí tienes: <a:money:930397094924124180> ',
            'En tu paso por la Gran Ciudad, asaltaste a una tienda local y lograste obtener: <a:money:930397094924124180> ',
            '¿Y este random? Bueno, por tu asalto has obtenido: <a:money:930397094924124180> '
            
        ]

        var hack = [

            'El hackeo al banco de Midgard resultó muy bien, lograste obtener: <a:money:930397094924124180> ',
            'Que pro eres hackeando, aquí tienes: <a:money:930397094924124180> ',
            'Ayudaste a hackear mis sistemas, logrando recolectar: <a:money:930397094924124180> ',
            'En tu intento por hackear un servidor, ganaste: <a:money:930397094924124180> ',
            'La zona de randoms fue hackeada, toma en agradecimiento a tus servicios: <a:money:930397094924124180> '
          
        ]

        var mafia = [

            'La mafia agradece tus trabajos y te da estas monedas de recompensa: <a:money:930397094924124180> ',
            'Tus crímenes son bien recompensados por la mafia: <a:money:930397094924124180> ',
            'Has hecho algunos trabajos para la mafia local, toma tu recompensa: <a:money:930397094924124180> ',
            'Has recolectado el cupo diario de la mafia, aquí tienes: <a:money:930397094924124180> ',
            '¡Pero qué Pro! Arriesgaste tu vida por la mafia, obteniendo: <a:money:930397094924124180> '
            
        ]

        const e = new Discord.MessageEmbed()
        .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
        .setTitle('Zona de Crimen 🚦')
        .setColor('RANDOM')
        .setThumbnail('https://i.imgur.com/qslWhjS.gif')
        .setDescription('¿Qué crimen deseas ejecutar? <:anotanding:936028237404962836>\n\n ⏳ Tienes **30** segundos.')
        .setTimestamp()
        .setFooter({ text: `MidgardBot`, iconURL: client.user.avatarURL({ dynamic: true }) })

        const ba = new Discord.MessageButton()
        .setCustomId('asalto')
        .setLabel('Asalto')
        .setStyle('PRIMARY')
        .setEmoji('🔪')

        const bh = new Discord.MessageButton()
        .setCustomId('hack')
        .setLabel('Hack')
        .setStyle('PRIMARY')
        .setEmoji('💻')

        const bm = new Discord.MessageButton()
        .setCustomId('mafia')
        .setLabel('Mafia')
        .setStyle('PRIMARY')
        .setEmoji('🔥')

        let buscarUsuario = await userSchema.findOne({ idusuario: message.author.id })
        
        if(buscarUsuario){

            if(buscarUsuario.crime > Date.now()) return message.reply({embeds: [
              
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
                .setColor('RED')
                .setDescription('<a:tiempogif:931434689481285662> | Puedes volver a cometer un crimen en : '+((buscarUsuario.crime - Date.now())/1000).toFixed()+' segundos')
              
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        } else {

            let user = await userSchema.create({

                idusuario: message.author.id,
                username: message.author.username,
                dinero: 50,
                total: 50,
                crime: (Date.now()+(1000*60))

            })

            user.save();
            console.log('Usuario Registrado ===> Id: '+ message.author.id + ' Username: ' + message.author.username)

            const e = new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | Eres muy novato para estos trabajos, mejor te obsequio estas monedas : <a:money:930397094924124180> 50`)
            .setTimestamp()

            return message.reply({embeds: [e]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        }

        let chance = Math.floor(Math.random()*11)
        let r = Math.floor(Math.random() * (500 - 10) + 10)

        message.channel.send({embeds: [e], components: [

            new Discord.MessageActionRow()
                .addComponents([ba,bh,bm])

        ]}).then(async m => {
          
            let filter = int => int.isButton() && int.user.id == message.author.id 
       
            const collector = m.createMessageComponentCollector({ filter, time: 30000 });
        
            collector.on("collect", async int => {
          
                int.deferUpdate();
       
                if (int.customId === "asalto") {

                    let ramdona = asalto[Math.floor(Math.random()*asalto.length)]
        
                    if(chance < 4){
    
                        let update = await userSchema.findOneAndUpdate({idusuario: message.author.id},
                            {

                                dinero: buscarUsuario.dinero + r,
                                total: buscarUsuario.dinero + buscarUsuario.banco + r,
                                crime: (Date.now()+(1000*60))

                            })

                        update.save()
              
                        const e = new Discord.MessageEmbed()
                        .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
                        .setColor('GREEN')
                        .setThumbnail('https://i.imgur.com/hD5BZXC.gif')
                        .setDescription(ramdona + r)
                        .setTimestamp()
    
                        m.edit({embeds: [e], components: []}).catch((e) => console.log('Error al enviar mensaje: '+e))
    
                    } else {
              
                        let update = await userSchema.findOneAndUpdate({idusuario: message.author.id},
                            {

                                dinero: buscarUsuario.dinero - r,
                                total: buscarUsuario.dinero + buscarUsuario.banco - r,
                                crime: (Date.now()+(1000*60))

                            })

                        update.save()

                        const e = new Discord.MessageEmbed()
                        .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
                        .setColor('RED')
                        .setThumbnail('https://i.imgur.com/hD5BZXC.gif')
                        .setDescription(`<a:Verify2:931463492677017650> | Qué malo eres cometiendo crímenes, acabas de ser capturado mientras intentabas asaltar y perdiste <a:money:930397094924124180> `+ r)
                        .setTimestamp()
    
                        m.edit({embeds: [e], components: []}).catch((e) => console.log('Error al enviar mensaje: '+e))
    
                    }

                } else if (int.customId === 'hack') {

                    let ramdonh = hack[Math.floor(Math.random()*hack.length)]
        
                    if(chance < 4){
    
                        let update = await userSchema.findOneAndUpdate({idusuario: message.author.id},
                            {

                                dinero: buscarUsuario.dinero + r,
                                total: buscarUsuario.dinero + buscarUsuario.banco + r,
                                crime: (Date.now()+(1000*60))

                            })
              
                        update.save()

                        const e = new Discord.MessageEmbed()
                        .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
                        .setColor('GREEN')
                        .setThumbnail('https://i.imgur.com/i9soeSm.gif')
                        .setDescription(ramdonh + r)
                        .setTimestamp()
    
                        m.edit({embeds: [e], components: []}).catch((e) => console.log('Error al enviar mensaje: '+e))
    
                    } else {
              
                        let update = await userSchema.findOneAndUpdate({idusuario: message.author.id},
                            {

                                dinero: buscarUsuario.dinero - r,
                                total: buscarUsuario.dinero + buscarUsuario.banco - r,
                                crime: (Date.now()+(1000*60))

                            })

                        update.save()

                        const e = new Discord.MessageEmbed()
                        .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
                        .setColor('RED')
                        .setThumbnail('https://i.imgur.com/i9soeSm.gif')
                        .setDescription(`<a:Verify2:931463492677017650> | Qué malo eres cometiendo crímenes, acabas de ser capturado mientras intentabas hackear mi sistema y perdiste <a:money:930397094924124180> `+ r)
                        .setTimestamp()
    
                        m.edit({embeds: [e], components: []}).catch((e) => console.log('Error al enviar mensaje: '+e))
    
                    }

                } else if (int.customId === 'mafia') {

                    let ramdonm = mafia[Math.floor(Math.random()*mafia.length)]
        
                    if(chance < 4){
    
                        let update = await userSchema.findOneAndUpdate({idusuario: message.author.id},
                            {

                                dinero: buscarUsuario.dinero + r,
                                total: buscarUsuario.dinero + buscarUsuario.banco + r,
                                crime: (Date.now()+(1000*60))

                            })

                        update.save()
              
                        const e = new Discord.MessageEmbed()
                        .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
                        .setColor('GREEN')
                        .setThumbnail('https://i.imgur.com/qNFQf4A.gif')
                        .setDescription(ramdonm + r)
                        .setTimestamp()
    
                        m.edit({embeds: [e], components: []}).catch((e) => console.log('Error al enviar mensaje: '+e))
    
                    } else {
              
                        let update = await userSchema.findOneAndUpdate({idusuario: message.author.id},
                            {

                                dinero: buscarUsuario.dinero - r,
                                total: buscarUsuario.dinero + buscarUsuario.banco - r,
                                crime: (Date.now()+(1000*60))

                            })

                        update.save()

                        const e = new Discord.MessageEmbed()
                        .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
                        .setColor('RED')
                        .setThumbnail('https://i.imgur.com/qNFQf4A.gif')
                        .setDescription(`<a:Verify2:931463492677017650> | Qué malo eres cometiendo crímenes, acabas de ser capturado por la mafia y perdiste <a:money:930397094924124180> `+ r)
                        .setTimestamp()
    
                        m.edit({embeds: [e], components: []}).catch((e) => console.log('Error al enviar mensaje: '+e))
    
                    }

                }
  
            });
  
            collector.on("end", (collected, reason) => {
          
                if(collected < 1) return m.edit({
                    
                    embeds:[

                        new Discord.MessageEmbed()
                        .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
                        .setColor('RED')
                        .setDescription('<a:Verify2:931463492677017650> | Se terminó el tiempo!')],
                    
                    components: [
            
                        new Discord.MessageActionRow()
                        .addComponents([ba.setDisabled(true),bm.setDisabled(true),bh.setDisabled(true)])
          
                    ]
                
                }).catch((e) => console.log('Error al enviar mensaje: '+e))

                console.log('Razón del término de colección de crime: '+reason)

            })
     
        }).catch((e) => console.log('Error al enviar mensaje: '+e))

    }

}