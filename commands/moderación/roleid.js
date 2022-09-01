const prefixSchema = require('../../models/serverSchema');

module.exports =  {
    
    name: 'roleid',
    aliases: ['role-id','info-role-id'],
    description: '🛑 Muestra la información de un rol del servidor.\n> Uso: [prefix]role <idrol>`',
    category: 'Moderación 🔒',
    use: '<prefix>roleid <idrole>',
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

        const boolean = {

            true: 'Si',
            false: 'No',

        }

        if(!args) return message.reply({ embeds: [

            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
            .setColor('RED')
            .setDescription('<a:Verify2:931463492677017650> | Escriba la id de un rol o menciónelo.\n> Uso: `'+prefix+'roleid <idrol>`')
    
        ]}).then(m => setTimeout(() => m.delete(), 5000)).catch((e) => console.log('Error al enviar mensaje: '+e))

        let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]);
    
        if(!role) return message.reply({ embeds: [

            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
            .setColor('RED')
            .setDescription('<a:Verify2:931463492677017650> | Rol no encontrado en el servidor. Escriba la id de un rol o menciónelo.')
    
        ]}).then(m => setTimeout(() => m.delete(), 5000)).catch((e) => console.log('Error al enviar mensaje: '+e))

        const embed = new Discord.MessageEmbed()
        .setAuthor({ name: `Solicitado por: ${message.author.username}`, iconURL: `${message.author.displayAvatarURL({ dynamic: true})}` })
        .setDescription('Información sobre el rol mencionado.')
        .setThumbnail(message.guild.bannerURL() ? message.guild.bannerURL({ dynamic: true, size: 4096 }).replace('webp','png') : 'https://i.imgur.com/0xgcf1W.gif')
        .addField('Nombre:', `<a:flech:931432469935312937> ${role.name}`) 
        .addField('ID:', `<a:flech:931432469935312937> ${role.id}`) 
        .addField('Miembros con el Rol:', `<a:flech:931432469935312937> ${role.members.size}`)
        .addField('Posición:', `<a:flech:931432469935312937> ${role.rawPosition}`) 
        .addField('HexColor:', `<a:flech:931432469935312937> ${role.hexColor}`)  
        .addField('¿Mencionable?:', `<a:flech:931432469935312937> `+boolean[role.mentionable])
        .addField('¿Separado?:', `<a:flech:931432469935312937> `+boolean[role.hoist])
        .addField('¿Gestionado por el sistema?:', `<a:flech:931432469935312937> `+boolean[role.managed]) 
        .setColor('RANDOM')
        .setTimestamp(new Date())
        .setFooter({ text: message.guild.name, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : client.user.avatarURL({ dynamic: true }) })
            
        /*let miembroroles = message.guild.roles.cache.get(role.id).members;
        message.channel.send(`Tienes a **${miembroroles.size}** miembro(s) con el rol **${args}**.`);*/
        
        message.reply({ allowedMentions: { repliedUser: false},embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

    }

}