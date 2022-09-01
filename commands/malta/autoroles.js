const { Permissions } = require('discord.js');

module.exports =  {
    
    name: 'autoroles',
    aliases: [],
    description: '💻 Actualización de comandos.',
    category: 'Programación 💻',
    use: '<prefix>autoroles <category>',
    owner: true,
    vip: false,
    slash: false,
  
    async execute(client, message, args, Discord) {

      let id = ['753435606410985573','683501310527668228']
  
      if(!id.some(id => message.author.id == id)) return 

      setTimeout(() => message.delete(), 1000)

      let auto = args[0]

      if(!auto) return message.channel.send({embeds: [
       
        new Discord.MessageEmbed()
        .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
        .setColor('RED')
        .setDescription('<a:Verify2:931463492677017650> | ¡Debes agregar un argumento!\n\nOpciones válidas: `g` `e` `p` `n` `a`')
  
      ]}).then((m) => setTimeout(() => m.delete(), 10000)).catch((e) => console.log('Error al enviar mensaje: '+e))
      
      const embed = new Discord.MessageEmbed()
      .setThumbnail('https://i.imgur.com/JUpDHA8.gif')
      .setColor("RANDOM")
      .setFooter({ text: '!capply Midgard', iconURL: client.user.displayAvatarURL({ dynamic: true }).replace('webp','png') })
        
      if (auto.toLowerCase() === 'g'){
      
        embed.setAuthor({ name: `𝗚𝗲́𝗻𝗲𝗿𝗼`, iconURL: message.guild.iconURL({ dynamic: true }).replace('webp','png') })
        embed.setTitle(`Reacciona según tu género:`)
        embed.setDescription(`\n\n 💡 *¿Cómo te identificas?* 💡\n
          👦 <a:flechad:880330587678838784> <@&816140766345953300>\n\n
          👧 <a:flechad:880330587678838784> <@&816141138922307594>\n\n
          🏳️‍🌈 <a:flechad:880330587678838784> <@&816141333180842007>\n\n`)
        embed.setImage('https://images-ext-2.discordapp.net/external/jWGnzp-_kMuK_h_7svc5EVVuafKyCE48-bvJK5fggKw/%3Fwidth%3D562%26height%3D562/https/images-ext-1.discordapp.net/external/tnCC5EhfePEKIobserftTKZfjP9giUm9b5RFw53vPYM/https/static.wixstatic.com/media/b595a3_14d84be3a50f4c2c9fe72be39edef819~mv2.gif?width=450&height=450')
            
      }

      if (auto.toLowerCase() === 'e'){
      
        embed.setAuthor({ name: `𝗘𝗱𝗮𝗱`, iconURL: message.guild.iconURL({ dynamic: true }).replace('webp','png') })
        embed.setTitle(`Reacciona según tu edad:`)
        embed.setDescription(`\n\n 🥱 *¿Legal o Ilegal?* 🥵\n
          🔞 <a:flechad:880330587678838784> <@&816168012335022100>\n\n
          😈 <a:flechad:880330587678838784> <@&816167169477312542>\n\n`)
        embed.setImage('https://images-ext-2.discordapp.net/external/d2pb0CbJdkBTXK8diIE11-HbEjCGCJVuDRM94EbT2xQ/%3Fwidth%3D432%26height%3D227/https/images-ext-2.discordapp.net/external/nRu05pX3UQJa5pvw1X7RAkv6ZNPJ-hqQKEt2dNYTPd4/https/i.gifer.com/fxt5.gif?width=346&height=182')
            
      }

      if (auto.toLowerCase() === 'p'){
      
        embed.setAuthor({ name: `𝗣𝗮𝗶́𝘀`, iconURL: message.guild.iconURL({ dynamic: true }).replace('webp','png') })
        embed.setTitle(`Reacciona según tu país:`)
        embed.setDescription(`\n\n 🌎 *Puedes elegir más de 1...* 🌎\n
        🇦🇷 <a:flechad:880330587678838784> <@&816176071661191208>\n\n
        🇧🇴 <a:flechad:880330587678838784> <@&976349115489320970>\n\n
        🇧🇷 <a:flechad:880330587678838784> <@&880372263445200906>\n\n
        🇨🇱 <a:flechad:880330587678838784> <@&816174936070160384>\n\n
        🇨🇴 <a:flechad:880330587678838784> <@&816174999219208202>\n\n
        🇨🇷 <a:flechad:880330587678838784> <@&816174581861449758>\n\n
        🇪🇨 <a:flechad:880330587678838784> <@&816177046697934880>\n\n
        🇸🇻 <a:flechad:880330587678838784> <@&880373978517106689>\n\n
        🇪🇸 <a:flechad:880330587678838784> <@&880281489240100896>\n\n
        🇺🇸 <a:flechad:880330587678838784> <@&880372376611733514>\n\n
        🇬🇹 <a:flechad:880330587678838784> <@&816174669811286041>\n\n
        🇭🇳 <a:flechad:880330587678838784> <@&816174284393152522>\n\n
        🇲🇽 <a:flechad:880330587678838784> <@&880311276503449631>\n\n
        🇵🇦 <a:flechad:880330587678838784> <@&880436609286287420>\n\n
        🇵🇾 <a:flechad:880330587678838784> <@&880372257476722728>\n\n
        🇵🇪 <a:flechad:880330587678838784> <@&816174082432303125>\n\n
        🇵🇷 <a:flechad:880330587678838784> <@&880375260120223807>\n\n
        🇩🇴 <a:flechad:880330587678838784> <@&880375722869411840>\n\n
        🇺🇾 <a:flechad:880330587678838784> <@&816176187504197662>\n\n
        🇻🇪 <a:flechad:880330587678838784> <@&816174760131952680>\n\n`)
        embed.setImage('https://images-ext-2.discordapp.net/external/iYRJjc56RMtN2RT8BObhMa4odkXJ5igZIoNAPYXJzDE/%3Fwidth%3D518%26height%3D294/https/images-ext-2.discordapp.net/external/bhY7Uhw-axRgouddTIpNW9UlECUhr0jpy-sB_w_sTKQ/%253Fwidth%253D576%2526height%253D327/https/media.discordapp.net/attachments/840161683732693033/880296992289484861/Ataques-mundiales.gif?width=414&height=235')
            
      }

      if (auto.toLowerCase() === 'n'){
      
        embed.setAuthor({ name: `𝗡𝗲𝗸𝗼𝗻𝗼𝗺𝗶́𝗮`, iconURL: message.guild.iconURL({ dynamic: true }).replace('webp','png') })
        embed.setTitle(`Reacciona según tu preferencia:`)
        embed.setDescription(`\n\n <a:fijadito:931432134797848607> \n
          🌸 <a:flechad:880330587678838784> <@&897701707847434240>\n\n
          🤝 <a:flechad:880330587678838784> <@&976343837670785056>\n\n
          ⛩️ <a:flechad:880330587678838784> <@&897701882158530590>\n\n
          🗼 <a:flechad:880330587678838784> <@&960987738553868348>\n\n
          🎁 <a:flechad:880330587678838784> <@&897701860176166912>\n\n
          🎡 <a:flechad:880330587678838784> <@&976343822105731122>\n\n
          🎟️ <a:flechad:880330587678838784> <@&962780818684674148>\n\n
          📈 <a:flechad:880330587678838784> <@&962789174275104839>\n\n`)
        embed.setImage('https://blogs.unitec.mx/content/dam/blogs/imagenes/corp_samara/finazas-economia-quieres-ser-un-john-law-1.gif')
            
      }

      if (auto.toLowerCase() === 'a'){
      
        embed.setAuthor({ name: `𝗔𝗰𝘁𝗶𝘃𝗶𝗱𝗮𝗱𝗲𝘀`, iconURL: message.guild.iconURL({ dynamic: true }).replace('webp','png') })
        embed.setTitle(`Reacciona según tu gusto:`)
        embed.setDescription(`\n\n 🔥 *Adicionales a Nekotina* 🔥 \n
          🎉 <a:flechad:880330587678838784> <@&880949612175843358>\n\n
          🎧 <a:flechad:880330587678838784> <@&883438018009124959>\n\n
          🎤 <a:flechad:880330587678838784> <@&883435087952248952>\n\n
          🎥 <a:flechad:880330587678838784> <@&816465728336691275>\n\n
          🎰 <a:flechad:880330587678838784> <@&897933020361818133>\n\n
          💰 <a:flechad:880330587678838784> <@&897933095720878080>\n\n`)
        embed.setImage('https://images-ext-1.discordapp.net/external/SHUVHAaDdmIAvjWSC5NY0wiC5JcHk-zvv0Ey7a4EPmk/%3Fwidth%3D538%26height%3D403/https/media.discordapp.net/attachments/879633476532453386/883455087295483964/mp4.gif?width=430&height=322')
            
      }
      
      message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
      message.channel.send('https://images-ext-2.discordapp.net/external/9iPHKFXXnKKSQpcFazlW79dr1zbbtdo7QT7-xxtfDY4/%3Fwidth%3D600%26height%3D86/https/media.discordapp.net/attachments/897951731462316073/915663567213199390/bar-1.gif?width=450&height=65').catch((e) => console.log('Error al enviar mensaje: '+e))
         
    }

}