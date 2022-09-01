module.exports =  {
    
    name: '8ball',
    aliases: [],
    description: '❓ El bot responderá al azar tu pregunta.',
    category: 'Diversión 🤣',
    use: '<prefix>8ball <pregunta>',
    owner: false,
    vip: false,
    slash: false,
  
    async execute(client, message, args, Discord) {

        let texto = args.join(' ');
    
        var rpts = [
            'Sí',
            'No',
            '¿Por qué?',
            'Por favor, no me preguntes eso',
            'Tal vez',
            'No sé',
            'Definitivamente?',
            '¡Claro!',
            'Por supuesto!',
            'Por supuesto que no',
            'De ninguna manera',
            'Probablemente',
            'Es muy posible'
        ];

        if(!texto) return message.reply({
            
            embeds: [

                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | Escriba una pregunta`)
    
            ]
        }).catch((e) => console.log('Error al enviar mensaje: '+e))
        
        message.reply({ allowedMentions: { repliedUser: false}, 
            embeds:
            [
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
                .setColor('RANDOM')
                .setDescription('<a:Verify1:931463354357276742> | **'+message.author.username+'** a su pregunta `'+texto+'` mi respuesta es: `'+ rpts[Math.floor(Math.random() * rpts.length)] + '`')
    
            ]
        }).catch((e) => console.log('Error al enviar mensaje: '+e))
            
    }

}