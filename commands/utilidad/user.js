module.exports =  {
    
    name: 'user',
    aliases: ['infouser','usuario'],
    description: '🕵️‍♂️ Muestra la información de un usuario en el servidor.',

    async execute(client, message, args, Discord) {

        let userm = message.mentions.users.first()

        if(!userm){

            try {
          
                userm = await client.users.fetch(args[0])

            } catch (error) {

                userm = message.author
          
            }

        }

        if(userm.bot) return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
            
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | No puedes ver la info de un bot!`)
        
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        const estado = {

            online: 'En línea 🟢', 
            idle: 'Ausente 🟡',
            dnd: 'No Molestar 🔴',
            offline: 'Desconectado ⚫',
            invisible: 'Desconectado ⚫',
            null: 'Desconectado ⚫'

        }

        let array = []

        if(!userm || userm.id === message.author.id) {

            try {

                var user = message.author;
                var roles = message.member.roles.cache.map(roles => `\`${roles.name}\``).join(', ')
                var playing 
                var status = estado[message.member.presence.status] ? estado[message.member.presence.status] : 'Desconectado ⚫'

                if(roles.length >= 1000){

                    roles = '¡Demasiados roles por aquí! 🎭'

                }

                if(status === 'Desconectado ⚫'){

                    playing = 'Desconectado ⚫'

                } else {

                    for(let activity of message.member.presence.activities){

                        switch(activity.type){

                            case 'CUSTOM_STATUS':

                            array.push(`Estado Personalizado: ${activity.emoji || ''} ${activity.state || ''}`)

                            break
                        }

                        switch(activity.type){

                            case 'PLAYING':

                            array.push(`Jugando: ${activity.name || ''} ${activity.details || ''} ${activity.state || ''} `)

                            break
                        }

                        switch(activity.type){

                            case 'LISTENING':

                            array.push(`Escuchando: ${activity.name || ''} ${activity.details || ''} ${activity.state} `)

                            break
                        }

                        switch(activity.type){

                            case 'WATCHING':

                            array.push(`Viendo: ${activity.name || ''} ${activity.details || ''} ${activity.state} `)

                            break
                        }

                        switch(activity.type){

                            case 'STREAMING':

                            array.push(`Streameando: ${activity.name || ''} ${activity.details || ''} ${activity.state} `)

                            break
                        }

                    }

                    //playing = message.member.presence.activities[0] ? message.member.presence.activities[0].name : 'Nada'
                    playing = array.join('\n')

                }

                const embed = new Discord.MessageEmbed()
                .setThumbnail(user.displayAvatarURL() ? user.displayAvatarURL({ dynamic: true }).replace('webp','png') : client.user.avatarURL({ dynamic: true }) )
                .setAuthor({ name: 'Información del Usuario', iconURL: client.user.avatarURL({ dynamic: true }) })
                .addField('Actividad:', playing ? playing : 'Nada', true)
                .addField('Estado:', status ? status : 'Ninguno', true)
                .addField('Color:', message.member.displayHexColor ? message.member.displayHexColor : 'Ninguno', true)
                .addField('Usuario:', user.username+'#'+user.discriminator, true)
                .addField('Apodo:', message.guild.members.resolve(user.id).nickname ? message.guild.members.resolve(user.id).nickname : 'No tiene', true)
                .addField('ID:', user.id, true)
                .addField('Cuenta Creada:', user.createdAt.toLocaleDateString()+', '+user.createdAt.toLocaleTimeString(), true)
                .addField('Fecha de Ingreso:', message.member.joinedAt.toLocaleDateString()+', '+message.member.joinedAt.toLocaleTimeString(), true)
                .addField('Roles:', roles ? roles : 'No se encontraron roles')
                .setColor(message.member.displayColor ? message.member.displayColor : 'RANDOM')
                .setTimestamp(new Date())
                .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })

                return message.reply({ allowedMentions: { repliedUser: false}, embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
                
            } catch (error) {

                console.log('Error al obtener usuario: '+message.author.id+' - Error: '+error)
                message.reply('Hubo un error al obtener su usuario. Por favor inténtelo de nuevo!').catch((e) => console.log('Error al enviar mensaje: '+e))
                
            }

            
        } else{

            try {
                
                var roles = message.guild.members.resolve(userm.id).roles.cache.map(roles => `\`${roles.name}\``).join(', ')
                var playing
                var status = estado[message.guild.members.resolve(userm.id).presence.status] ? estado[message.guild.members.resolve(userm.id).presence.status] : 'Desconectado ⚫'

                if(roles.length >= 1000){

                    roles = '¡Demasiados roles por aquí! 🎭'

                }

                if(status === 'Desconectado ⚫'){

                    playing = 'Desconectado ⚫'

                } else {

                    for(let activity of message.guild.members.resolve(userm.id).presence.activities){

                        switch(activity.type){

                            case 'CUSTOM_STATUS':

                            array.push(`Estado Personalizado: ${activity.emoji || ''} ${activity.state || ''}`)

                            break
                        }

                        switch(activity.type){

                            case 'PLAYING':

                            array.push(`Jugando: ${activity.name || ''} ${activity.details || ''} ${activity.state || ''} `)

                            break
                        }

                        switch(activity.type){

                            case 'LISTENING':

                            array.push(`Escuchando: ${activity.name || ''} ${activity.details || ''} ${activity.state} `)

                            break
                        }

                        switch(activity.type){

                            case 'WATCHING':

                            array.push(`Viendo: ${activity.name || ''} ${activity.details || ''} ${activity.state} `)

                            break
                        }

                        switch(activity.type){

                            case 'STREAMING':

                            array.push(`Streameando: ${activity.name || ''} ${activity.details || ''} ${activity.state} `)

                            break
                        }

                    }

                    //playing = message.guild.members.resolve(userm.id).presence.activities[0] ? message.guild.members.resolve(userm.id).presence.activities[0].name : 'Nada'
                    playing = array.join('\n')

                }

                const embed = new Discord.MessageEmbed()
                .setThumbnail(userm.displayAvatarURL() ? userm.displayAvatarURL({ dynamic: true }).replace('webp','png') : client.user.avatarURL({ dynamic: true }) )
                .setAuthor({ name: 'Información del Usuario', iconURL: client.user.avatarURL({ dynamic: true }) })
                .addField('Actividad:', playing ? playing : 'Nada', true)
                .addField('Estado:', status ? status : 'Ninguno', true)
                .addField('Color:', message.guild.members.resolve(userm.id).displayHexColor ? message.guild.members.resolve(userm.id).displayHexColor : 'Ninguno', true)
                .addField('Usuario:', userm.username+'#'+userm.discriminator, true)
                .addField('Apodo:', message.guild.members.resolve(userm.id).nickname ? message.guild.members.resolve(userm.id).nickname : 'No tiene', true)
                .addField('ID:', userm.id, true)
                .addField('Cuenta Creada:', userm.createdAt.toLocaleDateString()+', '+userm.createdAt.toLocaleTimeString(), true)
                .addField('Fecha de Ingreso:', message.guild.members.resolve(userm.id).joinedAt.toLocaleDateString()+', '+message.guild.members.resolve(userm.id).joinedAt.toLocaleTimeString(), true )
                .addField('Roles:', roles ? roles : 'No se encontraron roles')
                .setColor(message.guild.members.resolve(userm.id).displayColor ? message.guild.members.resolve(userm.id).displayColor : 'RANDOM')
                .setTimestamp(new Date())
                .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })

                message.reply({ allowedMentions: { repliedUser: false}, embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
      
            } catch (error) {

                console.log('Error al obtener usuario: '+message.author.id+' - Error: '+error)
                message.reply('Hubo un error al obtener el usuario. Por favor inténtelo de nuevo!').catch((e) => console.log('Error al enviar mensaje: '+e))
                
            }
        }

    }

}