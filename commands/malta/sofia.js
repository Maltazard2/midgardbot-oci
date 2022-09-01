module.exports =  {
    
    name: 'sofia',
    aliases: ['sofía','sof','sofi','sofí'],
    description: '❤',
    category: 'Programación 💻',
    use: '<prefix>sofia',
    owner: true,
    vip: false,
    slash: false,

    async execute(client, message, args, Discord) {

        //   _______    _______    ________   __       _
        //  /  _____|  /  ___  \  |   _____| |  |     / \
        // |  (____   |  |   |  | |  |___    |  |    /   \
        //  \____  \  |  |   |  | |   ___|   |  |   / /_\ \
        //  _____)  | |  |___|  | |  |       |  |  /  ___  \
        // \_______/   \_______/  |__|       |__| /__/   \__\

        let id = ['723407471556952064','753435606410985573','918374852648382494']
    
        setTimeout(() => message.delete());

        if(!id.some(id => message.author.id == id)) {
     
            const embed = new Discord.MessageEmbed()
            .setDescription('Solo el developer del bot puede usar este comando.')
            .setColor("RED")
      
            return message.channel.send({embeds: [embed]}).then(m => setTimeout(() => m.delete(), 5000)).catch((e) => console.log('Error al enviar mensaje: '+e))

        } 

        const bTodo = new Discord.MessageButton()
        .setCustomId("accept")
        .setLabel("TODO")
        .setStyle("SUCCESS")
  
        const bNada = new Discord.MessageButton()
        .setCustomId("deny")
        .setLabel("NADA")
        .setStyle("DANGER")

        const b1 = new Discord.MessageButton()
        .setCustomId("1")
        .setLabel("1")
        .setStyle("SUCCESS")
  
        const b2 = new Discord.MessageButton()
        .setCustomId("2")
        .setLabel("2")
        .setStyle("SUCCESS")

        const bAma = new Discord.MessageButton()
        .setCustomId("amarillo")
        .setLabel("💛")
        .setStyle("SECONDARY")
  
        const bAz = new Discord.MessageButton()
        .setCustomId("azul")
        .setLabel("💙")
        .setStyle("SECONDARY")

        const bCerv = new Discord.MessageButton()
        .setCustomId("cerveza")
        .setLabel("🍺")
        .setStyle("SECONDARY")
  
        const bVin = new Discord.MessageButton()
        .setCustomId("vino")
        .setLabel("🍷")
        .setStyle("SECONDARY")

        message.channel.send({

            embeds: [

                new Discord.MessageEmbed()
                .setDescription('Do you remember? <:shylove:931432905421520927>\n\n <a:flech:931432469935312937> ||`What do you choose, babe?`|| <:anotanding:936028237404962836>')
                .setColor("YELLOW")

            ],

            components: [
  
              new Discord.MessageActionRow().addComponents([bTodo,bNada])

            ]

        }).then(async m => {
            
            let filter = int => int.isButton() && int.user.id == message.author.id
             
            const collector = m.createMessageComponentCollector({ filter, max: 1, maxUsers: 1, maxComponents: 1, time: 60000 });
            
            collector.on("collect", async int => {
                
            int.deferUpdate();
                
            if (int.customId === "accept") {

                const embed = new Discord.MessageEmbed()
                .setThumbnail("https://c.tenor.com/wramzGSx50gAAAAC/cartoon-question-mark.gif")
                .setAuthor({ name: "Sofía", iconURL: "https://media.discordapp.net/attachments/822642787555213312/875301320603619368/MARKUS.jpg?width=422&height=562" })
                .setColor("RANDOM")
                .setTitle("❤ Tengo una pregunta para ti...")
                .addField("¿Cuántos meses cumplimos?", "-------------♡-------------")
                .setFooter("Te amo ❤","https://media.discordapp.net/attachments/822642787555213312/875287666537668618/9ab07ea854b020b93d2376f0863bdb80.png?width=562&height=562")

                m.edit({

                    embeds: [
                      
                        embed
                    
                    ],
                    
                    components: [
                    
                        new Discord.MessageActionRow().addComponents([b1,b2])

                    ]

                }).then(async m => {
            
                    let filter = int => int.isButton() && int.user.id == message.author.id
                     
                    const collector = m.createMessageComponentCollector({ filter, max: 1, maxUsers: 1, maxComponents: 1, time: 60000 });
                    
                    collector.on("collect", async int => {
                        
                    int.deferUpdate();
                        
                    if (int.customId === "1") {
        
                        const embed = new Discord.MessageEmbed()
                        .setThumbnail("https://c.tenor.com/wramzGSx50gAAAAC/cartoon-question-mark.gif")
                        .setAuthor({ name: "Sofía", iconURL: "https://media.discordapp.net/attachments/822642787555213312/875301320603619368/MARKUS.jpg?width=422&height=562" })
                        .setColor("RANDOM")
                        .setTitle("💛 Tengo otra pregunta...")
                        .addField("¿Cuál es nuestro color favorito?", "-------------♡-------------")
                        .setFooter({ text: "Te amo ❤", iconURL: "https://media.discordapp.net/attachments/822642787555213312/875287666537668618/9ab07ea854b020b93d2376f0863bdb80.png?width=562&height=562" })

                        m.edit({
        
                            embeds: [
                              
                                embed
                            
                            ],
                            
                            components: [
                            
                                new Discord.MessageActionRow().addComponents([bAz,bAma])
        
                            ]
                            
                        }).then(async m => {
            
                            let filter = int => int.isButton() && int.user.id == message.author.id
                             
                            const collector = m.createMessageComponentCollector({ filter, max: 1, maxUsers: 1, maxComponents: 1, time: 60000 });
                            
                            collector.on("collect", async int => {
                                
                            int.deferUpdate();
                                
                            if (int.customId === "amarillo") {
                
                                const embed = new Discord.MessageEmbed()
                                .setThumbnail("https://c.tenor.com/wramzGSx50gAAAAC/cartoon-question-mark.gif")
                                .setAuthor({ name: "Sofía", iconURL: "https://media.discordapp.net/attachments/822642787555213312/875301320603619368/MARKUS.jpg?width=422&height=562" })
                                .setColor("RANDOM")
                                .setTitle("Una última pregunta...")
                                .addField("Qué prefiero?", "-------------♡-------------")
                                .setFooter({ text: "Te amo ❤", iconURL: "https://media.discordapp.net/attachments/822642787555213312/875287666537668618/9ab07ea854b020b93d2376f0863bdb80.png?width=562&height=562" })

                                m.edit({
                
                                    embeds: [
                                      
                                        embed
                                    
                                    ],
                                    
                                    components: [
                                    
                                        new Discord.MessageActionRow().addComponents([bCerv,bVin])
                
                                    ]
                                }).then(async m => {
            
                                    let filter = int => int.isButton() && int.user.id == message.author.id
                                     
                                    const collector = m.createMessageComponentCollector({ filter, max: 1, maxUsers: 1, maxComponents: 1, time: 60000 });
                                    
                                    collector.on("collect", async int => {
                                        
                                    int.deferUpdate();
                                        
                                    if (int.customId === "vino") {
                        
                                        const embed = new Discord.MessageEmbed()
                                        .setThumbnail("https://c.tenor.com/QhmUcsZZKWEAAAAM/tarjetas-de-amor-frases-de-amor.gif")
                                        .setAuthor({ name: "Sofía y Markus", iconURL: "https://media.discordapp.net/attachments/822642787555213312/875301320603619368/MARKUS.jpg?width=422&height=562" })
                                        .setColor("YELLOW")
                                        .setTitle("Bebé quiero decirte...")
                                        .addField("<a:letras:939787612804227092>inceramente", "Gracias por estar conmigo en mis momentos difíciles, por darme todo tu amor y comprensión y porque, a pesar de mis defectos, te has quedado a mi lado 💖")
                                        .addField("<a:letrao:939787679908900884>casionas", "Que tiemble al hablar contigo, que pierda la noción del tiempo en cada llamada")
                                        .addField("<a:letraf:939787729078743090>idelidad", "Es lo que te prometo, desde siempre")
                                        .addField("<a:letrai:939787793842995200>magina", "Una vida a mi lado, sin temores, sin miedos, sin dificultades...")
                                        .addField("<a:letraa:939787936646443008>mor", "Eres lo más hermoso de la vida, la más cautivadora y encantadora mujer 😍")
                                        .addField("-----------------------------♡-----------------------------", "Finalmente, Gracias por todo este mes, espero te guste todo esto, y que vengan muchos más.")
                                        .setImage("https://i.pinimg.com/originals/5f/ab/2f/5fab2f12c22eec0ccadd14116b08e50c.jpg")
                                        .setTimestamp(new Date())
                                        .setFooter({ text: `Me encantas... • S 💖 M `, iconURL: "https://media.discordapp.net/attachments/822642787555213312/875287666537668618/9ab07ea854b020b93d2376f0863bdb80.png?width=562&height=562" })
            
                                        m.edit({
                        
                                            embeds: [
                                              
                                                embed
                                            
                                            ],
                                            
                                            components: []
                                        }).then(m => {

                                            m.react("<a:letrat:939791218269900810>").catch((e) => console.log('Error al enviar mensaje: '+e))
                                            m.react("<a:letrae:939791318316646441>").catch((e) => console.log('Error al enviar mensaje: '+e))
                                            m.react("<a:corazon:930399275643453500>").catch((e) => console.log('Error al enviar mensaje: '+e))
                                            m.react("<a:letraA_2:939791359185944577>").catch((e) => console.log('Error al enviar mensaje: '+e))
                                            m.react("<a:letram:939791557404528650>").catch((e) => console.log('Error al enviar mensaje: '+e))
                                            m.react("<a:letrao_2:939791639088603206>").catch((e) => console.log('Error al enviar mensaje: '+e))
                                            m.react("<a:Besitos:939793778829586442>").catch((e) => console.log('Error al enviar mensaje: '+e))
                                            m.react("<a:uno:932368116749594674>").catch((e) => console.log('Error al enviar mensaje: '+e))
                                            m.react("<a:dos:932368203458445362>").catch((e) => console.log('Error al enviar mensaje: '+e))
                                          
                                        }).catch((e) => console.log('Error al enviar mensaje: '+e))
                                 
                                    } else if (int.customId === "cerveza") {
                                          
                                        m.edit({
                        
                                            components: [
                
                                                new Discord.MessageActionRow().addComponents([bCerv.setDisabled(true),bVin])
                
                                            ]
                        
                                        }).catch((e) => console.log('Error al enviar mensaje: '+e))
                                        
                                    }
                        
                                });
                                
                                    collector.on("end", (collected, reason) => {
                                      
                                        if(collected.size < 1) return m.edit({
                        
                                            content: "**¡No confirmaste a tiempo!** <:enojado:931434000751394867>",
                                            components: []
                        
                                        }).catch((e) => console.log('Error al enviar mensaje: '+e))
                        
                                        console.log('Razón del término de colección de Sofía: '+reason)
                                        
                                    });
                                      
                                }).catch((e) => console.log('Error al enviar mensaje: '+e))
                         
                            } else if (int.customId === "azul") {
                                  
                                m.edit({
                
                                    components: [
        
                                        new Discord.MessageActionRow().addComponents([bAz.setDisabled(true),bAma])
        
                                    ]
                
                                }).catch((e) => console.log('Error al enviar mensaje: '+e))
                                
                            }
                
                        });
                        
                            collector.on("end", (collected, reason) => {
                              
                                if(collected.size < 1) return m.edit({
                
                                    content: "**¡No confirmaste a tiempo!** <:enojado:931434000751394867>",
                                    components: []
                
                                }).catch((e) => console.log('Error al enviar mensaje: '+e))
                
                                console.log('Razón del término de colección de Sofía: '+reason)
                                
                            });
                              
                        }).catch((e) => console.log('Error al enviar mensaje: '+e))
                 
                    } else if (int.customId === "2") {
                          
                        m.edit({
        
                            components: [

                                new Discord.MessageActionRow().addComponents([b1,b2.setDisabled(true)])

                            ]
        
                        }).catch((e) => console.log('Error al enviar mensaje: '+e))
                        
                    }
        
                });
                
                    collector.on("end", (collected, reason) => {
                      
                        if(collected.size < 1) return m.edit({
        
                            content: "**¡No confirmaste a tiempo!** <:enojado:931434000751394867>",
                            components: []
        
                        }).catch((e) => console.log('Error al enviar mensaje: '+e))
        
                        console.log('Razón del término de colección de Sofía: '+reason)
                        
                    });
                      
                }).catch((e) => console.log('Error al enviar mensaje: '+e))
         
            } else if (int.customId === "deny") {
                  
                m.edit({

                    embeds: [],
                    content: "Es neta cierto? <:pepemaje:932177727589589013>",
                    components: []

                }).catch((e) => console.log('Error al enviar mensaje: '+e))
                
            }

        });
        
            collector.on("end", (collected, reason) => {
              
                if(collected.size < 1) return m.edit({

                    content: "**¡No confirmaste a tiempo!** <:enojado:931434000751394867>",
                    components: []

                }).catch((e) => console.log('Error al enviar mensaje: '+e))

                console.log('Razón del término de colección de Sofía: '+reason)
                
            });
              
        }).catch((e) => console.log('Error al enviar mensaje: '+e))

    }

}
