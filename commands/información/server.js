module.exports = { 

    name: 'server',
    aliases: ['servidor','sv'],
    description: '🌎 Muestra la información del servidor donde se ejecuta el comando.',
    category: 'Información 📌',
    use: '<prefix>server',
    owner: false,
    vip: false,
    slash: false,
  
    async execute(client, message, args, Discord) {

        const moment = require('moment');
        require('moment-duration-format');

        const vl = {
            NONE: 'Ninguno',
            LOW: 'Bajo',
            MEDIUM: 'Medio',
            HIGH: 'Alto',
            VERY_HIGH: 'Muy Alto'
        };

        const regions = {
            brazil: 'Brasil',
            europe: 'Europa',
            hongkong: 'Hong Kong',
            india: 'India',
            japan: 'Japón',
            russia: 'Rusia',
            singapore: 'Singapur',
            southafrica: 'Sudáfrica',
            sydeny: 'Sídney',
            'us-central': 'US Central',
            'us-east': 'US East',
            'us-west': 'US West',
            'us-south': 'US South'
        };
    
        const nivel = {
            NONE: 'Ninguno',
            TIER_1: '1',
            TIER_2: '2',
            TIER_3: '3',
        };

        var server = message.guild;
        const roles = server.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
        const members = server.members.cache;
        const channels = server.channels.cache;
        const emojis = server.emojis.cache;
  
        const embed = new Discord.MessageEmbed()
        .setThumbnail(server.iconURL() ? server.iconURL({ dynamic: true }) : client.user.avatarURL({ dynamic: true }) )
        .setAuthor({ name: server.name, iconURL: client.user.avatarURL({ dynamic: true }) })
        .addField('ID:', server.id, false)
        .addField('Dueño:', `${(await server.fetchOwner()).user.tag} (${(await server.fetchOwner()).id})` , true)
        //.addField('Creado el:', server.createdAt, false)
        .addField('Creado el:', moment(server.createdTimestamp).utcOffset(-5).format('LL') + ' a las '+moment(server.createdTimestamp).utcOffset(-5).format('LT') + ' [' + moment(server.createdTimestamp).fromNow()+' ]', false)
        .addField('Miembros:', '<a:flech:931432469935312937> '+server.memberCount, true)
        //.addField('Region:', '<a:flech:931432469935312937> '+regions[server.region], false)
        .addField('Nivel:', '<a:flech:931432469935312937> '+nivel[server.premiumTier], true)
        //.addField('Nivel:', server.mfaLevel, false)
        .addField('Mejoras:', '<a:flech:931432469935312937> '+server.premiumSubscriptionCount || '0', false)
        .addField('Roles:', '<a:flech:931432469935312937> '+roles.length , true)
        .addField('Emojis:', '<a:flech:931432469935312937> '+emojis.size , false)
        .addField('Verificación:', '<a:flech:931432469935312937>' +vl[server.verificationLevel] , false)
        .addField('Canales de Texto:', '<a:flech:931432469935312937> '+channels.filter(channel => channel.type === 'GUILD_TEXT').size , true)
        .addField('Canales de Voz:', '<a:flech:931432469935312937> '+channels.filter(channel => channel.type === 'GUILD_VOICE').size , true)
        .setImage(server.bannerURL() ? server.bannerURL({ format: 'gif', size: 2048 }) : null)
        .setColor('RANDOM')
        .setTimestamp(new Date())
        .setFooter({ text: message.author.username+'#'+message.author.discriminator, iconURL: `${message.author.displayAvatarURL({ dynamic: true }).replace('webp','png')}` });

        message.reply({ allowedMentions: { repliedUser: false}, embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

    }

}