const turnoSchema = require('../../models/turnoSchema');

module.exports =  {
    
    name: 'bestaff',
    aliases: ['bs','best-staff'],
    description: '💻 Comando exclusivo de Staff',
    category: 'Programación 💻',
    use: '<prefix>bs',
    owner: true,
    vip: false,
    slash: false,

    async execute(client, message, args, Discord) {

        if(message.guild.id !== '777620055344545842') return
        
        setTimeout(() => message.delete(), 100)

        let id = ['753435606410985573','683501310527668228','743960732542042203']

        let canalstaff = client.channels.cache.get('950717214137409596')
        let staffSemana = '924042633339367436'
        
        if(!id.some(id => message.author.id == id)) {
      
            const embed = new Discord.MessageEmbed()
            .setDescription('Solo los Gerentes pueden usar este comando.')
            .setColor('RED')
            
            return message.reply({ embeds: [embed] })
            .then(m => setTimeout(() => m.delete(), 5000)).catch((e) => console.log('Error al enviar mensaje: '+e))

        }

        try {
            
            let lista = await turnoSchema.find().sort({ diamantes: -1 })

            let embed = new Discord.MessageEmbed()

            let datos = []

            let c = 1

            for(let ls of lista){

                datos.push(ls.idusuario)
                c = c + 1
          
            }

            if(!lista || datos.length === 0) return message.channel.send({embeds:[
          
                new Discord.MessageEmbed()
                .setAuthor({ name: '𝐌𝐢𝐝𝐠𝐚𝐫𝐝 𝐒𝐭𝐚𝐟𝐟', iconURL: client.user.avatarURL({ dynamic: true}) })
                .setDescription('Aún no hay usuarios con diamantes <:tierno:931433334960160799>')   	
                .setColor("RANDOM")
                .setFooter({ text: `Malta's Bot`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true, size: 2048 }) : 'https://i.imgur.com/MNWYvup.gif' })

            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

            let best = client.users.cache.get(datos[0])
            let user = message.guild.members.resolve(best)
            var rol = message.guild.roles.cache.find(x => x.id === staffSemana)
            
            try {
                
                message.guild.members.cache.forEach(async member => {

                    if(member.roles.cache.find(r => r.id === staffSemana)){

                        await member.roles.remove(rol).catch(e => {
                    
                            console.log('Ocurrio un error al remover ROL Staff de la Semana al usuario: '+ member + ' - '+e)
                    
                        })

                    }

                })

                await user.roles.add(rol).catch(e => {
                    
                    console.log('Ocurrio un error al añadir ROL Staff de Turno al usuario: '+ message.author.id+ ' - '+e)
                        
                })

            } catch (error) {

                console.log('Ocurrio un error al buscar ROL Staff de la Semana en todos los usuarios: '+error)

            }

            embed.setAuthor({ name: '𝐌𝐢𝐝𝐠𝐚𝐫𝐝 𝐒𝐭𝐚𝐟𝐟', iconURL: client.user.avatarURL({ dynamic: true}) })
            embed.setTitle('𝗦𝘁𝗮𝗳𝗳 𝗱𝗲 𝗹𝗮 𝗦𝗲𝗺𝗮𝗻𝗮 ✨')
            embed.setThumbnail(best.displayAvatarURL() ? best.displayAvatarURL({dynamic: true, size: 2048}) : message.guild.iconURL({ dynamic: true, size: 2048 }))
            embed.setImage('https://i.imgur.com/9JJeBS7.gif')
            embed.setDescription('Muchas Felicidades **'+ best.username + '**!!! Por tu gran esfuerzo y dedicación, has obtenido el Rol <@&924042633339367436> Todos estamos agradecimos... Lo mereces!')   	
            embed.setColor("RANDOM")
            embed.setTimestamp(Date())
            embed.setFooter({ text: `Malta's Bot`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true, size: 2048 }) : 'https://i.imgur.com/MNWYvup.gif' })
            
            canalstaff.bulkDelete(2)
            canalstaff.send({ content: '<@' + best.id + '>' , embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
            canalstaff.send('https://images-ext-2.discordapp.net/external/9iPHKFXXnKKSQpcFazlW79dr1zbbtdo7QT7-xxtfDY4/%3Fwidth%3D600%26height%3D86/https/media.discordapp.net/attachments/897951731462316073/915663567213199390/bar-1.gif?width=450&height=65').catch((e) => console.log('Error al enviar mensaje: '+e))
            canalstaff.send('https://images-ext-2.discordapp.net/external/9iPHKFXXnKKSQpcFazlW79dr1zbbtdo7QT7-xxtfDY4/%3Fwidth%3D600%26height%3D86/https/media.discordapp.net/attachments/897951731462316073/915663567213199390/bar-1.gif?width=450&height=65').catch((e) => console.log('Error al enviar mensaje: '+e))
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

    }

}