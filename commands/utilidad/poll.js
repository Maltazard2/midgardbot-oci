const prefixSchema = require('../../models/serverSchema');
const { Permissions } = require('discord.js');

module.exports =  {
    
    name: 'poll',
    aliases: ['encuesta'],
    description: '📈 Realizar una encuesta con hasta 10 opciones.',
    category: 'Utilidad 💡',
    use: '<prefix>poll <pregunta> - <opción1> - <opción2> - [+opciones]',
    owner: false,
    vip: false,
    slash: true,
  
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

            console.log('Error al buscar Prefix en Servidor: '+ message.guild.id + ' - ' + error)
            prefix = process.env.PREFIX

        }

        if(!message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) return message.reply({ embeds: [

            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
            .setColor('RED')
            .setDescription('<a:Verify2:931463492677017650> | No tienes permisos para ejecutar este comando')
    
        ]}).then(m => setTimeout(() => m.delete(), 10000)).catch((e) => console.log('Error al enviar mensaje: '+e))
        
        if(!message.guild.me.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) return message.reply({ embeds: [

            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
            .setColor('RED')
            .setDescription('<a:Verify2:931463492677017650> | No tengo permiso para ejecutar este comando. Permiso faltante: MANAGE_MESSAGES (Gestionar Mensajes)')
    
        ]}).then(m => setTimeout(() => m.delete(), 10000)).catch((e) => console.log('Error al enviar mensaje: '+e))

        const split = args.join(' ').split('-');

        if(!split[0]) return message.reply({embeds: [
      
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
            .setColor('RED')
            .setDescription('<a:alerta:932374957206421614> `|` Ingrese una pregunta!\n\n Uso: `'+prefix+'poll pregunta - opción1 - opción2 - opción3 [opcional]... `')
    
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        if(!split[1]) return message.reply({embeds: [
      
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
            .setColor('RED')
            .setDescription('<a:alerta:932374957206421614> `|` Necesitas ingresar al menos 2 opciones!\n\n Uso: `'+prefix+'poll pregunta - opción1 - opción2 - opción3 [opcional]... `')
    
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        if(!split[2]) return message.reply({embeds: [
      
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
            .setColor('RED')
            .setDescription('<a:alerta:932374957206421614> `|` Necesitas ingresar al menos 2 opciones!\n\n Uso: `'+prefix+'poll pregunta - opción1 - opción2 - opción3 [opcional]... `')
    
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor({ name: `Encuesta realizada por: ${message.author.username}`, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
        .setTitle('**' + split[0] + '**')
        .addField('<a:uno:932368116749594674> **' + split[1] + '**', '..........')
        .addField('<a:dos:932368203458445362> **' + split[2] + '**', '..........')
        .setTimestamp(new Date())
        .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })

        if (split[3]) embed.addField('<a:tres:932368254335340614> **' + split[3] + '**', '..........');
        
        if (split[4]) embed.addField('<a:cuatro:932368291249397780> **' + split[4] + '**', '..........');
    
        if (split[5]) embed.addField('<a:cinco:932368321578426449> **' + split[5] + '**', '..........');
    
        if (split[6]) embed.addField('<a:seis:932368350187757671> **' + split[6] + '**', '..........');
    
        if (split[7]) embed.addField('<a:siete:932368376909693008> **' + split[7] + '**', '..........');
    
        if (split[8]) embed.addField('<a:ocho:932368405372223528> **' + split[8] + '**', '..........');
    
        if (split[9]) embed.addField('<a:nueve:932368436774981642> **' + split[9] + '**', '..........');

        if (split[10]) return message.reply({embeds: [
      
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
            .setColor('RED')
            .setDescription('<a:alerta:932374957206421614> `|` Demasiadas opciones. Solo puedes ingresar 9!')
    
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        setTimeout(() => message.delete(), 100)

        if (!split[3]){

            message.channel.send({ embeds: [embed] }).then(async function(message) {

                message.react('<a:uno:932368116749594674>').catch((e) => console.log('Error al enviar mensaje: '+e))
                message.react('<a:dos:932368203458445362>').catch((e) => console.log('Error al enviar mensaje: '+e))

            }).catch((e) => console.log('Error al enviar mensaje: '+e))

        } else if (!split[4]){

            message.channel.send({ embeds: [embed] }).then(async function(message) {

                message.react('<a:uno:932368116749594674>').catch((e) => console.log('Error al enviar mensaje: '+e))
                message.react('<a:dos:932368203458445362>').catch((e) => console.log('Error al enviar mensaje: '+e))
                message.react('<a:tres:932368254335340614>').catch((e) => console.log('Error al enviar mensaje: '+e))

            }).catch((e) => console.log('Error al enviar mensaje: '+e))

        } else if (!split[5]){

            message.channel.send({ embeds: [embed] }).then(async function(message) {

                message.react('<a:uno:932368116749594674>').catch((e) => console.log('Error al enviar mensaje: '+e))
                message.react('<a:dos:932368203458445362>').catch((e) => console.log('Error al enviar mensaje: '+e))
                message.react('<a:tres:932368254335340614>').catch((e) => console.log('Error al enviar mensaje: '+e))
                message.react('<a:cuatro:932368291249397780>').catch((e) => console.log('Error al enviar mensaje: '+e))

            }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        } else if (!split[6]){

            message.channel.send({ embeds: [embed] }).then(async function(message) {

                message.react('<a:uno:932368116749594674>').catch((e) => console.log('Error al enviar mensaje: '+e))
                message.react('<a:dos:932368203458445362>').catch((e) => console.log('Error al enviar mensaje: '+e))
                message.react('<a:tres:932368254335340614>').catch((e) => console.log('Error al enviar mensaje: '+e))
                message.react('<a:cuatro:932368291249397780>').catch((e) => console.log('Error al enviar mensaje: '+e))
                message.react('<a:cinco:932368321578426449>').catch((e) => console.log('Error al enviar mensaje: '+e))

            }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        } else if (!split[7]){

            message.channel.send({ embeds: [embed] }).then(async function(message) {

                message.react('<a:uno:932368116749594674>').catch((e) => console.log('Error al enviar mensaje: '+e))
                message.react('<a:dos:932368203458445362>').catch((e) => console.log('Error al enviar mensaje: '+e))
                message.react('<a:tres:932368254335340614>').catch((e) => console.log('Error al enviar mensaje: '+e))
                message.react('<a:cuatro:932368291249397780>').catch((e) => console.log('Error al enviar mensaje: '+e))
                message.react('<a:cinco:932368321578426449>').catch((e) => console.log('Error al enviar mensaje: '+e))
                message.react('<a:seis:932368350187757671>').catch((e) => console.log('Error al enviar mensaje: '+e))

            }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        } else if (!split[8]){

            message.channel.send({ embeds: [embed] }).then(async function(message) {

                message.react('<a:uno:932368116749594674>').catch((e) => console.log('Error al enviar mensaje: '+e))
                message.react('<a:dos:932368203458445362>').catch((e) => console.log('Error al enviar mensaje: '+e))
                message.react('<a:tres:932368254335340614>').catch((e) => console.log('Error al enviar mensaje: '+e))
                message.react('<a:cuatro:932368291249397780>').catch((e) => console.log('Error al enviar mensaje: '+e))
                message.react('<a:cinco:932368321578426449>').catch((e) => console.log('Error al enviar mensaje: '+e))
                message.react('<a:seis:932368350187757671>').catch((e) => console.log('Error al enviar mensaje: '+e))
                message.react('<a:siete:932368376909693008>').catch((e) => console.log('Error al enviar mensaje: '+e))

            }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        } else if (!split[9]){

            message.channel.send({ embeds: [embed] }).then(async function(message) {

                message.react('<a:uno:932368116749594674>').catch((e) => console.log('Error al enviar mensaje: '+e))
                message.react('<a:dos:932368203458445362>').catch((e) => console.log('Error al enviar mensaje: '+e))
                message.react('<a:tres:932368254335340614>').catch((e) => console.log('Error al enviar mensaje: '+e))
                message.react('<a:cuatro:932368291249397780>').catch((e) => console.log('Error al enviar mensaje: '+e))
                message.react('<a:cinco:932368321578426449>').catch((e) => console.log('Error al enviar mensaje: '+e))
                message.react('<a:seis:932368350187757671>').catch((e) => console.log('Error al enviar mensaje: '+e))
                message.react('<a:siete:932368376909693008>').catch((e) => console.log('Error al enviar mensaje: '+e))
                message.react('<a:ocho:932368405372223528>').catch((e) => console.log('Error al enviar mensaje: '+e))

            }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        } else if (!split[10]){

            message.channel.send({ embeds: [embed] }).then(async function(message) {

                message.react('<a:uno:932368116749594674>').catch((e) => console.log('Error al enviar mensaje: '+e))
                message.react('<a:dos:932368203458445362>').catch((e) => console.log('Error al enviar mensaje: '+e))
                message.react('<a:tres:932368254335340614>').catch((e) => console.log('Error al enviar mensaje: '+e))
                message.react('<a:cuatro:932368291249397780>').catch((e) => console.log('Error al enviar mensaje: '+e))
                message.react('<a:cinco:932368321578426449>').catch((e) => console.log('Error al enviar mensaje: '+e))
                message.react('<a:seis:932368350187757671>').catch((e) => console.log('Error al enviar mensaje: '+e))
                message.react('<a:siete:932368376909693008>').catch((e) => console.log('Error al enviar mensaje: '+e))
                message.react('<a:ocho:932368405372223528>').catch((e) => console.log('Error al enviar mensaje: '+e))
                message.react('<a:nueve:932368436774981642>').catch((e) => console.log('Error al enviar mensaje: '+e))

            }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        }

    }

}