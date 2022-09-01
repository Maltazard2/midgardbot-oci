const { Util } = require('discord.js')

module.exports =  {
    
    name: 'say',
    aliases: ['decir'],
    description: '🔉 Hace que el bot diga un mensaje.',
    category: 'Diversión 🤣',
    use: '<prefix>say [mensaje]',
    owner: false,
    vip: false,
    slash: false,
  
    async execute(client, message, args, Discord) {

        let texto = args.join(' ');
    
        if(!texto) return message.reply({
            
            embeds: [

                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | Escriba un mensaje para decir.`)
    
            ]
        }).catch((e) => console.log('Error al enviar mensaje: '+e))
        
        setTimeout(() => message.delete(), 100);

        let clean, logschannel
        
        logschannel = client.channels.cache.get('965156885558878319')

        try {
            
            clean = Util.cleanContent(texto, message.channel)
            message.channel.send(clean).catch((e) => {
                
                console.log('Error al enviar mensaje: ' + e)
                logschannel.send({ content: '```Ocurrió un error al enviar mensaje del comando SAY.\nAutor: ' + message.autho.username + '\nError: ' + e + '```' }).catch((e) => console.log('Error al enviar mensaje: '+e))

            })
        
        } catch (error) {

            console.log('Error al usar Comando Util.cleanContent: ' + error)
            logschannel.send({ content: '```Ocurrió un error al Limpiar el contenido del comando SAY.\nAutor: ' + message.autho.username + '\nError: ' + error + '```' }).catch((e) => console.log('Error al enviar mensaje: '+e))
                
        }

    }
    
}