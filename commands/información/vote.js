const { MessageActionRow, MessageButton } = require('discord.js');

module.exports =  {
    
    name: 'vote',
    aliases: ['v'],
    description: '📩 Obtén el link de votación para el servidor en Top.gg.',
    category: 'Información 📌',
    use: '<prefix>vote',
    owner: true,
    vip: false,
    slash: true,
  
    async execute(client, message, args, Discord) {

        //const votado = await client.dbl.hasVoted(message.author.id)
        
        if(message.guild.id !== '777620055344545842') return

        const embed = new Discord.MessageEmbed()
        .setAuthor({ name: `Midgard's Staff`, iconURL: client.user.avatarURL({ dynamic: true }) })
        .setThumbnail('https://i.imgur.com/SoNWi4m.png')
        .setTitle('Vota por Nuestro Servidor <a:gatoasomar:930399873113677834>')
        .setDescription(`Estaremos eternamente agradecidos que votes por Midgard! <:abby:931432327354155038>`)
        .addField('Top.gg','[Click aquí para votar](https://top.gg/servers/777620055344545842/vote)\n\n',false)
        .addField('Recompensas por tu voto <a:corazon:930399275643453500>','Recibirás un Rol muy especial que te diferenciará de los demás:\n\n <a:dc_zFlecha3:880315279903703060> <@&886772939549184052> \n\nAdemás, este rol te dará una cierta cantidad de coins de nuestro casino cada cierto tiempo... \n\nDescúbrelo!!! <:tierno:931433334960160799>',true)
        .setColor('RANDOM')
        .setTimestamp(new Date())
        .setFooter({ text: `${message.guild.name}• Muchas gracias por tu voto!`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/MNWYvup.gif' })
      
        const row = new MessageActionRow()
        .addComponents(

            new MessageButton()
        
            .setLabel('VOTAR') 
            .setStyle('LINK') 
            .setURL('https://top.gg/servers/777620055344545842/vote') 

        );

        //if(!votado) 
        message.reply({ allowedMentions: { repliedUser: false}, embeds : [embed], components: [row] }).catch((e) => console.log('Error al enviar mensaje: '+e))

        // const embed2 = new Discord.MessageEmbed()
        // .setAuthor(`Midgard's Staff`,message.guild.iconURL({ dynamic: true }))
        // .setThumbnail('https://logos-marcas.com/wp-content/uploads/2020/12/Discord-Logo.png')
        // .setTitle('Ya has Votado por Nuestro Servidor <a:gatoasomar:930399873113677834>')
        // .setDescription(`Estamos eternamente agradecidos de que votes por Midgard! <:abby:931432327354155038>`)
        // .addField('Puedes volver a votar en:','time',false)
        // .addField('Recompensas por tu voto <a:corazon:930399275643453500>','Recibirás un Rol muy especial que te diferenciará de los demás:\n\n <a:dc_zFlecha3:880315279903703060> <@&886772939549184052> \n\nAdemás, este rol te dará una cierta cantidad de coins de nuestro casino cada cierto tiempo... \n\nDescúbrelo!!! <:tierno:931433334960160799>',true)
        // .setColor('RANDOM')
        // .setTimestamp(new Date())
        // .setFooter(`${message.guild.name}• Muchas gracias por tu voto!`,'https://media.discordapp.net/attachments/880312288593195028/904603928375726120/Midgard_GIF_AVATAR.gif');
        
        // message.reply({ embeds : [embed2] });
        
    }

}