module.exports =  {
    
    name: 'impostor',
    aliases: ['imp'],
    description: '💣 Averigua quién es el impostor de este mundo.',
  
    async execute(client, message, args, Discord) {

        let img = message.mentions.users.first()

        if(!img){

            try {
          
                img = await client.users.fetch(args[0])

            } catch (error) {

            img = message.author
          
            }

        }
        
        /*let random = [
          "No era el impostor",
          "Era el impostor"
        ]*/

        let impost = [
         '715007589464801411',
         '544585916115714057',
         '580032343117660160',
         '904598921240772609',
         '373994470078808064',
         '888857460599848990',
          '270418848979615754',
          '776817746041241650',
          '412347553141751808',
          '626771394063237138'
        ]

        if(!img || img.id === message.author.id){

            if (!impost.some(id => message.author.id == id))
            {
    
              return message.channel.send(`. 　　　。　　　　•　 　ﾟ　　。 　　.
    
    　　　.　　　 　　.　　　　　。　　 。　. 　
    
    .　　 。　　　　　 ඞ 。 . 　　 • 　　　　•
    
    　　ﾟ　ﾟ　。  ${message.author.username} No eres el impostor  •　 。　.
    
    　　'　　ﾟ   •   　 ${impost.length} Impostores restantes 　 　　。  .
    
    　　ﾟ　　　.　　　. ,　　　　.　 .`).catch((e) => console.log('Error al enviar mensaje: '+e))
    
            } else {
    
              return message.channel.send(`. 　　　。　　　　•　 　ﾟ　　。 　　.
    
    　　　.　　　 　　.　　　　　。　　 。　. 　
    
    .　　 。　　　　　 ඞ 。 . 　　 • 　　　　•
    
    　　ﾟ　ﾟ　。  ${message.author.username} Sí eras el impostor  •　 。　.
    
    　　'　　ﾟ   •   　 ${impost.length} Impostores restantes 　 　　。  .
    
    　　ﾟ　　　.　　　. ,　　　　.　 .`).catch((e) => console.log('Error al enviar mensaje: '+e))

            }

        } else{
    
          if (!impost.some(id => img.id == id))
          {
    
            return message.channel.send(`. 　　　。　　　　•　 　ﾟ　　。 　　.
    
    　　　.　　　 　　.　　　　　。　　 。　. 　
    
    .　　 。　　　　　 ඞ 。 . 　　 • 　　　　•
    
    　　ﾟ　ﾟ　。  ${img.username} No es el impostor  •　 。　.
    
    　　'　　ﾟ   •   　 ${impost.length-1} Impostores restantes 　 　　。  .
    
    　　ﾟ　　　.　　　. ,　　　　.　 .`).catch((e) => console.log('Error al enviar mensaje: '+e))
    
          } else {
    
            return message.channel.send(`. 　　　。　　　　•　 　ﾟ　　。 　　.
    
    　　　.　　　 　　.　　　　　。　　 。　. 　
    
    .　　 。　　　　　 ඞ 。 . 　　 • 　　　　•
    
    　　ﾟ　ﾟ　。  ${img.username} Sí era el impostor  •　 。　.
    
    　　'　　ﾟ   •   　 ${impost.length-1} Impostores restantes 　 　　。  .
    
    　　ﾟ　　　.　　　. ,　　　　.　 .`).catch((e) => console.log('Error al enviar mensaje: '+e))
    
          }
    
        }


    }

}