module.exports =  {
    
    name: 'reset',
    aliases: [],
    description: '💻 Reinicio de comandos.',
    category: 'Programación 💻',
    use: '<prefix>reset',
    owner: true,
    vip: false,
    slash: false,
  
    async execute(client, message, args, Discord) {

        let id3 = ['753435606410985573','683501310527668228']
    
        if(!id3.some(id => message.author.id == id)) {
         
            const embed = new Discord.MessageEmbed()
            .setDescription('Solo el developer del bot puede usar este comando.')
            .setColor('RED')
          
            message.reply({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        } else {
            
            message.reply('🕙 | Reinicio en progreso...').then(async msg => {
          
                msg.edit('🕙 | Seguimos reiniciando...').catch((e) => console.log('Error al enviar mensaje: '+e))
            
                client.destroy();
            
                await client.login(process.env.TOKEN);
                await msg.edit('🕙 | En breves, regresamos...').catch((e) => console.log('Error al enviar mensaje: '+e))
            
                msg.edit(' ✅ | Reiniciado Correctamente!').catch((e) => console.log('Error al enviar mensaje: '+e))
          
            }).catch((e) => console.log('Error al enviar mensaje: '+e))
            
        }

    }

}