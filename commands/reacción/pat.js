const star = require('star-labs')

let i = 'https://c.tenor.com/FLR3dFSlH1sAAAAC/bully-tierno.gif'
let f = 'No hay frase agregada'
let color = '#607D8B'
let marry = 'Soltero(a)'

module.exports =  {
    
    name: 'pat',
    aliases: ['acariciar','caricia'],
    description: '🤭 ¿Y esa caricia?.',
  
    async execute(client, message, args, Discord) { 

        let pat = star.pat()
        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));

        if (!img || img.id === message.author.id) return message.reply({embeds: [
        
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | Acaríciame <:esta:925931250303250512>`)
        ]})

        if (img.user.bot) return message.reply({ allowedMentions: { repliedUser: false }, embeds: [
        
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | ¡Qué lindo eres acariciando a un bot! <:nogarsias:932172183453712415>`)
      
        ]})

        let usuario2 = await client.db.get(`SELECT * FROM usuarios WHERE idusuario = ?`, img.id)
        let text 

        if(!usuario2){
 
            await client.db.run(
                `INSERT INTO usuarios (idusuario, nivel, exp, marry, rep, pat, hug, sape, color, frase, foto, dinero, banco, total, ck) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`, img.id, '0', '0', marry, '0', '0', '0', '0', color, f, i, '0', '0', '0', '0'
            )
            
            usuario2 = {idusuario: img.id, nivel: 0, exp: 0, marry: marry, rep: 0, pat: 0, hug: 0, sape: 0, color: color, frase: f, foto: i, dinero: 0, banco: 0, total: 0, ck: 0}

        }
    
        await client.db.run(`UPDATE usuarios SET pat=pat+? WHERE idusuario=?`, 1, img.id)

        if((usuario2.pat+1) === 1){
        
            text = '**'+(usuario2.pat+1)+'** caricia'
      
        } else{
        
            text = '**'+(usuario2.pat+1)+'** caricias'
      
        }
      
        const embed = new Discord.MessageEmbed()
        .setAuthor(`Midgard's Emotions`,message.guild.iconURL({ dynamic: true }))
        .setDescription(`**${message.author.username}** está acariciando a **${img.user.username}**. <a:gatoasomar:930399873113677834>\n<a:flechad:880330587678838784> *${img.user.username}* ha recibido ${text} en total.`)
        .setImage(pat)
        .setColor('RANDOM')
        .setTimestamp(new Date())
        .setFooter(`${message.guild.name}`,'https://media.discordapp.net/attachments/880312288593195028/904603928375726120/Midgard_GIF_AVATAR.gif');
      
        message.channel.send({ embeds: [embed] });

    }

}