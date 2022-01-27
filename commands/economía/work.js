const { Collection } = require('mongoose');
const userSchema = require('../../models/userSchema');

module.exports =  {
    
    name: 'work',
    aliases: ['w'],
    description: '🧰 Trabaja para obtener coins.',
  
    async execute(client, message, args, Discord) { 

        var w = [

            'Gracias por ayudarme a programar, aquí tienes tu recompensa: <a:money:930397094924124180> ',
            'Felicidades por tu trabajo, te mereces esto: <a:money:930397094924124180> ',
            'Excelente trabajo crack, aquí tienes: <a:money:930397094924124180> ',
            'Por cuidar del server todo el día, te has ganado: <a:money:930397094924124180> ',
            'Gracias por usar mis comandos, aquí tienes buen terrícola: <a:money:930397094924124180> ',
            'Sin hacer nada, ya ganaste: <a:money:930397094924124180> ',
            'Ayudaste a configurar un bot y obtuviste: <a:money:930397094924124180> ',
            'Reparaste una avería en el servidor principal de discord y has conseguido: <a:money:930397094924124180> ',
            'Por tu fidelidad al servidor y al bot, has ganado: <a:money:930397094924124180> ',
            'Discord está premiando a sus usuarios, y te ha dado: <a:money:930397094924124180> '

        ]

        let buscarUsuario = await userSchema.findOne({ idusuario: message.author.id })
      
        let r = Math.floor(Math.random() * (1000 - 10) + 10)
      
        let ramdonw = w[Math.floor(Math.random()*w.length)]

        if(buscarUsuario){

            if(buscarUsuario.work > Date.now()) return message.reply({embeds: [
          
                new Discord.MessageEmbed()
                .setAuthor(message.author.tag, message.author.displayAvatarURL())
                .setThumbnail('https://media.discordapp.net/attachments/936039644959756319/936039755534172170/work.gif?width=360&height=300')
                .setColor('RED')
                .setDescription('<a:tiempogif:931434689481285662> | Puedes volver a trabajar en : '+((buscarUsuario.work - Date.now())/1000).toFixed()+' segundos')
          
            ]})

            try {

                let update = await userSchema.findOneAndUpdate({ idusuario: message.author.id },
                    {
                        dinero: buscarUsuario.dinero + r,
                        total: buscarUsuario.dinero + buscarUsuario.banco + r,
                        work: (Date.now()+(1000*60))
                    })

                update.save()
                
            } catch (error) {

                console.log('Error al actualizar dinero de work. Usuario: '+message.author.id+' - Error: '+error)
                
            }

        } else {

            let user = await userSchema.create({

                idusuario: message.author.id,
                username: message.author.username,
                dinero: r,
                total: r,
                work: (Date.now()+(1000*60))

            })

            user.save();
            console.log('Usuario Registrado ===> Id: '+ message.author.id + ' Username: ' + message.author.username)

        }

        const e = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setColor('GREEN')
        .setThumbnail('https://media.discordapp.net/attachments/936039644959756319/936039755534172170/work.gif?width=360&height=300')
        .setDescription(ramdonw + r)

        message.reply({ allowedMentions: { repliedUser: false}, embeds: [e]})

    }

}