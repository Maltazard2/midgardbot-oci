const { Permissions } = require('discord.js');

module.exports =  {
    
    name: 'clear',
    aliases: ['limpiar','borrar'],
    description: '🧹 Elimina mensajes de un canal.',
    category: 'Moderación 🔒',
    use: '<prefix>clear <cantidad>',
    owner: false,
    vip: false,
    slash: false,
  
    async execute(client, message, args, Discord) {

        let logschannel = client.channels.cache.get('965156885558878319')
        
        if(!message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) return message.reply({ embeds: [

            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
            .setColor('RED')
            .setDescription('<a:Verify2:931463492677017650> | No tienes permisos para ejecutar este comando')
    
        ]}).then(m => setTimeout(() => m.delete(), 10000)).catch((e) => console.log('Error al enviar mensaje: '+e))
        
        if(!message.guild.me.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) return message.reply({ embeds: [

            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
            .setColor('RED')
            .setDescription('<a:Verify2:931463492677017650> | No tengo permiso para ejecutar este comando. Permiso faltante: MANAGE_MESSAGES (Gestionar Mensajes)')
    
        ]}).then(m => setTimeout(() => m.delete(), 10000)).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        if (!args[0]) return message.reply({ embeds: [

            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
            .setColor('RED')
            .setDescription('<a:Verify2:931463492677017650> | Por Favor, especifica una cantidad')
    
        ]}).then(m => setTimeout(() => m.delete(), 5000)).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        if (isNaN(args[0])) return message.reply({ embeds: [

            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
            .setColor('RED')
            .setDescription('<a:Verify2:931463492677017650> | Por favor, ingresa un número')
    
        ]}).then(m => setTimeout(() => m.delete(), 5000)).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        if (parseInt(args[0]) > 100) return message.reply({ embeds: [

            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
            .setColor('RED')
            .setDescription('<a:Verify2:931463492677017650> | No puedo eliminar más de 100 mensajes!')
    
        ]}).then(m => setTimeout(() => m.delete(), 5000)).catch((e) => console.log('Error al enviar mensaje: '+e))

        if (parseInt(args[0]) < 1) return message.reply({ embeds: [

            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
            .setColor('RED')
            .setDescription('<a:Verify2:931463492677017650> | Ingresa un número mayor a 0!')
    
        ]}).then(m => setTimeout(() => m.delete(), 5000)).catch((e) => console.log('Error al enviar mensaje: '+e))

        let purge = parseInt(args[0]) + 1

        // await message.channel.messages.fetch({ limit: purge }).then(
              
        //     (messages) => {

        //         message.channel.bulkDelete(messages)
        //         .catch((e) => message.channel.send('Ocurrió un error al eliminar algunos mensajes: Debido a las limitaciones de Discord, no es posible eliminar mensajes enviados hace más de 14 días!'))
                
        //     }
            
        // ).catch((e) => console.log('Error al fetchar mensajes: '+e))

        try {
                
            for (let i = 0; i < Math.ceil(purge / 99); i++){ 
              
                const msgs = await message.channel.messages.fetch({
                
                    limit: Math.round(purge / Math.ceil(purge / 99)),
              
                });
              
                await message.channel.bulkDelete(
                
                    msgs.filter((m) => m.deletable)
              
                ).then(messages => {

                    let size = messages.size - 1
                    message.channel.send({ content: '```'+ size +' mensajes han sido borrados.'+'```' })
                    .then(msg => setTimeout(() => msg.delete(), 5000))
                    .catch((e) => {
                        
                        console.log('Error al enviar mensaje de confirmación de comando Clear: ' + e)
                        logschannel.send({ content: 'Error al enviar mensaje de confirmación de comando Clear: ' + e }).catch((e) => console.log('Error al enviar mensaje: '+e))
                        
                    })

                }).catch((e) => {

                    message.channel.send({ content: 'Ocurrió un error al eliminar algunos mensajes: Debido a las limitaciones de Discord, no es posible eliminar mensajes enviados hace más de 14 días!' })
                    .then(msg => setTimeout(() => msg.delete(), 5000))
                    .catch((e) => {
                        
                        console.log('Error al enviar mensaje de no confirmación de comando Clear: ' + e)
                        logschannel.send({ content: 'Error al enviar mensaje de no confirmación de comando Clear: ' + e }).catch((e) => console.log('Error al enviar mensaje: '+e))
                        
                    })
                    logschannel.send({ content: 'Error al eliminar mensajes en comando clear: ' + e }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
                })
                
            } 
    
        } catch (error) {
            
            console.log('Error al ejecutar todo el comando clear: ' + error)
            logschannel.send({ content: 'Error al ejecutar todo el comando clear: ' + error })
    
        }

        // message.channel.bulkDelete(purge).then(messages => {

        //     let size = messages.size - 1
        //     message.channel.send()
        //     .then(msg => setTimeout(() => msg.delete(), 5000))
        //     .catch((e) => console.log('Error al enviar mensaje: '+e))
        
        // }).catch(e => message.channel.send())

    }

}