const userSchema = require('../../models/userSchema');
const serverSchema = require('../../models/serverSchema')

module.exports =  {
    
    name: 'cowgirl',
    aliases: ['vaquera','vaquerita'],
    description: '🔞 Comandos NSFW.',
    category: 'NSFW 🔥',
    use: '<prefix>cowgirl [@user/id]',
    owner: false,
    vip: true,
    slash: false,
    
    async execute(client, message, args, Discord) { 
  
        var cowgirl = [

            'https://i.imgur.com/Zcqvwv5.gif',
            'https://i.imgur.com/7zYQkgZ.gif',
            'https://i.imgur.com/dg9ut0e.gif',
            'https://i.imgur.com/Zlp7kNe.gif',
            'https://i.imgur.com/fjL3zDb.gif',
            'https://i.imgur.com/BSvjcO0.gif',
            'https://i.imgur.com/4dQO96U.gif',
            'https://i.imgur.com/y04mRRb.gif',
            'https://i.imgur.com/LJ4jVeD.gif',
            'https://i.imgur.com/dTUXqfl.gif',
            'https://i.imgur.com/NSDlisH.gif',
            'https://i.imgur.com/oj3LgE7.gif',
            'https://i.imgur.com/TmngP29.gif',
            'https://i.imgur.com/xEKUaAr.gif',
            'https://i.imgur.com/jE2DHBS.gif',
            'https://i.imgur.com/VzgzTp3.gif',
            'https://i.imgur.com/B5gOpJ4.gif',
            'https://i.imgur.com/SsOWMvU.gif',
            'https://i.imgur.com/OMMSSir.gif',
            'https://i.imgur.com/Pk6haC6.gif',
            'https://i.imgur.com/Am219Lp.gif',
            'https://i.imgur.com/dr5lRWQ.gif',
            'https://i.imgur.com/WQlFrJw.gif',
            'https://i.imgur.com/WcUxxK4.gif',
            'https://i.imgur.com/dCGN2xa.gif',
            'https://i.imgur.com/VfGflye.gif',
            'https://i.imgur.com/wHCsaJI.gif',
            'https://i.imgur.com/Jb3LMZn.gif',
            'https://i.imgur.com/pLlBmz5.gif',
            'https://i.imgur.com/uZWvBEf.gif',

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

                console.log('Error al Buscar Usuario en Comando Cowgirl: '+ error)
                
            }
      
            let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
            let ramdoncowgirl = cowgirl[Math.floor(Math.random()*cowgirl.length)]
            let desc 
    
            while (!ramdoncowgirl || ramdoncowgirl === null || ramdoncowgirl === '' || ramdoncowgirl === undefined) {
                
                ramdoncowgirl = cowgirl[Math.floor(Math.random()*cowgirl.length)]
                
            }

            if (!img || img.id===message.author.id || img.user.bot) {
      
                desc = `A **${message.author.username}** le gusta ir arriba <a:sabroso:880695816497541180>`
          
            } else {
      
                desc = `**${message.author.username}** está montando a **${img.user.username}** <a:sabroso:880695816497541180>.`
  
            }
  
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `🔞 | Midgard's Hot VIP 🔥`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(desc)
            .setImage(ramdoncowgirl)
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

                        ramdoncowgirl = cowgirl[Math.floor(Math.random()*cowgirl.length)]
    
                        while (!ramdoncowgirl || ramdoncowgirl === null || ramdoncowgirl === '' || ramdoncowgirl === undefined) {
                            
                            ramdoncowgirl = cowgirl[Math.floor(Math.random()*cowgirl.length)]
                            
                        }

                        const nembed = new Discord.MessageEmbed()
                        .setAuthor({ name: `🔞 | Midgard's Hot VIP 🔥`, iconURL: client.user.avatarURL({ dynamic: true }) })
                        .setDescription(desc)
                        .setImage(ramdoncowgirl)
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