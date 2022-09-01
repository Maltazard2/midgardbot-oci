module.exports =  {
    
    name: 'cembed',
    aliases: ['newembed'],
    description: '💻 Crear un embed.',
    category: 'Programación 💻',
    use: '<prefix>cembed [#canal]',
    owner: true,
    vip: false,
    slash: false,

    async execute(client, message, args, Discord) {
    
        let id = ['753435606410985573','683501310527668228']

        if(!id.some(id => message.author.id == id)) {
      
            const embed = new Discord.MessageEmbed()
            .setDescription('Solo los admins del bot puede usar este comando.')
            .setColor('RED')
            
            return message.reply({ embeds: [embed] })
            .then(m => setTimeout(() => m.delete(), 5000)).catch((e) => console.log('Error al enviar mensaje: '+e))

        } else {

            let e = 0;

            const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]) || message.guild.channels.cache.find(c => c.name === args[0]) || message.channel;

            if(channel.guild.id !== message.guild.id) return 

            const linkregex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/g

            let datos = [

                'Mensaje antes del embed:',
                'Nombre del Autor:',
                'Imagen del Autor (link o sube un archivo):',
                'Link del Autor:',
                'Título:',
                'Link del Embed:',
                'Descripción:',
                'Imagen Thumbnail (link o sube un archivo):',
                'Imagen del Embed (link o sube un archivo):',
                'Texto del Footer:',
                'Imagen del Footer (link o sube un archivo):',
                'Color del Embed',
                '¿Quieres agregar campos? Si/No',

            ]

            let valores = [

                '\u200B',
                '<a:Verify1:931463354357276742>'
            ]

            let val = 0

            const d = new Discord.MessageEmbed()
            .setThumbnail('https://i.imgur.com/9sJsVmV.gif')
            .setAuthor({ name: 'MidgardBot', iconURL: client.user.avatarURL({ dynamic: true}) })
            .setTitle('🚧  Construyendo un Embed  🚧')
            .setDescription('*Bienvenid@ al menú de Creación de un Embed*\n\nPara cancelar escribe `exit`\nPara omitir (excepto en los campos) escribe `none`\n\n')
            .addField('Autor: ', '<@' + message.author.id + '>')
            .addField('Canal: ', '<#' + channel.id + '>')
            .addField('\u200B','***---Por favor ingresa los siguientes valores---***')
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `Nací para crecer`, iconURL: `${message.author.displayAvatarURL({ dynamic: true})}` })
      
            let msgContent = "";
            let author = "";
            let authorimg = "";
            let authorlink = "";
            let footer = "";

            const embed = new Discord.MessageEmbed();
      
            await message.channel.send({ 
                
                embeds: [d.addField(datos[0], '\u200B')] 
            
            }).then(async me => {

                let filter = a => a.author.id == message.author.id

                const collector = message.channel.createMessageCollector({ filter, idle: 120000 })
    
                collector.on('collect', async m => {

                    //setTimeout(() => m.delete(), 100)

                    if(m.content.toLowerCase() === 'exit') return collector.stop('Cancelado');
    
                    switch(e) {
    
                        case 0:
    
                            if(m.content.toLowerCase() === 'none'){
                                
                                msgContent = undefined
                              
                            } else {
                                
                                msgContent = m.content
                              
                            }
    
                            e++
    
                            await me.edit({ embeds: [d.addField(datos[e], '\u200B')] }).catch((e) => console.log('Error al editar mensaje: ' + e))

                        break
    
                        case 1:
    
                            if(m.content.toLowerCase() === 'none'){
    
                                e = e + 3
    
                                await me.edit({ embeds: [d.addField(datos[e], '\u200B')] }).catch((e) => console.log('Error al editar mensaje: ' + e))
    
                            } else{
                                
                                author = m.content
    
                                e++
    
                                await me.edit({ embeds: [d.addField(datos[e], '\u200B')] }).catch((e) => console.log('Error al editar mensaje: ' + e))
    
                            }
    
                        break
    
                        case 2:
    
                            if(m.content.toLowerCase() === 'none'){
    
                                authorimg = undefined
    
                                e++
    
                                await me.edit({ embeds: [d.addField(datos[e], '\u200B')] }).catch((e) => console.log('Error al editar mensaje: ' + e))
    
                            } else{
                                
                                if(!m.attachments.first() && !linkregex.test(m.content)){
    
                                    return me.edit({ embeds: [d.addField('<a:Verify2:931463492677017650> | URL inválido', '\u200B')] }).catch((e) => console.log('Error al editar mensaje: ' + e))
    
                                } else if (m.attachments.first()){
                                    
                                    authorimg = m.attachments.first().url;
                                    
                                    e++
    
                                  
                                } else if (linkregex.test(m.content)) {
                                    
                                    authorimg = m.content;
                                    
                                    e++
                                  
                                }
                                 
                                await me.edit({ embeds: [d.addField(datos[e], '\u200B')] }).catch((e) => console.log('Error al editar mensaje: ' + e))
    
                            }
                            
                        break
    
                        case 3:
    
                            if(m.content.toLowerCase() === 'none'){
    
                                authorlink = undefined
    
                                e++
    
                                embed.setAuthor({ name: author, iconURL: authorimg, url: authorlink })
    
                                await me.edit({ embeds: [d.addField(datos[e], '\u200B')] }).catch((e) => console.log('Error al editar mensaje: ' + e))
    
                            } else{
    
                                if (!linkregex.test(m.content)){
    
                                    return me.edit({ embeds: [d.addField('<a:Verify2:931463492677017650> | URL inválido', '\u200B')] }).catch((e) => console.log('Error al editar mensaje: ' + e))
    
                                } else{
    
                                    authorlink = m.content
    
                                    e++
    
                                }
    
                                embed.setAuthor({ name: author, iconURL: authorimg, url: authorlink })
    
                                await me.edit({ embeds: [d.addField(datos[e], '\u200B')] }).catch((e) => console.log('Error al editar mensaje: ' + e))
                               
                            }

                        break
    
                        case 4:
    
                            if(m.content.toLowerCase() === 'none'){
                            
                                e++
    
                            } else{
    
                                embed.setTitle(m.content)
    
                                e++

                            }
                            
                            await me.edit({ embeds: [d.addField(datos[e], '\u200B')] }).catch((e) => console.log('Error al editar mensaje: ' + e))
                        
                        break
    
                        case 5:
    
                            if(m.content.toLowerCase() === 'none'){
                            
                                e++
    
                            } else if(linkregex.test(m.content)){
    
                                embed.setURL(m.content)
    
                                e++
    
                            } else{
    
                                return me.edit({ embeds: [d.addField('<a:Verify2:931463492677017650> | URL inválido', '\u200B')] }).catch((e) => console.log('Error al editar mensaje: ' + e))
    
                            }
    
                            await me.edit({ embeds: [d.addField(datos[e], '\u200B')] }).catch((e) => console.log('Error al editar mensaje: ' + e))
                        
                        break
    
                        case 6:
    
                            if(m.content.toLowerCase() === 'none'){
                            
                                e++
    
                            } else{
    
                                embed.setDescription(m.content)
    
                                e++
    
                            }
                        
                            await me.edit({ embeds: [d.addField(datos[e], '\u200B')] }).catch((e) => console.log('Error al editar mensaje: ' + e))
                        
                        break
    
                        case 7:
    
                            if(m.content.toLowerCase() === 'none'){
                            
                                e++
                                
                                await me.edit({ embeds: [d.addField(datos[e], '\u200B')] }).catch((e) => console.log('Error al editar mensaje: ' + e))
                        
                            } else{
    
                                if(!m.attachments.first() && !linkregex.test(m.content)){
    
                                    return me.edit({ embeds: [d.addField('<a:Verify2:931463492677017650> | URL inválido', '\u200B')] }).catch((e) => console.log('Error al editar mensaje: ' + e))
    
                                } else if(m.attachments.first()){
    
                                    embed.setThumbnail(m.attachments.first().url)
    
                                    e++
    
                                } else if(linkregex.test(m.content)){
                                    
                                    embed.setThumbnail(m.content)
                                   
                                    e++
    
                                }
                                
                                await me.edit({ embeds: [d.addField(datos[e], '\u200B')] }).catch((e) => console.log('Error al editar mensaje: ' + e))
                        
                            }
                        
                        break
    
                        case 8:
    
                            if(m.content.toLowerCase() === 'none'){
                            
                                e++
                                
                                await me.edit({ embeds: [d.addField(datos[e], '\u200B')] }).catch((e) => console.log('Error al editar mensaje: ' + e))
                        
                            } else{
    
                                if(!m.attachments.first() && !linkregex.test(m.content)){
    
                                    return me.edit({ embeds: [d.addField('<a:Verify2:931463492677017650> | URL inválido', '\u200B')] }).catch((e) => console.log('Error al editar mensaje: ' + e))
    
                                } else if(m.attachments.first()){
    
                                    embed.setImage(m.attachments.first().url)
    
                                    e++
    
                                } else if(linkregex.test(m.content)){
                                    
                                    embed.setImage(m.content)
                                   
                                    e++
    
                                }
                                
                                await me.edit({ embeds: [d.addField(datos[e], '\u200B')] }).catch((e) => console.log('Error al editar mensaje: ' + e))
                        
                            }
                        
                        break
    
                        case 9:
    
                            if(m.content.toLowerCase() === 'none'){
                            
                                footer = undefined
    
                                e = e + 2
                                
                            } else{
    
                                footer = m.content
    
                                e++
                                
                            }
                        
                            await me.edit({ embeds: [d.addField(datos[e], '\u200B')] }).catch((e) => console.log('Error al editar mensaje: ' + e))
                        
                        break
    
                        case 10:
    
                            if(m.content.toLowerCase() === 'none'){
                            
                                e++
                                
                                embed.setFooter({ text: footer })
    
                                await me.edit({ embeds: [d.addField(datos[e], '\u200B')] }).catch((e) => console.log('Error al editar mensaje: ' + e))
                        
                            } else{
    
                                if(!m.attachments.first() && !linkregex.test(m.content)){
    
                                    return me.edit({ embeds: [d.addField('<a:Verify2:931463492677017650> | URL inválido', '\u200B')] }).catch((e) => console.log('Error al editar mensaje: ' + e))
    
                                } else if(m.attachments.first()){
    
                                    embed.setFooter({ text: footer, iconURL: m.attachments.first().url })
    
                                    e++
    
                                } else if(linkregex.test(m.content)){
                                    
                                    embed.setFooter({ text: footer, iconURL: m.content })
                                   
                                    e++
    
                                }
                                
                                await me.edit({ embeds: [d.addField(datos[e], '\u200B')] }).catch((e) => console.log('Error al editar mensaje: ' + e))
                        
                            }
                        
                        break
    
                        case 11:
    
                            if(m.content.toLowerCase() === 'none'){
                            
                                embed.setColor('RANDOM')
    
                                e++
                                
                            } else{
    
                                embed.setColor(m.content)
    
                                e++
                                
                            }
                        
                            await me.edit({ embeds: [d.addField(datos[e], '\u200B')] }).catch((e) => console.log('Error al editar mensaje: ' + e))
                        
                        break
    
                        case 12:
    
                            if(m.content.toLowerCase() === 'si'){
    
                                await me.edit({ 
                                    
                                    embeds: [d.addField('Pasando a editar Campos', '\u200B')] 
                                
                                }).then(m => setTimeout(() => m.delete(), 5000)).catch((e) => console.log('Error al editar mensaje: ' + e))
                                
                                collector.stop('Agregará Campos')
    
                            } else if(m.content.toLowerCase() === 'no'){
    
                                collector.stop('Finalizado')
    
                            } else{
    
                                return me.edit({ embeds: [d.addField('<a:Verify2:931463492677017650> | Opción inválida!', 'Ingrese `si` o `no`')] }).catch((e) => console.log('Error al editar mensaje: ' + e))
    
                            }
    
                        break
    
                    }
    
                })
    
                collector.on('end', async (collected, reason) => {
    
                    if(reason === 'Cancelado'){
    
                        me.edit({ embeds: [d.addField('<a:Verify2:931463492677017650> | Menú cancelado con éxito!', '\u200B')] }).catch((e) => console.log('Error al editar mensaje: ' + e))
    
                    } else if(reason === 'Agregará Campos'){
    
                        fields(message, embed).then(embed => {

                            message.channel.send({ embeds: [d.addField('<a:Verify1:931463354357276742> | Embed creado con éxito!', '\u200B')] }).catch((e) => console.log('Error al editar mensaje 10: ' + e))
    
                            channel.send({ content: msgContent, embeds: [embed] }).catch((e) => console.log('Error al enviar embed creado: ' + e))
    
                        }).catch(reason => {
    
                            if(reason === 'idle'){
    
                                me.edit({ embeds: [d.addField('<a:Verify2:931463492677017650> | Tu tiempo acabó!', 'Recuerda que solo tienes 2 minutos por cada valor, vuelve a ejecutar el comando si deseas construir un Embed')] }).catch((e) => console.log('Error al editar mensaje: ' + e))
    
                            } else{
    
                                me.edit({ embeds: [d.addField('<a:Verify2:931463492677017650> | Colector finalizado!', 'Motivo : ' + reason)] }).catch((e) => console.log('Error al editar mensaje: ' + e))
                            
                            }
    
                        })
    
                    } else if(reason === 'Finalizado'){
    
                        me.edit({ embeds: [d.addField('<a:Verify1:931463354357276742> | Embed creado con éxito!', '\u200B')] }).catch((e) => console.log('Error al editar mensaje: ' + e))
    
                        channel.send({ content: msgContent, embeds: [embed] }).catch((e) => console.log('Error al enviar embed creado: ' + e))
    
    
                    } else if(reason === 'idle'){
    
                        me.edit({ embeds: [d.addField('<a:Verify2:931463492677017650> | Tu tiempo acabó!', 'Recuerda que solo tienes 2 minutos por cada valor, vuelve a ejecutar el comando si deseas construir un Embed')] }).catch((e) => console.log('Error al editar mensaje: ' + e))
    
                    } else{
    
                        me.edit({ embeds: [d.addField('<a:Verify2:931463492677017650> | Colector finalizó!', 'Motivo : ' + reason)] }).catch((e) => console.log('Error al editar mensaje: ' + e))
                            
                    }
    
                })

            }).catch((e) => console.log('Error al enviar mensaje 2: '+e))

            function fields(message, embed){

                return new Promise((resolve, reject) => {

                    let o = 1
                    let i = 0
                    let title = ''
                    let desc = ''

                    let array = [

                        'Nombre del Campo:',
                        'Valor del Campo:',
                        '¿Campo en Línea? Si/No',
                        '¿Otro Campo? Si/No'

                    ]

                    message.channel.send({ 
                        
                        embeds: [d.addField(array[i], '\u200B')] 
                    
                    }).then(async me => {

                        let filter = m => m.author.id == message.author.id

                        const collector = message.channel.createMessageCollector({ filter, idle: 120000 })

                        collector.on('collect', m => {

                            //setTimeout(() => m.delete(), 100)

                            switch(i) {

                                case 0:
        
                                    if(m.content.toLowerCase() === 'none'){

                                        title = '\u200B'

                                    } else{

                                        title = m.content

                                    }
        
                                    i++
        
                                    me.edit({ embeds: [d.addField(array[i], '\u200B')] }).catch((e) => console.log('Error al editar mensaje 2: ' + e))
        
                                break
        
                                case 1:

                                    if(m.content.toLowerCase() === 'none'){

                                        desc = '\u200B'

                                    } else{

                                        desc = m.content

                                    }
        
                                    i++
        
                                    me.edit({ embeds: [d.addField(array[i], '\u200B')] }).catch((e) => console.log('Error al editar mensaje 3: ' + e))
        
                                break

                                case 2:
        
                                    if(m.content.toLowerCase() === 'si'){

                                        embed.addField(title, desc, true)

                                        i++

                                    } else if(m.content.toLowerCase() === 'no'){

                                        embed.addField(title, desc)

                                        i++

                                    } else{

                                        return me.edit({ embeds: [d.addField('<a:Verify2:931463492677017650> | Opción inválida!', 'Ingrese `si` o `no`')] }).catch((e) => console.log('Error al editar mensaje 4: ' + e))

                                    }

                                    if(o <= 25){

                                        me.edit({ embeds: [d.addField(array[i], '\u200B')] }).catch((e) => console.log('Error al editar mensaje 5: ' + e))

                                    } else{

                                        collector.stop('OK')
                                
                                    }
                               
                                break

                                case 3:
        
                                    if(m.content.toLowerCase() === 'si'){

                                        o++

                                        title = undefined
                                        desc = undefined
                                        i = 0
                                    
                                        me.edit({ embeds: [d.addField(array[i], '\u200B')] }).catch((e) => console.log('Error al editar mensaje 6: ' + e))
                                    
                                    } else if(m.content.toLowerCase() === 'no'){

                                        collector.stop('OK')

                                    } else{

                                        return me.edit({ embeds: [d.addField('<a:Verify2:931463492677017650> | Opción inválida!', 'Ingrese `si` o `no`')] }).catch((e) => console.log('Error al editar mensaje 7: ' + e))

                                    }

                                break
                            
                            }

                        })

                        collector.on('end', (collected, reason) => {

                            if(reason === 'OK'){
                                
                                message.channel.send({ embeds: [d.addField('<a:Verify1:931463354357276742> | Embed creado con éxito!', '\u200B')] }).catch((e) => console.log('Error al editar mensaje 10: ' + e))
                                resolve(embed)

                            } else{

                                reject(reason)

                            }
                        
                        })
                    
                        
                    }).catch((e) => console.log('Error al enviar mensaje 3: '+e))

                })

            }

        }
    
    }

}