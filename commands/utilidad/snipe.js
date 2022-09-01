module.exports =  {
    
    name: 'snipe',
    aliases: [],
    description: '🔻 Recupera el último mensaje eliminado.',
  
    async execute(client, message, args, Discord) {

        const conf = message.guild.channels.cache.find(ch => ch.id === '881432157602611230');

        const channel = message.mentions.channels.first() || message.channel;

        if(channel===conf){
          
            return message.reply({ allowedMentions: { repliedUser: false}, content: "Así te quería atrapar puerco! <:ojooo:931434369283944468> ¡No puedes hacer eso aquí! <:burbuja:925928080680292352>"})
                .then(m => setTimeout(() => m.delete(), 10000)).catch((e) => console.log('Error al enviar mensaje: '+e))

        } else{
          
            const snipes = client.snipes.get(channel.id);
    
            if (!snipes){
          
                message.reply({ allowedMentions: { repliedUser: false}, content: 'No se ha borrado recientemente ningún mensaje!'})
                    .then(m => setTimeout(() => m.delete(), 5000)).catch((e) => console.log('Error al enviar mensaje: '+e))
        
            } else {

                const snipe = +args[0] - 1 || 0
                const targer = snipes[snipe]

                if(!targer) return message.reply({ allowedMentions: { repliedUser: false}, content: '**Solamente hay** `'+snipes.length+'` **snipes**'}).catch((e) => console.log('Error al enviar mensaje: '+e))

                const {msg, time, image, canal} = targer
    
                const imgdelete = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setAuthor({ name: `${msg.author.tag}`, iconURL: msg.author.displayAvatarURL({ dynamic: true }) })
                .setImage(image)
                .setTimestamp(new Date())
                .setDescription(`> \`Mensaje eliminado:\` ${msg.content}\n\n__**Información Extra**__\n\n> \`Tiempo:\` <t:${Math.floor(time / 1000)}:R>\n> \`Canal:\` ${msg.channel}\n> \`Snipe número:\` **${snipe + 1} / ${snipes.length}**`)
                
                message.reply({ allowedMentions: { repliedUser: false}, embeds: [imgdelete]}).catch((e) => console.log('Error al enviar mensaje: '+e))

            }
            
        }

    }

}