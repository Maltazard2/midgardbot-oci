// const { Collection } = require('mongoose');
// const userSchema = require('../../models/userSchema');
// const over = require('poke-over');
const { GuessThePokemon } = require('leaf-utils');

module.exports =  {
    
    name: 'pokemon',
    aliases: ['wtp'],
    description: '🐲 Un juego divertido para adivinar el pokemón y ganar algunas monedas.',
    category: 'Diversión',
    use: '<prefix>pokemon 🤣',
    owner: false,
    vip: false,
    slash: false,
  
    async execute(client, message, args, Discord) { 

        await GuessThePokemon({

            message: message,
            slash_command: false,
            time: 300000,
            embed: {
              title: '¿𝚀𝚞𝚒é𝚗 𝚎𝚜 𝚎𝚜𝚎 𝙿𝚘𝚔é𝚖𝚘𝚗?',
              description: 'Escribe su nombre, tienes 5 minutos para responder ⌛',
              color: 'RANDOM',
              stopcolor: '#D52000',
            },
            button: {
              label: 'Detener',
              style: 'DANGER',
              emoji: '⏹️' // optional
            },
            correctMessage: 'GG! 𝐀𝐂𝐄𝐑𝐓𝐀𝐒𝐓𝐄!. El Pokémon es ***{{pokemon}}***',
            wrongMessage: '𝐄𝐑𝐑𝐎𝐑!. El Pokémon era **{{pokemon}}**',
            stopMessage: 'Has finalizado el juego, el pokémon correcto era {{pokemon}}',
            authorOnly: 'Solo <@{{author}}> puede usar estos botones!',
        
        }).catch((e) => console.log('Error al enviar mensaje: '+e))

        // let buscarUsuario = await userSchema.findOne({idusuario: message.author.id})

        // if(!buscarUsuario){

        //     let user = await userSchema.create({

        //         idusuario: message.author.id,
        //         username: message.author.username

        //     })

        //     user.save();
        //     console.log('Usuario Registrado ===> Id: '+ message.author.id + ' Username: ' + message.author.username)

        // }

        // over.randomPokemon().then(async (pokemon) => {

        //     const embed = new Discord.MessageEmbed()
        //     .setColor('RANDOM')
        //     .setTitle('¿𝚀𝚞𝚒é𝚗 𝚎𝚜 𝚎𝚜𝚎 𝙿𝚘𝚔é𝚖𝚘𝚗?')
        //     .setDescription('Tienes 30 Segundos para responder ⌛')
        //     .setImage(pokemon.imageURL)
        //     .setTimestamp(new Date())
        //     .setFooter(`${message.guild.name}`,'https://media.discordapp.net/attachments/880312288593195028/904603928375726120/Midgard_GIF_AVATAR.gif');
          
        //     message.channel.send({ embeds: [embed] }).then(msj => {
    
        //         message.channel.awaitMessages(async x => x.content.toLowerCase() === pokemon.name.toLowerCase() && x.author.id === message.author.id, { max: 1, time: 60000, errors: ['time'] }).then(async col => {
    
        //             if(col){
    
        //                 let update = await userSchema.findOneAndUpdate({idusuario: message.author.id},
        //                     {

        //                         dinero: buscarUsuario.dinero + 100,
        //                         total: buscarUsuario.dinero + buscarUsuario.banco + 100

        //                     })

        //                 update.save()

        //                 const embed2 = new Discord.MessageEmbed() //el Embed si el autor adivino el Pokemon
        //                 .setColor('GREEN')
        //                 .setTitle('𝐀𝐂𝐄𝐑𝐓𝐀𝐒𝐓𝐄!')
        //                 .setDescription('El Pokemon es **'+pokemon.name+'**\n\n Has ganado: <a:money:930397094924124180> **100**')
        //                 .setImage(pokemon.imageURL)
        //                 .setTimestamp(new Date())
        //                 .setFooter(`${message.guild.name}`,'https://media.discordapp.net/attachments/880312288593195028/904603928375726120/Midgard_GIF_AVATAR.gif');
              
        //                 msj.edit(embed2)
    
        //             }
    
        //         }).catch(col => {
    
        //             if(!col){
    
        //                 const embed3 = new Discord.MessageEmbed() //Embed de Fallo
        //                 .setColor('RED')
        //                 .setTitle('𝐄𝐑𝐑𝐎𝐑!')
        //                 .setDescription('El Pokemon era **'+pokemon.name+'**')
        //                 .setImage(pokemon.imageURL)
        //                 .setTimestamp(new Date())
        //                 .setFooter(`${message.guild.name}`,'https://media.discordapp.net/attachments/880312288593195028/904603928375726120/Midgard_GIF_AVATAR.gif');
             
        //                 col.edit(embed3)

        //             }
    
        //         })
    
        //     })
            
        // }).catch((e) => message.channel.send('Hubo un error: ' + e))

    }

}