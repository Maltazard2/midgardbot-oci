const userSchema = require('../../models/userSchema');
const serverSchema = require('../../models/serverSchema')

module.exports =  {
    
    name: 'sboobs',
    aliases: [],
    description: '🔞 Comandos NSFW.',
    category: 'NSFW 🔥',
    use: '<prefix>sboobs [@user/id]',
    owner: false,
    vip: true,
    slash: false,
    
    async execute(client, message, args, Discord) { 
  
        var sboobs = [

            'https://i.imgur.com/uhdQ3iv.gif',
            'https://i.imgur.com/Ajuq4Yz.gif',
            'https://i.imgur.com/WPgHCs8.gif',
            'https://i.imgur.com/w9ZMzU8.gif',
            'https://i.imgur.com/DvwJ3i6.gif',
            'https://i.imgur.com/zfRhvLB.gif',
            'https://i.imgur.com/GrggwXb.gif',
            'https://i.imgur.com/ORcD7dY.gif',
            'https://i.imgur.com/LAeuiz4.gif',
            'https://i.imgur.com/st3Q5ZD.gif',
            'https://i.imgur.com/T9RG2RP.gif',
            'https://i.imgur.com/cOQVwxE.gif',
            'https://i.imgur.com/7iNur0H.gif',
            'https://i.imgur.com/Nqw7Euj.gif',
            'https://i.imgur.com/n5JHE3s.gif',
            'https://i.imgur.com/UzlZ5Vr.gif',
            'https://i.imgur.com/lY90DOk.gif',
            'https://i.imgur.com/emLSMQ3.gif',
          
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

                console.log('Error al Buscar Usuario en Comando Suck Boobs: '+ error)
                
            }

            let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
            let ramdonsboobs = sboobs[Math.floor(Math.random()*sboobs.length)]
            let desc 

            while (!ramdonsboobs || ramdonsboobs === null || ramdonsboobs === '' || ramdonsboobs === undefined) {
                
                ramdonsboobs = sboobs[Math.floor(Math.random()*sboobs.length)]
                
            }
    
            if (!img || img.id===message.author.id || img.user.bot) {
      
                desc = `**${message.author.username}** está chupando tetas <a:sabroso:880695816497541180>`
          
            } else {
      
                desc = `**${img.user.username}**, **${message.author.username}** te está chupando los melones que tienes <a:sabroso:880695816497541180>.`
  
            }
  
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `🔞 | Midgard's Hot VIP 🔥`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(desc)
            .setImage(ramdonsboobs)
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

                        ramdonsboobs = sboobs[Math.floor(Math.random()*sboobs.length)]
                        
                        while (!ramdonsboobs || ramdonsboobs === null || ramdonsboobs === '' || ramdonsboobs === undefined) {
                            
                            ramdonsboobs = sboobs[Math.floor(Math.random()*sboobs.length)]
                            
                        }

                        const nembed = new Discord.MessageEmbed()
                        .setAuthor({ name: `🔞 | Midgard's Hot VIP 🔥`, iconURL: client.user.avatarURL({ dynamic: true }) })
                        .setDescription(desc)
                        .setImage(ramdonsboobs)
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