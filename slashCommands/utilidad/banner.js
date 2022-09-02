const Discord = require('discord.js');
//const Canvas = require('canvas')

module.exports = {

    name: 'banner',
    description: '🔎 Muestra el banner de un usuario en el servidor.',
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
            
            const u = interaction.options.getUser('usuario')
            let usuario

            if(u){

                usuario = u

            } else {

                usuario = interaction.user

            }

            let user = await client.users.fetch(usuario.id, {force: true})

            /*let canvas = Canvas.createCanvas(966, 70); //Creamos un nuevo canvas.

            let ctx = canvas.getContext("2d");*/

            if (!user.hexAccentColor && !user.bannerURL() || user.bot) {
    
                const e = new Discord.MessageEmbed()
                .setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL()})
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | El usuario (${user.username}) no tiene un banner!`)
                
                await interaction.deferReply().catch((e) => console.log('Error al usar slash commands: '+e))
                await wait(500).catch((e) => console.log('Error al usar slash commands: '+e))
                await interaction.editReply({ embeds: [e]}).catch((e) => console.log('Error al usar slash commands: '+e))
        
            } else {

                /*ctx.fillStyle = (await user).hexAccentColor;

                ctx.fillRect(0, 0, canvas.width, canvas.height);
  
                let img = await canvas.toBuffer();

                if(!user.bannerURL()){

                    await interaction.deferReply().catch((e) => console.log('Error al usar slash commands: '+e))
                    await wait(500).catch((e) => console.log('Error al usar slash commands: '+e))
                    await interaction.editReply({ files: 
                        
                        [{

                            attachment: img,
                            name: "hex.png"

                        }],

                        embeds: [
                                
                            new Discord.MessageEmbed() 
                            .setImage("attachment://hex.png")
                            .setTitle('El usuario no tiene un banner pero aquí esta su color personalizado!')
                            .setColor(user.hexAccentColor ? user.hexAccentColor : 'RANDOM')
                            .setDescription(`${user.hexAccentColor.toUpperCase()}`) 
                            .setTimestamp(new Date())
                            .setAuthor({ name: 'Color de '+user.tag, iconURL: client.user.avatarURL({ dynamic: true }) })
                            .setThumbnail(user.displayAvatarURL({ dynamic: true}))
                            .setFooter({ text: `${interaction.guild.name}`, iconURL: interaction.guild.iconURL() ? interaction.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'}),
                            
                        ],

                    }).catch((e) => console.log('Error al usar slash commands: '+e))

                } else {*/

                    await interaction.deferReply().catch((e) => console.log('Error al usar slash commands: '+e))
                    await wait(500).catch((e) => console.log('Error al usar slash commands: '+e))
                    await interaction.editReply({ 
            
                        embeds: [
                          
                            new Discord.MessageEmbed() 
                            .setDescription('[Click aquí]('+`${user.bannerURL({size: 2048, dynamic: true})}`+')')
                            .setTitle('Imagen completa')
                            .setImage(user.bannerURL({size: 2048, dynamic: true}))
                            .setColor(`COLOR_CUSTOM`)
                            .setTimestamp(new Date())
                            .setAuthor({ name: 'Banner de '+user.tag, iconURL: client.user.avatarURL({ dynamic: true }) })
                            .setThumbnail(user.displayAvatarURL({ dynamic: true}))
                            .setFooter({ text: `${interaction.guild.name}`,iconURL: interaction.guild.iconURL() ? interaction.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif'}),
                        
                        ],
                    
                    }).catch((e) => console.log('Error al usar slash commands: '+e))
                
            }

        } catch (error) {
            
            await interaction.deferReply().catch((e) => console.log('Error al usar slash commands: '+e))
            await wait(500).catch((e) => console.log('Error al usar slash commands: '+e))
            await interaction.editReply({ content: '<a:Verify2:931463492677017650> | ¡Ocurrió un error inesperado. Por favor, inténtelo de nuevo!', ephemeral: true}).catch((e) => console.log('Error al usar slash commands: '+e))
            
            console.log('Error en el SC banner: '+error)

        }

    }

}