module.exports = { 

  name: 'stats',
  aliases: ['estadística','info','estadistica','bot'],
  description: '📊 Muestra la información y el estado del bot.',

  async execute(client, message, args, Discord) {

    const moment = require('moment');
    require('moment-duration-format');
    moment.locale('es');
  
    const actividad = moment.duration(client.uptime).format(' D [dias], H [hrs], m [mins], s [segs]');

    let datosc = []
    let datoss = []

    const comandossize = client.commands.map(n => n.name)
    const scomandossize = client.slash.map(n => n.name)
    
    for(let ls of comandossize){

      datosc.push('**' + ls+ '**')
      
    }
    
    for(let ls of scomandossize){

      datoss.push('**' + ls+ '**')
      
    }
    /*if(comandossize)
    {
      datosc.push(comandossize)
    }*/

    //console.log('Comandos: '+datosc.join('\n')+' - Tamaño: '+datosc.length)

    const embed = new Discord.MessageEmbed()
    .setThumbnail('https://i.imgur.com/Uq0IPAU.gif')
    .setAuthor({ name: 'MidgardBot', iconURL: client.user.avatarURL({ dynamic: true }) })
    .setTitle('Estadísticas')
    .addField('Desarrollador: ', 'Maltazard#1207')
    .addField('Nacimiento: ', '' + moment(client.user.createdAt.toLocaleString()).utcOffset(-5).format("dddd, DD MMMM YYYY, hh:mm:ss:SS a"))
    .addField(`Comandos de Prefix [ - ]:`, ''+(datosc.length ? datosc.length : '0'))
    .addField(`Slash Commands:`, ''+(datoss.length ? datoss.length : '0'))
    .addField('Lenguaje: ', 'JavaScript')
    .addField(`Versión:`, `1.2.1`)
    .addField(`Librería:`, Discord.version ? Discord.version : '13.6.0')
    .addField('RAM: ', ` ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`)
    .addField(`Actividad:`, `${actividad}`)
    .addField('Servidores: ', `${client.guilds.cache.size}`)
    .addField('Usuarios: ', ` ${client.users.cache.size}`)
    .addField(`Canales`, `${client.channels.cache.size}`)
    .setColor('RANDOM')
    .setTimestamp(new Date())
    .setFooter({ text: `Malta's Bot`, iconURL: `${message.author.displayAvatarURL({ dynamic: true })}` })
            
    message.reply({ allowedMentions: { repliedUser: false}, embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

  }
  
}