const Discord = require('discord.js');

module.exports = {

    name: 'conteo',
    description: '⏳ Realizar una cuenta regresiva.',
    options: [
        { 

            name: 'número', 
            description: 'Ingresa un número', 
            type: 'INTEGER',
            required: 'true',

        },
    ],

    run: async (client, interaction) => {
        
        const wait = require('util').promisify(setTimeout)

        try {

            let time = interaction.options.getInteger('número');

            if(time <= 0){

                const e = new Discord.MessageEmbed()
                .setAuthor({name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL()})
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | **Ingresa solo número mayores a 0**`)
        
                await interaction.deferReply({ephemeral: true}).catch((e) => console.log('Error al usar slash commands: '+e))
                await wait(500).catch((e) => console.log('Error al usar slash commands: '+e))
                await interaction.editReply({ embeds: [e], ephemeral: true}).catch((e) => console.log('Error al usar slash commands: '+e))

            } else {

                if(time < 10){

                    const e = new Discord.MessageEmbed()
                    .setAuthor({name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL()})
                    .setColor('RED')
                    .setDescription(`<a:Verify2:931463492677017650> | **No puedo contar menos de 10 segundos**`)
            
                    await interaction.deferReply({ephemeral: true}).catch((e) => console.log('Error al usar slash commands: '+e))
                    await wait(500).catch((e) => console.log('Error al usar slash commands: '+e))
                    await interaction.editReply({ embeds: [e], ephemeral: true}).catch((e) => console.log('Error al usar slash commands: '+e))
    
                } else {

                    if(time > 7200){

                        const e = new Discord.MessageEmbed()
                        .setAuthor({name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL()})
                        .setColor('RED')
                        .setDescription(`<a:Verify2:931463492677017650> | **No puedo contar más de 2 horas**`)
                
                        await interaction.deferReply({ephemeral: true}).catch((e) => console.log('Error al usar slash commands: '+e))
                        await wait(500).catch((e) => console.log('Error al usar slash commands: '+e))
                        await interaction.editReply({ embeds: [e], ephemeral: true}).catch((e) => console.log('Error al usar slash commands: '+e))
        
                    } else {

                        await interaction.deferReply().catch((e) => console.log('Error al usar slash commands: '+e))
                        await wait(500).catch((e) => console.log('Error al usar slash commands: '+e))
                        await interaction.editReply(String(time)).catch((e) => console.log('Error al usar slash commands: '+e))
        
                        if(time < 60) {
                    
                            time -= 2
                            
                            let count1 = setInterval(async () => {
                    
                                if(time > 0){

                                    await interaction.editReply(String(time)).catch((e) => console.log('Error al enviar mensaje editado de conteo: '+e))
                                   
                                    time -= 2
                
                                } else if(time <= 0){
                
                                    await interaction.editReply(`Se acabó el tiempo ⌛`).catch((e) => console.log('Error al enviar mensaje editado de conteo: '+e))
                
                                    interaction.followUp(`${interaction.user}... El conteo regresivo, ha llegado a su fin.`).catch((e) => console.log('Error al enviar mensaje conteo llegó a su fin: '+e))
                
                                    clearInterval(count1)
                
                                }

                                // await interaction.editReply(time <= 0 ? `Se acabó el tiempo ⌛` : String(time)).catch((e) => console.log('Error al usar slash commands: '+e))
                                // time <= 0 ? interaction.followUp(`${interaction.user}... El conteo regresivo, ha llegado a su fin.`).catch((e) => console.log('Error al usar slash commands: '+e)) : time
                                // time <= 0 ? clearInterval(count1) : time -= 2;
                                
                            }, 2000)
                
                        } else {
                    
                            time -= 3

                            let count2 = setInterval(async () => {
                    
                                if(time > 0){

                                    await interaction.editReply(String(time)).catch((e) => console.log('Error al enviar mensaje editado de conteo: '+e))
                                   
                                    time -= 3
                
                                } else if(time <= 0){
                
                                    await interaction.editReply(`Se acabó el tiempo ⌛`).catch((e) => console.log('Error al enviar mensaje editado de conteo: '+e))
                
                                    interaction.followUp(`${interaction.user}... El conteo regresivo, ha llegado a su fin.`).catch((e) => console.log('Error al enviar mensaje conteo llegó a su fin: '+e))
                
                                    clearInterval(count2)
                
                                }

                                // await interaction.editReply(time <= 0  ? `... Se acabó el tiempo ⌛` : String(time)).catch((e) => console.log('Error al usar slash commands: '+e))
                                // time <= 0 ? interaction.followUp(`${interaction.user}... El conteo regresivo, ha llegado a su fin.`).catch((e) => console.log('Error al usar slash commands: '+e)) : time
                                // time <= 0 ? clearInterval(count2) : time -= 3
                    
                            }, 3000)
                            
                        }

                    }

                }

            }
            
        } catch (error) {
            
            await interaction.deferReply().catch((e) => console.log('Error al usar slash commands: '+e))
            await wait(500).catch((e) => console.log('Error al usar slash commands: '+e))
            await interaction.editReply({ content: '<a:Verify2:931463492677017650> | ¡Ocurrió un error inesperado. Por favor, inténtelo de nuevo!', ephemeral: true}).catch((e) => console.log('Error al usar slash commands: '+e))
            
            console.log('Error en el SC conteo: '+error)

        }

    }

}