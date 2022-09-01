module.exports =  {
    
    name: 'setact',
    aliases: ['set-activity'],
    description: '💻 Cambiar el estado de actividad del bot.',
    category: 'Programación 💻',
    use: '<prefix>setact <activity>',
    owner: true,
    vip: false,
    slash: false,

    async execute(client, message, args, Discord) {

        let id = ['753435606410985573','683501310527668228']
  
        if(!id.some(id => message.author.id == id)) {
        
            const embed = new Discord.MessageEmbed()
            .setDescription('Solo el developer del bot puede usar este comando.')
            .setColor('RED')
          
            return message.reply({ embeds: [embed] })
            .then(m => setTimeout(() => m.delete(), 5000)).catch((e) => console.log('Error al enviar mensaje: '+e))
  
        } else {
  
            var estadobot = message.content.split(' ').slice(1).join(' ')
  
            if(!estadobot){
  
                message.reply('Exactamente... ¿Qué quieres que ponga?').then(m => setTimeout(() => m.delete(), 5000)).catch((e) => console.log('Error al enviar mensaje: '+e))
  
            }else{
  
                client.user.setActivity({name:estadobot, type:'LISTENING'})
                message.reply('Estado cambiado con éxito <a:pasito:877116925291946094>').catch((e) => console.log('Error al enviar mensaje: '+e))
  
            }
  
        }

    }
    
}