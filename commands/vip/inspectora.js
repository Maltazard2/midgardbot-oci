module.exports =  {
    
    name: 'inspectora',
    aliases: ['inspeccciones','inspeccionar','inspección','inspeccion'],
    description: '👓 Revisa tus niveles según Inspectora',
  
    async execute(client, message, args, Discord) { 

        let id = ['753435606410985573','683501310527668228']

        if(!id.some(id => message.author.id == id)) return message.reply('<a:ayajasisi:945203356140441650>')

        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0])) || message.author
        
        var extra = [
            
            'Hot **24/7** 🥵',
            'Pendejitis aguda',
            'Creyó en su ex 🤡',
            'Es la **perfección**',
            'Huele a obo 🤢',
            '**No** se baña',
            'Puro meco le hace caso 🤠',
            'Se cree un **monumento** 🐸',
            'Llora por todo',
            '**Re simp** 🥺',
            '🌺 Huele a flores',
            'Le gusta la **pizza con piña** 🤮',
            'Drama **24/7**',
            'Toma puro FourLoko 🥴',
            'Le gustan los 🌿 marihuanos',
            'Puro **naik** pirata 🌝',
            'Perreo **24/7** 😈',
            'Ya duérmete mejor',
            'Fuma puro 🚬 pallmall de pepino 🥒',
            '**Tú que wey?**',
            'Lame botas 👢 le llaman',
            '*Indescriptible*… aun procesando ⚙️',
            'Hijit@ de mami 🥺',
            'Hijit@ de papi 🐣',
            'Hijit@ de mami 🐣',
            'Hijit@ de papi 🥺',
            'Muy hot 🔥 para calcular',
            'Huele a podrido 🤢',
            'Se cree la verga 🤡….. ||no lo es||',
           
        ]

        var perreo = [
            
            '😮‍💨 Aún ni empieza y ya se cansó',
            'Si baja 😈 si baja mami si baja <a:alienperreo:924448985358405664>',
            'Hasta el **suelo** <a:Perreo:931729624336044112>',
            'Pobre, le duele la rodilla <:Ni_modeitor:897241332546936832>',
            'Hasta que el diablo 😈 te chupe 👅 el c*lo 🍑',
            'Ni lo mueve <a:ayajasisi:890684634369777724>', 
           
        ]

        let fidelidad = Math.floor(Math.random() * 101)
        let lealtad = Math.floor(Math.random() * 101)
        let sinceridad = Math.floor(Math.random() * 101)
        let lindura = Math.floor(Math.random() * 101)
        let enojo = Math.floor(Math.random() * 101)
        let drama = Math.floor(Math.random() * 101)
        let toxicidad = Math.floor(Math.random() * 101)

        let ramdonextra = extra[Math.floor(Math.random()*extra.length)]
        let ramdonperreo = perreo[Math.floor(Math.random()*perreo.length)]
    
        const embed = new Discord.MessageEmbed()
        .setAuthor({ name: `Midgard's Inspecciones 📊`, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
        .setTitle('Inspección realizada con éxito 🧬')
        .setThumbnail(img.displayAvatarURL({ dynamic: true , size: 2048 }).replace('webp','png'))
        .setDescription(`Según ***Inspectora*** <a:ayajasisi:945203356140441650>, los niveles de personalidad de <@${img.id}> son los siguientes: `)
        .addField('\u200B','\u200B')
        .addField('<:FLORK_awwww:956313333454225468> Nivel de Fidelidad:','<a:flech:931432469935312937> ' + fidelidad + '%', false)
        .addField('<:FLORK_tomabb:956313869872144384> Nivel de Lealtad:','<a:flech:931432469935312937> ' + lealtad + '%', false)
        .addField('<:Para_ti_tambien:897241426021208065> Nivel de Sinceridad:','<a:flech:931432469935312937> ' + sinceridad + '%', false)
        .addField('<:abby:880300168514252811> Nivel de Lindura:','<a:flech:931432469935312937> ' + lindura + '%', false)
        .addField('<a:burbujagruona:951253257332867093> Nivel de Enojo:','<a:flech:931432469935312937> ' + enojo + '%', false)
        .addField('<a:ositollora:957143430625116160> Nivel de Drama:','<a:flech:931432469935312937> ' + drama + '%', false)
        .addField('<:tueresmio:906776220606283776> Nivel de Toxicidad:','<a:flech:931432469935312937> ' + toxicidad + '%', false)
        .addField('<a:Perreito:931724729100943500> Nivel de Perreo:','<a:flech:931432469935312937> ' + ramdonperreo, false)
        .addField('\u200B','\u200B')
        .addField('Información extra:', '> ' + ramdonextra )
        .setImage('https://i.imgur.com/8ptOou8.gif')
        .setColor('RANDOM')
        .setTimestamp(new Date())
        .setFooter({ text: message.guild.name, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : client.user.avatarURL({ dynamic: true }) })

       
        message.reply({ allowedMentions: { repliedUser: false }, embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

    }

}