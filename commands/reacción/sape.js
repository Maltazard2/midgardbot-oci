let i = 'https://c.tenor.com/FLR3dFSlH1sAAAAC/bully-tierno.gif'
let f = 'No hay frase agregada'
let color = '#607D8B'
let marry = 'Soltero(a)'

module.exports =  {
    
    name: 'sape',
    aliases: ['sapear'],
    description: '🤯 Dale un sape a alguien',
  
    async execute(client, message, args, Discord) { 

        var sape = [

            'https://media.discordapp.net/attachments/853500788848853002/873304385420148816/1.gif',
            'https://media.discordapp.net/attachments/853500788848853002/873304389463457832/2.gif',
            'https://media.discordapp.net/attachments/853500788848853002/873304401702428772/3.gif',
            'https://media.discordapp.net/attachments/853500788848853002/873304419318517760/4.gif',
            'https://media.discordapp.net/attachments/853500788848853002/873304426864070696/5.gif',
            'https://media.discordapp.net/attachments/853500788848853002/873304435005214750/6.gif',
            'https://media.discordapp.net/attachments/853500788848853002/873304443368660992/7.gif',
            'https://media.discordapp.net/attachments/853500788848853002/873304451107127296/8.gif',
            'https://media.discordapp.net/attachments/853500788848853002/873304465741070417/9.gif',
            'https://media.discordapp.net/attachments/853500788848853002/873304477149564959/10.gif',
            'https://media.discordapp.net/attachments/853500788848853002/873304488197386342/11.gif',
            'https://media.discordapp.net/attachments/853500788848853002/873304496304975882/12.gif',
            'https://media.discordapp.net/attachments/853500788848853002/873304508204220446/13.gif',
            'https://media.discordapp.net/attachments/853500788848853002/873304517469429790/14.gif',
            'https://media.discordapp.net/attachments/853500788848853002/873304527573500026/15.gif',
            'https://media.discordapp.net/attachments/853500788848853002/873304539527250001/16.gif',
            'https://media.discordapp.net/attachments/853500788848853002/873304550747025468/17.gif',
            'https://media.discordapp.net/attachments/853500788848853002/873304565611659324/18.gif',
            'https://media.discordapp.net/attachments/853500788848853002/873304575464075264/19.gif',
            'https://media.discordapp.net/attachments/853500788848853002/873304589179420683/20.gif',
            'https://thumbs.gfycat.com/FrighteningElaborateAustraliancurlew-size_restricted.gif'
        
        ]

        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
        let ramdonsape = sape[Math.floor(Math.random()*sape.length)]

        if (!img || img.id===message.author.id) return message.reply({embeds: [
          
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | ¿Te darías un autosape? <:procesando:932177969017925632>`)
        
        ]})

        if (img.user.bot) return message.channel.send({embeds: [
          new Discord.MessageEmbed()
          .setAuthor(message.author.tag, message.author.displayAvatarURL())
          .setColor('RED')
          .setDescription(`<a:Verify2:931463492677017650> | ¡Qué lindo eres sapeando a un bot! <:procesando:932177969017925632>`)
        ]})
  
        let usuario2 = await client.db.get(`SELECT * FROM usuarios WHERE idusuario = ?`, img.id)
        let text

        if(!usuario2){
 
          await client.db.run(
            `INSERT INTO usuarios (idusuario, nivel, exp, marry, rep, pat, hug, sape, color, frase, foto, dinero, banco, total, ck) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`, img.id, '0', '0', marry, '0', '0', '0', '0', color, f, i, '0', '0', '0', '0'
            )
          usuario2 = {idusuario: img.id, nivel: 0, exp: 0, marry: marry, rep: 0, pat: 0, hug: 0, sape: 0, color: color, frase: f, foto: i, dinero: 0, banco: 0, total: 0, ck: 0}

        }
    
        await client.db.run(`UPDATE usuarios SET sape=sape+? WHERE idusuario=?`, 1, img.id)
        
        if((usuario2.sape+1) === 1){
          text = '**'+(usuario2.sape+1)+'** sape'
        } else{
          text = '**'+(usuario2.sape+1)+'** sapes'
        }
          
        const embed = new Discord.MessageEmbed()
        .setAuthor(`Midgard's Love`,message.guild.iconURL({ dynamic: true }))
        //.setTitle('Imagen completa')
        .setDescription(`**${message.author.username}** le dió un sape a **${img.user.username}**. <:nojao:891551822387486721>\n<a:flechad:880330587678838784> *${img.user.username}* ha recibido ${text} en total.`)
        .setImage(ramdonsape)
        .setColor('RANDOM')
        .setTimestamp(new Date())
        .setFooter(`${message.guild.name}`,'https://media.discordapp.net/attachments/880312288593195028/904603928375726120/Midgard_GIF_AVATAR.gif');
        message.channel.send({ embeds: [embed] });

    }

}