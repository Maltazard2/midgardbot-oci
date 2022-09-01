const red = require('reddit-fetch');

module.exports =  {
    
    name: 'meme',
    aliases: ['memes'],
    description: '😂 Obtén memes al azar.',
  
    async execute(client, message, args, Discord) {

        red({

            subreddit: 'SpanishMeme',
            sort: 'hot',
            allowNSFW: false,
            allowModPost: false,
            allowCrossPost: false,
            allowVideo: false
            
        }).then(
            
            post => {
                    
                const embed = new Discord.MessageEmbed()
                .setAuthor({ name: `Midgard's Fun`, iconURL: client.user.avatarURL({ dynamic: true }) })
                .setTitle(post.title ? post.title : 'Sin título')
                .setImage(post.url)
                .setColor('RANDOM')
                .setTimestamp(new Date())
                .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })
        
                if(!post.url){
                        
                    return message.reply({ allowedMentions: { repliedUser: false}, embeds: [

                        new Discord.MessageEmbed()
                        .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
                        .setColor('RED')
                        .setDescription(`<a:Verify2:931463492677017650> | No encontré memes <:POLQUE:856670987499208775>`)
              
                    ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
                    
                }else{
                        
                    message.reply({ allowedMentions: { repliedUser: false}, embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
                    
                }
    
            }
            
        ).catch(
            
            (e) => message.reply({ allowedMentions: { repliedUser: false}, content: 'Hubo un error: ' + e}).catch((e) => console.log('Error al enviar mensaje: '+e))
            
        )

    }

}