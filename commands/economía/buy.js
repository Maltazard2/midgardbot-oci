const { Collection } = require('mongoose');
const userSchema = require('../../models/userSchema');
const prefixSchema = require('../../models/serverSchema');

module.exports =  {
    
    name: 'buy',
    aliases: ['comprar'],
    description: '🛒 Compra un ítem de la tienda.\n [prefix]buy <item>`',
    category: 'Economía 💰',
    use: '<prefix>buy <ítem>',
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

        let it = args[0]

        if(!it) return message.reply({embeds: [
          
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
            .setThumbnail('https://i.imgur.com/vmjyCli.gif')
            .setColor('RED')
            .setDescription('<a:Verify2:931463492677017650> | Necesitas mencionar un ítem a comprar. Para más detalles ejectua: `'+prefix+'shop`')
        
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        let buscarUsuario = await userSchema.findOne({ idusuario: message.author.id})

        if(!buscarUsuario) return message.channel.send({embeds: [
          
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
            .setThumbnail('https://i.imgur.com/vmjyCli.gif')
            .setColor('RED')
            .setDescription('<a:Verify2:931463492677017650> | No tienes suficientes coins para adquirir este item!')
        
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        if(it.toLowerCase()==='ck' || it.toLowerCase()==='chicken'){

            if(buscarUsuario.dinero < 10) return message.reply({embeds: [
          
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
                .setThumbnail('https://i.imgur.com/vmjyCli.gif')
                .setColor('RED')
                .setDescription('<a:Verify2:931463492677017650> | No tienes suficientes coins para adquirir este item!. Actualmente tienes: <a:money:930397094924124180>'+buscarUsuario.dinero.toLocaleString('en-US'))
          
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

            if(buscarUsuario.ck >= 1) return message.reply({embeds: [
          
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
                .setColor('RED')
                .setDescription('<a:Verify2:931463492677017650> | Ya cuentas con tu propio pollito!')
          
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

            let update = await userSchema.findOneAndUpdate({idusuario: message.author.id},
                {
                    dinero: buscarUsuario.dinero - 10,
                    total: buscarUsuario.total - 10,
                    ck: 1
                })
            
            update.save();

            return message.channel.send('<a:Dancing_Duck:930402083625111613> | Acabas de adquirir un pollito!').catch((e) => console.log('Error al enviar mensaje: '+e))
  
        }

        if(buscarUsuario.dinero < 10000) return message.channel.send({embeds: [
          
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
            .setThumbnail('https://i.imgur.com/vmjyCli.gif')
            .setColor('RED')
            .setDescription('<a:Verify2:931463492677017650> | No tienes suficientes coins para adquirir este item! Actualmente tienes: <a:money:930397094924124180>'+buscarUsuario.dinero.toLocaleString('en-US'))
        
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        let col

        if(it.toLowerCase()==='rojo'){
        
            col = 'RED'
      
        } else if(it.toLowerCase()==='rosa'){
       
            col = 'PINK'
      
        } else if(it.toLowerCase()==='aqua'){
      
            col = 'AQUA'
      
        } else if(it.toLowerCase()==='verde'){
      
            col = 'GREEN'
      
        } else if(it.toLowerCase()==='azul'){
      
            col = 'BLUE'
     
        } else if(it.toLowerCase()==='morado'){
     
            col = 'PURPLE'
     
        } else if(it.toLowerCase()==='dorado'){
     
            col = 'GOLD'
     
        } else if(it.toLowerCase()==='naranja'){
     
            col = 'ORANGE'
     
        } else if(it.toLowerCase()==='gris'){
     
            col = 'GREY'
     
        } else if(it.toLowerCase()==='amarillo'){
     
            col = 'YELLOW'
     
        } else if(it.toLowerCase()==='blanco'){
     
            col = 'WHITE'
     
        } else if(it.toLowerCase()==='negro'){
     
            col = 'BLACK'
     
        } else if(it.toLowerCase()==='fucsia'){
     
            col = 'FUSCHIA'
     
        } else return message.channel.send({embeds: [
          
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
            .setThumbnail('https://i.imgur.com/vmjyCli.gif')
            .setColor('RED')
            .setDescription('<a:Verify2:931463492677017650> | Ingresa el nombre correcto del item!')
          
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        let update = await userSchema.findOneAndUpdate({idusuario: message.author.id},
            {
                dinero: buscarUsuario.dinero - 10000,
                total: buscarUsuario.total - 10000,
                color: col
            })
        
        update.save();

        return message.channel.send('<a:Dancing_Duck:930402083625111613> | Acabas de actualizar el color de tu perfil!').catch((e) => console.log('Error al enviar mensaje: '+e))

    }

}