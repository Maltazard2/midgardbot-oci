const { FindCouples } = require('leaf-utils');

module.exports =  {
    
    name: 'findcouples',
    aliases: ['findc','match','find','matchcouples','match-couples','emparejar','empareja'],
    description: '👫 Forma las parejas',
    category: 'Diversión 🤣',
    use: '<prefix>findcouples',
    owner: false,
    vip: false,
    slash: false,
  
    async execute(client, message, args, Discord) {

        await FindCouples({

            message: message,
            slash_command: false,
            time: 300000,
            embed: {
                title: 'Forma las parejas',
                color: 'RANDOM',
            },
            colors: {
                correct: 'SUCCESS',
                middle: 'PRIMARY',
                wrong: 'DANGER',
            },
            winMessage: 'Felicidades {{user}}! Ganaste.',
            endMessage: 'El tiempo ha terminado! El juego fue detenido por inactividad.',
            authorOnly: 'Solo <@{{author}}> puede usar estos botones!',
        
        }).catch((e) => console.log('Error al enviar mensaje: '+e))

    }

}