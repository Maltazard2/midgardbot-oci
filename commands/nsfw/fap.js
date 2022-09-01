const userSchema = require('../../models/userSchema');
const serverSchema = require('../../models/serverSchema')

module.exports =  {
    
    name: 'fap',
    aliases: ['falopa','pajear','masturbar'],
    description: '🔞 Comandos NSFW.',
    category: 'NSFW 🔥',
    use: '<prefix>fap [@user/id]',
    owner: false,
    vip: true,
    slash: false,
    
    async execute(client, message, args, Discord) { 
  
        var fap = [

            'https://i.imgur.com/bd8gMAW.gif',
            'https://i.imgur.com/CqMD02T.gif',
            'https://i.imgur.com/uDwoR0j.gif',
            'https://i.imgur.com/L0LEcEL.gif',
            'https://i.imgur.com/t23vgej.gif',
            'https://i.imgur.com/ZuPM5Zs.gif',
            'https://i.imgur.com/IRSDsr7.gif',
            'https://i.imgur.com/0I71QIc.gif',
            'https://i.imgur.com/bXtfWYP.gif',
            'https://i.imgur.com/DECNsek.gif',
            'https://i.imgur.com/efBUmKe.gif',
            'https://i.imgur.com/0WkgZ0N.gif',
            'https://i.imgur.com/gNleXMI.gif',
            'https://i.imgur.com/9Z490Qx.gif',
            'https://i.imgur.com/6hFIiqf.gif',
            'https://i.imgur.com/fxXFie2.gif',
            'https://i.imgur.com/z74226c.gif',

        ]

        var fap2 = [

            'https://i.imgur.com/sPn2Mfv.gif',
            'https://i.imgur.com/YsVACw5.gif',
            'https://i.imgur.com/Uo5u7Ac.gif',
            'https://i.imgur.com/ABI4n4F.gif',
            'https://i.imgur.com/L5zErFP.gif',
            'https://i.imgur.com/k0lVwFh.gif',
            'https://i.imgur.com/TyUdVXa.gif',
            'https://i.imgur.com/XKg1BLN.gif',
            
        ]
  
        if(!message.channel.nsfw){
          
            return message.reply({embeds: [
  
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                .setThumbnail('https://media.discordapp.net/attachments/936039644959756319/936524707677741086/prohibido.gif?width=318&height=149')
                .setColor('RED')
                .setDescription(`<a:prohibido:936527618466009109> | ¡Oh rayos, no puedes hacer eso aquí pillín <:ojooo:925928526119571457>`)
  
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
        
        } else {

            try {
                
                let userData = await userSchema.findOne({idusuario: message.author.id})

                while(!userData){

                    let user = await userSchema.create({

                        idusuario: message.author.id,
                        username: message.author.username,

                    })
    
                    user.save();
                    console.log('Usuario Registrado ===> Id: '+ message.author.id + ' Username: ' + message.author.username)

                    userData = await userSchema.findOne({idusuario: message.author.id})
                    
                }

                if (userData.vip === false){
                    
                    let serverData = await serverSchema.findOne({idserver: message.guild.id})

                    if(!serverData || serverData.premium === false){

                        return message.reply({ embeds: [
                    
                            new Discord.MessageEmbed()
                            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
                            .setColor('RED')
                            .setDescription(`<a:Verify2:931463492677017650> | Comando requiere Usuario VIP o Servidor Premium!`)
            
                        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

                    }
                
                }

            } catch (error) {

                console.log('Error al Buscar Usuario en Comando Fap: '+ error)
                
            }
      
            let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
            let ramdonfap
            let desc 
    
            if (!img || img.id===message.author.id || img.user.bot) {
      
                desc = `**${message.author.username}** se está dando autoamor <a:sabroso:880695816497541180>`
                ramdonfap = fap[Math.floor(Math.random()*fap.length)]

                while (!ramdonfap || ramdonfap === null || ramdonfap === '' || ramdonfap === undefined) {
                    
                    ramdonfap = fap[Math.floor(Math.random()*fap.length)]

                }

            } else {
      
                desc = `**${message.author.username}** le está dando amor a **${img.user.username}** <a:sabroso:880695816497541180>.`
                ramdonfap = fap2[Math.floor(Math.random()*fap2.length)]

                while (!ramdonfap || ramdonfap === null || ramdonfap === '' || ramdonfap === undefined) {
                    
                    ramdonfap = fap2[Math.floor(Math.random()*fap2.length)]

                }

            }
  
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `🔞 | Midgard's Hot VIP 🔥`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(desc)
            .setImage(ramdonfap)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })

            const row = new Discord.MessageActionRow()
            .addComponents(

                new Discord.MessageButton()
                .setCustomId("otro")
                .setLabel("🔁")
                .setStyle("SUCCESS")

            )

            message.reply({ allowedMentions: { repliedUser: false}, 
                
                content: '||<a:fijadito:931432134797848607> Si no carga, da click al botón 🔁||',
                embeds: [embed], 
                components: [row] 

            }).then(async m => {
        
                let filter = int => int.isButton() && int.user.id == message.author.id 
        
                const collector = m.createMessageComponentCollector({ filter, max: 1, maxUsers: 1, maxComponents: 1, time: 60000 });
         
                collector.on("collect", async int => {
            
                    int.deferUpdate();
            
                    if (int.customId === "otro") {

           
                        if (!img || img.id===message.author.id || img.user.bot) {
                
                            ramdonfap = fap[Math.floor(Math.random()*fap.length)]

                            while (!ramdonfap || ramdonfap === null || ramdonfap === '' || ramdonfap === undefined) {
                                
                                ramdonfap = fap[Math.floor(Math.random()*fap.length)]

                            }

                        } else {
                
                            ramdonfap = fap2[Math.floor(Math.random()*fap2.length)]

                            while (!ramdonfap || ramdonfap === null || ramdonfap === '' || ramdonfap === undefined) {
                                
                                ramdonfap = fap2[Math.floor(Math.random()*fap2.length)]

                            }

                        }

                        const nembed = new Discord.MessageEmbed()
                        .setAuthor({ name: `🔞 | Midgard's Hot VIP 🔥`, iconURL: client.user.avatarURL({ dynamic: true }) })
                        .setDescription(desc)
                        .setImage(ramdonfap)
                        .setColor('RANDOM')
                        .setTimestamp(new Date())
                        .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })

                        m.edit({ allowedMentions: { repliedUser: false}, content: ' ', embeds: [nembed], components: [] }).catch((e) => console.log('Error al enviar mensaje: '+e))
   
                    }
          
                });
    
                collector.on("end", (collected, reason) => {
            
                    if(collected < 1 || reason === 'time') return m.edit({ allowedMentions: { repliedUser: false}, content: ' ', components: [] }).catch((e) => console.log('Error al enviar mensaje: '+e))
             
                    console.log('Razón del término de colección de nsfw: '+reason)
         
                });
         
            })
            .catch((e) => console.log('Error al enviar mensaje: '+e))

        } 
      
    }
  
}