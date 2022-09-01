const { Collection } = require('mongoose');
const userSchema = require('../../models/userSchema');

module.exports =  {
    
    name: 'top',
    aliases: ['lb'],
    description: '📊 Muestra el Top de economía y stats.',
    category: 'Economía 💰',
    use: '<prefix>top <cash/xp/rep/pat/hug/sape>',
    owner: false,
    vip: false,
    slash: false,

    async execute(client, message, args, Discord) {

        var server = message.guild;

        const bEco = new Discord.MessageButton()
        .setCustomId('economia')
        .setLabel('Economía')
        .setStyle('PRIMARY')
        .setEmoji('930397094924124180')

        const bCash = new Discord.MessageButton()
        .setCustomId('cash')
        .setLabel('Cash')
        .setStyle('PRIMARY')
        .setEmoji('930404747326914590')

        const bXp = new Discord.MessageButton()
        .setCustomId('xp')
        .setLabel('XP')
        .setStyle('PRIMARY')
        .setEmoji('930399379800592394')

        const bRep = new Discord.MessageButton()
        .setCustomId('rep')
        .setLabel('Rep')
        .setStyle('PRIMARY')
        .setEmoji('930399275643453500')

        const bPat = new Discord.MessageButton()
        .setCustomId('pat')
        .setLabel('Pat')
        .setStyle('PRIMARY')
        .setEmoji('930399873113677834')

        const bHug = new Discord.MessageButton()
        .setCustomId('hug')
        .setLabel('Hug')
        .setStyle('PRIMARY')
        .setEmoji('930399322183458867')

        const bSape = new Discord.MessageButton()
        .setCustomId('sape')
        .setLabel('Sape')
        .setStyle('PRIMARY')
        .setEmoji('932177727589589013')
        
        let lista = await userSchema.find().sort({total: -1}).limit(10)

        if(!lista) return message.channel.send({embeds:[
          
            new Discord.MessageEmbed()
            .setAuthor({ name: `MidgardBot`+' | Top Global 🏦', iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription('Aún no hay usuarios en el Top <:tierno:931433334960160799>')   	
            .setColor("RANDOM")
            .setFooter({ text: server.name, iconURL: server.iconURL() ? server.iconURL({ dynamic: true, size: 2048 }) : client.user.avatarURL({ dynamic: true }) })
                
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        let embed = new Discord.MessageEmbed()

        let datos = []
        let foto = []

        let c = 1

        for(let ls of lista){

            datos.push('**'+c+'.** <@' + ls.idusuario + '> <a:money:930397094924124180> **'+ls.total.toLocaleString('en-US')+'**')
            foto.push(ls.idusuario)
            c = c + 1
        
        }

        let first = client.users.cache.get(foto[0])
 
        embed.setAuthor({ name: `MidgardBot`+' | Top Global 🏦', iconURL: client.user.avatarURL({ dynamic: true }) })
        embed.setThumbnail(first.displayAvatarURL({dynamic: true, size: 2048}))
        embed.setDescription(datos.join('\n\n'))   	
        embed.setColor("RANDOM")
        embed.setFooter({ text: server.name, iconURL: server.iconURL() ? server.iconURL({ dynamic: true, size: 2048 }) : client.user.avatarURL({ dynamic: true }) })
            
        message.reply({ allowedMentions: { repliedUser: false}, embeds: [embed], components:
            [

                new Discord.MessageActionRow()
                .addComponents(bEco.setDisabled(true),bCash,bXp,bRep),

                new Discord.MessageActionRow()
                .addComponents(bPat,bHug,bSape)

            ]
        
        }).then(async m => {
      
            let filter = int => int.isButton() && int.user.id == message.author.id 
       
            const collector = m.createMessageComponentCollector({ filter });
        
            collector.on("collect", async int => {
          
                int.deferUpdate();
       
                if (int.customId === "xp") {
            
                    //await int.followUp({ content: '<a:reloj:931434883916652564> | Acabas de establecer un recordatorio en 12 horas para reclamar tu recompensa diaria. No olvides de activar los mensajes directos!', ephemeral: true})
                    
                    let lista = await userSchema.find().sort({exp: -1}).limit(10)

                    if(!lista) return m.edit({embeds:[
            
                        new Discord.MessageEmbed()
                        .setAuthor({ name: `MidgardBot`+' | Top XP ⭐', iconURL: client.user.avatarURL({ dynamic: true }) })
                        .setDescription('Aún no hay usuarios en el Top <:tierno:931433334960160799>')   	
                        .setColor("RANDOM")
                        .setFooter({ text: server.name, iconURL: server.iconURL() ? server.iconURL({ dynamic: true, size: 2048 }) : client.user.avatarURL({ dynamic: true }) })
        
                    ], components: [

                        new Discord.MessageActionRow()
                        .addComponents(bEco.setDisabled(false),bCash.setDisabled(false),bXp.setDisabled(true),bRep.setDisabled(false)),
        
                        new Discord.MessageActionRow()
                        .addComponents(bPat.setDisabled(false),bHug.setDisabled(false),bSape.setDisabled(false))

                    ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

                    let embed = new Discord.MessageEmbed()
 
                    let datos = [];
                    let foto = []

                    let c = 1

                    for(let ls of lista){

                        datos.push('**'+c+'.** <@' + ls.idusuario + '> <a:flech:931432469935312937> **'+ls.exp+'** XP (Nivel: **'+ls.nivel+'**)')
                        foto.push(ls.idusuario)
                        c = c + 1
          
                    }
            
                    let first = client.users.cache.get(foto[0])

                    embed.setAuthor({ name: `MidgardBot`+' | Top XP ⭐', iconURL: client.user.avatarURL({ dynamic: true }) })
                    embed.setDescription(datos.join('\n\n'))   	
                    embed.setThumbnail(first.displayAvatarURL({dynamic: true, size: 2048}))
                    embed.setColor("RANDOM")
                    embed.setFooter({ text: server.name, iconURL: server.iconURL() ? server.iconURL({ dynamic: true, size: 2048 }) : client.user.avatarURL({ dynamic: true }) })
        
                    m.edit({ embeds: [embed], components: [

                        new Discord.MessageActionRow()
                        .addComponents(bEco.setDisabled(false),bCash.setDisabled(false),bXp.setDisabled(true),bRep.setDisabled(false)),
        
                        new Discord.MessageActionRow()
                        .addComponents(bPat.setDisabled(false),bHug.setDisabled(false),bSape.setDisabled(false))

                    ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
  
                }

                if(int.customId === "cash"){

                    let lista = await userSchema.find().sort({dinero: -1}).limit(10)

                    if(!lista) return m.edit({embeds:[
            
                        new Discord.MessageEmbed()
                        .setAuthor({ name: `MidgardBot`+' | Top Cash 💵', iconURL: client.user.avatarURL({ dynamic: true }) })
                        .setDescription('Aún no hay usuarios en el Top <:tierno:931433334960160799>')   	
                        .setColor("RANDOM")
                        .setFooter({ text: server.name, iconURL: server.iconURL() ? server.iconURL({ dynamic: true, size: 2048 }) : client.user.avatarURL({ dynamic: true }) })
        
                    ], components: [

                        new Discord.MessageActionRow()
                        .addComponents(bEco.setDisabled(false),bCash.setDisabled(true),bXp.setDisabled(false),bRep.setDisabled(false)),
        
                        new Discord.MessageActionRow()
                        .addComponents(bPat.setDisabled(false),bHug.setDisabled(false),bSape.setDisabled(false))

                    ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

                    let embed = new Discord.MessageEmbed()

                    let datos = [];
                    let foto = []

                    let c = 1

                    for(let ls of lista){

                        datos.push('**'+c+'.** <@' + ls.idusuario + '> <a:money:930397094924124180> **'+ls.dinero.toLocaleString('en-US')+'**')
                        foto.push(ls.idusuario)

                        c = c + 1
          
                    }

                    let first = client.users.cache.get(foto[0])
 
                    embed.setAuthor({ name: `MidgardBot`+' | Top Cash 💵', iconURL: client.user.avatarURL({ dynamic: true }) })
                    embed.setDescription(datos.join('\n\n'))   	
                    embed.setThumbnail(first.displayAvatarURL({dynamic: true, size: 2048}))
                    embed.setColor("RANDOM")
                    embed.setFooter({ text: server.name, iconURL: server.iconURL() ? server.iconURL({ dynamic: true, size: 2048 }) : client.user.avatarURL({ dynamic: true }) })
        
                    m.edit({ embeds: [embed], components: [

                        new Discord.MessageActionRow()
                        .addComponents(bEco.setDisabled(false),bCash.setDisabled(true),bXp.setDisabled(false),bRep.setDisabled(false)),
        
                        new Discord.MessageActionRow()
                        .addComponents(bPat.setDisabled(false),bHug.setDisabled(false),bSape.setDisabled(false))

                    ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

                }

                if(int.customId === "rep"){

                    let lista = await userSchema.find().sort({rep: -1}).limit(10)

                    if(!lista) return m.edit({embeds:[
            
                        new Discord.MessageEmbed()
                        .setAuthor({ name: `MidgardBot`+' | Top Carisma 💟', iconURL: client.user.avatarURL({ dynamic: true }) })
                        .setDescription('Aún no hay usuarios en el Top <:tierno:931433334960160799>')   	
                        .setColor("RANDOM")
                        .setFooter({ text: server.name, iconURL: server.iconURL() ? server.iconURL({ dynamic: true, size: 2048 }) : client.user.avatarURL({ dynamic: true }) })
        
                    ], components: [

                        new Discord.MessageActionRow()
                        .addComponents(bEco.setDisabled(false),bCash.setDisabled(false),bXp.setDisabled(false),bRep.setDisabled(true)),
        
                        new Discord.MessageActionRow()
                        .addComponents(bPat.setDisabled(false),bHug.setDisabled(false),bSape.setDisabled(false))

                    ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

                    let embed = new Discord.MessageEmbed()

                    let datos = [];
                    let foto = []

                    let c = 1

                    for(let ls of lista){

                        try {

                            datos.push('**'+c+'.** <@' + ls.idusuario + '> <a:flechad:880330587678838784> **'+ls.rep+'**')
                            foto.push(ls.idusuario)
                        
                            c = c + 1
                        
                        } catch (error) {

                            console.log('Error al obtener usuarios de top rep')
                            return
                        
                        }

                    }

                    let first = client.users.cache.get(foto[0])
 
                    embed.setAuthor({ name: `MidgardBot`+' | Top Carisma 💟', iconURL: client.user.avatarURL({ dynamic: true }) })
                    embed.setDescription(datos.join('\n\n'))   	
                    embed.setThumbnail(first.displayAvatarURL({dynamic: true, size: 2048}))
                    embed.setColor("RANDOM")
                    embed.setFooter({ text: server.name, iconURL: server.iconURL() ? server.iconURL({ dynamic: true, size: 2048 }) : client.user.avatarURL({ dynamic: true }) })
        
                    m.edit({ embeds: [embed], components: [

                        new Discord.MessageActionRow()
                        .addComponents(bEco.setDisabled(false),bCash.setDisabled(false),bXp.setDisabled(false),bRep.setDisabled(true)),
        
                        new Discord.MessageActionRow()
                        .addComponents(bPat.setDisabled(false),bHug.setDisabled(false),bSape.setDisabled(false))

                    ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

                }

                if(int.customId === "pat"){

                    let lista = await userSchema.find().sort({pat: -1}).limit(10)

                    if(!lista) return m.edit({embeds:[
                
                        new Discord.MessageEmbed()
                        .setAuthor({ name: `MidgardBot`+' | Top Pats ❣', iconURL: client.user.avatarURL({ dynamic: true }) })
                        .setDescription('Aún no hay usuarios en el Top <:tierno:931433334960160799>')   	
                        .setColor("RANDOM")
                        .setFooter({ text: server.name, iconURL: server.iconURL() ? server.iconURL({ dynamic: true, size: 2048 }) : client.user.avatarURL({ dynamic: true }) })
        
                    ], components: [

                        new Discord.MessageActionRow()
                        .addComponents(bEco.setDisabled(false),bCash.setDisabled(false),bXp.setDisabled(false),bRep.setDisabled(false)),
        
                        new Discord.MessageActionRow()
                        .addComponents(bPat.setDisabled(true),bHug.setDisabled(false),bSape.setDisabled(false))

                    ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
    
                    let embed = new Discord.MessageEmbed()
    
                    let datos = [];
                    let foto = []
    
                    let c = 1
    
                    for(let ls of lista){
    
                        try {
    
                            datos.push('**'+c+'.** <@' + ls.idusuario + '> <a:flechad:880330587678838784> **'+ls.pat+'**')
                            foto.push(ls.idusuario)
                            c = c + 1
                            
                        } catch (error) {
    
                            console.log('Error al obtener usuarios de top rep')
                            return
                            
                        }
              
                    }
    
                    let first = client.users.cache.get(foto[0])
     
                    embed.setAuthor({ name: `MidgardBot`+' | Top Pats ❣', iconURL: client.user.avatarURL({ dynamic: true }) })
                    embed.setDescription(datos.join('\n\n'))   	
                    embed.setThumbnail(first.displayAvatarURL({dynamic: true, size: 2048}))
                    embed.setColor("RANDOM")
                    embed.setFooter({ text: server.name, iconURL: server.iconURL() ? server.iconURL({ dynamic: true, size: 2048 }) : client.user.avatarURL({ dynamic: true }) })
        
                    m.edit({ embeds: [embed], components: [

                        new Discord.MessageActionRow()
                        .addComponents(bEco.setDisabled(false),bCash.setDisabled(false),bXp.setDisabled(false),bRep.setDisabled(false)),
        
                        new Discord.MessageActionRow()
                        .addComponents(bPat.setDisabled(true),bHug.setDisabled(false),bSape.setDisabled(false))

                    ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
    
                }

                if(int.customId === "hug"){

                    let lista = await userSchema.find().sort({hug: -1}).limit(10)

                    if(!lista) return m.edit({embeds:[
                
                        new Discord.MessageEmbed()
                        .setAuthor({ name: `MidgardBot`+' | Top Abrazos 🤗', iconURL: client.user.avatarURL({ dynamic: true }) })
                        .setDescription('Aún no hay usuarios en el Top <:tierno:931433334960160799>')   	
                        .setColor("RANDOM")
                        .setFooter({ text: server.name, iconURL: server.iconURL() ? server.iconURL({ dynamic: true, size: 2048 }) : client.user.avatarURL({ dynamic: true }) })
        
                    ], components: [

                        new Discord.MessageActionRow()
                        .addComponents(bEco.setDisabled(false),bCash.setDisabled(false),bXp.setDisabled(false),bRep.setDisabled(false)),
        
                        new Discord.MessageActionRow()
                        .addComponents(bPat.setDisabled(false),bHug.setDisabled(true),bSape.setDisabled(false))

                    ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
    
                    let embed = new Discord.MessageEmbed()
    
                    let datos = [];
                    let foto = []
    
                    let c = 1
    
                    for(let ls of lista){
    
                        try {
    
                            datos.push('**'+c+'.** <@' + ls.idusuario + '> <a:flechad:880330587678838784> **'+ls.hug+'**')
                            foto.push(ls.idusuario)
    
                            c = c + 1
                            
                        } catch (error) {
    
                            console.log('Error al obtener usuarios de top rep')
                            return
                            
                        }
              
                    }
    
                    let first = client.users.cache.get(foto[0])
     
                    embed.setAuthor({ name: `MidgardBot`+' | Top Abrazos 🤗', iconURL: client.user.avatarURL({ dynamic: true }) })
                    embed.setDescription(datos.join('\n\n'))   	
                    embed.setThumbnail(first.displayAvatarURL({dynamic: true, size: 2048}))
                    embed.setColor("RANDOM")
                    embed.setFooter({ text: server.name, iconURL: server.iconURL() ? server.iconURL({ dynamic: true, size: 2048 }) : client.user.avatarURL({ dynamic: true }) })
        
                    m.edit({ embeds: [embed], components: [

                        new Discord.MessageActionRow()
                        .addComponents(bEco.setDisabled(false),bCash.setDisabled(false),bXp.setDisabled(false),bRep.setDisabled(false)),
        
                        new Discord.MessageActionRow()
                        .addComponents(bPat.setDisabled(false),bHug.setDisabled(true),bSape.setDisabled(false))

                    ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
    
                }

                if(int.customId === "sape"){
                    
                    let lista = await userSchema.find().sort({sape: -1}).limit(10)

                    if(!lista) return m.edit({embeds:[
                
                        new Discord.MessageEmbed()
                        .setAuthor({ name: `MidgardBot`+' | Top Sapes 🤡', iconURL: client.user.avatarURL({ dynamic: true }) })
                        .setDescription('Aún no hay usuarios en el Top <:tierno:931433334960160799>')   	
                        .setColor("RANDOM")
                        .setFooter({ text: server.name, iconURL: server.iconURL() ? server.iconURL({ dynamic: true, size: 2048 }) : client.user.avatarURL({ dynamic: true }) })
        
                    ], components: [

                        new Discord.MessageActionRow()
                        .addComponents(bEco.setDisabled(false),bCash.setDisabled(false),bXp.setDisabled(false),bRep.setDisabled(false)),
        
                        new Discord.MessageActionRow()
                        .addComponents(bPat.setDisabled(false),bHug.setDisabled(false),bSape.setDisabled(true))

                    ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
    
                    let embed = new Discord.MessageEmbed()
    
                    let datos = [];
                    let foto = []
    
                    let c = 1
    
                    for(let ls of lista){
    
                        datos.push('**'+c+'.** <@' + ls.idusuario + '> <a:flechad:880330587678838784> **'+ls.sape+'**')
                        foto.push(ls.idusuario)
    
                        c = c + 1
              
                    }
    
                    let first = client.users.cache.get(foto[0])
     
                    embed.setAuthor({ name: `MidgardBot`+' | Top Sapes 🤡', iconURL: client.user.avatarURL({ dynamic: true }) })
                    embed.setDescription(datos.join('\n\n'))   	
                    embed.setThumbnail(first.displayAvatarURL({dynamic: true, size: 2048 }))
                    embed.setColor("RANDOM")
                    embed.setFooter({ text: server.name, iconURL: server.iconURL() ? server.iconURL({ dynamic: true, size: 2048 }) : client.user.avatarURL({ dynamic: true }) })
        
                    m.edit({ embeds: [embed], components: [

                        new Discord.MessageActionRow()
                        .addComponents(bEco.setDisabled(false),bCash.setDisabled(false),bXp.setDisabled(false),bRep.setDisabled(false)),
        
                        new Discord.MessageActionRow()
                        .addComponents(bPat.setDisabled(false),bHug.setDisabled(false),bSape.setDisabled(true))

                    ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
    
                }

                if(int.customId === "economia"){

                    let lista = await userSchema.find().sort({total: -1}).limit(10)

                    if(!lista) return m.edit({embeds:[
                      
                        new Discord.MessageEmbed()
                        .setAuthor({ name: `MidgardBot`+' | Top Global 🏦', iconURL: client.user.avatarURL({ dynamic: true }) })
                        .setDescription('Aún no hay usuarios en el Top <:tierno:931433334960160799>')   	
                        .setColor("RANDOM")
                        .setFooter({ text: server.name, iconURL: server.iconURL() ? server.iconURL({ dynamic: true, size: 2048 }) : client.user.avatarURL({ dynamic: true }) })
            
                    ], components: [

                        new Discord.MessageActionRow()
                        .addComponents(bEco.setDisabled(true),bCash.setDisabled(false),bXp.setDisabled(false),bRep.setDisabled(false)),
        
                        new Discord.MessageActionRow()
                        .addComponents(bPat.setDisabled(false),bHug.setDisabled(false),bSape.setDisabled(false))

                    ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
            
                    let embed = new Discord.MessageEmbed()
            
                    let datos = []
                    let foto = []
            
                    let c = 1
            
                    for(let ls of lista){
            
                        datos.push('**'+c+'.** <@' + ls.idusuario + '> <a:money:930397094924124180> **'+ls.total.toLocaleString('en-US')+'**')
                        foto.push(ls.idusuario)
                        c = c + 1
                    
                    }
            
                    let first = client.users.cache.get(foto[0])
             
                    embed.setAuthor({ name: `MidgardBot`+' | Top Global 🏦', iconURL: client.user.avatarURL({ dynamic: true }) })
                    embed.setThumbnail(first.displayAvatarURL({dynamic: true, size: 2048}))
                    embed.setDescription(datos.join('\n\n'))   	
                    embed.setColor("RANDOM")
                    embed.setFooter({ text: server.name, iconURL: server.iconURL() ? server.iconURL({ dynamic: true, size: 2048 }) : client.user.avatarURL({ dynamic: true }) })
        
                    m.edit({embeds: [embed], components: [

                        new Discord.MessageActionRow()
                        .addComponents(bEco.setDisabled(true),bCash.setDisabled(false),bXp.setDisabled(false),bRep.setDisabled(false)),
        
                        new Discord.MessageActionRow()
                        .addComponents(bPat.setDisabled(false),bHug.setDisabled(false),bSape.setDisabled(false))

                    ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

                }
  
            });
  
            collector.on("end", (collected,reason) => {
          
                if(collected < 1) return m.edit({components: []}).catch((e) => console.log('Error al enviar mensaje: '+e))

                console.log('Razón del término de colección: '+reason)

            });
        
        }).catch((e) => console.log('Error al enviar mensaje: '+e))

    }

}