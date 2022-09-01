const Discord = require('discord.js');

module.exports = {

    name: 'server',
    description: '🌎 Muestra la información de este servidor.',
    options: [],

    run: async (client, interaction) => {
        
        const wait = require('util').promisify(setTimeout)

        try {

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

            var server = interaction.guild;
            const roles = server.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
            const members = server.members.cache;
            const channels = server.channels.cache;
            const emojis = server.emojis.cache;
  
            const embed = new Discord.MessageEmbed()
            .setThumbnail(server.iconURL() ? server.iconURL({ dynamic: true }) : client.user.avatarURL({ dynamic: true }) )
            .setAuthor({ name: server.name, iconURL: client.user.avatarURL() })
            .addField('ID:', server.id, false)
            .addField('Dueño:', `${(await server.fetchOwner()).user.tag} (${(await server.fetchOwner()).id})` , true)
            .addField('Creado el:', moment(server.createdTimestamp).format('LL') + ' a las '+moment(server.createdTimestamp).format('LT') + ' [' + moment(server.createdTimestamp).fromNow()+' ]', false)
            .addField('Miembros:', '<a:flech:931432469935312937> '+server.memberCount ? server.memberCount : '0', true)
            //.addField('Region:', '<a:flech:931432469935312937> '+regions[server.region], false)
            .addField('Nivel:', '<a:flech:931432469935312937> '+nivel[server.premiumTier], false)
            .addField('Mejoras:', '<a:flech:931432469935312937> '+server.premiumSubscriptionCount || '0', false)
            .addField('Roles:', '<a:flech:931432469935312937> '+roles.length , true)
            .addField('Emojis:', '<a:flech:931432469935312937> '+emojis.size , false)
            .addField('Verificación:', '<a:flech:931432469935312937>' +vl[server.verificationLevel] , false)
            .addField('Canales de Texto:', '<a:flech:931432469935312937> '+channels.filter(channel => channel.type === 'GUILD_TEXT').size , true)
            .addField('Canales de Voz:', '<a:flech:931432469935312937> '+channels.filter(channel => channel.type === 'GUILD_VOICE').size , true)
            .setImage(server.bannerURL() ? server.bannerURL({ dynamic: true, size: 4096 }).replace('webp','png') : null)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: interaction.user.username+'#'+interaction.user.discriminator, iconURL: `${interaction.user.displayAvatarURL({ dynamic: true }).replace('webp','png')}`}); 
            
            await interaction.deferReply().catch((e) => console.log('Error al usar slash commands: '+e))
            await wait(500).catch((e) => console.log('Error al usar slash commands: '+e))
            await interaction.editReply({ embeds: [embed] })  .catch((e) => console.log('Error al usar slash commands: '+e))

        } catch (error) {

            await interaction.deferReply().catch((e) => console.log('Error al usar slash commands: '+e))
            await wait(500).catch((e) => console.log('Error al usar slash commands: '+e))
            await interaction.editReply({ content: '<a:Verify2:931463492677017650> | ¡Ocurrió un error inesperado. Por favor, inténtelo de nuevo!', ephemeral: true}).catch((e) => console.log('Error al usar slash commands: '+e))
            
            console.log('Error en el SC server: '+error)

        }

    }

}