const { Permissions } = require('discord.js');

module.exports =  {
    
    name: 'update',
    aliases: [],
    description: '💻 Actualización de Evento Ready - Activity.',
  
    async execute(client, message, args, Discord) {

        let id = ['753435606410985573','683501310527668228']
  
        if(!id.some(id => message.author.id == id)) return message.reply({ embeds: [
                
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
            .setColor('RED')
            .setDescription('Solo los Administradores del Bot pueden usar este comando.')
            
        ]}).then(m => setTimeout(() => m.delete(), 5000)).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        message.channel.sendTyping().catch((e) => console.log('Error al enviar mensaje: '+e))
    
        setTimeout(() => {
          
  
            client.user.setActivity({
                
                name: client.guilds.cache.size + ' server' + (client.guilds.cache.size === 1 ? '' : 's')+' | '+ client.users.cache.size + ' usuarios', 
                type:'WATCHING'
            
            })

            console.log('Estado cambiado con éxito - Update succefull')
  
            message.reply(`Ahh!!! Te la creíste wey <:gaaa:925926944254611487>`).catch((e) => console.log('Error al enviar mensaje: '+e))
           
        }, 10000);

        message.react('✅').catch((e) => console.log('Error al enviar mensaje: '+e))

    }

}