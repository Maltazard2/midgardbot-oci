const Discord = require('discord.js');

module.exports = {

    name: 'user',
    description: '🕵️‍♂️ Muestra la información de un usuario en el servidor.',
    options: [
        { 

            name: 'usuario', 
            description: 'Menciona a un usuario', 
            type: 'USER',
            required: 'false',

        },
    ],

    run: async (client, interaction) => {
        
        const wait = require('util').promisify(setTimeout)

        try {

            const userm = interaction.options.getUser('usuario')

            const estado = {

                online: 'En línea 🟢', 
                idle: 'Ausente 🟡',
                dnd: 'No Molestar 🔴',
                offline: 'Desconectado ⚫',
                invisible: 'Desconectado ⚫',
                null: 'Desconectado ⚫'
    
            }
    
            let array = []

            if(!userm){
                
                var user = interaction.user;
                var roles = interaction.member.roles.cache.map(roles => `\`${roles.name}\``).join(', ')
                var playing 
                var status = estado[interaction.member.presence.status] ? estado[interaction.member.presence.status] : 'Desconectado ⚫'

                if(roles.length >= 1000){

                    roles = '¡Demasiados roles por aquí! 🎭'

                }

                if(status === 'Desconectado ⚫'){

                    playing = 'Desconectado ⚫'

                } else {

                    for(let activity of interaction.member.presence.activities){

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

                    playing = array.join('\n')

                }

                const embed = new Discord.MessageEmbed()
                .setThumbnail(user.displayAvatarURL({ dynamic: true }).replace('webp','png'))
                .setAuthor({ name: 'Información del Usuario', iconURL: client.user.avatarURL({ dynamic: true }) })
                .addField('Actividad:', playing ? playing : 'Nada', true)
                .addField('Estado:', status ? status : 'Ninguno', true)
                .addField('Color:', interaction.member.displayHexColor ? interaction.member.displayHexColor : 'Ninguno', true)
                .addField('Usuario:', user.username+'#'+user.discriminator, true)
                .addField('Apodo:', interaction.guild.members.resolve(user.id).nickname ? interaction.guild.members.resolve(user.id).nickname : 'No tiene', true)
                .addField('ID:', user.id, true)
                .addField('Cuenta Creada:', user.createdAt.toLocaleDateString()+', '+user.createdAt.toLocaleTimeString(), true)
                .addField('Fecha de Ingreso:', interaction.member.joinedAt.toLocaleDateString()+', '+interaction.member.joinedAt.toLocaleTimeString(), true)
                .addField('Roles:', roles ? roles : 'No tiene roles')
                .setColor(interaction.member.displayColor ? interaction.member.displayColor : 'RANDOM')
                .setTimestamp(new Date())
                .setFooter({ text: `${interaction.guild.name}`, iconURL: interaction.guild.iconURL() ? interaction.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'})
             
                await interaction.deferReply().catch((e) => console.log('Error al usar slash commands: '+e))
                await wait(500).catch((e) => console.log('Error al usar slash commands: '+e))
                await interaction.editReply({ embeds: [embed] }).catch((e) => console.log('Error al usar slash commands: '+e))
                  
            } else {

                var roles = interaction.guild.members.resolve(userm.id).roles.cache.map(roles => `\`${roles.name}\``).join(', ')
                var playing
                var status = estado[interaction.guild.members.resolve(userm.id).presence.status] ? estado[interaction.guild.members.resolve(userm.id).presence.status] : 'Desconectado ⚫'

                if(roles.length >= 1000){

                    roles = '¡Demasiados roles por aquí! 🎭'

                }

                if(status === 'Desconectado ⚫'){

                    playing = 'Desconectado ⚫'

                } else {

                    for(let activity of interaction.guild.members.resolve(userm.id).presence.activities){

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

                    playing = array.join('\n')

                }

                const embed = new Discord.MessageEmbed()
                .setThumbnail(userm.displayAvatarURL({ dynamic: true }).replace('webp','png'))
                .setAuthor({ name: 'Información del Usuario', iconURL: client.user.avatarURL({ dynamic: true }) })
                .addField('Actividad:', playing ? playing : 'Nada', true)
                .addField('Estado:', status ? status : 'Ninguno', true)
                .addField('Color:', interaction.guild.members.resolve(userm.id).displayHexColor ? interaction.guild.members.resolve(userm.id).displayHexColor : 'Ninguno', true)
                .addField('Usuario:', userm.username+'#'+userm.discriminator, true)
                .addField('Apodo:', interaction.guild.members.resolve(userm.id).nickname ? interaction.guild.members.resolve(userm.id).nickname : 'No tiene', true)
                .addField('ID:', userm.id, true)
                .addField('Cuenta Creada:', userm.createdAt.toLocaleDateString()+', '+userm.createdAt.toLocaleTimeString(), true)
                .addField('Fecha de Ingreso:', interaction.guild.members.resolve(userm.id).joinedAt.toLocaleDateString()+', '+interaction.guild.members.resolve(userm.id).joinedAt.toLocaleTimeString(), true )
                .addField('Roles:', roles ? roles : 'No tiene roles')
                .setColor(interaction.guild.members.resolve(userm.id).displayColor ? interaction.guild.members.resolve(userm.id).displayColor : 'RANDOM')
                .setTimestamp(new Date())
                .setFooter({ text: `${interaction.guild.name}`, iconURL: interaction.guild.iconURL() ? interaction.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'})
             
                await interaction.deferReply().catch((e) => console.log('Error al usar slash commands: '+e))
                await wait(500).catch((e) => console.log('Error al usar slash commands: '+e))
                await interaction.editReply({ embeds: [embed] }).catch((e) => console.log('Error al usar slash commands: '+e))
                
            }
                   
        } catch (error) {
            
            await interaction.deferReply({ephemeral: true}).catch((e) => console.log('Error al usar slash commands: '+e))
            await wait(500).catch((e) => console.log('Error al usar slash commands: '+e))
            await interaction.editReply({ content: '<a:Verify2:931463492677017650> | ¡Ocurrió un error inesperado. Por favor, inténtelo de nuevo! ', ephemeral: true}).catch((e) => console.log('Error al usar slash commands: '+e))
            
            console.log('Error en el SC user: '+error)

        }

    }

}