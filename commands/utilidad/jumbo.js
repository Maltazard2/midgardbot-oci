const { Permissions } = require('discord.js');
const prefixSchema = require('../../models/serverSchema');

module.exports =  {
    
    name: 'jumbo',
    aliases: ['jb','emoji'],
    description: '👀 Ver en grande un emoji.',
    category: 'Utilidad 💡',
    use: '<prefix>jumbo <emoji> [-s]',
    owner: false,
    vip: false,
    slash: false,
  
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

        console.log('Error al Prefix en Servidor: '+ message.guild.id + ' - ' + error)
        prefix = process.env.PREFIX

      }

        if(!args[0]) return message.reply({ allowedMentions: { repliedUser: false}, embeds: [

            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | Uso incorrecto del comando\nDebe ser: ${prefix}jumbo <emoji> \n*Si quieres añadirlo al servidor añade --s al final*`)
    
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e)) 
            
        const emoticon = require('discord.js').Util.parseEmoji(args[0]) // Usaremos el metodo que nos da discord.js para obtener info del emoji
              
        if(emoticon.id === null) return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
              
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | Emoji inválido!!!`)
    
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
            
        let palta = `https://cdn.discordapp.com/emojis/` + `${emoticon.id}.` + (emoticon.animated ? 'gif' : 'png') // Conseguimos el url 
              
        if(message.content.endsWith('--s')) { // Si termina con --s
            
            if(!message.member.permissions.has(Permissions.FLAGS.MANAGE_EMOJIS_AND_STICKERS)) return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
                
              new Discord.MessageEmbed()
              .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
              .setColor('RED')
              .setDescription(`<a:Verify2:931463492677017650> | No tienes permisos para agregar emojis!!!`)
    
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
            
            if(!message.guild.me.permissions.has(Permissions.FLAGS.MANAGE_EMOJIS_AND_STICKERS)) return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
                
              new Discord.MessageEmbed()
              .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
              .setColor('RED')
              .setDescription(`<a:Verify2:931463492677017650> | No tengo los permisos para agregar emojis!!!`)
    
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

            const emojis = message.guild.emojis.cache.size;
    
            if(emojis === 500) return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
                
              new Discord.MessageEmbed()
              .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
              .setColor('RED')
              .setDescription(`<a:Verify2:931463492677017650> | No hay espacio suficiente para agregar el emoji!!!`)
    
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
    
            try {
    
              message.guild.emojis.create(palta, emoticon.name)
              .then(() => {

                return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
              
                  new Discord.MessageEmbed()
                  .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                  .setColor('GREEN')
                  .setDescription(`<a:Verify1:931463354357276742> |Emoji agregado correctamente : **`+ emoticon.name+'**')
                  .setTimestamp()
                  
                ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

              })
              .catch((e) => {

                console.log('Error al agregar emoji: '+e)

                return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
                
                  new Discord.MessageEmbed()
                  .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                  .setColor('RED')
                  .setDescription(`<a:Verify2:931463492677017650> | Ocurrió un error al agregar emoji!\n\n**Error:**\n> `+error)
        
                ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

              }) 
              
            } catch (error) {
                
              return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
                
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | Ocurrió un error al agregar emoji!\n\n**Error:**\n> `+error)
      
              ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
    
            }
              
        } else{

          message.channel.send(palta).catch((e) => console.log('Error al enviar mensaje: '+e))
        
        }
              
        
    }

}