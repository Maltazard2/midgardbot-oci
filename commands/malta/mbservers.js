module.exports =  {
    
    name: 'mbservers',
    aliases: ['mbs'],
    description: '💻 Comprueba en qué servidores está el bot.',
    category: 'Programación 💻',
    use: '<prefix>mbs',
    owner: true,
    vip: false,
    slash: false,

    async execute(client, message, args, Discord) {
    
        let id = ['753435606410985573','683501310527668228']

        if(!id.some(id => message.author.id == id)) {
      
            const embed = new Discord.MessageEmbed()
            .setDescription('Solo los admins del bot puede usar este comando.')
            .setColor('RED')
            
            return message.reply({ embeds: [embed] })
            .then(m => setTimeout(() => m.delete(), 5000)).catch((e) => console.log('Error al enviar mensaje: '+e))

        } else {

            const embed = new Discord.MessageEmbed()
            .setThumbnail('https://i.imgur.com/Uq0IPAU.gif')
            .setAuthor({ name: 'MidgardBot', iconURL: client.user.avatarURL({ dynamic: true}) })
            .setTitle('🚧  Lista actual de servidores  🚧')
            .setDescription('***Desarrollador : ↴***\n\n```Fui creado y programado única y exclusivamente por 💻Maltazard💻#2608```\n\n***Patrocinadores : ↴***\n\n```Vivo gracias a la manutención exclusiva de ✦ᴹᴳ| 𝑳𝒂 𝑰𝒏𝒔𝒑𝒆𝒄𝒕𝒐𝒓𝒂™#0001```\n\n***Usuarios : ↴***\n\n```Mis comandos son utilizados por '+client.users.cache.size+' usuarios.```\n\n***Servidores : ↴***\n\n```Actualmente estoy en '+client.guilds.cache.size+' servers.```\n\n')
            .addField('\u200B','\u200B')
            .addField('Nombre : ↴ ','``` - ' + client.guilds.cache.map(r => r.name).join(". \n - ")+'.```',true)
            .addField('Id : ↴ ','``` - ' + client.guilds.cache.map(r => r.id).join(". \n - ")+'.```',true)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `Nací para crecer`, iconURL: `${message.author.displayAvatarURL({ dynamic: true})}` })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
        
        }
    
    }

}