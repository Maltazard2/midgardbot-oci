const { Collection } = require('mongoose');
const userSchema = require('../../models/userSchema');
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports =  {
    
    name: 'divorce',
    aliases: [],
    description: '💔 Divórciate de tu pareja.',
    category: 'Reacción 😎',
    use: '<prefix>divorce <@user/id>',
    owner: false,
    vip: false,
    slash: false,
  
    async execute(client, message, args, Discord) { 

        var divorce = [

            'https://i.imgur.com/k8XWPvx.gif',
            'https://i.imgur.com/QQBOYx7.gif',
            'https://i.imgur.com/J5IqguJ.gif',
            'https://i.imgur.com/aiExLPw.gif',
            'https://i.imgur.com/5I39PHO.gif',
          
        ]

        var acepta = [

            'https://i.imgur.com/jWqX58o.gif',
            'https://i.imgur.com/PQREIjQ.gif',
            'https://i.imgur.com/idXO2Zo.gif',
            'https://i.imgur.com/XdEU10c.gif',
            'https://i.imgur.com/4Y6XGNa.gif',
            'https://i.imgur.com/y5ZsFK7.gif',
            'https://i.imgur.com/KIQpIC9.gif',
            'https://i.imgur.com/Dx1Lqyg.gif',
            'https://i.imgur.com/Ika9thf.gif',
          
        ]

        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
        let ramdond = divorce[Math.floor(Math.random()*divorce.length)]
        let ramdona = acepta[Math.floor(Math.random()*acepta.length)]
      
        while (!ramdond || ramdond === null || ramdond === '' || ramdond === undefined) {
            
            ramdond = divorce[Math.floor(Math.random()*divorce.length)]

        }
        
        while (!ramdona || ramdona === null || ramdona === '' || ramdona === undefined) {
            
            ramdona = acepta[Math.floor(Math.random()*acepta.length)]

        }
        
        if (!img || img.id===message.author.id) return message.reply({embeds: [
        
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | ¿Divorciarte de ti mismo? <:procesando:932177969017925632>`)
      
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        if (img.user.bot) return message.reply({embeds: [
        
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | ¿Divorciarte de un bot? <:procesando:932177969017925632>`)
      
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        let usuario1 = await userSchema.findOne({ idusuario: message.author.id })
        let usuario2 = await userSchema.findOne({ idusuario: img.id })

        while(!usuario1){
 
            let user = await userSchema.create({

              idusuario: message.author.id,
              username: message.author.username,

            })

            user.save();
            console.log('Usuario Registrado ===> Id: '+ message.author.id + ' Username: ' + message.author.username)

            usuario1 = await userSchema.findOne({ idusuario: message.author.id })

        }

        while(!usuario2){
 
            let user = await userSchema.create({

                idusuario: img.id,
                username: img.username,

            })

            user.save();
            console.log('Usuario Registrado ===> Id: '+ img.id + ' Username: ' + img.username)

            usuario2 = await userSchema.findOne({ idusuario: img.id })
            
        }

        if(usuario1.marry !== 'Soltero(a)' ){
        
            if(usuario1.marry === img.id) {

                message.reply({ allowedMentions: { repliedUser: false}, 
                    
                    embeds: [
            
                        new Discord.MessageEmbed()
                        .setColor('RANDOM')
                        .setAuthor({ name: `Midgard's Love 💞`, iconURL: client.user.avatarURL({ dynamic: true }) })
                        .setTitle('💔 Propuesta de Divorcio 💔')
                        .setDescription(message.author.toString()+' ¿Estás seguro de querer divorciarte de '+img.toString()+" ?")
                        .setTimestamp(new Date())
                        .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })

                    ],
                    
                    components: [
                        
                        new MessageActionRow().addComponents([
              
                            new MessageButton()
                            .setCustomId("accept")
                            .setLabel("SI")
                            .setStyle("SUCCESS"),
              
                            new MessageButton()
                            .setCustomId("deny")
                            .setLabel("NO")
                            .setStyle("DANGER")
            
                        ])
          
                    ]
         
                }).then(async m => {
        
                    let filter = int => int.isButton() && int.user.id == message.author.id 
        
                    const collector = m.createMessageComponentCollector({ filter, max: 1, maxUsers: 1, maxComponents: 1, time: 60000 });
         
                    collector.on("collect", async int => {
            
                        int.deferUpdate();
            
                        if (int.customId === "accept") {

                            try {

                                let update = await userSchema.findOneAndUpdate({ idusuario: message.author.id },
                                    {
                        
                                        marry: 'Soltero(a)'
                        
                                    });
                      
                                update.save();
                      
                                let update2 = await userSchema.findOneAndUpdate({ idusuario: img.id },
                                    {
                        
                                        marry: 'Soltero(a)'
                        
                                    });
                      
                                update2.save();

                                m.edit({
                                
                                    embeds: [
                    
                                        new Discord.MessageEmbed()
                                        .setColor('RANDOM')
                                        .setAuthor({ name: `Midgard's Love 💞`, iconURL: client.user.avatarURL({ dynamic: true }) })
                                        .setTitle('🖤 Divorcio Completado 🤵')
                                        .setDescription('💥 Felicidades!!! '+message.author.toString() + " Te has divorciado correctamente de "+img.toString()+" 🔥")
                                        .setImage(ramdond)
                                        .setTimestamp(new Date())
                                        .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })

                                    ], components: []
                  
                                }).catch((e) => console.log('Error al enviar mensaje: '+e))
                                
                            } catch (error) {

                                console.log('Error al divorciarse - '+message.author.id+' y '+img.id+' - Error: '+error)
                                return message.reply('Hubo un error interno. Por favor, inténtelo de nuevo.')
            
                            }
   
                        } else if (int.customId === "deny") {
              
                            m.edit({
                                
                                embeds: [
                
                                    new Discord.MessageEmbed()
                                    .setColor('RANDOM')
                                    .setAuthor({ name: `Midgard's Love 💞`, iconURL: client.user.avatarURL({ dynamic: true }) })
                                    .setTitle('❤ Divorcio Rechazao 💟')
                                    .setDescription('Aún hay esperanzas en el amor... '+message.author.toString() + " aún sigues casado con "+img.toString()+" <:tierno:931433334960160799>")
                                    .setImage(ramdona)
                                    .setTimestamp(new Date())
                                    .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })

                                ], components: []
              
                            }).catch((e) => console.log('Error al enviar mensaje: '+e))
            
                        }
          
                    });
    
                    collector.on("end", (collected, reason) => {
            
                        if(collected < 1) return m.edit({components: []}).catch((e) => console.log('Error al enviar mensaje: '+e))
             
                        console.log('Razón del término de colección de divorce: '+reason)
         
                    });
         
                }).catch((e) => console.log('Error al enviar mensaje: '+e))

            } else {

                message.reply({embeds: [

                    new Discord.MessageEmbed()
                    .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                    .setColor('RED')
                    .setDescription(`<:GatoLove:925929538863628318> | No estás casado(a) con **`+img.user.username+'** <:yonofui:931433119859503194>')
         
                ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
        
            }

        } else {

            message.reply({embeds: [
          
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                .setColor('RED')
                .setDescription('<a:Verify2:931463492677017650> | No puedes divorciarte porque no estás casado con alguien!!!')
        
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        }

    }

}