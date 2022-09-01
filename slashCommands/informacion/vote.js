const Discord = require('discord.js');

module.exports = {

    name: 'vote',
    description: '📩 Obtén el link de votación para el servidor en Top.gg.',
    options: [],

    run: async (client, interaction) => {

        if(interaction.guild.id !== '777620055344545842') return

        const wait = require('util').promisify(setTimeout)
            
        try {
            
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Staff`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setThumbnail('https://logos-marcas.com/wp-content/uploads/2020/12/Discord-Logo.png')
            .setTitle('Vota por Nuestro Servidor <a:gatoasomar:930399873113677834>')
            .setDescription(`Estaremos eternamente agradecidos que votes por Midgard! <:abby:931432327354155038>`)
            .addField('Top.gg','[Click aquí para votar](https://top.gg/servers/777620055344545842/vote)\n\n', false)
            .addField('Recompensas por tu voto <a:corazon:930399275643453500>','Recibirás un Rol muy especial que te diferenciará de los demás:\n\n <a:dc_zFlecha3:880315279903703060> <@&886772939549184052> \n\nAdemás, este rol te dará una cierta cantidad de coins de nuestro casino cada cierto tiempo... \n\nDescúbrelo!!! <:tierno:931433334960160799>', true)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${interaction.guild.name} • Muchas gracias por tu voto!`, iconURL: interaction.guild.iconURL() ? interaction.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'})
      
            const row = new Discord.MessageActionRow()
            .addComponents(

                new Discord.MessageButton()
        
                .setLabel('VOTAR') 
                .setStyle('LINK') 
                .setURL('https://top.gg/servers/777620055344545842/vote') 

            );

            await interaction.deferReply().catch((e) => console.log('Error al usar slash commands: '+e))
            await wait(500).catch((e) => console.log('Error al usar slash commands: '+e))
            await interaction.editReply({ embeds : [embed], components: [row] }).catch((e) => console.log('Error al usar slash commands: '+e))


        } catch (error) {

            await interaction.deferReply().catch((e) => console.log('Error al usar slash commands: '+e))
            await wait(500).catch((e) => console.log('Error al usar slash commands: '+e))
            await interaction.editReply({ content: '<a:Verify2:931463492677017650> | ¡Ocurrió un error inesperado. Por favor, inténtelo de nuevo!', ephemeral: true}).catch((e) => console.log('Error al usar slash commands: '+e))
            
            console.log('Error en el SC vote: '+error)

        }

    }

}