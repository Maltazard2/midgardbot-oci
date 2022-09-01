module.exports =  {
    
    name: 'ip',
    aliases: ['minecraft','java','bedrock'],
    description: '🪓 Servidor de Minecraft.',
  
    async execute(client, message, args, Discord) { 

        const embedj = new Discord.MessageEmbed()
        .setAuthor({ name: `Midgard's Gaming 🎮`, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
        .setTitle('Servidor de Minecraft 🪓')
        .setThumbnail('https://c.tenor.com/j0KEi6tfpRcAAAAC/minecraft-boxer.gif')
        .addField('<:java:957327729093648427> Java','<a:flech:915156906258071554> **IP:** 147.135.64.159:30093', true)
        .addField('\u200B','**AlloyNetwork: ↴**')
        .setImage('https://media.discordapp.net/attachments/949011756070621184/954166398458933338/unknown.png?width=575&height=480')
        .setColor('RANDOM')
        .setTimestamp(new Date())
        .setFooter({ text: message.guild.name, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : client.user.avatarURL({ dynamic: true }) })
        
        const embedb = new Discord.MessageEmbed()
        .setAuthor({ name: `Midgard's Gaming 🎮`, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
        .setTitle('Servidor de Minecraft 🪓')
        .setThumbnail('https://c.tenor.com/j0KEi6tfpRcAAAAC/minecraft-boxer.gif')
        .addField('<:minecraft:957328234066878574> Bedrock:','<a:flech:915156906258071554> **IP:** 147.135.64.159 - **PORT:** 30093', true)
        .addField('\u200B','**AlloyNetwork: ↴**')
        .setImage('https://media.discordapp.net/attachments/949011756070621184/954166946222469170/unknown.png?width=767&height=398')
        .setColor('RANDOM')
        .setTimestamp(new Date())
        .setFooter({ text: message.guild.name, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : client.user.avatarURL({ dynamic: true }) })

        const bjava = new Discord.MessageButton()
        .setCustomId("java")
        .setLabel("Java")
        .setStyle("DANGER")
    
        const bbedrock = new Discord.MessageButton()
        .setCustomId("bedrock")
        .setLabel("Bedrock")
        .setStyle("SUCCESS")

        message.reply({ allowedMentions: { repliedUser: false }, embeds: [embedj], components: [
            
            new Discord.MessageActionRow()
            .addComponents([bjava.setDisabled(true),bbedrock.setDisabled(false)])
          
        ]}).then(async m => {
            
            let filter = int => int.isButton() && int.user.id == message.author.id 
           
            const collector = m.createMessageComponentCollector({ filter });
            
            collector.on("collect", async int => {
              
                int.deferUpdate();
           
                if (int.customId === "java") {
                
                    m.edit({
                  
                        embeds: [embedj],
                        components: [new Discord.MessageActionRow().addComponents([bjava.setDisabled(true),bbedrock.setDisabled(false)])]
                
                    }).catch((e) => console.log('Error al enviar mensaje: '+e))
      
                }else if (int.customId === "bedrock") {
                
                    m.edit({
                  
                        embeds: [embedb],
                        components: [new Discord.MessageActionRow().addComponents([bjava.setDisabled(false),bbedrock.setDisabled(true)])]
                
                    }).catch((e) => console.log('Error al enviar mensaje: '+e))
      
                }
      
            });
      
            collector.on("end", (collected, reason) => {
              
                if(collected < 1) return m.edit({
                
                    components: [
                        new Discord.MessageActionRow().addComponents([bjava.setDisabled(true),bbedrock.setDisabled(true)])
                    ]
                    
                }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
                console.log('Razón del término de colección de shop: '+reason)

            });
            
        }).catch((e) => console.log('Error al enviar mensaje: '+e))


    }

}