const turnoSchema = require('../../models/turnoSchema');

module.exports =  {
    
    name: 'add-staff',
    aliases: ['addstaff','ad'],
    description: '💻 Comando exclusivo de Staff',

    async execute(client, message, args, Discord) {

        if(message.guild.id !== '777620055344545842') return

        let id = ['753435606410985573','683501310527668228','743960732542042203']

        if(!id.some(id => message.author.id == id)) {
      
            const embed = new Discord.MessageEmbed()
            .setDescription('Solo los Gerentes pueden usar este comando.')
            .setColor('RED')
            
            return message.reply({ embeds: [embed] })
            .then(m => setTimeout(() => m.delete(), 5000)).catch((e) => console.log('Error al enviar mensaje: '+e))

        }

        let user1 = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
        
        if(!user1) return message.reply({embeds: [
       
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | ¡Debes mencionar a un usuario!`)
      
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        if(user1.user.bot) return message.reply({embeds: [
        
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | No puedes agregar diamantes a un bot`)
      
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        let userTurno

        try {

            userTurno = await turnoSchema.findOne({ idusuario: user1.id })
        
            if(!userTurno){

                return message.reply({embeds: [
        
                    new Discord.MessageEmbed()
                    .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
                    .setColor('RED')
                    .setDescription(`<a:Verify2:931463492677017650> | El usuario ingresado no está en la Base de Datos de Staff!`)
              
                ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
                   
            }
            
        } catch (error) {

            console.log('Error al encontrar miembro de staff: '+error)
            return message.reply('No se encontró al miembro de staff mencionado, por favor, asegúrese de mencionar correctamente o de ingresar una ID válida.').catch((e) => console.log('Error al enviar mensaje: '+e))
            
        }

        if(!args[1]) return message.reply({embeds: [
            
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | Ingresa cuántos diamantes quieres agregar.`)
        
        ]}).then(m => setTimeout(() => m.delete(), 5000)).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        if(isNaN(parseInt(args[1]))) return message.reply({embeds: [
            
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | Pon una cantidad, solo puedo agregar números.`)
        
        ]}).then(m => setTimeout(() => m.delete(), 5000)).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        let diamantes = parseInt(args[1])

        let canalstaff = client.channels.cache.get('950717214137409596')

        try {

            console.log('========================= ACTUALIZACIÓN DE STAFF DE TURNO =========================');
                        
            let update = await turnoSchema.findOneAndUpdate({idusuario: user1.id},
                {

                    diamantes: userTurno.diamantes + diamantes,

                })

            update.save()
            
            console.log('========================= ACTUALIZACIÓN DE STAFF DE TURNO =========================');
                        
            const e = new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
            .setColor('GREEN')
            .setDescription('<a:Verify1:931463354357276742> | Has agregado ' + diamantes + ' <a:diamante:887714567084449892> al staff <@'+user1.id+'>')
            .setTimestamp()
        
            message.reply({ allowedMentions: { repliedUser: false}, embeds: [e]}).catch((e) => console.log('Error al enviar mensaje: '+e))

            try {
            
                let lista = await turnoSchema.find().sort({ diamantes: -1 })
    
                let embed = new Discord.MessageEmbed()
    
                let datos = []
                let first = []
    
                let c = 1
    
                for(let ls of lista){
    
                    datos.push('**' + c + '.** <@' + ls.idusuario + '> <a:diamante:887714567084449892> **'+ls.diamantes+'**')
                    first.push(ls.idusuario)
                    c = c + 1
            
                }
                
                if(!lista || datos.length === 0) return message.channel.send({embeds:[
              
                    new Discord.MessageEmbed()
                    .setAuthor({ name: '𝐌𝐢𝐝𝐠𝐚𝐫𝐝 𝐒𝐭𝐚𝐟𝐟', iconURL: client.user.avatarURL({ dynamic: true}) })
                    .setDescription('Aún no hay usuarios con diamantes <:tierno:931433334960160799>')   	
                    .setColor("RANDOM")
                    .setFooter({ text: `Malta's Bot`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true, size: 2048 }) : 'https://i.imgur.com/MNWYvup.gif' })

                ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
    
                let best = client.users.cache.get(first[0])

                embed.setAuthor({ name: '𝐌𝐢𝐝𝐠𝐚𝐫𝐝 𝐒𝐭𝐚𝐟𝐟', iconURL: client.user.avatarURL({ dynamic: true }) })
                embed.setTitle('𝗦𝘁𝗮𝗳𝗳 𝗱𝗲 𝗹𝗮 𝗦𝗲𝗺𝗮𝗻𝗮 ✨')
                embed.setThumbnail(best.displayAvatarURL() ? best.displayAvatarURL({dynamic: true, size: 2048}) : message.guild.iconURL({ dynamic: true, size: 2048 }))
                embed.setImage('https://i.imgur.com/9JJeBS7.gif')
                embed.setDescription(datos.join('\n\n'))   	
                embed.setColor("RANDOM")
                embed.setFooter({ text: `Malta's Bot`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true, size: 2048 }) : 'https://i.imgur.com/MNWYvup.gif' })
                
                canalstaff.bulkDelete(2)
                canalstaff.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
                canalstaff.send('https://images-ext-2.discordapp.net/external/9iPHKFXXnKKSQpcFazlW79dr1zbbtdo7QT7-xxtfDY4/%3Fwidth%3D600%26height%3D86/https/media.discordapp.net/attachments/897951731462316073/915663567213199390/bar-1.gif?width=450&height=65').catch((e) => console.log('Error al enviar mensaje: '+e))

            } catch (error) {
                
                console.log('Ocurrió un error al buscar la lista de Staff: '+ error)
    
                const e = new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | Ocurrió un error inesperado, por favor intenta de nuevo!\n> Error: `+error)
                .setTimestamp()
    
                return message.reply({embeds: [e]}).catch((e) => console.log('Error al enviar mensaje: '+e))
    
            }
            
        } catch (error) {

            console.log('Error al agregar diamantes al staff: '+user1.id+' - Error: '+error)
            return message.reply('No se agregaron correctamente los diamantes, por favor, inténtelo de nuevo.').catch((e) => console.log('Error al enviar mensaje: '+e))
            
        }
        
    }

}