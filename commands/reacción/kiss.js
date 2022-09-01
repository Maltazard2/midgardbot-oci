const { Collection } = require('mongoose');
const kissSchema = require('../../models/kissSchema');

module.exports =  {
    
    name: 'kiss',
    aliases: ['besar','beso'],
    description: '😘 Da un beso a un miembro del servidor.',
    category: 'Reacción 😎',
    use: '<prefix>kiss <@user/id>',
    owner: false,
    vip: false,
    slash: false,
  
    async execute(client, message, args, Discord) { 

        var kiss = [
            
            'https://i.imgur.com/7GtNFkV.gif',
            'https://i.imgur.com/SgP16nT.gif',
            'https://i.imgur.com/akJqZdV.gif',
            'https://i.imgur.com/89n2FkO.gif',
            'https://i.imgur.com/pVItRd8.gif',
            'https://i.imgur.com/5QkoR5s.gif',
            'https://i.imgur.com/MH8AIBG.gif',
            'https://i.imgur.com/WhTLezK.gif',
            'https://i.imgur.com/LOtX2Yc.gif',
            'https://i.imgur.com/LR69VE4.gif',
            'https://i.imgur.com/JAtWMD7.gif',
            'https://i.imgur.com/prKhHyM.gif',
            'https://i.imgur.com/q6evKbJ.gif',
            'https://i.imgur.com/SftEAkF.gif',
            'https://i.imgur.com/c3qGzgn.gif',
            'https://i.imgur.com/Ad691aB.gif',
            'https://i.imgur.com/vm8HPUq.gif',
            'https://i.imgur.com/RxdttXa.gif',
            'https://i.imgur.com/RSBARcb.gif',
            'https://i.imgur.com/V9ez4IJ.gif',
            'https://i.imgur.com/RF10ZLB.gif',
            'https://i.imgur.com/h7L2l0T.gif',
            'https://i.imgur.com/tKcUdNy.gif',
            'https://i.imgur.com/WdIPLc7.gif',
            'https://i.imgur.com/l1aCJYt.gif',
            'https://i.imgur.com/ZaeeqMi.gif',
            'https://i.imgur.com/55WgQPg.gif',
            'https://i.imgur.com/dkCbVr2.gif',
            'https://i.imgur.com/1rNwebi.gif',
            'https://i.imgur.com/q2yBJrb.gif',
            'https://i.imgur.com/z3Is6LN.gif',
            'https://i.imgur.com/K28GHZk.gif',
            'https://i.imgur.com/gUc0E90.gif',
            'https://i.imgur.com/1NE4s9h.gif',
            'https://i.imgur.com/zljbhLH.gif',
            'https://i.imgur.com/OGt2qwV.gif',
            'https://i.imgur.com/ZntRNbe.gif',
            'https://i.imgur.com/8aWbeyY.gif',
            'https://i.imgur.com/sPlMEtv.gif',
            'https://i.imgur.com/2HnFuFU.gif',
            'https://i.imgur.com/n5wPmJy.gif',
            'https://i.imgur.com/XLvynuC.gif',
            'https://i.imgur.com/U7ECIPx.gif',
            'https://i.imgur.com/isNYE8Y.gif',
            'https://i.imgur.com/yr3dMWr.gif',
            'https://i.imgur.com/4QPcmyC.gif',
            'https://i.imgur.com/Amo8qAD.gif',
            'https://i.imgur.com/Rc4NPzX.gif',
            'https://i.imgur.com/4v5lwoT.gif',
            'https://i.imgur.com/xp88xs5.gif',
        
        ]

        let conteo, desc, consulta
        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
        let ramdonkiss = kiss[Math.floor(Math.random()*kiss.length)]

        if (!img || img.id === message.author.id) return message.reply({embeds: [
          
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | ¿Te besarías a ti mismo? <:burbujita:930399322183458867>`)
        
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        if (img.user.bot) return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
          
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | Gracias por ese beso! <:mmm:932177122968076338>`)
        
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        consulta = await kissSchema.findOne({u1: message.author.id, u2: img.id})
        
        if(!consulta){

            consulta = await kissSchema.findOne({u1: img.id, u2: message.author.id})

            while(!consulta){

                let tkiss = await kissSchema.create({

                    u1: img.id,
                    u2: message.author.id,
                    c: 0

                })

                tkiss.save()
            
                consulta = await kissSchema.findOne({u1: img.id, u2: message.author.id})

            } 
            
            let update = await kissSchema.findOneAndUpdate({u1: img.id, u2: message.author.id},
                {

                    c: consulta.c + 1

                })

            update.save()
      
            conteo = consulta.c + 1

        } else {

            try {

                let update = await kissSchema.findOneAndUpdate({u1: message.author.id, u2: img.id},
                    {
    
                        c: consulta.c + 1
    
                    })
            
                update.save()

                conteo = consulta.c + 1
              
            } catch (error) {
                
                console.log('No se actualizó la tabla kiss por el error: '+error)

            }

        }

        if(conteo === 1){
          
            conteo ='**'+conteo+'** vez.'
            desc = '¡Su primer Beso! <:abby:931432327354155038>'
        
        } else {
          
            if(conteo <= 10){

                desc = '¡Que ternurita! <:tierno:931433334960160799> Van **' + conteo + '**, pero ustedes pueden más!'

            } else if(conteo > 10 && conteo <= 20){

                desc = '¡Algo lindo se está formando entre esta parejita! <:anotanding:936028237404962836> Ya tienen **' + conteo + '** besos acumulados.'

            } else if(conteo > 20 && conteo <= 50){

                desc = '¡Vaya vaya, pero que tenemos aquí! Tienen **' + conteo + '** ósculos y creo que van por más. <:burbujita:930399322183458867>'

            } else if(conteo > 50 && conteo <= 100){

                desc = '¡Que barbaridad! Esta pareja si promete... ya tienen **' + conteo + '** y quién sabe si algo más en interno <a:sabroso:932177227792146433>'

            } else if(conteo > 100 && conteo <= 200){

                desc = '¡Madre mía, Willy! Acumulan **' + conteo + '** y continúan subiendo... algo me dice que quieren el TOP <a:ayajasisi:945203356140441650>'

            } else if(conteo > 200 && conteo <= 500){

                desc = '¡Estoy más sorprendido que ellos! Son **' + conteo + '** y si no me equivoco, tienen el TOP <a:ositovino:932917500218339379>'

            } else if(conteo > 500){

                desc = '¡Nunca había llegado tan lejos! En serio tienen **' + conteo + '**? Ya denle un premio a esta pareja! <:shylove:931432905421520927>'

            }
        
        }

        console.log('Kiss : ' + ramdonkiss)

        while (!ramdonkiss || ramdonkiss === null || ramdonkiss === '' || ramdonkiss === undefined) {
            
            ramdonkiss = kiss[Math.floor(Math.random()*kiss.length)]
            
        }
        
        console.log('Kiss : ' + ramdonkiss)

        const embed = new Discord.MessageEmbed()
        .setAuthor({ name: `Midgard's Love 💞`, iconURL: client.user.avatarURL({ dynamic: true }) })
        .setDescription(`**${message.author.username}** le dió un beso a **${img.user.username}**. <:GatoLove:925929538863628318>`)
        .addField('<a:Besitos:939793778829586442> Total de Besos:','> ' + desc)
        .setImage(ramdonkiss)
        .setColor('RANDOM')
        .setTimestamp(new Date())
        .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })
  
        message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

    }

}