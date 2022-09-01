const { Collection } = require('mongoose');
const autoSchema = require('../../models/autoSchema');

module.exports =  {
    
    name: 'edit-cc',
    aliases: ['edit-auto','ecc'],
    description: '💻 Editar autorespuestas personalizables.',
    category: 'AutoRespuestas 📑',
    use: '<prefix>ecc <code> <response>',
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
    
        let response, idcc

        idcc = args[0]
        response = args.slice(1).join(" ")

        if(!idcc) return message.reply({embeds: [
       
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | ¡Debes agregar el código de la autorespuesta a editar!`)
      
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        if(!response) return message.reply({embeds: [
       
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | ¡Debes agregar la autorespuesta editada!`)
      
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        console.log('========================= EDITADO DE AUTORESPUESTAS =========================');
        
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

            let update = await autoSchema.findOneAndUpdate({ idcc: idcc, idserver: message.guild.id },
                {

                    response: response

                })

            update.save()
  
            const e = new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL()})
            .setColor('GREEN')
            .setDescription('<a:Verify1:931463354357276742> | Se editó correctamente la autorespuesta: \n\n> **Código:** `'+idcc+'`\n> **Trigger:** `'+idc.trigger+'`\n> **Response:** `'+response+'`')
            .setTimestamp()
        
            message.reply({ allowedMentions: { repliedUser: false}, embeds: [e]}).catch((e) => console.log('Error al enviar mensaje: '+e))


        } catch (error) {

            console.log('Error al editar autorespuesta ===> Código: ' + idcc)
            
            return message.reply({embeds: [
        
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | ¡Hubo un error al editar autorespuesta. Por favor, inténtelo de nuevo!`)
          
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
   
        }
                
        console.log('========================= EDITADO DE AUTORESPUESTAS =========================');
   
    }

}