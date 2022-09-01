const { Snake } = require('leaf-utils');

module.exports =  {
    
    name: 'snake',
    aliases: ['gusanito'],
    description: '🐛 Clásico juego del Snake',
  
    async execute(client, message, args, Discord) {

        new Snake({

            message: message,
            slash_command: false,
            snake: {
                head: '🟢',
                body: '🟩',
                tail: '🟢',
                over: '💀'
            },
            emojis: {
                board: '⬛',
                food: '🍎',
                up: '⬆️',
                right: '➡️',
                down: '⬇️',
                left: '⬅️',
            },
            foods: ['🍎', '🍇', '🍊', '🍕', '🥕', '🥞'],
            stopButton: {
                stopLabel: 'Stop',
                stopStyle: 'DANGER',
            },
            authorOnly: 'Solo {{author}} puede usar estos botones.',
        
        }).startGame().catch((e) => console.log('Error al enviar mensaje: '+e))

    }

}