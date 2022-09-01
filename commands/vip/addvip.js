const { Collection } = require('mongoose');
const userSchema = require('../../models/userSchema');

module.exports =  {
    
    name: 'addvip',
    aliases: ['add-vip'],
    description: '💎 Añade a los usuarios VIP del bot.',
  
    async execute(client, message, args, Discord) { 

        var idm = ['753435606410985573','683501310527668228']

        if(!idm.some(id => message.author.id == id)) return message.reply({embeds: [
       
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | ¡Solo los Administradores del Bot pueden utilizar este comando.!`)
      
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        let user = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));

        if(!user) return message.reply({embeds: [
       
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | ¡Debes mencionar a un usuario!`)
      
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        if(user.user.bot) return message.reply({embeds: [
        
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | No puedes añadir a un bot como usuario VIP`)
      
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        try {

            let buscarUsuario = await userSchema.findOne({ idusuario: user.id })

            while(!buscarUsuario){

                let uservip = await userSchema.create({
    
                    idusuario: user.id,
                    username: user.username
    
                })
    
                uservip.save();
                console.log('Usuario Registrado ===> Id: '+ user.id + ' Username: ' + user.username)

                buscarUsuario = await userSchema.findOne({ idusuario: user.id })

            }

            if(buscarUsuario.vip === true){

                return message.reply({embeds: [
        
                    new Discord.MessageEmbed()
                    .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                    .setColor('RED')
                    .setDescription(`<a:Verify2:931463492677017650> | Este usuario ya es VIP.`)
              
                ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

            } else if(buscarUsuario.vip === false){

                let update = await userSchema.findOneAndUpdate({idusuario: user.id},
                    {
    
                        vip: true
    
                    })
    
                update.save()

                console.log('Se añadió al usuario VIP: '+user.id)
            
                let rolVIP = '951688457258942494'

                var rol = message.guild.roles.cache.find(x => x.id === rolVIP)
        
                if(rol){

                    await user.roles.add(rol).catch(e => {
                        
                        console.log('Ocurrio un error al añadir ROL VIP al usuario: '+ user.id+ ' - '+e)
                        
                    })
                    
                }

                const embed = new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                .setDescription('El usuario <@'+user.id+'> ha sido añadido a la lista VIP.')
                .setThumbnail('https://i.imgur.com/TGJxm2u.gif')
                .setColor('RANDOM')

                message.reply({ allowedMentions: { repliedUser: false}, embeds: [embed]}).catch((e) => console.log('Error al enviar mensaje: '+e))

            }
       
        } catch (error) {
            
            console.log('Error al añadir usuario VIP: User '+user.id+' - Error '+error)
            
            return message.reply({embeds: [
        
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | ¡Hubo un error al añadir al Usuario VIP. Por favor, inténtelo de nuevo!`)
          
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
   
        }

    }

}