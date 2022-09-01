module.exports = (client, Discord, interaction) => {

    //? BUTTONS
  
    /*if(interaction.isButton()){

        const member = interaction.member

        if(interaction.customId === 'acprueba'){
          
            interacation.deferReply({ ephemeral: true})
            interaction.followUp({ content: 'Hola'})

            return console.log('Prueba aceptada por el usuario: '+member)
          
        }
        
        if(interaction.customId === 'denyprueba'){

            interaction.deferReply({ ephemeral: true})
            interaction.followUp({ content: 'Hola'})

            return console.log('Prueba denegada')

        }

    }*/

    //? BUTTONS

    //* SLASH COMMANDS
    
    if (!interaction.isCommand()) return

    if(interaction.isCommand()){

        const command = client.slash.get(interaction.commandName)

        try {
            
            command.run(client, interaction)

        } catch (error) {
            
            console.log('Error en la IC: '+command + ' - '+error)

        }

    }

    //* SLASH COMMANDS

}
