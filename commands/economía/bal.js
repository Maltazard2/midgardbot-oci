const { Collection } = require('mongoose');
const userSchema = require('../../models/userSchema');

module.exports =  {
    
    name: 'bal',
    aliases: ['balance'],
    description: '👛 Mira tu balance o el de usuario en el servidor.',

    async execute(client, message, args, Discord) {

        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
      
        if(!img){

            try {

                let buscarUsuario = await userSchema.findOne({idusuario: message.author.id})

                while(!buscarUsuario){
        
                    let user = await userSchema.create({

                        idusuario: message.author.id,
                        username: message.author.username,

                    })

                    user.save();
                    console.log('Usuario Registrado ===> Id: '+ message.author.id + ' Username: ' + message.author.username)
  
                    buscarUsuario = await userSchema.findOne({idusuario: message.author.id})

                }
  
                const e = new Discord.MessageEmbed()
                .setColor(buscarUsuario.color ? buscarUsuario.color : 'RANDOM')
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({dynamic: true}) })
                .setTitle(`Balance 💸`)
                .setThumbnail('https://i.imgur.com/ctsNoH1.gif')
                .addField(`**Dinero:**`, '<a:money:930397094924124180>  '+buscarUsuario.dinero.toLocaleString('en-US'), true)
                .addField(`**Banco:**`, '<a:money:930397094924124180>  '+buscarUsuario.banco.toLocaleString('en-US'), true)
                .addField(`**Total:**`, '<a:money:930397094924124180>  '+buscarUsuario.total.toLocaleString('en-US'), true)
                .setTimestamp(new Date())
                .setFooter({ text: `Midgard's VIP`, iconURL: client.user.avatarURL({ dynamic: true }) })
  
                return message.reply({ allowedMentions: { repliedUser: false}, embeds: [e]}).catch((e) => console.log('Error al enviar mensaje: '+e))
                
            } catch (error) {

                console.log('Error al obtener bal de '+message.author.id+' - Error: '+error)
                message.reply('Hubo un error interno. Por favor, inténtelo de nuevo.').catch((e) => console.log('Error al enviar mensaje: '+e))
      
            }

            
        } else {

            try {

                let buscarUsuario = await userSchema.findOne({idusuario: img.id})

                while(!buscarUsuario){
        
                    let user = await userSchema.create({

                        idusuario: img.id,
                        username: img.username,

                    })

                    user.save();
                    console.log('Usuario Registrado ===> Id: '+ img.id + ' Username: ' + img.username)
  
                    buscarUsuario = await userSchema.findOne({idusuario: img.id})

                }
  
                const e = new Discord.MessageEmbed()
                .setColor(buscarUsuario.color ? buscarUsuario.color : 'RANDOM')
                .setAuthor({ name: img.user.username+'#'+img.user.discriminator, iconURL: img.displayAvatarURL({dynamic: true}) })
                .setTitle(`Balance 💸`)
                .setThumbnail('https://i.imgur.com/ctsNoH1.gif')
                .addField(`**Dinero:**`, '<a:money:930397094924124180>  '+buscarUsuario.dinero.toLocaleString('en-US'), true)
                .addField(`**Banco:**`, '<a:money:930397094924124180>  '+buscarUsuario.banco.toLocaleString('en-US'), true)
                .addField(`**Total:**`, '<a:money:930397094924124180>  '+buscarUsuario.total.toLocaleString('en-US'), true)
                .setTimestamp(new Date())
                .setFooter({ text: `Midgard's VIP`, iconURL: client.user.avatarURL({ dynamic: true }) })
  
                message.reply({ allowedMentions: { repliedUser: false}, embeds: [e]}).catch((e) => console.log('Error al enviar mensaje: '+e))
      
            } catch (error) {

                console.log('Error al obtener bal de '+img.id+' - Error: '+error)
                message.reply('Hubo un error interno. Por favor, inténtelo de nuevo.').catch((e) => console.log('Error al enviar mensaje: '+e))
      
            }
            
        }

    }

}