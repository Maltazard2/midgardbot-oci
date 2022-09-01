const { Collection } = require('mongoose');
const blSchema = require('../../models/blSchema');

module.exports =  {
    
    name: 'removebl',
    aliases: ['remove-bl'],
    description: '⛔ Remueve a los usuarios de la Lista Negra del bot.',
    category: 'BlackList',
    use: '<prefix>removebl <@user/id> [reason]',
    owner: true,
    vip: true,
  
    async execute(client, message, args, Discord) { 

        var idm = ['753435606410985573','683501310527668228']

        if(!idm.some(id => message.author.id == id)) return message.reply({embeds: [
       
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | ¡Solo los Administradores del Bot pueden utilizar este comando.!`)
      
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        let user = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));

        if(!user) return message.reply({embeds: [
       
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | ¡Debes mencionar a un usuario!`)
      
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        if(user.user.bot) return message.reply({embeds: [
        
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | No puedes remover a un bot de la Black-List`)
      
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        try {

            let buscarUsuario = await blSchema.findOne({ idusuario: user.id })

            if(!buscarUsuario){

                console.log('Usuario no está en BL ===> Id: '+ user.id + ' Username: ' + user.username)

                return message.reply({embeds: [
        
                    new Discord.MessageEmbed()
                    .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
                    .setColor('RED')
                    .setDescription('<a:Verify2:931463492677017650> | Este usuario no está en Black-List.')
              
                ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

            }

            let userbl = await blSchema.deleteOne({ idusuario: user.id })

            console.log('Usuario removido de BL ===> Id: '+ user.id + ' Username: ' + user.username)
            
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
            .setDescription('El usuario <@'+user.id+'> ha sido removido de la Black-List.')
            .setColor('RANDOM')

            message.reply({ allowedMentions: { repliedUser: false}, embeds: [embed]}).catch((e) => console.log('Error al enviar mensaje: '+e))
       
        } catch (error) {
            
            console.log('Error al remover usuario de BL: User '+user.id+' - Error '+error)
            
            return message.reply({embeds: [
        
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | ¡Hubo un error al remover al usuario de BL. Por favor, inténtelo de nuevo!`)
          
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
   
        }

    }

}