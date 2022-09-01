const star = require('star-labs')

const { Collection } = require('mongoose');
const userSchema = require('../../models/userSchema');

module.exports =  {
    
    name: 'pat',
    aliases: ['acariciar','caricia'],
    description: '🤭 ¿Y esa caricia?.',
    category: 'Reacción 😎',
    use: '<prefix>pat <@user/id>',
    owner: false,
    vip: false,
    slash: false,
  
    async execute(client, message, args, Discord) { 

        let pat = star.pat()
        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));

        if (!img || img.id === message.author.id) return message.reply({embeds: [
        
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | Acaríciame <:esta:925931250303250512>`)

        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        if (img.user.bot) return message.reply({ allowedMentions: { repliedUser: false }, embeds: [
        
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | ¡Qué lindo eres acariciando a un bot! <:nogarsias:932172183453712415>`)
      
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        let usuario2 = await userSchema.findOne({idusuario: img.id})
        let text 

        while (!usuario2) {
            
            let user = await userSchema.create({

                idusuario: img.id,
                username: img.username,

            })

            user.save();
            console.log('Usuario Registrado ===> Id: '+ img.id + ' Username: ' + img.username)

            usuario2 = await userSchema.findOne({idusuario: img.id})
            
        }
    
        let update = await userSchema.findOneAndUpdate({idusuario: img.id},
            {

                pat: usuario2.pat + 1
        
            });

        update.save()
        
        if((usuario2.pat + 1) === 1){
        
            text = '**'+(usuario2.pat + 1)+'** caricia'
      
        } else{
        
            text = '**'+(usuario2.pat + 1)+'** caricias'
      
        }
      
        while (!pat || pat === null || pat === '' || pat === undefined
        ) {
            
            pat = star.pat()

        }
        
        const embed = new Discord.MessageEmbed()
        .setAuthor({ name: `Midgard's Emotions 🤗`, iconURL: client.user.avatarURL({ dynamic: true }) })
        .setDescription(`**${message.author.username}** está acariciando a **${img.user.username}**. <a:gatoasomar:930399873113677834>\n<a:flechad:880330587678838784> *${img.user.username}* ha recibido ${text} en total.`)
        .setImage(pat)
        .setColor('RANDOM')
        .setTimestamp(new Date())
        .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })

        message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

    }

}