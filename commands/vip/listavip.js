const userSchema = require('../../models/userSchema')

module.exports =  {
    
    name: 'listavip',
    aliases: ['lista-vip','lvip','vip'],
    description: '💻 Comando exclusivo de Programación',

    async execute(client, message, args, Discord) {

        let id = ['753435606410985573','683501310527668228']

        if(!id.some(id => message.author.id == id)) {
      
            const embed = new Discord.MessageEmbed()
            .setDescription('Solo los Administradores del bot puede usar este comando.')
            .setColor('RED')
            
            return message.reply({ embeds: [embed] })
            .then(m => setTimeout(() => m.delete(), 5000)).catch((e) => console.log('Error al enviar mensaje: '+e))

        }

        try {
            
            let lista = await userSchema.find({ vip: true }).sort({ xp: -1 })
            
            if(!lista) return message.channel.send({embeds:[
          
                new Discord.MessageEmbed()
                .setAuthor({ name: `Midgard's VIP`, iconURL: client.user.avatarURL({ dynamic: true }) })
                .setDescription('Aún no hay usuarios VIP <:tierno:931433334960160799>')   	
                .setColor("RANDOM")
                .setFooter({ text: message.guild.name, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true, size: 2048 }) : 'https://i.imgur.com/MNWYvup.gif' })
                
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

            let embed = new Discord.MessageEmbed()

            let datos = []

            let c = 1

            for(let ls of lista){

                datos.push('**' + c + '.** <@' + ls.idusuario + '>')
                c = c + 1
        
            }

            embed.setAuthor({ name: `Midgard's VIP`, iconURL: client.user.avatarURL({ dynamic: true }) })
            embed.setThumbnail('https://i.imgur.com/TGJxm2u.gif')
            embed.setDescription(datos.join('\n\n'))   	
            embed.setColor("RANDOM")
            embed.setFooter({ text: message.guild.name, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true, size: 2048 }) : 'https://i.imgur.com/MNWYvup.gif' })
            
            message.reply({ allowedMentions: { repliedUser: false}, embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

        } catch (error) {
            
            console.log('Ocurrió un error al buscar la lista de BL: '+ error)

            const e = new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | Ocurrió un error inesperado, por favor intenta de nuevo!\n> Error: `+error)
            .setTimestamp()

            return message.reply({embeds: [e]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        }
          
    }

}