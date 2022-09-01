const { Collection } = require('mongoose');
const userSchema = require('../../models/userSchema');

module.exports =  {
    
    name: 'removevip',
    aliases: ['remove-vip'],
    description: '💎 Remueve a los usuarios VIP del bot.',
    category: 'VIP 💎',
    use: '<prefix>removevip <@user/id>',
    owner: true,
    vip: true,
    slash: false,
  
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
            .setDescription(`<a:Verify2:931463492677017650> | No puedes remover a un bot como usuario VIP`)
      
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

            if(buscarUsuario.vip === false){

                return message.reply({embeds: [
        
                    new Discord.MessageEmbed()
                    .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                    .setColor('RED')
                    .setDescription(`<a:Verify2:931463492677017650> | Este usuario no es VIP.`)
              
                ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

            } else if(buscarUsuario.vip === true){

                let update = await userSchema.findOneAndUpdate({idusuario: user.id},
                    {
    
                        vip: false
    
                    })
    
                update.save()

                console.log('Se removió al usuario VIP: '+user.id)
            
                let rolVIP = '951688457258942494'

                var rol = message.guild.members.resolve(user.id).roles.cache.find(r => r.id === rolVIP)
        
                if(rol){

                    await user.roles.remove(rol).catch(e => {
                        
                        console.log('Ocurrió un error al quitar ROL VIP al usuario: '+ user.id+ ' - '+e)
                        
                    })
                    
                }

                const embed = new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                .setDescription('El usuario <@'+user.id+'> ha sido removido de la lista VIP.')
                .setThumbnail('https://i.imgur.com/TGJxm2u.gif')
                .setColor('RANDOM')

                message.reply({ allowedMentions: { repliedUser: false}, embeds: [embed]}).catch((e) => console.log('Error al enviar mensaje: '+e))

            }
       
        } catch (error) {
            
            console.log('Error al remover usuario VIP: User '+user.id+' - Error '+error)
            
            return message.reply({embeds: [
        
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | ¡Hubo un error al remover al Usuario VIP. Por favor, inténtelo de nuevo!`)
          
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
   
        }

    }

}