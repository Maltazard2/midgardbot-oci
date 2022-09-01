const { Collection } = require('mongoose');
const autoSchema = require('../../models/autoSchema');

module.exports =  {
    
    name: 'delete-cc',
    aliases: ['delete-auto','dcc'],
    description: '💻 Eliminar autorespuestas personalizables.',
    category: 'AutoRespuestas 📑',
    use: '<prefix>dcc <code>',
    owner: true,
    vip: true,
    slash: false,

    async execute(client, message, args, Discord) {
        
        let id = ['753435606410985573','683501310527668228']
  
        if(!id.some(id => message.author.id == id)) return message.reply({ embeds: [
                
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
            .setColor('RED')
            .setDescription('Solo los Administradores del Bot pueden agregar frases.')
            
        ]}).then(m => setTimeout(() => m.delete(), 5000)).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        let idcc

        idcc = args[0]

        if(!idcc) return message.reply({embeds: [
       
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | ¡Debes indicar el código de la autorespuesta a eliminar!`)
      
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
   
        console.log('========================= ELIMINADO DE AUTORESPUESTAS =========================');
     
        try {
            
            let idc = await autoSchema.findOne({ idcc: idcc, idserver: message.guild.id })

            if(!idc){

                console.log('Autorespuesta no existe ===> Código: '+ idcc)

                return message.reply({embeds: [
        
                    new Discord.MessageEmbed()
                    .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
                    .setColor('RED')
                    .setDescription('<a:Verify2:931463492677017650> | No existe una autorespuesta registrada con ese código.')
              
                ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

            }

            let dcc = await autoSchema.deleteOne({ idcc: idcc, idserver: message.guild.id })

            console.log('Autorespuesta Eliminada ===> Código: '+ idcc)

            const e = new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL()})
            .setColor('GREEN')
            .setDescription('<a:Verify1:931463354357276742> | Se eliminó correctamente la autorespuesta: \n\n> **Código:** `'+idcc+'`\n> **Trigger:** `'+idc.trigger+'`\n> **Response:** `'+idc.response+'`')
            .setTimestamp()
        
            message.reply({ allowedMentions: { repliedUser: false}, embeds: [e]}).catch((e) => console.log('Error al enviar mensaje: '+e))


        } catch (error) {

            console.log('Error al eliminar autorespuesta ===> Código: ' + idcc)
            
            return message.reply({embeds: [
        
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | ¡Hubo un error al eliminar autorespuesta. Por favor, inténtelo de nuevo!`)
          
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
   
        }
         
        console.log('========================= ELIMINADO DE AUTORESPUESTAS =========================');
   
    }

}