const { Collection } = require('mongoose');
const blSchema = require('../../models/blSchema');

module.exports =  {
    
    name: 'addbl',
    aliases: ['add-bl'],
    description: '⛔ Añade a los usuarios en la Lista Negra del bot.',
    category: 'BlackList',
    use: '<prefix>addbl <@user/id> [reason]',
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

        if(user.id === message.author.id) return message.reply({embeds: [
       
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | ¡No puedes autobanearte!`)
      
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        if(idm.some(id => user.id == id)) return message.reply({embeds: [
       
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | ¡No puedes banear a un Admin!`)
      
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        if(user.user.bot) return message.reply({embeds: [
        
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | No puedes añadir a un bot a la Black-List`)
      
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        var razón = args.slice(1).join(" ") || 'No se especificó razón'

        try {

            let buscarUsuario = await blSchema.findOne({ idusuario: user.id })

            if(buscarUsuario){

                console.log('Usuario ya está en BL ===> Id: '+ user.id + ' Username: ' + user.username)

                return message.reply({embeds: [
        
                    new Discord.MessageEmbed()
                    .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
                    .setColor('RED')
                    .setDescription('<a:Verify2:931463492677017650> | Este usuario ya está en Black-List.\n\n**Razón:**\n`'+buscarUsuario.reason+'`')
              
                ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

            }

            let userbl = await blSchema.create({

                idusuario: user.id,
                reason: razón,

            })

            userbl.save();
            console.log('Usuario ingresado en BL ===> Id: '+ user.id + ' Username: ' + user.username)
            
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
            .setDescription('El usuario <@'+user.id+'> ha sido añadido a la Black-List.\n\n**Razón:**\n`'+razón+'`')
            .setColor('RANDOM')

            message.reply({ allowedMentions: { repliedUser: false}, embeds: [embed]}).catch((e) => console.log('Error al enviar mensaje: '+e))
       
        } catch (error) {
            
            console.log('Error al añadir usuario a BL: User '+user.id+' - Error '+error)
            
            return message.reply({embeds: [
        
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | ¡Hubo un error al añadir al usuario a BL. Por favor, inténtelo de nuevo!`)
          
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
   
        }

    }

}