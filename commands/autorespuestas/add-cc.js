const { Collection } = require('mongoose');
const autoSchema = require('../../models/autoSchema');
const kufi = require('kufi');

module.exports =  {
    
    name: 'add-cc',
    aliases: ['add-auto','acc'],
    description: '💻 Agregar autorespuestas personalizables.',
    category: 'AutoRespuestas',
    use: '<prefix>acc <trigger> <response>',
    owner: true,
    vip: true,

    async execute(client, message, args, Discord) {
        
        let id = ['753435606410985573','683501310527668228']
  
        if(!id.some(id => message.author.id == id)) return message.reply({ embeds: [
                
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
            .setColor('RED')
            .setDescription('Solo los Administradores del Bot pueden agregar frases.')
            
        ]}).then(m => setTimeout(() => m.delete(), 5000)).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        let trigger, response, idcc

        trigger = args[0]
        response = args.slice(1).join(" ")

        if(!trigger) return message.reply({embeds: [
       
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | ¡Debes agregar una palabra desencadenante para la autorespuesta!`)
      
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        if(!response) return message.reply({embeds: [
       
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | ¡Debes agregar una autorespuesta!`)
      
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        idcc = kufi.randomCode(5)

        try {
            
            let idc = await autoSchema.findOne({ idcc: idcc })

            while (idc) {
                
                idcc = kufi.randomCode(5)

            }

        } catch (error) {

            console.log('No se buscó id de autorespuesta : '+ error)

        }

        console.log('========================= REGISTRO DE AUTORESPUESTAS =========================');
        
        try {
            
            let auto = await autoSchema.create({

                idcc: idcc,
                idserver: message.guild.id,
                trigger: trigger,
                response: response,

            })

            auto.save();
            console.log('Autorespuesta Registrada ===> Trigger: '+ trigger + ' Response: ' + response)

            const e = new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL()})
            .setColor('GREEN')
            .setDescription('<a:Verify1:931463354357276742> | Se agregó correctamente la autorespuesta: \n\n> **Código:** `'+idcc+'`\n> **Trigger:** `'+trigger+'`\n> **Response:** `'+response+'`')
            .setTimestamp()
        
            message.reply({ allowedMentions: { repliedUser: false}, embeds: [e]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        } catch (error) {
            
            console.log('No se agregó autorespuesta : '+ error)

        }
                
        console.log('========================= REGISTRO DE AUTORESPUESTAS =========================');
   
    }

}