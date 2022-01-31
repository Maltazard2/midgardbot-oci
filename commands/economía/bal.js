const { Collection } = require('mongoose');
const userSchema = require('../../models/userSchema');
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports =  {
    
    name: 'bal',
    aliases: ['balance'],
    description: '👛 Mira tu balance o el de usuario en el servidor.',

    async execute(client, message, args, Discord) {

        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
      
        if(!img){

            try {

                let buscarUsuario = await userSchema.findOne({idusuario: message.author.id})

                if(!buscarUsuario){
        
                    let user = await userSchema.create({

                        idusuario: message.author.id,
                        username: message.author.username,

                    })

                    user.save();
                    console.log('Usuario Registrado ===> Id: '+ message.author.id + ' Username: ' + message.author.username)
  
                }
  
                const e = new Discord.MessageEmbed()
                .setColor(buscarUsuario.color)
                .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
                .setTitle(`Balance`)
                .setThumbnail('https://media.discordapp.net/attachments/936039644959756319/936150399084269578/bal.gif?width=600&height=450')
                .addField(`**Dinero:**`, '<a:money:930397094924124180>  '+buscarUsuario.dinero.toLocaleString('en-US'), true)
                .addField(`**Banco:**`, '<a:money:930397094924124180>  '+buscarUsuario.banco.toLocaleString('en-US'), true)
                .addField(`**Total:**`, '<a:money:930397094924124180>  '+buscarUsuario.total.toLocaleString('en-US'), true)
                .setTimestamp(new Date())
                .setFooter(`Midgard's VIP`,client.user.avatarURL())
  
                return message.reply({ allowedMentions: { repliedUser: false}, embeds: [e]})
                
            } catch (error) {

                console.log('Error al obtener bal de '+message.author.id+' - Error: '+error)
                message.reply('Hubo un error interno. Por favor, inténtelo de nuevo.')
      
            }

            
        } else {

            try {

                let buscarUsuario = await userSchema.findOne({idusuario: img.id})

                if(!buscarUsuario){
        
                    let user = await userSchema.create({

                        idusuario: img.id,
                        username: img.username,

                    })

                    user.save();
                    console.log('Usuario Registrado ===> Id: '+ img.id + ' Username: ' + img.username)
  
                }
  
                const e = new Discord.MessageEmbed()
                .setColor(buscarUsuario.color)
                .setAuthor(img.user.username+'#'+img.user.discriminator, img.displayAvatarURL({dynamic: true}))
                .setTitle(`Balance`)
                .setThumbnail('https://media.discordapp.net/attachments/936039644959756319/936150399084269578/bal.gif?width=600&height=450')
                .addField(`**Dinero:**`, '<a:money:930397094924124180>  '+buscarUsuario.dinero.toLocaleString('en-US'), true)
                .addField(`**Banco:**`, '<a:money:930397094924124180>  '+buscarUsuario.banco.toLocaleString('en-US'), true)
                .addField(`**Total:**`, '<a:money:930397094924124180>  '+buscarUsuario.total.toLocaleString('en-US'), true)
                .setTimestamp(new Date())
                .setFooter(`Midgard's VIP`,client.user.avatarURL())
  
                message.reply({ allowedMentions: { repliedUser: false}, embeds: [e]})
      
            } catch (error) {

                console.log('Error al obtener bal de '+img.id+' - Error: '+error)
                message.reply('Hubo un error interno. Por favor, inténtelo de nuevo.')
      
            }
            
        }

    }

}