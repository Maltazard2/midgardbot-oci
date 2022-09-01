const Discord = require('discord.js');

module.exports = {

    name: 'reminder',
    description: '⏰ Establece un recordatorio.',
    options: [
        { 

            name: 'tiempo', 
            description: '¿En cuánto quieres que te recuerde? (Termine en s,m,h)', 
            type: 'STRING',
            required: 'true',

        },
        { 

            name: 'mensaje', 
            description: '¿Qué quieres que te recuerde?', 
            type: 'STRING',
            required: 'true',

        },
    ],

    run: async (client, interaction) => {
        
        const wait = require('util').promisify(setTimeout)

        try {

            let time = interaction.options.getString('tiempo');
            let mensaje = interaction.options.getString('mensaje');

            function reminder() {

                const e = new Discord.MessageEmbed()
                .setAuthor({name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL()})
                .setColor('RANDOM')
                .setDescription('<a:exclama2:880930071731392512> | Tengo este recordatorio para ti: \n\n> ' + mensaje)
            
                interaction.followUp({ content: '<@' + interaction.user.id + '>' ,embeds: [e] }).catch((e) => console.log('Error al usar slash commands: '+e))

            }

            switch (time.slice(-1)){
    
                case 's': {
            
                    if (time.slice(0, -1) > 60){
                  
                        const e = new Discord.MessageEmbed()
                        .setAuthor({name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL()})
                        .setColor('RED')
                        .setDescription(`<a:Verify2:931463492677017650> | El tiempo no puede ser mayor de 60 segundos. Utiliza (m, s, h)!`)
        
                        await interaction.deferReply({ephemeral: true}).catch((e) => console.log('Error al usar slash commands: '+e))
                        await wait(500).catch((e) => console.log('Error al usar slash commands: '+e))
                        await interaction.editReply({ embeds: [e], ephemeral: true}).catch((e) => console.log('Error al usar slash commands: '+e))
                  
                    } else {

                        var msDelay = time.slice(0, -1)*1000

                        const e = new Discord.MessageEmbed()
                        .setAuthor({name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL()})
                        .setColor('RANDOM')
                        .setDescription('<a:reloj:931434883916652564> | Acabas de establecer un recordatorio en ' + time.slice(0, -1) + ' segundos:\n\n<a:flech:931432469935312937> '+mensaje)
        
                        await interaction.deferReply().catch((e) => console.log('Error al usar slash commands: '+e))
                        await wait(500).catch((e) => console.log('Error al usar slash commands: '+e))
                        await interaction.editReply({ embeds: [e] }).catch((e) => console.log('Error al usar slash commands: '+e))
        
                        setTimeout(reminder, msDelay)
                      
                        break

                    }
        
                }

                case 'm': {
            
                    if (time.slice(0, -1) > 60){
                  
                        const e = new Discord.MessageEmbed()
                        .setAuthor({name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL()})
                        .setColor('RED')
                        .setDescription(`<a:Verify2:931463492677017650> | El tiempo no puede ser mayor de 60 minutos. Utiliza (m, s, h)!`)
        
                        await interaction.deferReply({ephemeral: true}).catch((e) => console.log('Error al usar slash commands: '+e))
                        await wait(500).catch((e) => console.log('Error al usar slash commands: '+e))
                        await interaction.editReply({ embeds: [e], ephemeral: true}).catch((e) => console.log('Error al usar slash commands: '+e))
                  
                    } else {

                        var msDelay = time.slice(0, -1)*60000

                        const e = new Discord.MessageEmbed()
                        .setAuthor({name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL()})
                        .setColor('RANDOM')
                        .setDescription('<a:reloj:931434883916652564> | Acabas de establecer un recordatorio en ' + time.slice(0, -1) + ' minutos:\n\n<a:flech:931432469935312937> '+mensaje)
        
                        await interaction.deferReply().catch((e) => console.log('Error al usar slash commands: '+e))
                        await wait(500).catch((e) => console.log('Error al usar slash commands: '+e))
                        await interaction.editReply({ embeds: [e] }).catch((e) => console.log('Error al usar slash commands: '+e))
        
                        setTimeout(reminder, msDelay)
                      
                        break

                    }
        
                }
            
                case 'h': {
            
                    if (time.slice(0, -1) > 24){
                  
                        const e = new Discord.MessageEmbed()
                        .setAuthor({name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL()})
                        .setColor('RED')
                        .setDescription(`<a:Verify2:931463492677017650> | El tiempo no puede ser mayor de 24 horas. Utiliza (m, s, h)!`)
        
                        await interaction.deferReply({ephemeral: true}).catch((e) => console.log('Error al usar slash commands: '+e))
                        await wait(500).catch((e) => console.log('Error al usar slash commands: '+e))
                        await interaction.editReply({ embeds: [e], ephemeral: true}).catch((e) => console.log('Error al usar slash commands: '+e))
                  
                    } else {

                        var msDelay = time.slice(0, -1)*3600000

                        const e = new Discord.MessageEmbed()
                        .setAuthor({name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL()})
                        .setColor('RANDOM')
                        .setDescription('<a:reloj:931434883916652564> | Acabas de establecer un recordatorio en ' + time.slice(0, -1) + ' horas:\n\n<a:flech:931432469935312937> '+mensaje)
        
                        await interaction.deferReply().catch((e) => console.log('Error al usar slash commands: '+e))
                        await wait(500).catch((e) => console.log('Error al usar slash commands: '+e))
                        await interaction.editReply({ embeds: [e] }).catch((e) => console.log('Error al usar slash commands: '+e))
        
                        setTimeout(reminder, msDelay)
                      
                        break

                    }
        
                }
            
                default: {
            
                    const e = new Discord.MessageEmbed()
                    .setAuthor({name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL()})
                    .setColor('RED')
                    .setDescription('<a:Verify2:931463492677017650> | El tiempo debe ser:\n\n> <1 - 60>s\n> <1 - 60>m\n> <1 -  24>h\n\n')
                  
                    await interaction.deferReply({ ephemeral: true}).catch((e) => console.log('Error al usar slash commands: '+e))
                    await wait(500).catch((e) => console.log('Error al usar slash commands: '+e))
                    await interaction.editReply({ embeds: [e], ephemeral: true }).catch((e) => console.log('Error al usar slash commands: '+e))
        
                    break
                  
                }
        
            }
            
            
        } catch (error) {
            
            await interaction.deferReply({ephemeral: true}).catch((e) => console.log('Error al usar slash commands: '+e))
            await wait(500).catch((e) => console.log('Error al usar slash commands: '+e))
            await interaction.editReply({ content: '<a:Verify2:931463492677017650> | ¡Ocurrió un error inesperado. Por favor, inténtelo de nuevo! ', ephemeral: true}).catch((e) => console.log('Error al usar slash commands: '+e))
            
            console.log('Error en el SC reminder: '+error)

        }

    }

}