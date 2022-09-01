const turnoSchema = require('../../models/turnoSchema');

module.exports =  {
    
    name: 'turno',
    aliases: [],
    description: '💻 Comando exclusivo de Staff',
    category: 'Programación 💻',
    use: '<prefix>turno',
    owner: true,
    vip: false,
    slash: false,

    async execute(client, message, args, Discord) {

        if(message.guild.id !== '777620055344545842') return

        let staffTurno = '888203969111916595'
        let userTurno, mensajes, puntos, diamantes
        let canalstaff = client.channels.cache.get('950717214137409596')

        const embed_inicio = new Discord.MessageEmbed()
        .setThumbnail('https://i.imgur.com/mjtuLjU.gif')
        .setAuthor({ name: '𝐌𝐢𝐝𝐠𝐚𝐫𝐝 𝐒𝐭𝐚𝐟𝐟', iconURL: client.user.avatarURL({ dynamic: true}) })
        .setTitle('𝗦𝘁𝗮𝗳𝗳 𝗱𝗲 𝗧𝘂𝗿𝗻𝗼 ✨')
        .setDescription('<a:BD_decoFlechaVerde:878509031675801640> Muchas gracias por ayudarnos a ser cada día mejor! Acabas de iniciar turno y has obtenido el rol <@&888203969111916595> Recuerda que tus mensajes solo serán contados en el canal <#870195067338506271>. Al finalizar, ejecuta de nuevo el comando `_turno` y automáticamente, el bot te dirá la cantidad de mensajes que has escrito, los puntos ganados que un <@&880241455849938995> te agregará, y los diamantes acumulados, que también serán añadidos en el canal de <#950717214137409596> Mucha Suerte!')
        .setColor('RANDOM')
        .setTimestamp(new Date())
        .setFooter({ text: `Malta's Bot`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true, size: 2048 }) : 'https://i.imgur.com/MNWYvup.gif' })
       
        var rol = message.guild.roles.cache.find(x => x.id === staffTurno)

        if(rol){

            if(!message.member.roles.cache.find(r => r.id === staffTurno)){
                            
                await message.member.roles.add(rol).then(async () => {

                    try {

                        userTurno = await turnoSchema.findOne({idusuario: message.author.id})
    
                        if(!userTurno){
                        
                            console.log('========================= REGISTRO DE STAFF DE TURNO =========================');
                                
                            let user = await turnoSchema.create({
                        
                                idusuario: message.author.id,
                                mensajes: 0,
                                diamantes: 0,
                            
                            })
                            
                            user.save();
                            console.log('Staff de Turno Registrado ===> Id: '+ message.author.id + ' Username: ' + message.author.username)
                           
                            console.log('========================= REGISTRO DE STAFF DE TURNO =========================');
                           
                        } else {
    
                            console.log('========================= ACTUALIZACIÓN DE STAFF DE TURNO =========================');
                                
                            let update = await turnoSchema.findOneAndUpdate({idusuario: message.author.id},{
                        
                                mensajes: 0
                        
                            })
                        
                            update.save()
                           
                            console.log('Staff de Turno Actualizado ===> Id: '+ message.author.id + ' Username: ' + message.author.username)
                           
                            console.log('========================= ACTUALIZACIÓN DE STAFF DE TURNO =========================');
                        
                        }
    
                        message.channel.send({ allowedMentions: { repliedUser: false}, embeds: [embed_inicio]}).catch((e) => console.log('Error al enviar mensaje: '+e))
    
                    } catch (error) {
    
                        console.log('Error al Registrar Staff de Turno: '+ error)
                        message.channel.send('Ocurrió un error al Registrar Usuario: '+ error).catch((e) => console.log('Error al enviar mensaje: '+e))
    
                    }
                    
                }).catch(e => {
                    
                    console.log('Ocurrio un error al añadir ROL Staff de Turno al usuario: '+ message.author.id+ ' - '+e)
                    
                    const e3 = new Discord.MessageEmbed()
                    .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
                    .setColor('RED')
                    .setDescription('<a:Verify2:931463492677017650> | Ocurrió un error al añadir ROL Staff de Turno al usuario: <@'+ message.author.id+ '>, por favor intenta de nuevo!\n> Error: '+error)
                    .setTimestamp()
                
                    return message.reply({embeds: [e3]}).catch((e) => console.log('Error al enviar mensaje: '+e))
                
                })

            } else if(message.member.roles.cache.find(r => r.id === staffTurno)) {

                await message.member.roles.remove(rol).then(async () => {

                    try {

                        userTurno = await turnoSchema.findOne({idusuario: message.author.id})
    
                        if(!userTurno){
            
                            return message.reply({embeds: [
        
                                new Discord.MessageEmbed()
                                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
                                .setColor('RED')
                                .setDescription(`<a:Verify2:931463492677017650> | El usuario ingresado no está en la Base de Datos de Staff!`)
                          
                            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
                            
                        } else {
    
                            console.log('========================= ACTUALIZACIÓN DE STAFF DE TURNO =========================');
                    
                            mensajes = userTurno.mensajes
                            puntos = Math.round(mensajes * 0.3)
                            diamantes = Math.round(puntos/20)
    
                            let update = await turnoSchema.findOneAndUpdate({idusuario: message.author.id},
                                {
            
                                    mensajes: 0,
                                    diamantes: userTurno.diamantes + diamantes,
            
                                })
            
                            update.save()
               
                            console.log('Staff de Turno Actualizado ===> Id: '+ message.author.id + ' Username: ' + message.author.username)
               
                            console.log('========================= ACTUALIZACIÓN DE STAFF DE TURNO =========================');
               
                        }
    
                        message.channel.send({ allowedMentions: { repliedUser: false}, embeds: [
    
                            new Discord.MessageEmbed()
                            .setThumbnail('https://i.imgur.com/mjtuLjU.gif')
                            .setAuthor({ name: '𝐌𝐢𝐝𝐠𝐚𝐫𝐝 𝐒𝐭𝐚𝐟𝐟', iconURL: client.user.avatarURL({ dynamic: true}) })
                            .setTitle('𝗦𝘁𝗮𝗳𝗳 𝗱𝗲 𝗧𝘂𝗿𝗻𝗼 ✨')
                            .setDescription('Muchas gracias por apoyarnos en este Turno!')
                            .addField('Mensajes Escritos: <:sh_text:953436282774781982>','<a:flech:931432469935312937> Total: ' + mensajes, false)
                            .addField('Puntos Obtenidos: <a:point:953436509426581564>','<a:flech:931432469935312937> Total: ' + puntos, false)
                            .addField('Diamantes Ganados: <a:diamante:887714567084449892>','<a:flech:931432469935312937> Total: ' + diamantes, false)
                            .addField('Diamantes Acumulados: <a:diamante:887714567084449892>','<a:flech:931432469935312937> Total: ' + (userTurno.diamantes + diamantes), false)
                            .setColor('RANDOM')
                            .setTimestamp(new Date())
                            .setFooter({ text: `Malta's Bot`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true, size: 2048 }) : 'https://i.imgur.com/MNWYvup.gif' })
                                          
                        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
                    
                        try {
                
                            let lista = await turnoSchema.find().sort({ diamantes: -1 })
                
                            let embed = new Discord.MessageEmbed()
                
                            let datos = []
                            let first = []
                
                            let c = 1
                
                            for(let ls of lista){
                
                                datos.push('**' + c + '.** <@' + ls.idusuario + '> <a:diamante:887714567084449892> **'+ls.diamantes+'**')
                                first.push(ls.idusuario)
                                c = c + 1
                        
                            }
                            
                            if(!lista || datos.length === 0) return message.channel.send({embeds:[
                          
                                new Discord.MessageEmbed()
                                .setAuthor({ name: '𝐌𝐢𝐝𝐠𝐚𝐫𝐝 𝐒𝐭𝐚𝐟𝐟', iconURL: client.user.avatarURL({ dynamic: true}) })
                                .setDescription('Aún no hay usuarios con diamantes <:tierno:931433334960160799>')   	
                                .setColor("RANDOM")
                                .setFooter({ text: `Malta's Bot`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true, size: 2048 }) : 'https://i.imgur.com/MNWYvup.gif' })
           
                            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
                
                            let best = client.users.cache.get(first[0])
    
                            embed.setAuthor({ name: '𝐌𝐢𝐝𝐠𝐚𝐫𝐝 𝐒𝐭𝐚𝐟𝐟', iconURL: client.user.avatarURL({ dynamic: true}) })
                            embed.setTitle('𝗦𝘁𝗮𝗳𝗳 𝗱𝗲 𝗹𝗮 𝗦𝗲𝗺𝗮𝗻𝗮 ✨')
                            embed.setThumbnail(best.displayAvatarURL() ? best.displayAvatarURL({dynamic: true, size: 2048}) : message.guild.iconURL({ dynamic: true, size: 2048 }))
                            embed.setImage('https://i.imgur.com/9JJeBS7.gif')
                            embed.setDescription(datos.join('\n\n'))   	
                            embed.setColor("RANDOM")
                            embed.setFooter({ text: `Malta's Bot`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true, size: 2048 }) : 'https://i.imgur.com/MNWYvup.gif' })
                            
                            canalstaff.bulkDelete(2)
                            canalstaff.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
                            canalstaff.send('https://images-ext-2.discordapp.net/external/9iPHKFXXnKKSQpcFazlW79dr1zbbtdo7QT7-xxtfDY4/%3Fwidth%3D600%26height%3D86/https/media.discordapp.net/attachments/897951731462316073/915663567213199390/bar-1.gif?width=450&height=65').catch((e) => console.log('Error al enviar mensaje: '+e))
       
                        } catch (error) {
                            
                            console.log('Ocurrió un error al buscar la lista de Staff: '+ error)
                
                            const e = new Discord.MessageEmbed()
                            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
                            .setColor('RED')
                            .setDescription(`<a:Verify2:931463492677017650> | Ocurrió un error inesperado, por favor intenta de nuevo!\n> Error: `+error)
                            .setTimestamp()
                
                            return message.reply({embeds: [e]}).catch((e) => console.log('Error al enviar mensaje: '+e))
                
                        }
           
                    } catch (error) {
    
                        console.log('Error al Registrar Staff de Turno: '+ error)
                        message.channel.send('Ocurrió un error al Registrar Usuario: '+ error).catch((e) => console.log('Error al enviar mensaje: '+e))
    
                    }

                }).catch(e => {
                    
                    console.log('Ocurrio un error al remover ROL Staff de Turno al usuario: '+ message.author.id+ ' - '+e)
                    
                    const e2 = new Discord.MessageEmbed()
                    .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
                    .setColor('RED')
                    .setDescription('<a:Verify2:931463492677017650> | Ocurrió un error al remover ROL Staff de Turno al usuario: <@'+ message.author.id+ '>, por favor intenta de nuevo!\n> Error: '+error)
                    .setTimestamp()
                
                    return message.reply({embeds: [e2]}).catch((e) => console.log('Error al enviar mensaje: '+e))
                
                })
      
            }
                    
        }
        
    }

}