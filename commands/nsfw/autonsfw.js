const NSFW = require('discord-nsfw');
const nsfw3 = new NSFW();
const { Permissions } = require('discord.js');
const prefixSchema = require('../../models/serverSchema');
const autonsfwSchema = require('../../models/autonsfwSchema');

module.exports =  {
    
    name: 'autonsfw',
    aliases: [],
    description: '🔞 Comandos NSFW.',
    category: 'NSFW 🔥',
    use: '<prefix>autonsfw <tiempo>',
    owner: true,
    vip: true,
    slash: false,
    
    async execute(client, message, args, Discord) { 
  
        if(message.guild.id !== '777620055344545842') return

        let buscarprefix, prefix
        try {

            buscarprefix = await prefixSchema.findOne({idserver: message.guild.id})

            if(buscarprefix){

                prefix = buscarprefix.prefix

            } else {

                prefix = process.env.PREFIX

            }

        } catch (error) {

            console.log('Error al Prefix en Servidor: '+ message.guild.id + ' - ' + error)
            prefix = process.env.PREFIX

        }

        let id = ['753435606410985573']

        let autosend

        if(!id.some(id => message.author.id == id)) {
      
            const embed = new Discord.MessageEmbed()
            .setDescription('Solo los Gerentes pueden usar este comando.')
            .setColor('RED')
            
            return message.reply({ embeds: [embed] })
            .then(m => setTimeout(() => m.delete(), 5000)).catch((e) => console.log('Error al enviar mensaje: '+e))

        }
        
        if(!args[0]) return message.reply({ embeds: [

            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | Uso incorrecto del comando\n\n▫ Para activar: **${prefix}autonsfw <on> <intervalo en m> <#canal/id>**\n▫ Para desactivar: **${prefix}autonsfw <off>**`)
    
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e)) 

        if(args[0].toLowerCase() === 'on'){

            if(!args[1]) return message.reply({ embeds: [

                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | Uso incorrecto del comando\n\n▫ Para activar: **${prefix}autonsfw <on> <intervalo en m> <#canal/id>**\n▫ Para desactivar: **${prefix}autonsfw <off>**`)
        
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e)) 
    
            if(isNaN(parseInt(args[1]))) return message.reply({ embeds: [

                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | Uso incorrecto del comando\n\n▫ Para activar: **${prefix}autonsfw <on> <intervalo en m> <#canal/id>**\n▫ Para desactivar: **${prefix}autonsfw <off>**`)
        
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e)) 

            let tiempo = parseInt(args[1])

            if(tiempo < 1 || tiempo > 60) return message.reply({ embeds: [

                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | El tiempo debe ser mínimo 1 y máximo 60 minutos.`)
        
            ]}).then(m => setTimeout(() => m.delete(), 5000)).catch((e) => console.log('Error al enviar mensaje: '+e))
        
            let canalnsfw = message.mentions.channels.first() || message.channel || client.channels.cache.get(args[2])
            
            if(!canalnsfw) return message.reply({ embeds: [

                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | Uso incorrecto del comando\n\n▫ Para activar: **${prefix}autonsfw <on> <intervalo en m> <#canal/id>**\n▫ Para desactivar: **${prefix}autonsfw <off>**`)
        
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e)) 
    
            try {

                autosend = await autonsfwSchema.findOne({ idserver: message.guild.id })
            
                if(!autosend){
    
                    console.log('========================= REGISTRO DE CANAL AUTONSFW =========================');
                            
                    let nsfw = await autonsfwSchema.create({
    
                        idserver: message.guild.id,
                        idcanal: canalnsfw.id,
                        intervalo: tiempo,
                        modo: true,
    
                    })
    
                    nsfw.save();
                    console.log('Canal AutoNsfw Registrado ===> Server: '+ message.guild.name + ' Canal: ' + canalnsfw + ' Intervalo: ' + tiempo)
                    
                    console.log('========================= REGISTRO DE CANAL AUTONSFW =========================');
                            
                } else {

                    if(!autosend.idcanal || autosend.idcanal === null){

                        try {
                            
                            console.log('========================= ACTUALIZACIÓN DE CANAL AUTONSFW =========================');
                        
                            let update = await autonsfwSchema.findOneAndUpdate({idserver: message.guild.id},
                            {

                                idcanal: canalnsfw.id,
                                intervalo: tiempo,
                                modo: true,

                            })

                            update.save()
                            console.log('Canal AutoNsfw Actualizado ===> Server: '+ message.guild.name + ' Canal: ' + canalnsfw + ' Intervalo: ' + tiempo)
                    
                            console.log('========================= ACTUALIZACIÓN DE CANAL AUTONSFW =========================');
                 
                        } catch (error) {
                            
                            console.log('Error al actualizar canal autonsfw '+error)
                           
                        }

                    } else if (autosend.idcanal){

                        return message.reply({ embeds: [
                    
                            new Discord.MessageEmbed()
                            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                            .setColor('RED')
                            .setDescription('<a:Verify2:931463492677017650> | Este servidor ya cuenta con un canal AutoNsfw : <#' + autosend.idcanal + '>.')
                            .setTimestamp()
            
                        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

                    }

                }

                message.reply({ allowedMentions: { repliedUser: false}, embeds: [
                    
                    new Discord.MessageEmbed()
                    .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                    .setColor('GREEN')
                    .setDescription('***AutoNSFW*** activado en un intervalo de **'+tiempo+' minuto'+(tiempo === 1 ? '' : 's')+'** y en el canal de <#' + canalnsfw.id + '>.')
                    .setTimestamp()

                ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

                client.destroy();

                await client.login(process.env.TOKEN);
                
            } catch (error) {
    
                console.log('Error al registrar canal autonsfw: '+error)
                
            }

        } else if(args[0].toLowerCase() === 'off'){

            try {

                autosend = await autonsfwSchema.findOne({ idserver: message.guild.id })
            
                if(!autosend){

                    return message.reply({ embeds: [
                    
                        new Discord.MessageEmbed()
                        .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                        .setColor('RED')
                        .setDescription('<a:Verify2:931463492677017650> | Este servidor no cuenta con un canal AutoNsfw.')
                        .setTimestamp()
        
                    ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

                          
                } else {

                    if(!autosend.idcanal){

                        return message.reply({ embeds: [
                    
                            new Discord.MessageEmbed()
                            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                            .setColor('RED')
                            .setDescription('<a:Verify2:931463492677017650> | Este servidor no cuenta con un canal AutoNsfw.')
                            .setTimestamp()
            
                        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))


                    } else if (autosend.idcanal){

                        try {
                            
                            console.log('========================= ACTUALIZACIÓN DE CANAL AUTONSFW =========================');
                        
                            let update = await autonsfwSchema.findOneAndUpdate({idserver: message.guild.id},
                            {

                                idcanal: null,
                                modo: false,

                            })

                            update.save()
                            console.log('Canal AutoNsfw desactivado ===> Server: '+ message.guild.name)
                    
                            console.log('========================= ACTUALIZACIÓN DE CANAL AUTONSFW =========================');
                 
                        } catch (error) {
                            
                            console.log('Error al desactivar canal autonsfw '+error)
                           
                        }
                    }

                }

                message.reply({ allowedMentions: { repliedUser: false}, embeds: [
                    
                    new Discord.MessageEmbed()
                    .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                    .setColor('GREEN')
                    .setDescription('***AutoNSFW*** desactivado en el canal de <#' + canalnsfw.id + '>.')
                    .setTimestamp()
    
                ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
                
            } catch (error) {
    
                console.log('Error al registrar canal autonsfw: '+error)
                
            }

        } else{

            return message.reply({ embeds: [

                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | Uso incorrecto del comando\n\n▫ Para activar: **${prefix}autonsfw <on> <intervalo en m> <#canal/id>**\n▫ Para desactivar: **${prefix}autonsfw <off>**`)
        
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e)) 

        }

    }

}