const { CoinFlip } = require('leaf-utils');

module.exports =  {
    
    name: 'coinflip',
    aliases: ['moneda','lanzarmoneda','monedaalaire','lanzar-moneda'],
    description: '🪙 Lanza una moneda al aire.',
    category: 'Diversión 🤣',
    use: '<prefix>coinflip',
    owner: false,
    vip: false,
    slash: false,
  
    async execute(client, message, args, Discord) {

        await CoinFlip({

            message: message,
            slash_command: false,
            time: 300000, // time before the game ends in ms
            embed: {
                title: 'Coinflip',
                color: 'RANDOM',
            },
            buttons: {
                heads: 'Cara',
                tails: 'Cruz',
            },
            colors: {
                heads: 'SUCCESS',
                tails: 'PRIMARY',
            },
            startMessage: 'La moneda está en el aire, elige entre **Cara (Heads)** o **Cruz (Tails)**.',
            winMessage: 'GG, Felicidades <@{{winner}}>! La moneda cayó en **{{result}}**',
            loseMessage: '<@{{player}}> Perdiste, la moneda cayó en **{{result}}**',
            authorOnly: 'Solo <@{{author}}> puede usar estos botones.'

        }).catch((e) => console.log('Error al enviar mensaje: '+e))

    }

}