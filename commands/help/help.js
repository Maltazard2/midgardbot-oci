const serverSchema = require('../../models/serverSchema');
const config = require('../../config.json');

module.exports =  {
    
    name: 'help',
    aliases: ['h','ayuda','comandos','commands'],
    description: '❗ Menú de ayuda con la lista de los comandos del bot.',
    category: 'Ayuda 💌',
    use: '<prefix>help [comando]',
    owner: false,
    vip: false,
    slash: false,
  
    async execute(client, message, args, Discord) {

        let buscarprefix, prefix, svp, query, descripcion, alias, category, use, owner, vip, slash
        try {

            buscarprefix = await serverSchema.findOne({idserver: message.guild.id})

            if(buscarprefix){

                prefix = buscarprefix.prefix
                
                if(buscarprefix.premium === true){

                    svp = ' | Servidor Premium 💎'

                } else{

                    svp = ''

                }

            } else {

                prefix = config.prefix
                svp = ''

            }

        } catch (error) {

            console.log('Error al Prefix en Servidor: '+ message.guild.id + ' - ' + error)
            prefix = config.prefix

        }

        let cmd = args[0]
        
        const file = new Discord.MessageAttachment('img/banner.jpg')

        const embed = new Discord.MessageEmbed()
        .setFooter({ text: message.author.username+'#'+message.author.discriminator, iconURL: message.author.avatarURL({ dynamic: true }) })
        .setColor('RANDOM')
        .setTimestamp(new Date())
        .setThumbnail(message.guild.iconURL() ? message.guild.iconURL({ dynamic: true, size: 2048 }) : 'https://i.imgur.com/L7CrF87.gif')
        .setImage('attachment://banner.jpg')
        //.setImage('https://media.discordapp.net/attachments/938965106275025017/1015109962910945323/banner.jpg?width=767&height=383')
        
        const btns_options1 = new Discord.MessageActionRow().addComponents([
      
            new Discord.MessageButton()
            .setCustomId('home')
            .setLabel('🏠')
            .setStyle('PRIMARY'),

            new Discord.MessageButton()
            .setCustomId('cbd')
            .setLabel('🥂')
            .setStyle('PRIMARY'),

            new Discord.MessageButton()
            .setCustomId('div')
            .setLabel('🤣')
            .setStyle('PRIMARY'),

            new Discord.MessageButton()
            .setCustomId('eco')
            .setLabel('💰')
            .setStyle('PRIMARY'),

            new Discord.MessageButton()
            .setCustomId('inf')
            .setLabel('📌')
            .setStyle('PRIMARY'),
        
        ])
    
        const btns_options2 = new Discord.MessageActionRow().addComponents([

            new Discord.MessageButton()
            .setCustomId('mod')
            .setLabel('🔒')
            .setStyle('PRIMARY'),

            new Discord.MessageButton()
            .setCustomId('nsfw')
            .setLabel('🔥')
            .setStyle('PRIMARY'),

            new Discord.MessageButton()
            .setCustomId('rea')
            .setLabel('😎')
            .setStyle('PRIMARY'),

            new Discord.MessageButton()
            .setCustomId('util')
            .setLabel('💡')
            .setStyle('PRIMARY'),
        
            new Discord.MessageButton()
            .setCustomId('close')
            .setLabel('✖')
            .setStyle('DANGER'),
      
        ])

        if(!cmd){

            message.reply({ allowedMentions: { repliedUser: false}, 
            
                embeds: [

                    embed
                    .setAuthor({ name: 'MidgardBot' + svp, iconURL: client.user.avatarURL({ dynamic: true }) })
                    .setTitle('Bienvenido al apartado de Ayuda 💌')
                    .setDescription('Hola <@' + message.author.id + '> esta es la lista de **comandos** y **funciones** de **MidgardBot**, además te brindamos:\n\n> <:developer:972668211365576724> [Servidor de soporte](https://discord.gg/CM9yAmXPfC)\n> <:emoji_41:989454718537465967> [Website](https://midgardbot-web.herokuapp.com/)\n> <:Worlds_Icon_Invite:989451828301287424> [Link de invitación](https://discord.com/api/oauth2/authorize?client_id=904290001196556369&permissions=1619202014423&scope=bot%20applications.commands)\n\nMi prefix en `' + message.guild.name + '` es: `' + prefix + '`\n\nPara ver la ayuda de cada comando, ejecuta: `help <comando>`\n\nPara más información de cada categoría, navega por el menú:\n\n> 🥂 • Bar | Cafetería | Disco\n> 🤣 • Diversión\n> 💰 • Economía\n> 📌 • Información\n> 🔒 • Moderación\n> 🔥 • NSFW\n > 😎 • Reacción\n> 💡 • Utilidad\n\n<a:flech:931432469935312937> **Muchas gracias por utilizar nuestro bot** <a:mbs:972669050054406174>')

                ],
                components: [btns_options1, btns_options2],
                files: [file]
              
            }).then(async m => {
                
                let filter = int => int.isButton() && int.user.id == message.author.id 
               
                const collector = m.createMessageComponentCollector({ filter });
                
                collector.on('collect', async int => {
                  
                    await int.deferUpdate();

                    if (int.customId === 'home') {
                    
                        m.edit({
                      
                            embeds: [
                                
                                embed
                                .setAuthor({ name: 'MidgardBot' + svp, iconURL: client.user.avatarURL({ dynamic: true }) })
                                .setTitle('Bienvenido al apartado de Ayuda 💌')
                                .setDescription('Hola <@' + message.author.id + '> esta es la lista de **comandos** y **funciones** de **MidgardBot**, además te brindamos:\n\n> <:developer:972668211365576724> [Servidor de soporte](https://discord.gg/CM9yAmXPfC)\n> <:emoji_41:989454718537465967> [Website](https://midgardbot-web.herokuapp.com/)\n> <:Worlds_Icon_Invite:989451828301287424> [Link de invitación](https://discord.com/api/oauth2/authorize?client_id=904290001196556369&permissions=1619202014423&scope=bot%20applications.commands)\n\nMi prefix en `' + message.guild.name + '` es: `' + prefix + '`\n\nPara ver la ayuda de cada comando, ejecuta: `help <comando>`\n\nPara más información de cada categoría, navega por el menú:\n\n> 🥂 • Bar | Cafetería | Disco\n> 🤣 • Diversión\n> 💰 • Economía\n> 📌 • Información\n> 🔒 • Moderación\n> 🔥 • NSFW\n > 😎 • Reacción\n> 💡 • Utilidad\n\n<a:flech:931432469935312937> **Muchas gracias por utilizar nuestro bot** <a:mbs:972669050054406174>')

                            ],
                            components: [btns_options1, btns_options2]
                    
                        }).catch((e) => console.log('Error al enviar mensaje: '+e))
          
                    } else if (int.customId === 'cbd') {
                    
                        m.edit({
                      
                            embeds: [
                                
                                embed
                                .setTitle('')
                                .setAuthor({ name: 'MidgardBot | Comandos Exclusivos 🥂', iconURL: client.user.avatarURL({ dynamic: true }) })
                                .setDescription('Utilizando `' + prefix + 'help <comando>` obtienes ayuda detallada sobre cada comando.\n\nVisita mi [Website](https://midgardbot-web.herokuapp.com/) y conoce todas mis funciones.\n\n<a:fijadito:931432134797848607> ***Cafetería*** ☕\n> **• ' + client.commands.filter(c => c.category == 'Cafetería ☕' && c.owner == false).map(c => c.name).join('**\n> **• ') + '**\n\n<a:fijadito:931432134797848607> ***Bar*** 🥂\n> **• ' + client.commands.filter(c => c.category == 'Bar 🥂' && c.owner == false).map(c => c.name).join('**\n> **• ') + '**\n\n<a:fijadito:931432134797848607> ***Disco*** 💃\n> **• ' + client.commands.filter(c => c.category == 'Disco 💃' && c.owner == false).map(c => c.name).join('**\n> **• ') + '**\n\n')

                            ],
                            components: [btns_options1, btns_options2]
                    
                        }).catch((e) => console.log('Error al enviar mensaje: '+e))
          
                    } else if (int.customId === 'div') {
                    
                        m.edit({
                      
                            embeds: [
                                
                                embed
                                .setTitle('')
                                .setAuthor({ name: 'MidgardBot | Comandos de Diversión 🤣', iconURL: client.user.avatarURL({ dynamic: true }) })
                                .setDescription('Utilizando `' + prefix + 'help <comando>` obtienes ayuda detallada sobre cada comando.\n\nVisita mi [Website](https://midgardbot-web.herokuapp.com/) y conoce todas mis funciones.\n\n> **• ' + client.commands.filter(c => c.category == 'Diversión 🤣' && c.vip == false && c.owner == false).map(c => c.name).join('**\n> **• ') + '**\n\n' + ((client.commands.filter(c => c.category == 'Diversión 🤣' && c.vip == true && c.owner == false).map(c => c.name).length > 0) ? ('<a:fijadito:931432134797848607> ***VIP*** 💎\n> **• ' + client.commands.filter(c => c.category == 'Diversión 🤣' && c.vip == true && c.owner == false).map(c => c.name).join('**\n> **• ') + '**\n\n') : ''))

                            ],
                            components: [btns_options1, btns_options2]
                    
                        }).catch((e) => console.log('Error al enviar mensaje: '+e))
          
                    } else if (int.customId === 'eco') {
                    
                        m.edit({
                      
                            embeds: [
                                
                                embed
                                .setTitle('')
                                .setAuthor({ name: 'MidgardBot | Comandos de Economía 💰', iconURL: client.user.avatarURL({ dynamic: true }) })
                                .setDescription('Utilizando `' + prefix + 'help <comando>` obtienes ayuda detallada sobre cada comando.\n\nVisita mi [Website](https://midgardbot-web.herokuapp.com/) y conoce todas mis funciones.\n\n> **• ' + client.commands.filter(c => c.category == 'Economía 💰' && c.vip == false && c.owner == false).map(c => c.name).join('**\n> **• ') + '**\n\n' + ((client.commands.filter(c => c.category == 'Economía 💰' && c.vip == true && c.owner == false).map(c => c.name).length > 0) ? ('<a:fijadito:931432134797848607> ***VIP*** 💎\n> **• ' + client.commands.filter(c => c.category == 'Economía 💰' && c.vip == true && c.owner == false).map(c => c.name).join('**\n> **• ') + '**\n\n') : ''))

                            ],
                            components: [btns_options1, btns_options2]
                    
                        }).catch((e) => console.log('Error al enviar mensaje: '+e))
          
                    } else if (int.customId === 'inf') {
                    
                        m.edit({
                      
                            embeds: [
                                
                                embed
                                .setTitle('')
                                .setAuthor({ name: 'MidgardBot | Comandos de Información 📌', iconURL: client.user.avatarURL({ dynamic: true }) })
                                .setDescription('Utilizando `' + prefix + 'help <comando>` obtienes ayuda detallada sobre cada comando.\n\nVisita mi [Website](https://midgardbot-web.herokuapp.com/) y conoce todas mis funciones.\n\n> **• ' + client.commands.filter(c => c.category == 'Información 📌' && c.vip == false && c.owner == false).map(c => c.name).join('**\n> **• ') + '**\n\n' + ((client.commands.filter(c => c.category == 'Información 📌' && c.vip == true && c.owner == false).map(c => c.name).length > 0) ? ('<a:fijadito:931432134797848607> ***VIP*** 💎\n> **• ' + client.commands.filter(c => c.category == 'Información 📌' && c.vip == true && c.owner == false).map(c => c.name).join('**\n> **• ') + '**\n\n') : ''))

                            ],
                            components: [btns_options1, btns_options2]
                    
                        }).catch((e) => console.log('Error al enviar mensaje: '+e))
          
                    } else if (int.customId === 'mod') {
                        
                        m.edit({
                      
                            embeds: [
                                
                                embed
                                .setTitle('')
                                .setAuthor({ name: 'MidgardBot | Comandos de Moderación 🔒', iconURL: client.user.avatarURL({ dynamic: true }) })
                                .setDescription('Utilizando `' + prefix + 'help <comando>` obtienes ayuda detallada sobre cada comando.\n\nVisita mi [Website](https://midgardbot-web.herokuapp.com/) y conoce todas mis funciones.\n\n> **• ' + client.commands.filter(c => c.category == 'Moderación 🔒' && c.vip == false && c.owner == false).map(c => c.name).join('**\n> **• ') + '**\n\n' + ((client.commands.filter(c => c.category == 'Moderación 🔒' && c.vip == true && c.owner == false).map(c => c.name).length > 0) ? ('<a:fijadito:931432134797848607> ***VIP*** 💎\n> **• ' + client.commands.filter(c => c.category == 'Moderación 🔒' && c.vip == true && c.owner == false).map(c => c.name).join('**\n> **• ') + '**\n\n') : ''))

                            ],
                            components: [btns_options1, btns_options2]
                    
                        }).catch((e) => console.log('Error al enviar mensaje: '+e))
          
                    } else if (int.customId === 'nsfw') {
                    
                        if(!message.channel.nsfw){

                            await int.followUp({ content: 'El canal no acepta contenido NSFW, por favor, necesitas activar la restricción por edad para continuar.', ephemeral: true })
                            
                        } else {

                            m.edit({
                      
                                embeds: [
                                    
                                    embed
                                    .setTitle('')
                                    .setAuthor({ name: 'MidgardBot | Comandos NSFW 🔥', iconURL: client.user.avatarURL({ dynamic: true }) })
                                    .setDescription('Comandos única y exclusivamente para canales NSFW.\n\nUtilizando `' + prefix + 'help <comando>` obtienes ayuda detallada sobre cada comando.\n\nVisita mi [Website](https://midgardbot-web.herokuapp.com/) y conoce todas mis funciones.\n\n> • ~~' + client.commands.filter(c => c.category == 'NSFW 🔥' && c.vip == false && c.owner == false).map(c => c.name).join('~~\n> • ~~') + '~~\n\n' + ((client.commands.filter(c => c.category == 'NSFW 🔥' && c.vip == true && c.owner == false).map(c => c.name).length > 0) ? ('<a:fijadito:931432134797848607> ***VIP*** 💎\n> • ~~' + client.commands.filter(c => c.category == 'NSFW 🔥' && c.vip == true && c.owner == false).map(c => c.name).join('~~\n> • ~~') + '~~\n\n') : ''))
    
                                ],
                                components: [btns_options1, btns_options2]
                        
                            }).catch((e) => console.log('Error al enviar mensaje: '+e))
              
                        }
                        
                    } else if (int.customId === 'rea') {
                    
                        m.edit({
                      
                            embeds: [
                                
                                embed
                                .setTitle('')
                                .setAuthor({ name: 'MidgardBot | Comandos de Reacción 😎', iconURL: client.user.avatarURL({ dynamic: true }) })
                                .setDescription('Utilizando `' + prefix + 'help <comando>` obtienes ayuda detallada sobre cada comando.\n\nVisita mi [Website](https://midgardbot-web.herokuapp.com/) y conoce todas mis funciones.\n\n> **• ' + client.commands.filter(c => c.category == 'Reacción 😎' && c.vip == false && c.owner == false).map(c => c.name).join('**\n> **• ') + '**\n\n' + ((client.commands.filter(c => c.category == 'Reacción 😎' && c.vip == true && c.owner == false).map(c => c.name).length > 0) ? ('<a:fijadito:931432134797848607> ***VIP*** 💎\n> **• ' + client.commands.filter(c => c.category == 'Reacción 😎' && c.vip == true && c.owner == false).map(c => c.name).join('**\n> **• ') + '**\n\n') : ''))

                            ],
                            components: [btns_options1, btns_options2]
                    
                        }).catch((e) => console.log('Error al enviar mensaje: '+e))
          
                    } else if (int.customId === 'util') {
                    
                        m.edit({
                      
                            embeds: [
                                
                                embed
                                .setTitle('')
                                .setAuthor({ name: 'MidgardBot | Comandos de Utilidad 💡', iconURL: client.user.avatarURL({ dynamic: true }) })
                                .setDescription('Utilizando `' + prefix + 'help <comando>` obtienes ayuda detallada sobre cada comando.\n\nVisita mi [Website](https://midgardbot-web.herokuapp.com/) y conoce todas mis funciones.\n\n> **• ' + client.commands.filter(c => c.category == 'Utilidad 💡' && c.vip == false && c.owner == false).map(c => c.name).join('**\n> **• ') + '**\n\n' + ((client.commands.filter(c => c.category == 'Utilidad 💡' && c.vip == true && c.owner == false).map(c => c.name).length > 0) ? ('<a:fijadito:931432134797848607> ***VIP*** 💎\n> **• ' + client.commands.filter(c => c.category == 'Utilidad 💡' && c.vip == true && c.owner == false).map(c => c.name).join('**\n> **• ') + '**\n\n') : ''))

                            ],
                            components: [btns_options1, btns_options2]
                    
                        }).catch((e) => console.log('Error al enviar mensaje: '+e))
          
                    } else if (int.customId === 'close') {
                    
                        m.delete()
                    }
          
                });
          
                collector.on('end', (collected, reason) => {
                  
                    if(collected.size < 1) return m.edit({
                    
                        embeds: [
                            
                            embed
                            .setAuthor({ name: 'MidgardBot' + svp, iconURL: client.user.avatarURL({ dynamic: true }) })
                            .setTitle('Bienvenido al apartado de Ayuda 💌')
                            .setDescription('Hola <@' + message.author.id + '> esta es la lista de **comandos** y **funciones** de **MidgardBot**, además te brindamos:\n\n> <:developer:972668211365576724> [Servidor de soporte](https://discord.gg/CM9yAmXPfC)\n> <:emoji_41:989454718537465967> [Website](https://midgardbot-web.herokuapp.com/)\n> <:Worlds_Icon_Invite:989451828301287424> [Link de invitación](https://discord.com/api/oauth2/authorize?client_id=904290001196556369&permissions=1619202014423&scope=bot%20applications.commands)\n\nMi prefix en `' + message.guild.name + '` es: `' + prefix + '`\n\nPara ver la ayuda de cada comando, ejecuta: `help <comando>`\n\nPara más información de cada categoría, navega por el menú:\n\n> 🥂 • Bar | Cafetería | Disco\n> 🤣 • Diversión\n> 💰 • Economía\n> 📌 • Información\n> 🔒 • Moderación\n> 🔥 • NSFW\n > 😎 • Reacción\n> 💡 • Utilidad\n\n<a:flech:931432469935312937> **Muchas gracias por utilizar nuestro bot** <a:mbs:972669050054406174>')

                        ],
                        components: []
                  
                    }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
                    console.log('El collect del help finalizó por: '+reason)
                  
                });
              
            }).catch((e) => console.log('Error al enviar mensaje: '+e))

        } else{

            try {
                
                query = client.commands.get(cmd) ||
                        client.commands.find((a) => a.aliases && a.aliases.includes(cmd)) // Obtiene el comando de la colección client.commandos

            } catch (error) {

                console.log('Error al buscar comando: ' + cmd + ' - ' + error)
                
                const e4 = new Discord.MessageEmbed()
                .setAuthor({ name: 'MidgardBot' + svp, iconURL: client.user.avatarURL({ dynamic: true }) })
                .setThumbnail(message.guild.iconURL() ? message.guild.iconURL({ dynamic: true, size: 2048 }) : client.user.avatarURL({ dynamic: true }))
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | Ocurrió un error inesperado, por favor intenta de nuevo!\n> Error: `+error)
                .setFooter({ text: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
                .setTimestamp()

                return message.reply({embeds: [e4]}).catch((e) => console.log('Error al enviar mensaje: '+e))
            }

            if(query){

                descripcion = query.description
                alias = query.aliases ? query.aliases : 'No tiene'
                use = query.use
                category = query.category
                owner = query.owner
                vip = query.vip
                slash = query.slash

                if(owner == true){

                    if(message.author.id != config.IdOwner){
                        
                        return message.reply({ embeds: [

                            new Discord.MessageEmbed()
                            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
                            .setColor('RED')
                            .setDescription('<a:Verify2:931463492677017650> | No se encontró ningún comando con ese nombre o alias!')
                    
                        ]}).then(m => setTimeout(() => m.delete(), 15000)).catch((e) => console.log('Error al enviar mensaje: '+e))
                    
                    }
        
                }
                if(category == 'NSFW 🔥'){

                    if(!message.channel.nsfw){
        
                        return message.reply({embeds: [
                  
                          new Discord.MessageEmbed()
                          .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                          .setThumbnail('https://i.imgur.com/9hw4JPi.gif')
                          .setColor('RED')
                          .setDescription(`<a:prohibido:936527618466009109> | ¡Oh rayos, necesitas un canal NSFW para ver este menú <:ojooo:925928526119571457>`)
                  
                        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
                        
                    }

                }

                if(descripcion.includes('[prefix]')){

                    descripcion = descripcion.replace('[prefix]',prefix)

                }
                
                if(descripcion.includes('<prefix>')){

                    descripcion = descripcion.replace('<prefix>',prefix)

                }

                if(use.includes('<prefix>')){

                    use = use.replace('<prefix>',prefix)

                }

                if(use.includes('<')){

                    if(use.includes('[')){

                        use = '`' + use + '`\n\n> <> • requerido\n> [] • opcional'

                    } else{

                        use = '`' + use + '`\n\n> <> • requerido'

                    }

                } else if(use.includes('[')){

                    use = '`' + use + '`\n\n> [] • opcional'

                }

                if(alias.length > 1){

                    alias = '`' + alias.join('` `') + '`'

                } else{

                    alias = '`' + alias + '`'

                }

                if(vip == true){

                    vip = '`Sí`'

                } else if(vip == false){

                    vip = '`No`'

                }

                if(slash == true){

                    slash = '`Sí`'

                } else if(slash == false){

                    slash = '`No`'

                }

                const embed2 = new Discord.MessageEmbed()
                .setFooter({ text: message.author.username+'#'+message.author.discriminator, iconURL: message.author.avatarURL({ dynamic: true }) })
                .setColor('RANDOM')
                .setTimestamp(new Date())
                .setImage('attachment://banner.jpg')
                .setAuthor({ name: 'MidgardBot' + svp, iconURL: client.user.avatarURL({ dynamic: true }) })
                .setThumbnail('https://i.imgur.com/kwMaqLo.gif')
                .setDescription('<:shylove:931432905421520927> **Hola** <@' + message.author.id + '>. Bienvenid@ a mi apartado de ayuda para `' + query.name + '`.\n\n')
                .addField('<a:point:953436509426581564> __Categoría__', '' + category)
                .addField('<a:point:953436509426581564> __Descripción__', '' + descripcion)
                .addField('<a:point:953436509426581564> __Uso__', '' + use)
                .addField('<a:point:953436509426581564> __Alias__', '' + alias)
                .addField('<a:fijadito:931432134797848607>', '> <a:point:953436509426581564> **VIP: **' + vip + '\n> <a:point:953436509426581564> **SLASH:** ' + slash)
                
                const btns_options3 = new Discord.MessageActionRow().addComponents([
      
                    new Discord.MessageButton()
                    .setCustomId('home')
                    .setLabel('🏠')
                    .setStyle('PRIMARY'),
                
                    new Discord.MessageButton()
                    .setCustomId('close')
                    .setLabel('✖')
                    .setStyle('DANGER'),
              
                ])
        
                message.reply({ allowedMentions: { repliedUser: false}, 
            
                    embeds: [embed2],
                    components: [btns_options3]
                  
                }).then(async m => {
                
                    let filter = int => int.isButton() && int.user.id == message.author.id 
                   
                    const collector = m.createMessageComponentCollector({ filter });
                    
                    collector.on('collect', async int => {
                      
                        await int.deferUpdate();
    
                        if (int.customId === 'home') {
                        
                            m.edit({
                          
                                embeds: [
                                    
                                    embed
                                    .setAuthor({ name: 'MidgardBot' + svp, iconURL: client.user.avatarURL({ dynamic: true }) })
                                    .setTitle('Bienvenido al apartado de Ayuda 💌')
                                    .setDescription('Hola <@' + message.author.id + '> esta es la lista de **comandos** y **funciones** de **MidgardBot**, además te brindamos:\n\n> <:developer:972668211365576724> [Servidor de soporte](https://discord.gg/CM9yAmXPfC)\n> <:emoji_41:989454718537465967> [Website](https://midgardbot-web.herokuapp.com/)\n> <:Worlds_Icon_Invite:989451828301287424> [Link de invitación](https://discord.com/api/oauth2/authorize?client_id=904290001196556369&permissions=1619202014423&scope=bot%20applications.commands)\n\nMi prefix en `' + message.guild.name + '` es: `' + prefix + '`\n\nPara ver la ayuda de cada comando, ejecuta: `help <comando>`\n\nPara más información de cada categoría, navega por el menú:\n\n> 🥂 • Bar | Cafetería | Disco\n> 🤣 • Diversión\n> 💰 • Economía\n> 📌 • Información\n> 🔒 • Moderación\n> 🔥 • NSFW\n > 😎 • Reacción\n> 💡 • Utilidad\n\n<a:flech:931432469935312937> **Muchas gracias por utilizar nuestro bot** <a:mbs:972669050054406174>')
                                    
                                ],
                                components: [btns_options1, btns_options2],
                                files: [file]
                        
                            }).catch((e) => console.log('Error al enviar mensaje: '+e))
              
                        } else if (int.customId === 'cbd') {
                        
                            m.edit({
                          
                                embeds: [
                                    
                                    embed
                                    .setTitle('')
                                    .setAuthor({ name: 'MidgardBot | Comandos Exclusivos 🥂', iconURL: client.user.avatarURL({ dynamic: true }) })
                                    .setDescription('Utilizando `' + prefix + 'help <comando>` obtienes ayuda detallada sobre cada comando.\n\nVisita mi [Website](https://midgardbot-web.herokuapp.com/) y conoce todas mis funciones.\n\n<a:fijadito:931432134797848607> ***Cafetería*** ☕\n> **• ' + client.commands.filter(c => c.category == 'Cafetería ☕' && c.owner == false).map(c => c.name).join('**\n> **• ') + '**\n\n<a:fijadito:931432134797848607> ***Bar*** 🥂\n> **• ' + client.commands.filter(c => c.category == 'Bar 🥂' && c.owner == false).map(c => c.name).join('**\n> **• ') + '**\n\n<a:fijadito:931432134797848607> ***Disco*** 💃\n> **• ' + client.commands.filter(c => c.category == 'Disco 💃' && c.owner == false).map(c => c.name).join('**\n> **• ') + '**\n\n')
    
                                ],
                                components: [btns_options1, btns_options2]
                        
                            }).catch((e) => console.log('Error al enviar mensaje: '+e))
              
                        } else if (int.customId === 'div') {
                        
                            m.edit({
                          
                                embeds: [
                                    
                                    embed
                                    .setTitle('')
                                    .setAuthor({ name: 'MidgardBot | Comandos de Diversión 🤣', iconURL: client.user.avatarURL({ dynamic: true }) })
                                    .setDescription('Utilizando `' + prefix + 'help <comando>` obtienes ayuda detallada sobre cada comando.\n\nVisita mi [Website](https://midgardbot-web.herokuapp.com/) y conoce todas mis funciones.\n\n> **• ' + client.commands.filter(c => c.category == 'Diversión 🤣' && c.vip == false && c.owner == false).map(c => c.name).join('**\n> **• ') + '**\n\n' + ((client.commands.filter(c => c.category == 'Diversión 🤣' && c.vip == true && c.owner == false).map(c => c.name).length > 0) ? ('<a:fijadito:931432134797848607> ***VIP*** 💎\n> **• ' + client.commands.filter(c => c.category == 'Diversión 🤣' && c.vip == true && c.owner == false).map(c => c.name).join('**\n> **• ') + '**\n\n') : ''))
    
                                ],
                                components: [btns_options1, btns_options2]
                        
                            }).catch((e) => console.log('Error al enviar mensaje: '+e))
              
                        } else if (int.customId === 'eco') {
                        
                            m.edit({
                          
                                embeds: [
                                    
                                    embed
                                    .setTitle('')
                                    .setAuthor({ name: 'MidgardBot | Comandos de Economía 💰', iconURL: client.user.avatarURL({ dynamic: true }) })
                                    .setDescription('Utilizando `' + prefix + 'help <comando>` obtienes ayuda detallada sobre cada comando.\n\nVisita mi [Website](https://midgardbot-web.herokuapp.com/) y conoce todas mis funciones.\n\n> **• ' + client.commands.filter(c => c.category == 'Economía 💰' && c.vip == false && c.owner == false).map(c => c.name).join('**\n> **• ') + '**\n\n' + ((client.commands.filter(c => c.category == 'Economía 💰' && c.vip == true && c.owner == false).map(c => c.name).length > 0) ? ('<a:fijadito:931432134797848607> ***VIP*** 💎\n> **• ' + client.commands.filter(c => c.category == 'Economía 💰' && c.vip == true && c.owner == false).map(c => c.name).join('**\n> **• ') + '**\n\n') : ''))
    
                                ],
                                components: [btns_options1, btns_options2]
                        
                            }).catch((e) => console.log('Error al enviar mensaje: '+e))
              
                        } else if (int.customId === 'inf') {
                        
                            m.edit({
                          
                                embeds: [
                                    
                                    embed
                                    .setTitle('')
                                    .setAuthor({ name: 'MidgardBot | Comandos de Información 📌', iconURL: client.user.avatarURL({ dynamic: true }) })
                                    .setDescription('Utilizando `' + prefix + 'help <comando>` obtienes ayuda detallada sobre cada comando.\n\nVisita mi [Website](https://midgardbot-web.herokuapp.com/) y conoce todas mis funciones.\n\n> **• ' + client.commands.filter(c => c.category == 'Información 📌' && c.vip == false && c.owner == false).map(c => c.name).join('**\n> **• ') + '**\n\n' + ((client.commands.filter(c => c.category == 'Información 📌' && c.vip == true && c.owner == false).map(c => c.name).length > 0) ? ('<a:fijadito:931432134797848607> ***VIP*** 💎\n> **• ' + client.commands.filter(c => c.category == 'Información 📌' && c.vip == true && c.owner == false).map(c => c.name).join('**\n> **• ') + '**\n\n') : ''))
    
                                ],
                                components: [btns_options1, btns_options2]
                        
                            }).catch((e) => console.log('Error al enviar mensaje: '+e))
              
                        } else if (int.customId === 'mod') {
                            
                            m.edit({
                          
                                embeds: [
                                    
                                    embed
                                    .setTitle('')
                                    .setAuthor({ name: 'MidgardBot | Comandos de Moderación 🔒', iconURL: client.user.avatarURL({ dynamic: true }) })
                                    .setDescription('Utilizando `' + prefix + 'help <comando>` obtienes ayuda detallada sobre cada comando.\n\nVisita mi [Website](https://midgardbot-web.herokuapp.com/) y conoce todas mis funciones.\n\n> **• ' + client.commands.filter(c => c.category == 'Moderación 🔒' && c.vip == false && c.owner == false).map(c => c.name).join('**\n> **• ') + '**\n\n' + ((client.commands.filter(c => c.category == 'Moderación 🔒' && c.vip == true && c.owner == false).map(c => c.name).length > 0) ? ('<a:fijadito:931432134797848607> ***VIP*** 💎\n> **• ' + client.commands.filter(c => c.category == 'Moderación 🔒' && c.vip == true && c.owner == false).map(c => c.name).join('**\n> **• ') + '**\n\n') : ''))
    
                                ],
                                components: [btns_options1, btns_options2]
                        
                            }).catch((e) => console.log('Error al enviar mensaje: '+e))
              
                        } else if (int.customId === 'nsfw') {
                        
                            if(!message.channel.nsfw){
    
                                await int.followUp({ content: 'El canal no acepta contenido NSFW, por favor, necesitas activar la restricción por edad para continuar.', ephemeral: true })
                                
                            } else {
    
                                m.edit({
                          
                                    embeds: [
                                        
                                        embed
                                        .setTitle('')
                                        .setAuthor({ name: 'MidgardBot | Comandos NSFW 🔥', iconURL: client.user.avatarURL({ dynamic: true }) })
                                        .setDescription('Comandos única y exclusivamente para canales NSFW.\n\nUtilizando `' + prefix + 'help <comando>` obtienes ayuda detallada sobre cada comando.\n\nVisita mi [Website](https://midgardbot-web.herokuapp.com/) y conoce todas mis funciones.\n\n> • ~~' + client.commands.filter(c => c.category == 'NSFW 🔥' && c.vip == false && c.owner == false).map(c => c.name).join('~~\n> • ~~') + '~~\n\n' + ((client.commands.filter(c => c.category == 'NSFW 🔥' && c.vip == true && c.owner == false).map(c => c.name).length > 0) ? ('<a:fijadito:931432134797848607> ***VIP*** 💎\n> • ~~' + client.commands.filter(c => c.category == 'NSFW 🔥' && c.vip == true && c.owner == false).map(c => c.name).join('~~\n> • ~~') + '~~\n\n') : ''))
        
                                    ],
                                    components: [btns_options1, btns_options2]
                            
                                }).catch((e) => console.log('Error al enviar mensaje: '+e))
                  
                            }
                            
                        } else if (int.customId === 'rea') {
                        
                            m.edit({
                          
                                embeds: [
                                    
                                    embed
                                    .setTitle('')
                                    .setAuthor({ name: 'MidgardBot | Comandos de Reacción 😎', iconURL: client.user.avatarURL({ dynamic: true }) })
                                    .setDescription('Utilizando `' + prefix + 'help <comando>` obtienes ayuda detallada sobre cada comando.\n\nVisita mi [Website](https://midgardbot-web.herokuapp.com/) y conoce todas mis funciones.\n\n> **• ' + client.commands.filter(c => c.category == 'Reacción 😎' && c.vip == false && c.owner == false).map(c => c.name).join('**\n> **• ') + '**\n\n' + ((client.commands.filter(c => c.category == 'Reacción 😎' && c.vip == true && c.owner == false).map(c => c.name).length > 0) ? ('<a:fijadito:931432134797848607> ***VIP*** 💎\n> **• ' + client.commands.filter(c => c.category == 'Reacción 😎' && c.vip == true && c.owner == false).map(c => c.name).join('**\n> **• ') + '**\n\n') : ''))
    
                                ],
                                components: [btns_options1, btns_options2]
                        
                            }).catch((e) => console.log('Error al enviar mensaje: '+e))
              
                        } else if (int.customId === 'util') {
                        
                            m.edit({
                          
                                embeds: [
                                    
                                    embed
                                    .setTitle('')
                                    .setAuthor({ name: 'MidgardBot | Comandos de Utilidad 💡', iconURL: client.user.avatarURL({ dynamic: true }) })
                                    .setDescription('Utilizando `' + prefix + 'help <comando>` obtienes ayuda detallada sobre cada comando.\n\nVisita mi [Website](https://midgardbot-web.herokuapp.com/) y conoce todas mis funciones.\n\n> **• ' + client.commands.filter(c => c.category == 'Utilidad 💡' && c.vip == false && c.owner == false).map(c => c.name).join('**\n> **• ') + '**\n\n' + ((client.commands.filter(c => c.category == 'Utilidad 💡' && c.vip == true && c.owner == false).map(c => c.name).length > 0) ? ('<a:fijadito:931432134797848607> ***VIP*** 💎\n> **• ' + client.commands.filter(c => c.category == 'Utilidad 💡' && c.vip == true && c.owner == false).map(c => c.name).join('**\n> **• ') + '**\n\n') : ''))
    
                                ],
                                components: [btns_options1, btns_options2]
                        
                            }).catch((e) => console.log('Error al enviar mensaje: '+e))
              
                        } else if (int.customId === 'close') {
                        
                            m.delete()
                        }
              
                    });
              
                    collector.on('end', (collected, reason) => {
                      
                        if(collected.size < 1) return m.edit({
                        
                            embeds: [
                                
                                embed
                                .setAuthor({ name: 'MidgardBot' + svp, iconURL: client.user.avatarURL({ dynamic: true }) })
                                .setTitle('Bienvenido al apartado de Ayuda 💌')
                                .setDescription('Hola <@' + message.author.id + '> esta es la lista de **comandos** y **funciones** de **MidgardBot**, además te brindamos:\n\n> <:developer:972668211365576724> [Servidor de soporte](https://discord.gg/CM9yAmXPfC)\n> <:emoji_41:989454718537465967> [Website](https://midgardbot-web.herokuapp.com/)\n> <:Worlds_Icon_Invite:989451828301287424> [Link de invitación](https://discord.com/api/oauth2/authorize?client_id=904290001196556369&permissions=1619202014423&scope=bot%20applications.commands)\n\nMi prefix en `' + message.guild.name + '` es: `' + prefix + '`\n\nPara ver la ayuda de cada comando, ejecuta: `help <comando>`\n\nPara más información de cada categoría, navega por el menú:\n\n> 🥂 • Bar | Cafetería | Disco\n> 🤣 • Diversión\n> 💰 • Economía\n> 📌 • Información\n> 🔒 • Moderación\n> 🔥 • NSFW\n > 😎 • Reacción\n> 💡 • Utilidad\n\n<a:flech:931432469935312937> **Muchas gracias por utilizar nuestro bot** <a:mbs:972669050054406174>')
    
                            ],
                            components: []
                      
                        }).catch((e) => console.log('Error al enviar mensaje: '+e))
        
                        console.log('El collect del help finalizó por: '+reason)
                      
                    });
                  
                }).catch((e) => console.log('Error al enviar mensaje: '+e))

            } else{

                return message.reply({ embeds: [

                    new Discord.MessageEmbed()
                    .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
                    .setColor('RED')
                    .setDescription('<a:Verify2:931463492677017650> | No se encontró ningún comando con ese nombre o alias!')
            
                ]}).then(m => setTimeout(() => m.delete(), 10000)).catch((e) => console.log('Error al enviar mensaje: '+e))
            
            }

        }
        

    }

}