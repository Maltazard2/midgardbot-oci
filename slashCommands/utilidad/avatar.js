const Discord = require('discord.js');

module.exports = {

    name: 'avatar',
    description: '🔎 Muestra el avatar de un usuario en el servidor.',
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
            
            const user = interaction.options.getUser('usuario')

            if(user){

                const embed = new Discord.MessageEmbed()
                .setAuthor({ name: `Avatar de ${user.username}#${user.discriminator}`, iconURL: client.user.avatarURL({ dynamic: true }) })
                .setTitle('Imagen completa')
                .setDescription('[Click aquí]('+`${user.displayAvatarURL({ dynamic: true , size: 2048 }).replace('webp','png')}`+')')
                .setImage(`${user.displayAvatarURL({ dynamic: true , size: 2048 }).replace('webp','png')}`)
                .setColor('RANDOM')
                .setTimestamp(new Date())
                .setFooter({ text: `${interaction.guild.name}`, iconURL: interaction.guild.iconURL() ? interaction.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'})
            
                await interaction.deferReply().catch((e) => console.log('Error al usar slash commands: '+e))
                await wait(500).catch((e) => console.log('Error al usar slash commands: '+e))
                await interaction.editReply({ embeds: [embed] }).catch((e) => console.log('Error al usar slash commands: '+e))

            } else {

                const embed = new Discord.MessageEmbed()
                .setAuthor({ name: `Avatar de ${interaction.user.username}#${interaction.user.discriminator}`, iconURL: client.user.avatarURL({ dynamic: true }) })
                .setTitle('Imagen completa')
                .setDescription('[Click aquí]('+`${interaction.user.displayAvatarURL({ dynamic: true , size: 2048 }).replace('webp','png')}`+')')
                .setImage(`${interaction.user.displayAvatarURL({ dynamic: true , size: 2048 }).replace('webp','png')}`)
                .setColor('RANDOM')
                .setTimestamp(new Date())
                .setFooter({ text: `${interaction.guild.name}`, iconURL: interaction.guild.iconURL() ? interaction.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'})
                
                await interaction.deferReply().catch((e) => console.log('Error al usar slash commands: '+e))
                await wait(500).catch((e) => console.log('Error al usar slash commands: '+e))
                await interaction.editReply({ embeds: [embed] }).catch((e) => console.log('Error al usar slash commands: '+e))

            }

        } catch (error) {

            await interaction.editReply({ content: '<a:Verify2:931463492677017650> | ¡Ocurrió un error inesperado. Por favor, inténtelo de nuevo!', ephemeral: true}).catch((e) => console.log('Error al usar slash commands: '+e))
            
            console.log('Error en el SC avatar: '+error)

        }

    }

}