const userSchema = require('../../models/userSchema');
const serverSchema = require('../../models/serverSchema')

module.exports =  {
    
    name: '69',
    aliases: [],
    description: '🔞 Comandos NSFW.',
    
    async execute(client, message, args, Discord) { 
  
        var sixnine = [

            'https://i.imgur.com/2kVGVwA.gif',
            'https://i.imgur.com/E48kyer.gif',
            'https://i.imgur.com/2WFjP2G.gif',
            'https://i.imgur.com/F5vb59V.gif',
            'https://i.imgur.com/6Ogww6i.gif',
            'https://i.imgur.com/Ro8kqI0.gif',
            'https://i.imgur.com/UUNM3Vz.gif',
            'https://i.imgur.com/yJaFKCn.gif',
            'https://i.imgur.com/helfML1.gif',
            'https://i.imgur.com/K0cnW2Q.gif',
            'https://i.imgur.com/fX9vos3.gif',
            'https://i.imgur.com/UfqwpwA.gif',
            'https://i.imgur.com/Y8esnzJ.gif',
            'https://i.imgur.com/j5sbFog.gif',
            'https://i.imgur.com/dwG0kOp.gif',
            'https://i.imgur.com/11KJrWL.gif',
            'https://i.imgur.com/6BzocAN.gif',
            'https://i.imgur.com/ErhGjBr.gif',
            'https://i.imgur.com/EKwvJVB.gif',
            'https://i.imgur.com/aw4417g.gif',
            'https://i.imgur.com/ivub713.gif',
            'https://i.imgur.com/nQp2tWP.gif',
            'https://i.imgur.com/UfhjgdY.gif',
            'https://i.imgur.com/lwnnmPe.gif',
            'https://i.imgur.com/ysyFgs4.gif',
            'https://i.imgur.com/lmxihmA.gif',
            'https://i.imgur.com/F4YRtpx.gif',
            'https://i.imgur.com/9dWnG54.gif',
            'https://i.imgur.com/m2Fv6ks.gif',
            'https://i.imgur.com/BtQXemE.gif',
            'https://i.imgur.com/Qe2sgCK.gif',
            'https://i.imgur.com/agF3mcO.gif',
            'https://i.imgur.com/rqPvo6a.gif',
            'https://i.imgur.com/bTrHWpu.gif',
            'https://i.imgur.com/CYgLvEL.gif',
            'https://i.imgur.com/jf0VxFz.gif',
            'https://i.imgur.com/mlCjbyQ.gif',
            'https://i.imgur.com/FEXHFTJ.gif',
            'https://i.imgur.com/mtP5KVu.gif',
            'https://i.imgur.com/K37jZQm.gif',
            'https://i.imgur.com/2B9KD6f.gif',
            'https://i.imgur.com/zTm6KAK.gif',
            'https://i.imgur.com/utlfAwN.gif',
            'https://i.imgur.com/Ryj4bFh.gif',
            'https://i.imgur.com/WqTrhhA.gif',

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

                console.log('Error al Buscar Usuario en Comando 69: '+ error)
                
            }
      
            let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
            let ramdonsixnine = sixnine[Math.floor(Math.random()*sixnine.length)]
            let desc 
    
            while (!ramdonsixnine || ramdonsixnine === null || ramdonsixnine === '' || ramdonsixnine === undefined) {
                
                ramdonsixnine = sixnine[Math.floor(Math.random()*sixnine.length)]
                
            }

            if (!img || img.id===message.author.id || img.user.bot) {
      
                desc = `**${message.author.username}** ¿Ya encontraste con quién hacerlo? <a:sabroso:880695816497541180>`
          
            } else {
      
                desc = `**${message.author.username}** y **${img.user.username}** están disfrutando de un rico 69 <a:sabroso:880695816497541180>.`
  
            }
  
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `🔞 | Midgard's Hot VIP 🔥`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(desc)
            .setImage(ramdonsixnine)
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

                        ramdonsixnine = sixnine[Math.floor(Math.random()*sixnine.length)]
            
                        while (!ramdonsixnine || ramdonsixnine === null || ramdonsixnine === '' || ramdonsixnine === undefined) {
                            
                            ramdonsixnine = sixnine[Math.floor(Math.random()*sixnine.length)]
                            
                        }

                        const nembed = new Discord.MessageEmbed()
                        .setAuthor({ name: `🔞 | Midgard's Hot VIP 🔥`, iconURL: client.user.avatarURL({ dynamic: true }) })
                        .setDescription(desc)
                        .setImage(ramdonsixnine)
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