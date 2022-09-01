const { Connect4 } = require('leaf-utils');
const blSchema = require('../../models/blSchema');

module.exports =  {
    
    name: 'connect4',
    aliases: ['4enraya','cuatroenraya'],
    description: '🎮 Juega 4 En Raya con algún miembro del servidor.',
    category: 'Diversión 🤣',
    use: '<prefix>4enraya <@user/id>',
    owner: false,
    vip: false,
    slash: false,
  
    async execute(client, message, args, Discord) {

        let usuario = message.mentions.users.first() || message.guild.members.resolve(client.users.cache.get(args[0]));

        if(!usuario) return message.reply({embeds: [
       
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | Necesitas mencionar con quién jugar!`)
      
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        try {
        
            let userbl = await blSchema.findOne({idusuario: usuario.id})
    
            if(userbl)
            {
    
                console.log('Usuario en Lista Negra ===> Id: '+ usuario.id + ' Username: ' + usuario.username)
                
                const e = new Discord.MessageEmbed()
                .setAuthor({ name: message.author.username+'#'+message.author.discriminator, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
                .setColor('RED')
                .setDescription('<a:Verify2:931463492677017650> | ¡No puedes jugar con el usuario mencionado debido a que está en mi Black List! <:nimoro:887176572711342120>')
              
                return message.reply({embeds: [e]}).catch((e) => console.log('Error al enviar mensaje: '+e))
    
            }
    
        } catch (error) {
    
            console.log('Error al buscar (comando) en la Tabla BL: '+ error)
    
        }

        await Connect4({
            
            message: message,
            client: client,
            slash_command: false,
            time: 300000,
            opponent: usuario,
            embed: {
                title: 'Connect4',
                color: 'RANDOM'
            },
            challenge: {
                acceptButton: 'Si',
                denyButton: 'No',
            },
            emojis: {
                player1: '🔴',
                player2: '🟢',
            },
            noUser: 'Necesitas mencionar a alguien',
            acceptMessage: '{{opponent}} Has sido desafiado por {{player}}',
            cancelMessage: '{{opponent}} Se rehusa a jugar contigo!',
            endMessage: 'Juego no aceptado a tiempo',
            timeoutMessage: 'Juego detenido por inactividad',
            authorOnly: 'No puedes usar estos botones',

        }).catch((e) => console.log('Error al enviar mensaje: '+e))
    }

}