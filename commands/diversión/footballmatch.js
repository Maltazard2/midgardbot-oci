const { FootballMatch } = require('leaf-utils');

module.exports =  {
    
    name: 'footballmatch',
    aliases: ['football','futbol'],
    description: '⚽ Juega Football Match',
  
    async execute(client, message, args, Discord) {

        await FootballMatch({

            message: message,
            slash_command: false,
            embed: {
                title: 'Football Match',
                color: 'RANDOM',
            },
            buttons: {
                left: 'Izquierda',
                middle: 'Al Medio',
                right: 'Derecha',
            },
            emojis: {
                goalkeeper: '🧍‍♂️',
                goal: '🥅',
                soccer: '⚽',
            },
            winMessage: 'GG, <@{{winner}}> anotó en **{{time}} segundos**.',
            loseMessage: '<@{{player}}> Perdiste 😢',
            ongoingMessage: 'Hay un juego ejecutándose en <#{{channel}}>. No puedes jugar ahora!',
            authorOnly: 'Solo <@{{author}}> puede usar estos botones!',
        
        }).catch((e) => console.log('Error al enviar mensaje: '+e))

    }

}