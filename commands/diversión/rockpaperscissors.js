const { RockPaperScissors } = require('leaf-utils');

module.exports =  {
    
    name: 'rockpaperscissors',
    aliases: ['rps','ppt'],
    description: '✂ Clásico juego del Piedra - Papel - tijera',
    category: 'Diversión 🤣',
    use: '<prefix>rps',
    owner: false,
    vip: false,
    slash: false,
  
    async execute(client, message, args, Discord) {

        await RockPaperScissors({

            message: message,
            slash_command: false,
            time: 300000,
            embed: {
              title: 'Rock Paper Scissors',
              description: 'Tienes 5 minutos para vencer al bot. **Obtén 3 puntos para ganar**',
              color: 'RANDOM',
            },
            emojis: {
              rock: '🪨',
              paper: '📰',
              scissors: '✂️',
            },
            colors: {
              rock: 'PRIMARY',
              paper: 'DANGER',
              scissors: 'SUCCESS',
            },
            winMessage: '{{user}} Tú ganas! Eres el mejor <a:Dancing_Duck:930402083625111613>',
            loseMessage: '{{user}} Perdiste! No puedes contra mí <a:ayajasisi:945203356140441650>',
            tieMessage: 'Tiempo Fuera. Esto es un empate!',
            chooseMessage: 'Elegiste',
            botMessage: 'El bot eligió',
            ongoingMessage: 'Ya tienes un juego en curso',
      
        }).catch((e) => console.log('Error al enviar mensaje: '+e))

    }

}