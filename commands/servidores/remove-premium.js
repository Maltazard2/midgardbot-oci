const serverSchema = require('../../models/serverSchema');
const { Permissions, MessageButton } = require('discord.js');

module.exports = { 

    name: 'remove-premium',
    aliases: ['delete-premium'],
    description: '💎 Quitar Premium a un servidor.',
  
    async execute(client, message, args, Discord) {

        let buscarserver, server, logschannel, ownerserver, canalmbp

        var idm = ['753435606410985573','683501310527668228']

        if(!idm.some(id => message.author.id == id)) return message.reply({embeds: [
       
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | ¡Solo los Administradores del Bot pueden utilizar este comando.!`)
      
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        if(!args[0]) return message.reply({embeds: [
       
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | ¡Debes ingresar la id del servidor!`)
      
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        server = client.guilds.cache.get(args[0])

        if(!server) return message.reply({embeds: [
       
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | ¡Servidor NO encontrado!`)
      
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        canalmbp = client.channels.cache.get('965157413349130250')
        logschannel = client.channels.cache.get('965156885558878319')
        ownerserver = await server.fetchOwner().catch((e) => console.log('Error al obtener owner: '+e))
        ownerserver = client.users.cache.get(ownerserver.id)

        try {
            
            buscarserver = await serverSchema.findOne({idserver: server.id})

            if(buscarserver){

                if(buscarserver.premium === false){

                    return message.reply({embeds: [
       
                        new Discord.MessageEmbed()
                        .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                        .setColor('RED')
                        .setDescription(`<a:Verify2:931463492677017650> | ¡Servidor NO es Premium!`)
                  
                    ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
            
                } else{

                    console.log('========================= ACTUALIZACIÓN DE SERVIDOR =========================');
       
                    let update = await serverSchema.findOneAndUpdate({idserver: server.id},
                        {
    
                            idserver: server.id,
                            servername: server.name,
                            ownerid: ownerserver.id,
                            ownername: ownerserver.tag,
                            premium: false,
    
                        })
    
                    update.save()
    
                    console.log('Servidor actualizado ===> Servidor: '+ server.name)
       
                    console.log('========================= ACTUALIZACIÓN DE SERVIDOR =========================');

                }

            } else{

                console.log('========================= REGISTRO DE SERVIDOR =========================');
            
                let setserver = await serverSchema.create({
    
                    idserver: server.id,
                    servername: server.name,
                    ownerid: ownerserver.id,
                    ownername: ownerserver.tag,
                    premium: false,
        
                })
        
                setserver.save();
                    
                console.log('Servidor registrado ===> Servidor: '+ server.name)
       
                console.log('========================= REGISTRO DE SERVIDOR =========================');
       
            }

        } catch (error) {
            
            console.log('Error al Quitar premium en servidor: ' + server.name + ' - ' + error)
            logschannel.send({ content: 'Error al Quitar premium en servidor: ' + server.name + ' - ' + error })

            const e4 = new Discord.MessageEmbed()
            .setAuthor({ name: 'MidgardBot', iconURL: client.user.avatarURL({ dynamic: true }) })
            .setThumbnail(server.iconURL() ? server.iconURL({ dynamic: true, size: 2048 }) : client.user.avatarURL({ dynamic: true }))
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | Ocurrió un error inesperado, por favor intenta de nuevo!\n> Error: `+error)
            .setFooter({ text: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
            .setTimestamp()

            setTimeout(() => {
      
                message.reply({ allowedMentions: { repliedUser: false}, embeds: [e4]}).catch((e) => {
                    
                    console.log('Error al enviar mensaje de remove premium: '+e)
                    logschannel.send({ content: 'Error al enviar mensaje de remove premium ' + e })

                })

            }, 5000)

        }

        const embedinicial = new Discord.MessageEmbed()
        .setAuthor({ name: 'MidgardBot', iconURL: client.user.avatarURL({ dynamic: true }) })
        .setColor('YELLOW')
        .setThumbnail(message.guild.iconURL() ? message.guild.iconURL({ dynamic: true, size: 2048 }) : client.user.avatarURL({ dynamic: true }))
        .setDescription('<a:cargando:960474774281256980> | **Quitando premium...**')
        .setFooter({ text: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
        .setTimestamp()

        message.reply({ allowedMentions: { repliedUser: false}, embeds: [embedinicial]})
        .then(async m => {

            const embedcambio = new Discord.MessageEmbed()
            .setAuthor({ name: 'MidgardBot', iconURL: client.user.avatarURL({ dynamic: true }) })
            .setColor('GREEN')
            .setThumbnail(server.iconURL() ? server.iconURL({ dynamic: true, size: 2048 }) : client.user.avatarURL({ dynamic: true }))
            .setDescription('<a:Verify1:931463354357276742> | **Premium quitando con éxito:** ')
            .addField('\u200B','<a:barra:889717671044726824><a:barra:889717671044726824><a:barra:889717671044726824><a:barra:889717671044726824><a:barra:889717671044726824><a:barra:889717671044726824><a:barra:889717671044726824><a:barra:889717671044726824><a:barra:889717671044726824><a:barra:889717671044726824>')
            .addField('Servidor: ', '<a:flech:931432469935312937> `' + server.name + '`')
            .addField('Id: ', '<a:flech:931432469935312937> `' + server.id + '`\n<a:barra:889717671044726824><a:barra:889717671044726824><a:barra:889717671044726824><a:barra:889717671044726824><a:barra:889717671044726824><a:barra:889717671044726824><a:barra:889717671044726824><a:barra:889717671044726824><a:barra:889717671044726824><a:barra:889717671044726824>')
            .setFooter({ text: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
            .setTimestamp()

            setTimeout(() => {
          
                m.edit({ allowedMentions: { repliedUser: false}, embeds: [embedcambio]}).catch((e) => console.log('Error al enviar mensaje editado en remove-premium: '+e))
                    
            }, 5000)

            try {
            
                let datos = []
                let c = 1
                    
                client.guilds.cache.forEach(async (s)=>{
                        
                    let bx = await serverSchema.findOne({idserver: s.id, premium: true})

                    if(bx){
                            
                        datos.push('**' + c + '.** Nombre : `' + s.name + '` - Id : `' + s.id + '`')
                        c = c + 1

                    }
                    
                })

                setTimeout(() => {
          
                    const embedmbp = new Discord.MessageEmbed()
                    .setThumbnail('https://i.imgur.com/Uq0IPAU.gif')
                    .setAuthor({ name: 'MidgardBot', iconURL: client.user.avatarURL({ dynamic: true}) })
                    .setTitle('💎  Lista de servidores Premium  💎')
                    .setDescription('\n\n> ' + datos.join('\n> \n> '))
                    .setColor('RANDOM')
                    .setTimestamp(new Date())
                    .setFooter({ text: `Nací para crecer`, iconURL: client.user.avatarURL({ dynamic: true}) })
                         
                    canalmbp.bulkDelete(2)
                    canalmbp.send({ embeds: [embedmbp] }).catch((e) => console.log('Error al enviar mensaje: '+e))
                    canalmbp.send('https://images-ext-2.discordapp.net/external/9iPHKFXXnKKSQpcFazlW79dr1zbbtdo7QT7-xxtfDY4/%3Fwidth%3D600%26height%3D86/https/media.discordapp.net/attachments/897951731462316073/915663567213199390/bar-1.gif?width=450&height=65').catch((e) => console.log('Error al enviar mensaje: '+e))
                        
                }, 10000)
                    
            } catch (error) {
                    
                console.log('Ocurrió un error al buscar la lista de premium: '+ error)
        
                const e = new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | Ocurrió un error inesperado, por favor intenta de nuevo!\n> Error: `+error)
                .setTimestamp()
        
                canalmbp.bulkDelete(2)
                canalmbp.send({ embeds: [e] }).catch((e) => console.log('Error al enviar mensaje: '+e))
                return canalmbp.send('https://images-ext-2.discordapp.net/external/9iPHKFXXnKKSQpcFazlW79dr1zbbtdo7QT7-xxtfDY4/%3Fwidth%3D600%26height%3D86/https/media.discordapp.net/attachments/897951731462316073/915663567213199390/bar-1.gif?width=450&height=65').catch((e) => console.log('Error al enviar mensaje: '+e))
                    
            }

        })
        .catch((e) => console.log('Error al enviar mensaje: '+e))

    }

}