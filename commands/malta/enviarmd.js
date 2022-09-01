const { Permissions } = require('discord.js');

module.exports =  {
    
    name: 'enviarmd',
    aliases: ['enviar-dm','enviardm','enviar-md'],
    description: '💻 Envía un mensaje del bot al dm del usuario mencionado.',
  
    async execute(client, message, args, Discord) {

        let id = ['753435606410985573','683501310527668228']
  
        if(!id.some(id => message.author.id == id)) return message.reply({ embeds: [
                
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
            .setColor('RED')
            .setDescription('Solo los Administradores del Bot pueden usar este comando.')
            
        ]}).then(m => setTimeout(() => m.delete(), 5000)).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        const mencionado = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
    
        if(!mencionado) return message.reply('No ha mencionando a ningún miembro <:maje:925927838492811295>').then(m => setTimeout(() => m.delete(), 5000)).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        let id2 = mencionado.id;
    
        let texto = args.slice(1).join(' ');
    
        if(!texto) return message.channel.send(`Escriba el contenido a enviar. <:maje:925927838492811295>`).then(m => setTimeout(() => m.delete(), 5000)).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        client.users.get(id2).send(texto).catch((e) => console.log('Error al enviar mensaje: '+e))

        console.log('Se envío md al usuario: '+id2+' - Mensaje: '+texto)

        message.reply('Mensaje enviado correctamente!').catch((e) => console.log('Error al enviar mensaje: '+e))

    }

}