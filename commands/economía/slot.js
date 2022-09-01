const { Collection } = require('mongoose');
const userSchema = require('../../models/userSchema');

module.exports =  {
    
    name: 'slot',
    aliases: ['slots','tragaperras','traga-perras'],
    description: '🎰 Apuesta en el tragamonedas y gana.\n [prefix]slot <cantidad>`',
  
    async execute(client, message, args, Discord) { 

        let cantidad = args[0] || 100

        if(isNaN(cantidad)) return message.reply({embeds: [

            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | Sólo debes colocar números.!`)

        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        const bet = parseInt(cantidad)

        let buscarUsuario = await userSchema.findOne({idusuario: message.author.id})

        while(!buscarUsuario){

            let user = await userSchema.create({

                idusuario: message.author.id,
                username: message.author.username,
                dinero: 0,
                total: 0

            })

            user.save();
            console.log('Usuario Registrado ===> Id: '+ message.author.id + ' Username: ' + message.author.username)

            buscarUsuario = await userSchema.findOne({idusuario: message.author.id})
            
        }

        let dinero = await buscarUsuario.dinero

        if(dinero < bet) return message.reply({embeds: [

            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | No tienes suficiente dinero para apostar. Actualmente tienes: <a:money:930397094924124180> `+dinero.toLocaleString('en-US'))

        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        let slots = ["💎", "💰", "💵"]

        let result1 = Math.floor(Math.random() * slots.length)
        let result2 = Math.floor(Math.random() * slots.length)
        let result3 = Math.floor(Math.random() * slots.length)

        let embed2 = new Discord.MessageEmbed()
        .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
        .setThumbnail('https://i.imgur.com/ctVqm0y.gif')
        .setTitle("Tragamonedas")
        .addField("Jugando:", slots[result1] + " **|** " + "<a:slot:939590026080190474>" + " **|** " + "<a:slot:939590026080190474>" + " **<**", true)
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter({ text: `Apostando: ${(bet).toLocaleString('en-US')}$` })
        
        let embed3 = new Discord.MessageEmbed()
        .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
        .setThumbnail('https://i.imgur.com/ctVqm0y.gif')
        .setTitle("Tragamonedas")
        .addField("Jugando:", slots[result1] + " **|** " + slots[result2] + " **|** " + "<a:slot:939590026080190474>" + " **<**", true)
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter({ text: `Apostando: ${(bet).toLocaleString('en-US')}$` })
        
        if (result1 === result2 && result1 === result3) {

            var gana

            if(slots[result1] === '💵'){

                gana = bet * 2

            } else if(slots[result1] === '💰'){

                gana = bet * 5

            } else if(slots[result1] === '💎'){

                gana = bet * 10
            }

            if(buscarUsuario.vip === true){

                gana = gana * 2

            } else {

                gana = gana

            }

            let embed4 = new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
            .setThumbnail('https://i.imgur.com/ctVqm0y.gif')
            .setTitle("¡Ganaste! 🎰")
            .addField("Resultado:", slots[result1] + " **|** " + slots[result2] + " **|** " + slots[result3] + " **<**", true)
            .setColor("GREEN")
            .setTimestamp()
            .setFooter({ text: `Ganaste: ${(gana).toLocaleString('en-US')}$` })

            let embed = new Discord.MessageEmbed()
            .setTitle("Tragamonedas")
            .addField("Jugando:","<a:slot:939590026080190474>" + " **|** " + "<a:slot:939590026080190474>" + " **|** " + "<a:slot:939590026080190474>" + " **<**", true)
            .setColor("RANDOM")
            .setFooter({ text: `Apostando: ${(bet).toLocaleString('en-US')}$` })

            message.channel.send({embeds: [embed]}).then((msg) => {

                setTimeout(function () {

                    msg.edit({embeds: [embed2]}).catch((e) => console.log('Error al enviar mensaje: '+e))
                  
                }, 2000)

                setTimeout(function () {

                    msg.edit({embeds: [embed3]}).catch((e) => console.log('Error al enviar mensaje: '+e))
                  
                }, 5000)

                setTimeout(function () {

                    msg.edit({embeds: [embed4]}).catch((e) => console.log('Error al enviar mensaje: '+e))
                  
                }, 7000)

            }).catch((e) => console.log('Error al enviar mensaje: '+e))

            try {

                let update = await userSchema.findOneAndUpdate({ idusuario: message.author.id },
                    {
        
                        dinero: buscarUsuario.dinero + gana,
                        total: buscarUsuario.total + gana
        
                    });
    
                update.save();
                    
            } catch (error) {
    
                console.log('Error al actualiza dinero ganado del slot: '+error)
                    
            }
        
        } else {

            let embed5 = new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
            .setThumbnail('https://i.imgur.com/ctVqm0y.gif')
            .setTitle("¡Perdiste! 🎰")
            .addField("Resultado:", slots[result1] + " **|** " + slots[result2] + " **|** " + slots[result3] + " **<**", true)
            .setColor("RED")
            .setTimestamp()
            .setFooter({ text: `Perdiste: ${(bet).toLocaleString('en-US')}$` })

            let embed = new Discord.MessageEmbed()
            .setTitle("Tragamonedas")
            .addField("Jugando:","<a:slot:939590026080190474>" + " **|** " + "<a:slot:939590026080190474>" + " **|** " + "<a:slot:939590026080190474>" + " **<**", true)
            .setColor("RANDOM")
            .setFooter({ text: `Apostando: ${(bet).toLocaleString('en-US')}$` })

            message.channel.send({embeds: [embed]}).then((msg) => {

                setTimeout(function () {

                    msg.edit({embeds: [embed2]}).catch((e) => console.log('Error al enviar mensaje: '+e))
                  
                }, 2000)

                setTimeout(function () {

                    msg.edit({embeds: [embed3]}).catch((e) => console.log('Error al enviar mensaje: '+e))
                  
                }, 5000)

                setTimeout(function () {

                    msg.edit({embeds: [embed5]}).catch((e) => console.log('Error al enviar mensaje: '+e))
                  
                }, 7000)

            }).catch((e) => console.log('Error al enviar mensaje: '+e))

            try {

                let update = await userSchema.findOneAndUpdate({ idusuario: message.author.id },
                    {
        
                        dinero: buscarUsuario.dinero - bet,
                        total: buscarUsuario.total - bet
        
                    });
    
                update.save();
                    
            } catch (error) {
    
                console.log('Error al actualiza dinero perdido del slot: '+error)
                    
            }

        }

    }

}