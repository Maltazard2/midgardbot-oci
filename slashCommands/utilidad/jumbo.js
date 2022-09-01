const Discord = require('discord.js');

module.exports = {

    name: 'jumbo',
    description: '👀 Ver en grande un emoji.',
    options: [
        { 

            name: 'emoji', 
            description: 'Ingresa un emoji', 
            type: 'STRING',
            required: 'true',

        },
    ],

    run: async (client, interaction) => {
        
        const wait = require('util').promisify(setTimeout)

        try {

            let emoji = interaction.options.getString('emoji');
            const emoticon = require('discord.js').Util.parseEmoji(emoji) // Usaremos el metodo que nos da discord.js para obtener info del emoji
        
            if(emoticon.id === null){

                const e = new Discord.MessageEmbed()
                .setAuthor({name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL()})
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | Emoji inválido!!!`)
        
                await interaction.deferReply({ephemeral: true}).catch((e) => console.log('Error al usar slash commands: '+e))
                await wait(500).catch((e) => console.log('Error al usar slash commands: '+e))
                await interaction.editReply({ embeds: [e], ephemeral: true}).catch((e) => console.log('Error al usar slash commands: '+e))

            } else {

                let palta = `https://cdn.discordapp.com/emojis/` + `${emoticon.id}.` + (emoticon.animated ? 'gif' : 'png') 

                await interaction.deferReply().catch((e) => console.log('Error al usar slash commands: '+e))
                await wait(500).catch((e) => console.log('Error al usar slash commands: '+e))
                await interaction.editReply({ content: palta }).catch((e) => console.log('Error al usar slash commands: '+e))

            }
            
        } catch (error) {
            
            await interaction.deferReply().catch((e) => console.log('Error al usar slash commands: '+e))
            await wait(500).catch((e) => console.log('Error al usar slash commands: '+e))
            await interaction.editReply({ content: '<a:Verify2:931463492677017650> | ¡Ocurrió un error inesperado. Por favor, inténtelo de nuevo! ', ephemeral: true}).catch((e) => console.log('Error al usar slash commands: '+e))
            
            console.log('Error en el SC jumbo: '+error)

        }

    }

}