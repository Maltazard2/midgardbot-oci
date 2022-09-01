const xpclubSchema = require('../../models/xpclubSchema');
var AsciiTable = require('ascii-table')

module.exports =  {
    
    name: 'xpi',
    aliases: [],
    description: '💻 Comando exclusivo de Staff',

    async execute(client, message, args, Discord) {

        if(message.guild.id !== '777620055344545842') return

        let id = ['753435606410985573','683501310527668228']

        if(!id.some(id => message.author.id == id)) return

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
            .setDescription(`<a:Verify2:931463492677017650> | No puedes agregar XP a un bot`)
      
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        if(!user1.roles.cache.find(r => r.id === '941495987501944892')) return message.reply({embeds: [
        
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | El usuario no pertenece al Club`)
      
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        let userxp, xpi, logschannel, topchannel, lista, embed, first, c, best

        if(!args[1]) return message.reply({embeds: [
            
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | Ingresa el XP inicial del Participante.`)
        
        ]}).then(m => setTimeout(() => m.delete(), 5000)).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        if(isNaN(parseInt(args[1]))) return message.reply({embeds: [
            
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | Pon una cantidad, solo puedo agregar números.`)
        
        ]}).then(m => setTimeout(() => m.delete(), 5000)).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        xpi = parseInt(args[1])

        if(xpi < 0) return message.reply({embeds: [
            
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | Ingresa una cantidad mayor o igual a 0`)
        
        ]}).then(m => setTimeout(() => m.delete(), 5000)).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        logschannel = client.channels.cache.get('965156885558878319')
        topchannel = client.channels.cache.get('970094487059709953')

        try {

            userxp = await xpclubSchema.findOne({ idusuario: user1.id })
        
            if(!userxp){

                console.log('========================= REGISTRO DE XP CLUB =========================');
                                
                let user = await xpclubSchema.create({
                        
                    idusuario: user1.id,
                    xpinicial: xpi,
                    xpfinal: xpi,
                    xpsubtotal: 0,
                    xpadicional: 0,
                    xptotal: 0,
                            
                })
                            
                user.save();
                console.log('XP de Participante Registrado ===> Id: '+ user1.id + ' - XP inicial: ' + xpi)
                           
                console.log('========================= REGISTRO DE XP CLUB =========================');
                    
            } else{

                console.log('========================= ACTUALIZACIÓN DE XP CLUB =========================');
                        
                let update = await xpclubSchema.findOneAndUpdate({idusuario: user1.id},
                    {

                        xpinicial: xpi,
                        xpfinal: xpi,
                        xpsubtotal: 0,
                        xpadicional: 0,
                        xptotal: 0,

                    })

                update.save()
                console.log('XP de Participante Registrado ===> Id: '+ user1.id + ' - XP inicial: ' + xpi)
                 
                console.log('========================= ACTUALIZACIÓN DE XP CLUB =========================');

            }

            const e = new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
            .setColor('GREEN')
            .setDescription('<a:Verify1:931463354357276742> | Participante Registrado: <@' + user1.id + '>\n\n> XP inicial: ' + xpi)
            .setTimestamp()
        
            message.reply({ allowedMentions: { repliedUser: false}, embeds: [e]}).catch((e) => console.log('Error al enviar mensaje: '+e))

            try {
            
                lista = await xpclubSchema.find().sort({ xptotal: -1 }).limit(10)
    
                embed = new Discord.MessageEmbed()
    
                first = []
    
                c = 1

                var tablexp = new AsciiTable()

                for(let ls of lista){
    
                    // datos.push('**' + c + '.** <@' + ls.idusuario + '> ===> XP: **'+ls.xptotal+'**')
                    // tablexp.addRow('**' + c + '.**', '<@' + ls.idusuario + '> <a:flech:931432469935312937>', ls.xpsubtotal + ' | ', ls.xpadicional + ' | **', ls.xptotal + '**')
                    tablexp.addRow('**' + c + '.**', '<@' + ls.idusuario + '>\n\n> *XP:* ' + ls.xpsubtotal + '  |  *Extra:* ' + ls.xpadicional + '\n> *TOTAL:* **' + ls.xptotal + '**\n\n')
                    first.push(ls.idusuario)
                    c = c + 1
                    
                }
                
                tablexp.setAlignCenter(0)
                tablexp.setAlignCenter(1)
                tablexp.removeBorder()

                if(!lista) return message.channel.send({embeds:[
              
                    new Discord.MessageEmbed()
                    .setDescription('Aún no hay usuarios con XP <:tierno:931433334960160799>')   	
                    .setColor("RANDOM")
                    .setTimestamp(new Date())
                    .setFooter({ text: '𝐌𝐢𝐝𝐠𝐚𝐫𝐝 𝐍𝐞𝐤𝐨𝐂𝐥𝐮𝐛', iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true, size: 2048 }) : 'https://i.imgur.com/MNWYvup.gif' })

                ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
    
                best = client.users.cache.get(first[0])

                embed.setTitle('𝑴𝒊𝒅𝒈𝒂𝒓𝒅 𝑿𝑷 𝑹𝒂𝒄𝒆 💎')
                embed.setThumbnail(best.displayAvatarURL() ? best.displayAvatarURL({dynamic: true, size: 2048}) : message.guild.iconURL({ dynamic: true, size: 2048 }))
                embed.setImage('https://i.imgur.com/VKOLvQT.gif')
                embed.setDescription(tablexp.toString())   	
                embed.setColor("RANDOM")
                embed.setTimestamp(new Date())
                embed.setFooter({ text: '𝐌𝐢𝐝𝐠𝐚𝐫𝐝 𝐍𝐞𝐤𝐨𝐂𝐥𝐮𝐛', iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true, size: 2048 }) : 'https://i.imgur.com/MNWYvup.gif' })

                
                topchannel.bulkDelete(3).catch((e) => console.log('Error al eliminar mensajes: '+e))
                topchannel.send('https://images-ext-2.discordapp.net/external/9iPHKFXXnKKSQpcFazlW79dr1zbbtdo7QT7-xxtfDY4/%3Fwidth%3D600%26height%3D86/https/media.discordapp.net/attachments/897951731462316073/915663567213199390/bar-1.gif?width=450&height=65').catch((e) => console.log('Error al enviar mensaje: '+e))
                topchannel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
                topchannel.send('https://images-ext-2.discordapp.net/external/9iPHKFXXnKKSQpcFazlW79dr1zbbtdo7QT7-xxtfDY4/%3Fwidth%3D600%26height%3D86/https/media.discordapp.net/attachments/897951731462316073/915663567213199390/bar-1.gif?width=450&height=65').catch((e) => console.log('Error al enviar mensaje: '+e))

            } catch (error) {
                
                console.log('Ocurrió un error al buscar la lista de XP: '+ error)
    
                const e = new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | Ocurrió un error inesperado, por favor intenta de nuevo!\n> Error: `+error)
                .setTimestamp()
                
                logschannel.send({ content: '``` Error al Buscar la Lista de XP - User: ' + user1.id + ' - Error: ' + error + '```' }).catch((e) => console.log('Error al enviar mensaje: '+e))
            
                return message.reply({embeds: [e]}).catch((e) => console.log('Error al enviar mensaje: '+e))
    
            }
            
        } catch (error) {

            console.log('Error al encontrar miembro de Club: ' + error)
            logschannel.send({ content: '``` Error al Registrar en la Bd XP club - User: ' + user1.id + ' - Error: ' + error + '```' }).catch((e) => console.log('Error al enviar mensaje: '+e))
            return message.reply('Ocurrió un error al registrar en la BD. Por favor, intente de nuevo.').catch((e) => console.log('Error al enviar mensaje: '+e))
            
        }
        
    }

}