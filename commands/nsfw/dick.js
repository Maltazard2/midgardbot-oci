module.exports =  {
    
    name: 'dick',
    aliases: ['cock','pene'],
    description: '🔞 Comandos NSFW.',
    category: 'NSFW 🔥',
    use: '<prefix>dick [@user/id]',
    owner: false,
    vip: false,
    slash: false,
    
    async execute(client, message, args, Discord) { 
  
        var dick = [

            'https://i.imgur.com/AQKhAJv.gif',
            'https://i.imgur.com/WqxrHKj.gif',
            'https://i.imgur.com/Naga2kV.gif',
            'https://i.imgur.com/ZZkdl9v.gif',
            'https://i.imgur.com/jCyHSBu.gif',
            'https://i.imgur.com/KRaF5Hg.gif',
            'https://i.imgur.com/ie4HLob.gif',
            'https://i.imgur.com/03J4MiU.gif',
            'https://i.imgur.com/ypfd1uu.gif',
            'https://i.imgur.com/8UZa1nL.gif',
            'https://i.imgur.com/Tjtjdjb.gif',
            'https://i.imgur.com/5Ma6iof.gif',
            'https://i.imgur.com/oT8YusK.gif',
            'https://i.imgur.com/gI97QnB.gif',
            'https://i.imgur.com/ZMnqC8s.gif',
            'https://i.imgur.com/Jv2PXeS.gif',
            'https://i.imgur.com/B59jPi6.gif',
            'https://i.imgur.com/7CZjMI7.gif',
            'https://i.imgur.com/yXsMcLo.gif',
            'https://i.imgur.com/jN3jNna.gif',
          
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
            let ramdondick = dick[Math.floor(Math.random()*dick.length)]
            let desc 
    
            while (!ramdondick || ramdondick === null || ramdondick === '' || ramdondick === undefined) {

                ramdondick = dick[Math.floor(Math.random()*dick.length)]
                
            }
            
            if (!img || img.id===message.author.id || img.user.bot) {
      
                desc = `A **${message.author.username}** le provocó una rica polla <a:pandanoveo:880306441926352916> `
          
            } else {
      
                desc = `**${message.author.username}** anda viendo la verga de **${img.user.username}** <a:pandanoveo:880306441926352916> `
  
            }
  
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `🔞 | Midgard's Hot 🔥`, iconURL: client.user.avatarURL({ dynamic: true }) })
            .setDescription(desc)
            .setImage(ramdondick)
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

                        ramdondick = dick[Math.floor(Math.random()*dick.length)]
            
                        while (!ramdondick || ramdondick === null || ramdondick === '' || ramdondick === undefined) {

                            ramdondick = dick[Math.floor(Math.random()*dick.length)]
                            
                        }

                        const nembed = new Discord.MessageEmbed()
                        .setAuthor({ name: `🔞 | Midgard's Hot 🔥`, iconURL: client.user.avatarURL({ dynamic: true }) })
                        .setDescription(desc)
                        .setImage(ramdondick)
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