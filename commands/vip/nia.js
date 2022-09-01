const userSchema = require('../../models/userSchema');

module.exports =  {
    
    name: 'nia',
    aliases: ['ninini'],
    description: '👓 Convierte las vocales de una oración en "i"',
    category: 'VIP 💎',
    use: '<prefix>nia <texto>',
    owner: false,
    vip: true,
    slash: false,
  
    async execute(client, message, args, Discord) { 

        try {
                
            let userData = await userSchema.findOne({idusuario: message.author.id})

            while(!userData){

                let user = await userSchema.create({

                    idusuario: message.author.id,
                    username: message.author.username,

                })

                user.save();
                console.log('Usuario Registrado ===> Id: '+ message.author.id + ' Username: ' + message.author.username)

                userData = await userSchema.findOne({idusuario: message.author.id})

            }

            if (userData.vip === false) return message.reply({ embeds: [
                        
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | Comando VIP!`)
    
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))


        } catch (error) {

            console.log('Error al Buscar Usuario en Comando Porno: '+ error)
            
        }
        
        var cadena = args.join(' ') 

        cadena = cadena.replace(/[aeou]/ig, "i")
        setTimeout(() => message.delete(), 100)
        return message.channel.send(cadena).catch((e) => console.log('Error al enviar mensaje: '+e))

    }

}