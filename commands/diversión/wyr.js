const { WouldYouRather } = require('leaf-utils');

module.exports =  {
    
    name: 'wyr',
    aliases: ['wouldyourather','choose','elegir'],
    description: '🎎 ¿Qué prefieres?',
    category: 'Diversión 🤣',
    use: '<prefix>choose',
    owner: false,
    vip: false,
    slash: false,
  
    async execute(client, message, args, Discord) {

        await WouldYouRather({

            message: message,
            slash_command: false,
            time: 300000,
            embed: {
              title: '¿Qué Prefieres?',
              color: 'RANDOM',
            },
            emojis: {
              firstbutton: '1️⃣',
              secondbutton: '2️⃣',
            },
            colors: {
              firstbutton: 'SUCCESS',
              secondbutton: 'SUCCESS',
            },
            authorOnly: 'Solo <@{{author}}> puede usar estos botones!',
        
        }).catch((e) => console.log('Error al enviar mensaje: '+e))

    }

}