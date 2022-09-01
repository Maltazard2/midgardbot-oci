const { Permissions } = require('discord.js');

module.exports =  {
    
    name: 'borradores',
    aliases: ['soloowner'],
    description: '💻 Actualización de comandos.',
  
    async execute(client, message, args, Discord) {

      let id = ['753435606410985573','683501310527668228']
  
      if(!id.some(id => message.author.id == id)) return 

        /*if (message.content.startsWith(prefix +"subasta")){

            let permiso = message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)
        
            let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
        
            if(!permiso) return message.channel.send("`Error` `|` No tienes Permisos para usar este comando.");
        
            const split = args.slice(0).join(" ").split(";");
            let n = split[1]
            let nombre = split[2]
            let edad = split[3]
            let pais = split[4]
            let signo = split[5]
            let hobbies = split[6]
            let desc = split[7]
            let imagen = split[8]
        
            if(!img) {
        
              message.channel.send("Debes mencionar al usuario!!!")
        
            } else {
              
              const embed = new Discord.MessageEmbed()
              .setThumbnail(`https://c.tenor.com/ckQhZxuDQj4AAAAC/bette-midler-adjudicado.gif`)
              .setAuthor(`🔥 La Élite 🔥`,"https://images-ext-2.discordapp.net/external/fZCHQ3Pm9458IJD8COr7CbKYPoy7SeP2s_ciYZrewGw/%3Fsize%3D2048/https/cdn.discordapp.com/icons/777620055344545842/a_d19d266fc1f7c19cc23ab0f874ebcd72.gif")
              .setTitle(`Soltero(a) N°: ${n}`)
              .addField('<a:diamante:887714567084449892> User: ', `${img}` , false)
              .addField('<a:diamante:887714567084449892> Nombre: ', `${nombre}` , false)
              .addField('<a:diamante:887714567084449892> Edad: ', `${edad}` , false)
              .addField('<a:diamante:887714567084449892> País: ', `${pais}` , false)
              .addField('<a:diamante:887714567084449892> Signo Zodiacal: ', `${signo}`, false)
              .addField('<a:diamante:887714567084449892> Hobbies: ', `${hobbies}`, false)
              .addField('<a:barracolor:930401303249698816><a:barracolor:930401303249698816><a:barracolor:930401303249698816><a:barracolor:930401303249698816><a:barracolor:930401303249698816><a:barracolor:930401303249698816>', `<a:fijadito:931432134797848607> ${desc}`, false)
              .setImage(imagen)
              .setColor("RANDOM")
              .setFooter(`${message.guild.name}⁞ Monto base: 500k 💰` ,"https://media.discordapp.net/attachments/880312288593195028/902270934499610704/Midgard_GIF_AVATAR.gif");
              message.channel.send({ embeds: [embed] });
              message.delete({timeout: 100})
            }
          }
      
          if (message.content.startsWith(prefix +"embed")){
      
            let permiso = message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)
        
            if(!permiso) return message.channel.send("`Error` `|` No tienes Permisos para usar este comando.");
        
            const split = args.slice(0).join(" ").split(";");
            let autor = split[0]
            let titulo = split[1]
            let desc = split[2]
            let f1 = split[3]
            let d1 = split[4]
            let f2 = split[5]
            let d2 = split[6]
            let f3 = split[7]
            let d3 = split[8]
            let imagen = split[9]
        
            
              const embed = new Discord.MessageEmbed()
              .setThumbnail(`https://images-ext-2.discordapp.net/external/oGzLI-594lkzq8oCTGuB2RSxumC-9E6m7oqLqOw2dJA/https/cdn.discordapp.com/emojis/897240681075060736.gif`)
              .setAuthor(`${autor}`,client.user.displayAvatarURL())
              .setTitle(`${titulo}`)
              .setDescription(`<a:fijadito:931432134797848607> ${desc}`)
              .addField(`<a:diamante:887714567084449892> ${f1}`, `${d1}` , false)
              .addField(`<a:diamante:887714567084449892> ${f2}`, `${d2}` , false)
              .addField(`<a:diamante:887714567084449892> ${f3}`, `${d3}` , false)
              .setColor("RANDOM")
              .setImage(imagen)
              .setFooter(`${message.guild.name}` ,"https://media.discordapp.net/attachments/880312288593195028/902270934499610704/Midgard_GIF_AVATAR.gif");
              message.channel.send({ embeds: [embed] });
              message.delete({timeout: 100})
            
          }
      
          if (message.content.startsWith(prefix +"emp")){
      
            let permiso = message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)
        
            if(!permiso) return message.channel.send("`Error` `|` No tienes Permisos para usar este comando.");
        
            const split = args.slice(0).join(" ").split(";");
            let autor = split[0]
            let titulo = split[1]
            let desc = split[2]
            let f1 = split[3]
            let d1 = split[4]
            let f2 = split[5]
            let d2 = split[6]
            let imagen = split[7]
        
            
              const embed = new Discord.MessageEmbed()
              .setThumbnail(`https://images-ext-2.discordapp.net/external/oGzLI-594lkzq8oCTGuB2RSxumC-9E6m7oqLqOw2dJA/https/cdn.discordapp.com/emojis/897240681075060736.gif`)
              .setAuthor(`${autor}`,client.user.displayAvatarURL())
              .setTitle(`${titulo}`)
              .setDescription(`<a:fijadito:931432134797848607> ${desc}`)
              .addField(`<a:diamante:887714567084449892> ${f1}`, `${d1}` , false)
              .addField(`<a:diamante:887714567084449892> ${f2}`, `${d2}` , false)
              .setColor("RANDOM")
              .setImage(imagen)
              .setFooter(`${message.guild.name}` ,"https://media.discordapp.net/attachments/880312288593195028/902270934499610704/Midgard_GIF_AVATAR.gif");
              message.channel.send({ embeds: [embed] });
              message.delete({timeout: 100})
            
          }
      
          if (message.content.startsWith(prefix +"emt")){
      
            let permiso = message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)
        
            if(!permiso) return message.channel.send("`Error` `|` No tienes Permisos para usar este comando.");
        
            const split = args.slice(0).join(" ").split(";");
            let autor = split[0]
            let titulo = split[1]
            let f1 = split[2]
            let d1 = split[3]
            let f2 = split[4]
            let d2 = split[5]
            let f3 = split[6]
            let d3 = split[7]
            let f4 = split[8]
            let d4 = split[9]
            let f5 = split[10]
            let d5 = split[11]
            let f6 = split[12]
            let d6 = split[13]
            let f7 = split[14]
            let d7 = split[15]
            let f8 = split[16]
            let d8 = split[17]
            let f9 = split[18]
            let d9 = split[19]
            let f10 = split[20]
            let d10 = split[21]
            let imagen = split[22]
        
            
              const embed = new Discord.MessageEmbed()
              .setThumbnail(`https://images-ext-2.discordapp.net/external/oGzLI-594lkzq8oCTGuB2RSxumC-9E6m7oqLqOw2dJA/https/cdn.discordapp.com/emojis/897240681075060736.gif`)
              .setAuthor(`${autor}`,client.user.displayAvatarURL())
              .setTitle(`${titulo}`)
              .setDescription(`<a:fijadito:931432134797848607>`)
              .addField(`<a:diamante:887714567084449892> ${f1}`, `${d1}` , false)
              .addField(`<a:diamante:887714567084449892> ${f2}`, `${d2}` , false)
              .addField(`<a:diamante:887714567084449892> ${f3}`, `${d3}` , false)
              .addField(`<a:diamante:887714567084449892> ${f4}`, `${d4}` , false)
              .addField(`<a:diamante:887714567084449892> ${f5}`, `${d5}` , false)
              .addField(`<a:diamante:887714567084449892> ${f6}`, `${d6}` , false)
              .addField(`<a:diamante:887714567084449892> ${f7}`, `${d7}` , false)
              .addField(`<a:diamante:887714567084449892> ${f8}`, `${d8}` , false)
              .addField(`<a:diamante:887714567084449892> ${f9}`, `${d9}` , false)
              .addField(`<a:diamante:887714567084449892> ${f10}`, `${d10}` , false)
              .setColor("RANDOM")
              .setImage(imagen)
              .setFooter(`${message.guild.name}` ,"https://media.discordapp.net/attachments/880312288593195028/902270934499610704/Midgard_GIF_AVATAR.gif");
              message.channel.send({ embeds: [embed] });
              message.delete({timeout: 100})
            
          }
      
          if (message.content.startsWith(prefix +"emc")){
      
            let permiso = message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)
        
            if(!permiso) return message.channel.send("`Error` `|` No tienes Permisos para usar este comando.");
        
            const split = args.slice(0).join(" ").split(";");
            let autor = split[0]
            let titulo = split[1]
            let f1 = split[2]
            let d1 = split[3]
            let f2 = split[4]
            let d2 = split[5]
            let f3 = split[6]
            let d3 = split[7]
            let imagen = split[8]
        
            
              const embed = new Discord.MessageEmbed()
              .setThumbnail(`https://images-ext-2.discordapp.net/external/oGzLI-594lkzq8oCTGuB2RSxumC-9E6m7oqLqOw2dJA/https/cdn.discordapp.com/emojis/897240681075060736.gif`)
              .setAuthor(`${autor}`,client.user.displayAvatarURL())
              .setTitle(`${titulo}`)
              .setDescription(`<a:fijadito:931432134797848607>`)
              .addField(`<a:diamante:887714567084449892> ${f1}`, `${d1}` , false)
              .addField(`<a:diamante:887714567084449892> ${f2}`, `${d2}` , false)
              .addField(`<a:diamante:887714567084449892> ${f3}`, `${d3}` , false)
              .setColor("RANDOM")
              .setImage(imagen)
              .setFooter(`${message.guild.name}` ,"https://media.discordapp.net/attachments/880312288593195028/902270934499610704/Midgard_GIF_AVATAR.gif");
              message.channel.send({ embeds: [embed] });
              message.delete({timeout: 100})
            
          }
      
          if (command === 'ems1'){
      
            let permiso = message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)
        
            if(!permiso) return message.channel.send("`Error` `|` No tienes Permisos para usar este comando.");
        
            const split = args.slice(0).join(" ").split(";");
            let autor = split[0]
            let titulo = split[1]
            let desc = split[2]
            let f1 = split[3]
            let d1 = split[4]
            let f2 = split[5]
            let d2 = split[6]
            let f3 = split[7]
            let d3 = split[8]
            let imagen = split[9]
        
            
              const embed = new Discord.MessageEmbed()
              .setThumbnail(`https://i.gifer.com/8AMQ.gif`)
              .setAuthor(`${autor}`,client.user.displayAvatarURL())
              .setTitle(`${titulo}`)
              .setDescription(`<a:diamante:887714567084449892> ${desc}`)
              .addField(`<a:fijadito:931432134797848607> ${f1}`, `${d1}` , false)
              .addField(`<a:fijadito:931432134797848607> ${f2}`, `${d2}` , false)
              .addField(`<a:fijadito:931432134797848607> ${f3}`, `${d3}` , false)
              .setColor("RANDOM")
              .setImage(imagen)
              .setFooter(`${message.guild.name}` ,"https://media.discordapp.net/attachments/880312288593195028/902270934499610704/Midgard_GIF_AVATAR.gif");
              message.channel.send({ embeds: [embed] });
              message.delete({timeout: 100})
            
          }
      
          if (command === 'ems2'){
      
            let permiso = message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)
        
            if(!permiso) return message.channel.send("`Error` `|` No tienes Permisos para usar este comando.");
        
            const split = args.slice(0).join(" ").split(";");
            let autor = split[0]
            let titulo = split[1]
            let f1 = split[2]
            let d1 = split[3]
            let f2 = split[4]
            let d2 = split[5]
            let f3 = split[6]
            let d3 = split[7]
            let d4 = split[8]
            let d5 = split[9]
            let imagen = split[10]
        
            
              const embed = new Discord.MessageEmbed()
              .setThumbnail(`https://i.gifer.com/8AMQ.gif`)
              .setAuthor(`${autor}`,client.user.displayAvatarURL())
              .setTitle(`${titulo}`)
              .setDescription(`<a:diamante:887714567084449892>`)
              .addField(`<a:fijadito:931432134797848607> ${f1}`, `${d1}` , false)
              .addField(`<a:fijadito:931432134797848607> ${f2}`, `${d2}` , false)
              .addField('\u200B',`<a:barracolor:930401303249698816><a:barracolor:930401303249698816><a:barracolor:930401303249698816><a:barracolor:930401303249698816><a:barracolor:930401303249698816>`, false)
              .addField(`<a:fijadito:931432134797848607> ${f3}`, `${d3}` , false)
              .addField(`<a:diamante:887714567084449892>`, `${d4}` , false)
              .addField(`<a:diamante:887714567084449892>`, `${d5}` , false)
              .setColor("RANDOM")
              .setImage(imagen)
              .setFooter(`${message.guild.name}` ,"https://media.discordapp.net/attachments/880312288593195028/902270934499610704/Midgard_GIF_AVATAR.gif");
              message.channel.send({ embeds: [embed] });
              message.delete({timeout: 100})
            
          }
      
          if (message.content.startsWith(prefix +"emb")){
      
            let permiso = message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)
        
            if(!permiso) return message.channel.send("`Error` `|` No tienes Permisos para usar este comando.");
        
            const split = args.slice(0).join(" ").split(";");
            let autor = split[0]
            let titulo = split[1]
            let desc = split[2]
            let imagen = split[3]
        
            
              const embed = new Discord.MessageEmbed()
              .setThumbnail(`https://i.gifer.com/8AMQ.gif`)
              .setAuthor(`${autor}`,client.user.displayAvatarURL())
              .setTitle(`${titulo}`)
              .setDescription(`<a:fijadito:931432134797848607> ${desc}`)
              .setColor("RANDOM")
              .setImage(imagen)
              .setFooter(`${message.guild.name}` ,"https://media.discordapp.net/attachments/880312288593195028/902270934499610704/Midgard_GIF_AVATAR.gif");
              message.channel.send({ embeds: [embed] });
              message.delete({timeout: 100})
            
          }
      
          if (message.content.startsWith(prefix +"reglas")){
      
            let permiso = message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)
        
            if(!permiso) return message.channel.send("`Error` `|` No tienes Permisos para usar este comando.");
        
              const embed = new Discord.MessageEmbed()
              .setThumbnail('https://i.gifer.com/8AMQ.gif')
              .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
              .setTitle(`𝚁𝙴𝙶𝙻𝙰𝚂 𝙳𝙴𝙻 𝚂𝙴𝚁𝚅𝙸𝙳𝙾𝚁`)
              .setDescription(` \n\n
              <a:sparkless:880922179280207934> Somos un server **NO** Tóxico, por tanto, están prohibidas las faltas de respeto a cualquier miembro.\n\n
              <a:sparkless:880922179280207934> El Spam **NO** está permitido, sea dentro del servidor o al DM de los Terrícolas. (Se entiende por Spam: links de otros servidores, maliciosos o publicitarios).\n\n
              <a:sparkless:880922179280207934> Usar adecuadamente cada canal del servidor, evitando el flood de comandos fuera de <#895828102578589716> y contenido NSFW fuera de <#848755526347128872>.\n\n
              <a:sparkless:880922179280207934> Cuidamos la privacidad de cada Terrícola, por tanto **NO** se puede compartir redes sociales o información privada (fotos, nombres, números telefónicos, direcciones IP, ubicación) en los canales del servidor, sin el consentimiento respectivo.\n\n
              <a:sparkless:880922179280207934> Para ver el avatar de cualquier Terrícola, deberás pedir el permiso correspondiente, caso contrario, serás muteado de todos los canales de texto por un tiempo definido por el Staff.\n\n
              <a:sparkless:880922179280207934> Los nombres de usuario, apodos o avatares con contenido sexual explícito o violento **NO** están permitidos. La omisión de esta regla, te puede llevar hasta el baneo indefinido del servidor.\n\n
              <a:sparkless:880922179280207934> Tampoco está permitido el acoso, bullying, amenazas, lenguaje violento u ofensivo, xenofobia, homofobia ni cualquier tipo de discriminación.\n\n
              <a:sparkless:880922179280207934> Por un ambiente tranquilo, **NO** toleramos ningún tipo de sonido molesto, ni entrar y salir constantemente de los canales de voz.\n\n
              <a:sparkless:880922179280207934> Si un miembro de Staff pide cambiar el tema de conversación por considerarlo inapropiado, se deberá hacer, caso contrario, recibirás una sanción correspondiente. Pero si crees que ha habido un abuso de poder, puedes y debes reportarlo en cualquier momento.`)
              .setImage(`https://media.discordapp.net/attachments/840161683732693033/880298925574193162/reglas-del-juego-game-rules.gif?width=448&height=252`)
              .setColor("GREEN")
              .setFooter('¡Pásala bien y Diviértete!')
             message.channel.send({embeds: [embed]});
             setTimeout(() => message.delete(), 100)
          } 
        
          if (message.content.startsWith(prefix +"relite")){
        
            let permiso = message.member.hasPermission("ADMINISTRATOR");
        
            if(!permiso) return message.channel.send("`Error` `|` No tienes Permisos para usar este comando.");
        
              const embed = new Discord.MessageEmbed()
              .setThumbnail("https://cdn.discordapp.com/emojis/897240681075060736.gif")
              .setAuthor('𝙻𝙰 É𝙻𝙸𝚃𝙴', "https://images-ext-1.discordapp.net/external/IzNo1dr-frPAQcFnWvpctrA5HLshMSSpn4xkzUC_gKk/%3Fsize%3D2048/https/cdn.discordapp.com/banners/777620055344545842/4999aa780156b9aa214241948f7ec65a.png?width=832&height=498")
              .setTitle(`<a:FuegoRojo:882761255381790750> 𝐑𝐄𝐆𝐋𝐀𝐒  𝐆𝐄𝐍𝐄𝐑𝐀𝐋𝐄𝐒 <a:FuegoRojo:882761255381790750>`)
              .setDescription("Bienvenido al Equipo!!! Te invitamos a seguir las siguientes reglas, por el bien de la comunidad. <:tierno:881618338759966800>")
              .addField('\u200B','\u200B')
              .addField(`<a:fijadito:931432134797848607> RESPETO`, `<a:sparkless:880922179280207934> Ser respetuosos con sus propios compañeros de equipo y del servidor en general. No importa los rangos ni los roles, **TODOS** somos iguales y merecemos respeto.`, false)
              .addField('\u200B','\u200B')
              .addField(`<a:fijadito:931432134797848607> CONFIDENCIALIDAD`, `<a:sparkless:880922179280207934> Ser cautelosos con lo que se habla en nuestro equipo. Lo que se diga en el canal de texto o voz, debe quedar aquí.`, false)
              .addField('\u200B','\u200B')
              .addField(`<a:fijadito:931432134797848607> COMPROMISO`, `<a:sparkless:880922179280207934> Estar completamente comprometidos con el equipo y sobre todo con el servidor.`, false)
              .addField('\u200B','\u200B')
              .addField(`<a:fijadito:931432134797848607> RESPONSABILIDAD`, `<a:sparkless:880922179280207934> Ser responsable en cada evento o actividad que tengas a cargo, ya sea como Presentador o Soporte.`, false)
              .addField('\u200B','\u200B')
              .addField(`<a:fijadito:931432134797848607> PUNTUALIDAD`, `<a:sparkless:880922179280207934> Iniciar cada evento o actividad a la hora programada, salvo motivo de fuerza mayor que debe avisarse con anterioridad.`, false)
              .addField('\u200B','\u200B')
              .addField('<a:barracolor:930401303249698816><a:barracolor:930401303249698816><a:barracolor:930401303249698816><a:barracolor:930401303249698816><a:barracolor:930401303249698816>',`<a:emoji_115:882776364581785640> La falta contra alguna de las reglas, dependiendo la gravedad, puede llevar a la suspensión temporal hasta permanente del equipo. <a:Sara:880304101215334401>`,false)
              .setImage(`https://images-ext-1.discordapp.net/external/Bk8i6i3GZXEtRbl1nKor8E7mHxwbWf9EnttRysAM_oU/https/c.tenor.com/wVorRymbWc8AAAAC/sigue-las-reglas-vapor.gif`)
              .setColor("RANDOM")
              .setFooter(message.guild.name +" • ¡Que comience el juego!","https://media.discordapp.net/attachments/880312288593195028/904603928375726120/Midgard_GIF_AVATAR.gif");
              //.setFooter(`${message.guild.name}`,"https://media.discordapp.net/attachments/880312288593195028/904603928375726120/Midgard_GIF_AVATAR.gif");
              message.channel.send(embed);
              message.delete({timeout: 100})
              //console.log("autor: "+autor+" titulo: "+titulo+" emoji1: "+emoji1+" rol1: "+rol1+" emoji2: "+emoji2+" rol2: "+rol2+" imagen: "+imag)
        
          }
      
          if (command === 'rolesg'){
      
            let permiso = message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)
        
            if(!permiso) return message.channel.send("`Error` `|` No tienes Permisos para usar este comando.");
      
            const embed = new Discord.MessageEmbed()
              .setThumbnail('https://media.discordapp.net/attachments/880312288593195028/928212628432621608/MIDGARD_Presentacion_169.gif?width=766&height=431')
              .setAuthor(`𝗚𝗲́𝗻𝗲𝗿𝗼`,message.guild.iconURL({ dynamic: true }).replace('webp','png'))
              .setTitle(`Reacciona según tu género:`)
              .setDescription(`\n\n 💡 ¿Cómo te identificas? 💡\n
              👦 <a:flechad:880330587678838784> <@&816140766345953300>\n\n
              👧 <a:flechad:880330587678838784> <@&816141138922307594>\n\n
              🏳️‍🌈 <a:flechad:880330587678838784> <@&816141333180842007>\n\n`)
              .setColor("RANDOM")
              .setImage('https://images-ext-2.discordapp.net/external/jWGnzp-_kMuK_h_7svc5EVVuafKyCE48-bvJK5fggKw/%3Fwidth%3D562%26height%3D562/https/images-ext-1.discordapp.net/external/tnCC5EhfePEKIobserftTKZfjP9giUm9b5RFw53vPYM/https/static.wixstatic.com/media/b595a3_14d84be3a50f4c2c9fe72be39edef819~mv2.gif?width=450&height=450')
              .setFooter(message.guild.name,client.user.displayAvatarURL({ dynamic: true }).replace('webp','png'));
            message.channel.send({ embeds: [embed] });
            message.delete({timeout: 100})
            
          }
      
          if (command === 'rolese'){
      
            let permiso = message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)
        
            if(!permiso) return message.channel.send("`Error` `|` No tienes Permisos para usar este comando.");
      
            const embed = new Discord.MessageEmbed()
              .setThumbnail('https://media.discordapp.net/attachments/880312288593195028/928212628432621608/MIDGARD_Presentacion_169.gif?width=766&height=431')
              .setAuthor(`𝗘𝗱𝗮𝗱`,message.guild.iconURL({ dynamic: true }).replace('webp','png'))
              .setTitle(`Reacciona según tu edad:`)
              .setDescription(`\n\n 🥱 ¿Legal o Ilegal? 🥵\n
              🔞 <a:flechad:880330587678838784> <@&816168012335022100>\n\n
              😈 <a:flechad:880330587678838784> <@&816167169477312542>`)
              .setColor("RANDOM")
              .setImage('https://images-ext-2.discordapp.net/external/d2pb0CbJdkBTXK8diIE11-HbEjCGCJVuDRM94EbT2xQ/%3Fwidth%3D432%26height%3D227/https/images-ext-2.discordapp.net/external/nRu05pX3UQJa5pvw1X7RAkv6ZNPJ-hqQKEt2dNYTPd4/https/i.gifer.com/fxt5.gif?width=346&height=182')
              .setFooter(message.guild.name,client.user.displayAvatarURL({ dynamic: true }).replace('webp','png'));
            message.channel.send({ embeds: [embed] });
            message.delete({timeout: 100})
            
          }
      
          if (command === 'rolesp'){
      
            let permiso = message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)
        
            if(!permiso) return message.channel.send("`Error` `|` No tienes Permisos para usar este comando.");
      
            const embed = new Discord.MessageEmbed()
              .setThumbnail('https://media.discordapp.net/attachments/880312288593195028/928212628432621608/MIDGARD_Presentacion_169.gif?width=766&height=431')
              .setAuthor(`𝗣𝗮𝗶́𝘀`,message.guild.iconURL({ dynamic: true }).replace('webp','png'))
              .setTitle(`Reacciona según tu país:`)
              .setDescription(`\n\n 🌎 Puedes elegir más de 1... 🌎\n
              🇦🇷 <a:flechad:880330587678838784> <@&816176071661191208>\n\n
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
              .setColor("RANDOM")
              .setImage('https://images-ext-2.discordapp.net/external/iYRJjc56RMtN2RT8BObhMa4odkXJ5igZIoNAPYXJzDE/%3Fwidth%3D518%26height%3D294/https/images-ext-2.discordapp.net/external/bhY7Uhw-axRgouddTIpNW9UlECUhr0jpy-sB_w_sTKQ/%253Fwidth%253D576%2526height%253D327/https/media.discordapp.net/attachments/840161683732693033/880296992289484861/Ataques-mundiales.gif?width=414&height=235')
              .setFooter(message.guild.name,client.user.displayAvatarURL({ dynamic: true }).replace('webp','png'));
            message.channel.send({ embeds: [embed] });
            message.delete({timeout: 100})
            
          }
      
          if (command === 'roless'){
      
            let permiso = message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)
        
            if(!permiso) return message.channel.send("`Error` `|` No tienes Permisos para usar este comando.");
      
            const embed = new Discord.MessageEmbed()
              .setThumbnail('https://media.discordapp.net/attachments/880312288593195028/928212628432621608/MIDGARD_Presentacion_169.gif?width=766&height=431')
              .setAuthor(`𝗦𝗶𝗴𝗻𝗼𝘀 𝗭𝗼𝗱𝗶𝗮𝗰𝗮𝗹𝗲𝘀`,message.guild.iconURL({ dynamic: true }).replace('webp','png'))
              .setTitle(`Reacciona según tu signo:`)
              .setDescription(`\n\n 🔮 ¿Quieres saber tu horóscopo diario? 🔮\n
              ♈ <a:flechad:880330587678838784> <@&880432087973380107>\n\n
              ♉ <a:flechad:880330587678838784> <@&880431618848862278>\n\n
              ♊ <a:flechad:880330587678838784> <@&880431545867988992>\n\n
              ♋ <a:flechad:880330587678838784> <@&880432534746431539>\n\n
              ♌ <a:flechad:880330587678838784> <@&880432484230262795>\n\n
              ♍ <a:flechad:880330587678838784> <@&880431681780219995>\n\n
              ♎ <a:flechad:880330587678838784> <@&880432422183911424>\n\n
              ♏ <a:flechad:880330587678838784> <@&880431441006190613>\n\n
              ♐ <a:flechad:880330587678838784> <@&880431928099102742>\n\n
              ♑ <a:flechad:880330587678838784> <@&880431999851049010>\n\n
              ♒ <a:flechad:880330587678838784> <@&880431859404800000>\n\n
              ♓ <a:flechad:880330587678838784> <@&880431766941347860>\n\n`)
              .setColor("RANDOM")
              .setImage('https://images-ext-2.discordapp.net/external/ED6S9Wyp3YqQDwI8tIskd2XinBL7tNuoZTCWedHiqbo/%3Fwidth%3D389%26height%3D194/https/images-ext-2.discordapp.net/external/JWJjNRSRHIDnkxiVq0PvvnMU08Yw6mYjMohtpNbDZ88/%253Fwidth%253D432%2526height%253D216/https/media.discordapp.net/attachments/840161683732693033/880292308413739018/giphy.gif?width=311&height=155')
              .setFooter(message.guild.name,client.user.displayAvatarURL({ dynamic: true }).replace('webp','png'));
            message.channel.send({ embeds: [embed] });
            message.delete({timeout: 100})
            
          }
      
          if (command === 'rolesa'){
      
            let permiso = message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)
        
            if(!permiso) return message.channel.send("`Error` `|` No tienes Permisos para usar este comando.");
      
            const embed = new Discord.MessageEmbed()
              .setThumbnail('https://media.discordapp.net/attachments/880312288593195028/928212628432621608/MIDGARD_Presentacion_169.gif?width=766&height=431')
              .setAuthor(`𝗔𝗰𝘁𝗶𝘃𝗶𝗱𝗮𝗱𝗲𝘀`,message.guild.iconURL({ dynamic: true }).replace('webp','png'))
              .setTitle(`Reacciona según tu gusto:`)
              .setDescription(`\n\n 🔥 Tenemos actividades todos los días 🔥\n
              🎉 <a:flechad:880330587678838784> <@&880949612175843358>\n\n
              💕 <a:flechad:880330587678838784> <@&880949777569841182>\n\n
              💥 <a:flechad:880330587678838784> <@&880949785362829362>\n\n
              🎧 <a:flechad:880330587678838784> <@&883438018009124959>\n\n
              🎤 <a:flechad:880330587678838784> <@&883435087952248952>\n\n
              😎 <a:flechad:880330587678838784> <@&883435331746160721>\n\n
              🎥 <a:flechad:880330587678838784> <@&816465728336691275>\n\n
              🥂 <a:flechad:880330587678838784> <@&880950057669623909>\n\n`)
              .setColor("RANDOM")
              .setImage('https://images-ext-1.discordapp.net/external/SHUVHAaDdmIAvjWSC5NY0wiC5JcHk-zvv0Ey7a4EPmk/%3Fwidth%3D538%26height%3D403/https/media.discordapp.net/attachments/879633476532453386/883455087295483964/mp4.gif?width=430&height=322')
              .setFooter(message.guild.name,client.user.displayAvatarURL({ dynamic: true }).replace('webp','png'));
            message.channel.send({ embeds: [embed] });
            message.delete({timeout: 100})
            
          }
      
          if (command === 'rolesec'){
      
            let permiso = message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)
        
            if(!permiso) return message.channel.send("`Error` `|` No tienes Permisos para usar este comando.");
      
            const embed = new Discord.MessageEmbed()
              .setThumbnail('https://media.discordapp.net/attachments/880312288593195028/928212628432621608/MIDGARD_Presentacion_169.gif?width=766&height=431')
              .setAuthor(`𝗘𝗰𝗼𝗻𝗼𝗺𝗶́𝗮`,message.guild.iconURL({ dynamic: true }).replace('webp','png'))
              .setTitle(`Reacciona según tu preferencia:`)
              .setDescription(`\n\n 💎 Dos grandes bots: <@429457053791158281> y <@292953664492929025> 💎\n
              🌸 <a:flechad:880330587678838784> <@&897701707847434240>\n\n
              ⛩️ <a:flechad:880330587678838784> <@&897701882158530590>\n\n
              🎁 <a:flechad:880330587678838784> <@&897701860176166912>\n\n
              🤝 <a:flechad:880330587678838784> <@&960987738553868348>\n\n
              🎰 <a:flechad:880330587678838784> <@&897933020361818133>\n\n
              💰 <a:flechad:880330587678838784> <@&897933095720878080>\n\n`)
              .setColor("RANDOM")
              .setImage('https://blogs.unitec.mx/content/dam/blogs/imagenes/corp_samara/finazas-economia-quieres-ser-un-john-law-1.gif')
              .setFooter(message.guild.name,client.user.displayAvatarURL({ dynamic: true }).replace('webp','png'));
            message.channel.send({ embeds: [embed] });
            message.delete({timeout: 100})
            
          }
      
          if (command === 'rolesg'){
      
            let permiso = message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)
        
            if(!permiso) return message.channel.send("`Error` `|` No tienes Permisos para usar este comando.");
      
            const embed = new Discord.MessageEmbed()
              .setThumbnail('https://media.discordapp.net/attachments/880312288593195028/928212628432621608/MIDGARD_Presentacion_169.gif?width=766&height=431')
              .setAuthor(`𝐆𝐚𝐦𝐢𝐧𝐠`,message.guild.iconURL({ dynamic: true }).replace('webp','png'))
              .setTitle(`Reacciona según lo que juegues:`)
              .setDescription(`\n\n 🎮 Y tú... ¿qué prefieres? 🎮\n
              🔪 <a:flechad:880330587678838784> <@&897701707847434240>\n\n
              💣 <a:flechad:880330587678838784> <@&897701882158530590>\n\n
              🔫 <a:flechad:880330587678838784> <@&897701860176166912>\n\n
              🪓 <a:flechad:880330587678838784> <@&897933020361818133>\n\n
              💰 <a:flechad:880330587678838784> <@&897933095720878080>\n\n`)
              .setColor("RANDOM")
              .setImage('https://blogs.unitec.mx/content/dam/blogs/imagenes/corp_samara/finazas-economia-quieres-ser-un-john-law-1.gif')
              .setFooter(message.guild.name,client.user.displayAvatarURL({ dynamic: true }).replace('webp','png'));
            message.channel.send({ embeds: [embed] });
            message.delete({timeout: 100})
            
          }
      
          if(command === 'pornoauto'){
      
            let permisos = message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)
          
            if(!permisos) return message.reply('No tiene permisos para usar este comando <:maje:925927838492811295>').then(m => setTimeout(() => m.delete(), 5000));
          
            const channel = message.guild.channels.cache.find(ch => ch.id === '880312288593195028');
      
            let c = 0
            
            function reminder() {
      
              const image = await nsfw3.pgif();
          
              const embed = new Discord.MessageEmbed()
              .setAuthor(`🔞 | Midgard's Hot 🔥`,client.user.avatarURL())
              //.setTitle('Imagen completa')
              .setDescription(`Disfruten este pequeño aporte gratis! <a:run:880304386826465300>`)
              .setImage(image)
              .setColor('RANDOM')
              .setTimestamp(new Date())
              .setFooter(`${message.guild.name}`,'https://media.discordapp.net/attachments/880312288593195028/904603928375726120/Midgard_GIF_AVATAR.gif');
        
              channel.send({ embeds: [embed] });
      
            }
      
            while(c<100)
            {
              
              setTimeout(reminder, 30000)
              c = c + 1
      
            }
      
        }*/

    }

}