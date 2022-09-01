const turnoSchema = require('../../models/turnoSchema');

module.exports =  {
    
    name: 'cerrarturno',
    aliases: ['ct','cerrar-turno'],
    description: '💻 Comando exclusivo de Staff',
    category: 'Programación 💻',
    use: '<prefix>ct',
    owner: true,
    vip: false,
    slash: false,

    async execute(client, message, args, Discord) {

        if(message.guild.id !== '777620055344545842') return

        let staffTurno = '888203969111916595'
        let userTurno, mensajes, puntos, diamantes
        let canalstaff = client.channels.cache.get('950717214137409596')

        let id = ['753435606410985573','683501310527668228','743960732542042203']

        if(!id.some(id => message.author.id == id)) {
      
            const embed = new Discord.MessageEmbed()
            .setDescription('Solo los Gerentes pueden usar este comando.')
            .setColor('RED')
            
            return message.reply({ embeds: [embed] })
            .then(m => setTimeout(() => m.delete(), 5000)).catch((e) => console.log('Error al enviar mensaje: '+e))

        }

        let user1 = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
        
        if(!user1) return message.reply({embeds: [
       
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | ¡Debes mencionar a un usuario!`)
      
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        if(user1.user.bot) return message.reply({embeds: [
        
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | No puedes cerrar turno de un bot`)
      
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        try {

            userTurno = await turnoSchema.findOne({ idusuario: user1.id })
        
            if(!userTurno){

                return message.reply({embeds: [
        
                    new Discord.MessageEmbed()
                    .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
                    .setColor('RED')
                    .setDescription(`<a:Verify2:931463492677017650> | El usuario ingresado no está en la Base de Datos de Staff!`)
              
                ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

            }
            
        } catch (error) {

            console.log('Error al encontrar miembro de staff: '+error)
            return message.reply('No se encontró al miembro de staff mencionado, por favor, asegúrese de mencionar correctamente o de ingresar una ID válida.').catch((e) => console.log('Error al enviar mensaje: '+e))
            
        }

        var rol = message.guild.roles.cache.find(x => x.id === staffTurno)

        if(rol){

            if(!user1.roles.cache.find(r => r.id === staffTurno)){
                            
                return message.reply({embeds: [
        
                    new Discord.MessageEmbed()
                    .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
                    .setColor('RED')
                    .setDescription(`<a:Verify2:931463492677017650> | El usuario ingresado no está en Turno!`)
              
                ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

            } else if(user1.roles.cache.find(r => r.id === staffTurno)) {

                await user1.roles.remove(rol).then(async () => {

                    try {

                        userTurno = await turnoSchema.findOne({idusuario: user1.id})
    
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
    
                            let update = await turnoSchema.findOneAndUpdate({idusuario: user1.id},
                                {
            
                                    mensajes: 0,
                                    diamantes: userTurno.diamantes + diamantes,
            
                                })
            
                            update.save()
               
                            console.log('Staff de Turno Actualizado ===> Id: '+ user1.id + ' Username: ' + user1.user.username)
               
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
                            .setFooter({ text: `Malta's Bot`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true, size: 2048 }) : client.user.avatarURL({ dynamic: true }) })
                                          
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
                                .setFooter({ text: `Malta's Bot`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true, size: 2048 }) : client.user.avatarURL({ dynamic: true }) })
           
                            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
                
                            let best = client.users.cache.get(first[0])
    
                            embed.setAuthor({ name: '𝐌𝐢𝐝𝐠𝐚𝐫𝐝 𝐒𝐭𝐚𝐟𝐟', iconURL: client.user.avatarURL({ dynamic: true}) })
                            embed.setTitle('𝗦𝘁𝗮𝗳𝗳 𝗱𝗲 𝗹𝗮 𝗦𝗲𝗺𝗮𝗻𝗮 ✨')
                            embed.setThumbnail(best.displayAvatarURL({dynamic: true, size: 2048}))
                            embed.setImage('https://i.imgur.com/9JJeBS7.gif')
                            embed.setDescription(datos.join('\n\n'))   	
                            embed.setColor("RANDOM")
                            embed.setFooter({ text: `Malta's Bot`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true, size: 2048 }) : client.user.avatarURL({ dynamic: true }) })
                            
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
                        message.channel.send('Ocurrió un error al Buscar Usuario: '+ error).catch((e) => console.log('Error al enviar mensaje: '+e))
    
                    }

                }).catch(e => {
                    
                    console.log('Ocurrio un error al remover ROL Staff de Turno al usuario: '+ user1.id+ ' - '+e)

                    const e2 = new Discord.MessageEmbed()
                    .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
                    .setColor('RED')
                    .setDescription('<a:Verify2:931463492677017650> | Ocurrió un error al remover ROL Staff de Turno al usuario: <@'+ user1.id+ '>, por favor intenta de nuevo!\n> Error: '+error)
                    .setTimestamp()
                
                    return message.reply({embeds: [e2]}).catch((e) => console.log('Error al enviar mensaje: '+e))
                
                })
                        
            }
                    
        }
        
    }

}