module.exports =  {
    
    name: 'cum',
    aliases: ['corrida'],
    description: '🔞 Comandos NSFW.',
    category: 'NSFW 🔥',
    use: '<prefix>cum [@user/id]',
    owner: false,
    vip: false,
    slash: false,
    
    async execute(client, message, args, Discord) { 
  
        var cum = [

            'https://i.imgur.com/iLx2wev.gif',
            'https://i.imgur.com/SDsNpM1.gif',
            'https://i.imgur.com/ZX0siCF.gif',
            'https://i.imgur.com/glkLRYV.gif',
            'https://i.imgur.com/6emaGFj.gif',
            'https://i.imgur.com/EUYqccy.gif',
            'https://i.imgur.com/JK4zidL.gif',
            'https://i.imgur.com/15V7vlw.gif',
            'https://i.imgur.com/w3RW03d.gif',
            'https://i.imgur.com/WZjU3zl.gif',
            'https://i.imgur.com/cWSmjFe.gif',
            'https://i.imgur.com/djgyRsa.gif',
            'https://i.imgur.com/Tlf80JH.gif',
            'https://i.imgur.com/7lbRrrE.gif',
            'https://i.imgur.com/b27IT9R.gif',
            'https://i.imgur.com/082H570.gif',
            'https://i.imgur.com/PfkZZCn.gif',
            'https://i.imgur.com/vY5l4wE.gif',
            'https://i.imgur.com/tSM8iAm.gif',
            'https://i.imgur.com/AjyI72P.gif',
            'https://i.imgur.com/zWfLCqi.gif',
            'https://i.imgur.com/Bg863pg.gif',
            'https://i.imgur.com/inINJXo.gif',
            'https://i.imgur.com/Y9PnkSP.gif',
            'https://i.imgur.com/ny99mpl.gif',
            'https://i.imgur.com/XiN7C3U.gif',
            'https://i.imgur.com/XSbh16D.gif',
            'https://i.imgur.com/plNZBkE.gif',
            'https://i.imgur.com/6w4Emid.gif',
            'https://i.imgur.com/GRObamK.gif',
            'https://i.imgur.com/bD6yxfX.gif',
            'https://i.imgur.com/lE1eCJL.gif',
            'https://i.imgur.com/HR3PVJd.gif',
            'https://i.imgur.com/RcxI5QT.gif',
            'https://i.imgur.com/nddzOHT.gif',
            'https://i.imgur.com/1KuT32R.gif',
            'https://i.imgur.com/el7sd32.gif',
            'https://i.imgur.com/KiEezHK.gif',
            'https://i.imgur.com/6SID2UF.gif',
            'https://i.imgur.com/bOM3IeG.gif',
            'https://i.imgur.com/Qm50v2n.gif',
            'https://i.imgur.com/bv8qF8k.gif',
            'https://i.imgur.com/UoqR9WI.gif',
            'https://i.imgur.com/Fv25TUO.gif',
            'https://i.imgur.com/PfGTA3D.gif',
            'https://i.imgur.com/nC0Tp1J.gif',
            'https://i.imgur.com/rxB7NqB.gif',
            'https://i.imgur.com/DGjVOwc.gif',
            'https://i.imgur.com/RzB219J.gif',
            'https://i.imgur.com/vSBylB7.gif',
            'https://i.imgur.com/5IfrnxC.gif',
            'https://i.imgur.com/o82k8ga.gif',
            'https://i.imgur.com/NTvChhG.gif',
            'https://i.imgur.com/hUVba08.gif',
            'https://i.imgur.com/4aUrM9E.gif',
            'https://i.imgur.com/XYkRPlB.gif',
            'https://i.imgur.com/2ALzLT5.gif',
            'https://i.imgur.com/43xErRV.gif',
          
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
      
            let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
            let ramdoncum = cum[Math.floor(Math.random()*cum.length)]
            let desc 

            while (!ramdoncum || ramdoncum === null || ramdoncum === '' || ramdoncum === undefined) {
                
                ramdoncum = cum[Math.floor(Math.random()*cum.length)]
                
            }
    
            if (!img || img.id===message.author.id || img.user.bot) {
      
                desc = `**${message.author.username}** acaba de vaciarse <:aisaMexicana:925926704097161216>`
                
            } else {
      
                desc = `**${message.author.username}** se vino en **${img.user.username}**.`
        
            }
  
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `🔞 | Midgard's Hot 🔥`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(desc)
            .setImage(ramdoncum)
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

                        ramdoncum = cum[Math.floor(Math.random()*cum.length)]
            
                        while (!ramdoncum || ramdoncum === null || ramdoncum === '' || ramdoncum === undefined) {
                            
                            ramdoncum = cum[Math.floor(Math.random()*cum.length)]
                            
                        }

                        const nembed = new Discord.MessageEmbed()
                        .setAuthor({ name: `🔞 | Midgard's Hot 🔥`, iconURL: client.user.avatarURL({ dynamic: true }) })
                        .setDescription(desc)
                        .setImage(ramdoncum)
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