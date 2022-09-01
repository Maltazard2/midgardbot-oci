const prefixSchema = require('../../models/serverSchema');

module.exports =  {
    
    name: 'shop',
    aliases: ['store','tienda','market'],
    description: '🏪 Muestra la tienda global del Bot.',
    category: 'Economía 💰',
    use: '<prefix>shop',
    owner: false,
    vip: false,
    slash: false,

    async execute(client, message, args, Discord) {

        let buscarprefix, prefix
        try {

            buscarprefix = await prefixSchema.findOne({idserver: message.guild.id})

            if(buscarprefix){

                prefix = buscarprefix.prefix

            } else {

                prefix = process.env.PREFIX

            }

        } catch (error) {

            console.log('Error al Prefix en Servidor: '+ message.guild.id + ' - ' + error)
            prefix = process.env.PREFIX

        }

        // STORE

        const shop1 = new Discord.MessageEmbed()
        .setAuthor({ name: 'MidgardBot | Store 🏪', iconURL: client.user.avatarURL({ dynamic: true }) })
        .setThumbnail('https://i.imgur.com/lpTNXfV.gif')
        .setDescription('Para adquirir un item, debes usar el comando `'+prefix+'buy <name>`') 
        .addField(`<a:money:930397094924124180> 10 - Chicken`, 'Item para apuestas', false)  
        .addField(`<a:money:930397094924124180> 10,000 - Rojo`, 'Color para tu perfil', false)  	
        .addField(`<a:money:930397094924124180> 10,000 - Fucsia`, 'Color para tu perfil', false)  		
        .addField(`<a:money:930397094924124180> 10,000 - Naranja`, 'Color para tu perfil', false)  		
        .addField(`<a:money:930397094924124180> 10,000 - Morado`, 'Color para tu perfil', false)  		
        .addField(`<a:money:930397094924124180> 10,000 - Dorado`, 'Color para tu perfil', false)  		
        .addField(`<a:money:930397094924124180> 10,000 - Amarillo`, 'Color para tu perfil', false)			
        .setColor("RANDOM")
        .setFooter({ text: `Página 1/2`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : client.user.avatarURL({ dynamic: true }) })

        const shop2 = new Discord.MessageEmbed()
        .setAuthor({ name: 'MidgardBot | Store 🏪', iconURL: client.user.avatarURL({ dynamic: true }) })
        .setThumbnail('https://i.imgur.com/lpTNXfV.gif')
        .setDescription('Para adquirir un item, debes usar el comando `'+prefix+'buy <name>`')   
        .addField(`<a:money:930397094924124180> 10,000 - Rosa`, 'Color para tu perfil', false)  
        .addField(`<a:money:930397094924124180> 10,000 - Aqua`, 'Color para tu perfil', false)  	
        .addField(`<a:money:930397094924124180> 10,000 - Verde`, 'Color para tu perfil', false)  		
        .addField(`<a:money:930397094924124180> 10,000 - Azul`, 'Color para tu perfil', false)  		
        .addField(`<a:money:930397094924124180> 10,000 - Gris`, 'Color para tu perfil', false)  		
        .addField(`<a:money:930397094924124180> 10,000 - Blanco`, 'Color para tu perfil', false)  		
        .addField(`<a:money:930397094924124180> 10,000 - Negro`, 'Color para tu perfil', false) 			
        .setColor("RANDOM")
        .setFooter({ text: `Página 2/2`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : client.user.avatarURL({ dynamic: true }) })

        const bS1 = new Discord.MessageButton()
        .setCustomId("p1")
        .setLabel("🛒 | 1")
        .setStyle("PRIMARY")
    
        const bS2 = new Discord.MessageButton()
        .setCustomId("p2")
        .setLabel("🛒 | 2")
        .setStyle("PRIMARY")

        message.reply({ allowedMentions: { repliedUser: false}, 
            
            embeds: [shop1],
            components: [
              new Discord.MessageActionRow().addComponents([bS1.setDisabled(true),bS2])
            ]

        }).then(async m => {
            
            let filter = int => int.isButton() && int.user.id == message.author.id 
           
            const collector = m.createMessageComponentCollector({ filter });
            
            collector.on("collect", async int => {
              
                int.deferUpdate();
           
                if (int.customId === "p1") {
                
                    m.edit({
                  
                        embeds: [shop1],
                        components: [new Discord.MessageActionRow().addComponents([bS1.setDisabled(true),bS2.setDisabled(false)])]
                
                    }).catch((e) => console.log('Error al enviar mensaje: '+e))
      
                }else if (int.customId === "p2") {
                
                    m.edit({
                  
                        embeds: [shop2],
                        components: [new Discord.MessageActionRow().addComponents([bS1.setDisabled(false),bS2.setDisabled(true)])]
                
                    }).catch((e) => console.log('Error al enviar mensaje: '+e))
      
                }
      
            });
      
            collector.on("end", (collected, reason) => {
              
                if(collected < 1) return m.edit({
                
                    components: [
                        new Discord.MessageActionRow().addComponents([bS1.setDisabled(true),bS2.setDisabled(true)])
                    ]
                    
                }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
                console.log('Razón del término de colección de shop: '+reason)

            });
            
        }).catch((e) => console.log('Error al enviar mensaje: '+e))

    }

}