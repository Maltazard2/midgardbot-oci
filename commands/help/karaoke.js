const prefixSchema = require('../../models/serverSchema');

module.exports =  {
    
    name: 'karaoke',
    aliases: ['help karaoke','help-karaoke'],
    description: '❗ Comandos para la categoría de Karaoke',
    category: 'Ayuda 💌',
    use: '<prefix>karaoke',
    owner: true,
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

        const embed = new Discord.MessageEmbed()
        .setThumbnail('https://i.imgur.com/ibDS99M.gif')
        .setAuthor({ name: `Midgard's Karaoke`, iconURL: 'https://i.imgur.com/Bkvm8wy.gif' })
        .setTitle('Comandos:')
        .setDescription(`Se utilizan sólo en: ${client.channels.cache.get('880317466557952000')}`)
        .addField('Agregar a la Lista:', '`'+prefix+'k` `'+prefix+'k <@user>`')
        .addField('Quitar de la Lista', '`'+prefix+'d` `'+prefix+'d <@user>`')
        .addField('Ver Lista', '`'+prefix+'lista`')
        .addField('Reiniciar lista', '`'+prefix+'dall`')
        .setColor('RANDOM')
        .setTimestamp(new Date())
        .setFooter({ text: `🔥 La Élite 🔥`, iconURL: `${message.author.displayAvatarURL({ dynamic: true})}` })
            
        message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

    }

}