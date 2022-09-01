const userSchema = require('../../models/userSchema');
const serverSchema = require('../../models/serverSchema')

module.exports =  {
    
    name: 'trio',
    aliases: ['trío'],
    description: '🔞 Comandos NSFW.',
    category: 'NSFW 🔥',
    use: '<prefix>trio <@user/id1> <@user/id2>',
    owner: false,
    vip: true,
    slash: false,
  
    async execute(client, message, args, Discord) { 

        var trio = [
            
            'https://i.imgur.com/gBsFgBa.gif',
            'https://i.imgur.com/0Df8CIb.gif',
            'https://i.imgur.com/SVG48FR.gif',
            'https://i.imgur.com/TqqFjl5.gif',
            'https://i.imgur.com/lowGdwx.gif',
            'https://i.imgur.com/zmStjtx.gif',
            'https://i.imgur.com/R4m7XsA.gif',
            'https://i.imgur.com/pI04WPN.gif',
            'https://i.imgur.com/xj8tRfk.gif',
            'https://i.imgur.com/D58Lxbe.gif',
            'https://i.imgur.com/7G187tn.gif',
            'https://i.imgur.com/Hp0tFIO.gif',
            'https://i.imgur.com/sgHXnh9.gif',
            'https://i.imgur.com/aVIDoa5.gif',
            'https://i.imgur.com/5z6Kc12.gif',
            'https://i.imgur.com/HXN150D.gif',
            'https://i.imgur.com/5pej4IM.gif',
            'https://i.imgur.com/0V3AGmJ.gif',
            'https://i.imgur.com/a9E7Vqi.gif',
            'https://i.imgur.com/AV1m3vN.gif',
            'https://i.imgur.com/zwjFnJi.gif',
            'https://i.imgur.com/U24FJfq.gif',
            'https://i.imgur.com/0bq5qfw.gif',
            'https://i.imgur.com/NXBqNh9.gif',
            'https://i.imgur.com/7PLJO6D.gif',
            'https://i.imgur.com/65hCiQm.gif',
            'https://i.imgur.com/fez4hnE.gif',
            'https://i.imgur.com/1PMDPDp.gif',
            'https://i.imgur.com/hWRfIMr.gif',
            'https://i.imgur.com/M8T3zlB.gif',
            'https://i.imgur.com/JKMdPUd.gif',
            'https://i.imgur.com/sUevcOy.gif',
            'https://i.imgur.com/KX2RjzQ.gif',
            'https://i.imgur.com/KUFi2PT.gif',
            'https://i.imgur.com/4TjevmV.gif',
            'https://i.imgur.com/bge8Y8T.gif',
            'https://i.imgur.com/1rFPwZU.gif',
            'https://i.imgur.com/0VuuVKi.gif',
            'https://i.imgur.com/i3gacEv.gif',
            'https://i.imgur.com/C9Xt1vz.gif',
           
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

                console.log('Error al Buscar Usuario en Comando Trío: '+ error)
                
            }
            
            let mencionados = message.mentions.users.first(2)
            let datos = []
            let img1, img2

            for(let ls of mencionados){

                try {
                
                    datos.push(ls)
    
                    if(datos.length === 0){
    
                        img1 = message.guild.members.resolve(client.users.cache.get(args[0]));
                        img2 = message.guild.members.resolve(client.users.cache.get(args[1]));
            
                    } else if(datos.length === 1){
    
                        img1 = message.guild.members.resolve(datos[0])
                        img2 = message.guild.members.resolve(client.users.cache.get(args[0]) || client.users.cache.get(args[1]));
            
                    } else if(datos.length === 2){
    
                        img1 = message.guild.members.resolve(datos[0]);
                        img2 = message.guild.members.resolve(datos[1]);
                        
                    } else{
    
                        img1 = message.guild.members.resolve(client.users.cache.get(args[0]));
                        img2 = message.guild.members.resolve(client.users.cache.get(args[1]));
            
                    }
                    
                } catch (error) {
                    
                    console.log('Error al obtener mencionados en comando trío - ' + error)
        
                    return message.reply({embeds: [
                  
                        new Discord.MessageEmbed()
                        .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                        .setColor('RED')
                        .setDescription(`<a:Verify2:931463492677017650> | Ocurrió un error inesperado, inténtelo de nuevo!`)
                    
                    ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
        
                }
    
            }

            if(img1 === undefined && img2 === undefined){
            
                img1 = message.guild.members.resolve(client.users.cache.get(args[0]));
                img2 = message.guild.members.resolve(client.users.cache.get(args[1]));
            
            }

            if (!img1 || !img2 || img1.id === message.author.id || img2.id === message.author.id) return message.reply({embeds: [
          
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | Necesitas mencionar a 2 personas más... <:burbujita:930399322183458867>`)
            
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
    
            if (img1.user.bot || img2.user.bot) return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
              
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | Los bots no participamos en cochinaditas... <:burbujita:930399322183458867>`)
            
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
    
            let ramdontrio = trio[Math.floor(Math.random()*trio.length)]

            while (!ramdontrio || ramdontrio === null || ramdontrio === '' || ramdontrio === undefined) {
                
                ramdontrio = trio[Math.floor(Math.random()*trio.length)]

            }

            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `🔞 | Midgard's Hot VIP 🔥`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${message.author.username}** se unió al trío con **${img1.user.username}** y **${img2.user.username}** <:mmm:880308330894090241>`)
            .setImage(ramdontrio)
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

                        ramdontrio = trio[Math.floor(Math.random()*trio.length)]

                        while (!ramdontrio || ramdontrio === null || ramdontrio === '' || ramdontrio === undefined) {
                            
                            ramdontrio = trio[Math.floor(Math.random()*trio.length)]

                        }

                        const nembed = new Discord.MessageEmbed()
                        .setAuthor({ name: `🔞 | Midgard's Hot VIP 🔥`, iconURL: client.user.avatarURL({ dynamic: true }) })
                        .setDescription(`**${message.author.username}** se unió al trío con **${img1.user.username}** y **${img2.user.username}** <:mmm:880308330894090241>`)
                        .setImage(ramdontrio)
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