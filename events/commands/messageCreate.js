const Similar = require('string-similarity');
const { Permissions } = require('discord.js');
const config = require('../../config.json');
var AsciiTable = require('ascii-table')

//& Modelos
const userModel = require('../../models/userSchema');
const blSchema = require('../../models/blSchema');
const autoSchema = require('../../models/autoSchema');
const turnoSchema = require('../../models/turnoSchema');
const serverSchema = require('../../models/serverSchema');
const xpclubSchema = require('../../models/xpclubSchema');
//& Modelos

module.exports = async (client, Discord, message) => {
    
    if(message.channel.type == "DM" ) return

    let buscarprefix, prefix
    try {

        buscarprefix = await serverSchema.findOne({idserver: message.guild.id})

        if(buscarprefix){

            prefix = buscarprefix.prefix

        } else {

            prefix = config.prefix

        }

    } catch (error) {

        console.log('Error al buscar Prefix en Servidor: '+ message.guild.id + ' - ' + error)
        prefix = config.prefix

    }
    
    let sv = client.guilds.cache.get('851924635930329098')
    let channel
    let idcanal = message.channel.id
    let logschannel = client.channels.cache.get('965156885558878319')

    const em = new Discord.MessageEmbed()
    .setThumbnail(message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : client.user.avatarURL({ dynamic: true }) )
    .setAuthor({ name: 'MaltaBot', iconURL: client.user.avatarURL({ dynamic: true }) })
    .setTitle('📢 | Mensaje Enviado')
    .addField('Canal: ', `<a:flech:931432469935312937> <#${idcanal}>`)
    .addField('Autor: ', `<a:flech:931432469935312937> ${message.author}`)
    .addField('Mensaje: ', message.content ? message.content : 'Ningún mensaje registrado')
    .setColor('RANDOM')
    .setTimestamp(new Date())
    .setFooter({ text: `Id: ${message.author.id}`, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
  
    if(idcanal === '880290686107275304')
    {
        channel = sv.channels.cache.get('880267684950999050')
  
        if(message.content.length >= 1000) return channel.send('Mensaje demasiado largo, enviado en alto cargo por: '+message.author).catch((e) => console.log('Error al enviar mensaje: '+e))
  
        channel.send({ embeds: [em] }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
    } else if(idcanal === '880292291443556383')
    {
        channel = sv.channels.cache.get('880280405993996339')
    
        if(message.content.length >= 1000) return channel.send('Mensaje demasiado largo, enviado en élite por: '+message.author).catch((e) => console.log('Error al enviar mensaje: '+e))
        
        channel.send({ embeds: [em] }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
    } else if(idcanal === '840161683732693033')
    {
        channel = sv.channels.cache.get('880280308732272640')
    
        if(message.content.length >= 1000) return channel.send('Mensaje demasiado largo, enviado en staff por: '+message.author).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        channel.send({ embeds: [em] }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
    } else if(idcanal === '923716261542781018')
    {
        channel = sv.channels.cache.get('933917185695428628')
    
        if(message.content.length >= 1000) return channel.send('Mensaje demasiado largo, enviado en supervisores por: '+message.author).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        channel.send({ embeds: [em] }).catch((e) => console.log('Error al enviar mensaje: '+e))
  
    } else if(idcanal === '909722451745837106')
    {
        channel = sv.channels.cache.get('880280346208395305')
    
        if(message.content.length >= 1000) return channel.send('Mensaje demasiado largo, enviado en admin por: '+message.author).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        channel.send({ embeds: [em] }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
    } else if(idcanal === '870195067338506271')
    {
        channel = sv.channels.cache.get('880280535304372234')
    
        if(message.content.length >= 1000) return channel.send('Mensaje demasiado largo, enviado en chat general por: '+message.author).catch((e) => console.log('Error al enviar mensaje: '+e))
        
        channel.send({ embeds: [em] }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
    } else
    {
        var canalrestringidos = [
          '880280265216389140','880267684950999050',
          '880280405993996339', '880280308732272640',
          '880280346208395305', '880280369126051861',
          '880280535304372234', '880280557051858974',
          '933903109305028688', '933917185695428628'
        ]
  
        if(!canalrestringidos.some(id => idcanal == id))
        {
            channel = sv.channels.cache.get('880280265216389140')
      
            if(message.content.length >= 1000) return channel.send(`Mensaje demasiado largo, enviado en <#${idcanal}> por: `+message.author).catch((e) => console.log('Error al enviar mensaje: '+e))
      
            em.addField('Servidor: ', `<a:flech:931432469935312937> ${message.guild.name}`)
      
            channel.send({ embeds: [em] }).catch((e) => console.log('Error al enviar mensaje: '+e))
  
        } else {
          
            return
            
        }
    
    }
    
    if (message.author.bot) return;


    //& SECCIÓN DE TURNOS - STAFF

    let userTurno

    if(idcanal === '870195067338506271'){

        try {

            userTurno = await turnoSchema.findOne({idusuario: message.author.id})

            if(userTurno){

                console.log('========================= ACTUALIZACIÓN DE STAFF DE TURNO =========================');
        
                let update = await turnoSchema.findOneAndUpdate({idusuario: message.author.id},
                    {

                        mensajes: userTurno.mensajes + 1

                    })

                update.save()
   
                console.log('Mensajes de Staff de Turno Actualizado ===> Id: '+ message.author.id + ' Username: ' + message.author.username)
   
                console.log('========================= ACTUALIZACIÓN DE STAFF DE TURNO =========================');
   
            }

        } catch (error) {

            console.log('Error al Registrar Mensajes de Staff de Turno: '+ error)
      
        }

    }

    //& SECCIÓN DE TURNOS - STAFF

    
    //* SECCIÓN DE AUTORESPUESTAS

    try {
        
        let autorespuesta = await autoSchema.find({ idserver: message.guild.id, trigger: message.content.toLowerCase() }).sort({ idcc: -1 })
        let datos = []

        if(autorespuesta){

            for(let ls of autorespuesta){

                datos.push(ls.response)

            }

            if(datos.length > 0){
                
                message.channel.send(datos[Math.floor(Math.random()*datos.length)]).catch((e) => console.log('Error al enviar autorespuesta: '+e))

            }

        }
        
    } catch (error) {
        
        console.log('Error al obtener autorespuestas: ' + error)
    }

    //* SECCIÓN DE AUTORESPUESTAS


    //? SECCIÓN DE AUTORESPUESTAS - MIDGARD

    var hola = [

        'Cara de bola <:niasacandolengua:948756194917507102>',
        'Ya llegó este wey <a:StichFudioso:911090819174383616>', 
        'Te pico la cola <a:run:880304386826465300>', 
        'Hola lindura <a:Gatitoalv:900075164295905371>', 
        'Que onda <:PolloPro:911096064545816606>',
        'Ya era hora de que llegaras <:pocoyoMolesto:894367131125284924>', 
        '¿Qué tal tu día?',
        'Hola mi amor <:BlushedCat:920964717864964116>',
        'Hola ' + message.author.username + ', cómo va tu día?'
      
    ]

    if (message.content.toLowerCase() === 'hola' || message.content.toLowerCase() === 'holas'){
          
        if(message.guild.id !== '777620055344545842') return
        message.channel.send(hola[Math.floor(Math.random()*hola.length)]).catch((e) => console.log('Error al enviar mensaje: '+e))
  
    }

    var ola = [

        '<a:Ohsi:887055459612241981> Ola lindo',
        'Se dice Hola <:luser:920143138696347678>',
        'Ayoooolaaa <:abby:880300168514252811>', 
        'Que onda <:PolloPro:911096064545816606>', 
        'Cara de bola',
        'Te pico la cola <a:run:880304386826465300>', 
        'Oliiii', 
        'To piola?',
        'Llegaste a tiempo para besarnos <:Awebo_a_simpiar:901600161875259452>', 
        'Ola mailov <a:holaaa:934823319331569664>',
        'Hola, con H de Huevos los que le faltaron a tu ex <a:ayajasisi:945203356140441650>',
        'del mar 🌊',
      
    ]

    if (message.content.toLowerCase() === 'ola' || message.content.toLowerCase() === 'olas'){
  
        if(message.guild.id !== '777620055344545842') return
        message.channel.send(ola[Math.floor(Math.random()*ola.length)]).catch((e) => console.log('Error al enviar mensaje: '+e))
  
    }

    var buendia = [

        'Buen día joven <:Para_ti_tambien:897241426021208065>',
        'Pase, pase, está en su casa <a:ayajasisi:890684634369777724>',
        '¿Cómo te va?',
        'Igualmente chulada',
        '<:QueFachero:915845462127435816> ¿Todo bien?',
        '<:Me_ataca_aiuda:897241560159236116> Dejó de ser un buen día desde que caíste en sus mentiras',
        'Tardes ya <:zerotwo_why:880315297104547870>',
        'Buen día precios@ ❤',
      
    ]

    if (message.content.toLowerCase() === 'buen día' || message.content.toLowerCase() === 'buen dia'){
          
        if(message.guild.id !== '777620055344545842') return
        message.channel.send(buendia[Math.floor(Math.random()*buendia.length)]).catch((e) => console.log('Error al enviar mensaje: '+e))
          
    }

    var buenosdias = [

        '<:GatoGuatafac:911089127129227314> Solo días', 
        '¡Cuánta amabilidad! <:yamique:924441571355684935>', 
        'Eran buenos hasta que llegaste <a:zbailabaila:890772645342236732>', 
        'Hasta que despiertas <a:ayajasisi:890684634369777724>',
        'Apenas? <:Y_moriste:897241205111418920>',
        '¿Cómo amaneciste?',
        'Tardes ya',
        'Buenos días precios@ ❤',
      
    ]

    if (message.content.toLowerCase() === 'buenos días' || message.content.toLowerCase() === 'buenos dias'){
          
        if(message.guild.id !== '777620055344545842') return
        message.channel.send(buenosdias[Math.floor(Math.random()*buendia.length)]).catch((e) => console.log('Error al enviar mensaje: '+e))
      
    }

    var buenastardes = [

        'Solo tardes <:FLORK_clorox:956314038227324968> porque buenas sus mentiras', 
        '**Ya llegooooo!!!**',
        'Que bueno que llegas, apenas empieza el chisme <:bombon:925327781104082974>', 
        '¿Qué va a llevar joven?',
        'Tardes, porque buenas las que te cargas <a:Nalgada:880315282101526598>', 
        'Para ti también <a:Gatitoalv:900075164295905371>',
        'Buenas tardes precios@ ❤',
      
    ]

    if (message.content.toLowerCase() === 'buenas tardes'){
          
        if(message.guild.id !== '777620055344545842') return
        message.channel.send(buenastardes[Math.floor(Math.random()*buenastardes.length)]).catch((e) => console.log('Error al enviar mensaje: '+e))
          
    }

    var buenasnoches = [

        '<:ChayanneFlor:906775267492646924> Descansa bb',
        'Hasta mañana bb', 
        'Tan temprano te vas? <:AAAAa:882776373201088512>', 
        'No te vayas <:668957583889137664:882761465101180960>', 
        'Sueñas conmigo <a:sabroso:932177227792146433>', 
        'Solo noches <a:PepeDuckToy:925294858745307136>',  
        'Noches, porque buenas sus intenciones contigo <:Para_ti_tambien:897241426021208065>',
        'Buenas noches precios@ ❤',
      
    ]

    if (message.content.toLowerCase() === 'buenas noches'){
         
        if(message.guild.id !== '777620055344545842') return
        message.channel.send(buenasnoches[Math.floor(Math.random()*buenasnoches.length)]).catch((e) => console.log('Error al enviar mensaje: '+e))
          
    }
    
    var buenas = [

        'Las que te cargas mi amor <a:sabroso:932177227792146433>', 
        'Hoy amanecimooos <a:Dance:883031053772681216>', 
        'Ya te las viste? <:zerotwo_why:880315297104547870>', 
        'Sus mentiras <:ayno:925298581903118376>',  
        'Hola buenaaaas <:bobesponja:935069041167564820>', 
        'Las tuyas <a:NalgasdeAna:887498069569044541>',
        'Las tienes <a:perreom:930719549131735040>',
      
    ]
    
    if (message.content.toLowerCase() === 'buenas' || message.content.toLowerCase() === 'wenas'){
        
        if(message.guild.id !== '777620055344545842') return
        message.channel.send(buenas[Math.floor(Math.random()*buenas.length)]).catch((e) => console.log('Error al enviar mensaje: '+e))
  
    }

    if (message.content.toLowerCase() === 'wlc' || message.content.toLowerCase() === 'welcome' || message.content.toLowerCase() === 'bienvenido' || message.content.toLowerCase() === 'bienvenida' || message.content.toLowerCase() === 'bienvenid@' || message.content.toLowerCase() === 'bienvenidos' || message.content.toLowerCase() === 'bienvenid@s' || message.content.toLowerCase() === 'bienvenidas'){
          
        if(message.guild.id !== '777620055344545842') return
        message.react(`<a:pasito:877116925291946094>`).catch((e) => console.log('Error al reaccionar: '+e))
        message.react(`<a:cerveza:880635824021065738>`).catch((e) => console.log('Error al reaccionar: '+e))
          
    }

    //? SECCIÓN DE AUTORESPUESTAS - MIDGARD

  
    let img = '753435606410985573'
  
    const bSi = new Discord.MessageButton()
        .setCustomId("accept")
        .setLabel("SI")
        .setStyle("SUCCESS")
  
    const bNo = new Discord.MessageButton()
        .setCustomId("deny")
        .setLabel("NO")
        .setStyle("DANGER")
    
    if (message.content.toLowerCase() === 'malta' || message.content.toLowerCase() === 'maltazar' || message.content.toLowerCase() === 'maltazard')
    {
    
        message.channel.send({

            content: message.author.toString() + "¿Deseas contactar a Malta?",
            components: [
  
                new Discord.MessageActionRow().addComponents([bSi,bNo])

            ]

        }).then(async m => {
            
            let filter = int => int.isButton() && int.user.id == message.author.id 
             
            const collector = m.createMessageComponentCollector({ filter, max: 1, maxUsers: 1, maxComponents: 1, time: 60000 });
            
            collector.on("collect", async int => {
              
                int.deferUpdate();
                
                if (int.customId === "accept") {
                  
                    m.edit({
                  
                        content: `Contactando a mi creador... <a:cargando:887482093481902101>`,
                        components: []

                    }).then(async (m) => {

                        message.channel.sendTyping()
                        
                        setTimeout(async () => {

                            m.delete()

                            await message.channel.send({

                                content: `<@${img}> Te buscan por aquí <:yonofui:931433119859503194>`,
                                components: []
        
                            })

                        }, 5000)

                    })
         
                } else if (int.customId === "deny") {
                  
                    m.edit({
                  
                        content: "Gracias, si necesitas algo, no dudes en contactarme. <:tierno:931433334960160799>",
                        components: []

                    });
                
                }
            
            });
        
            collector.on("end", (collected, reason) => {
              
                if(collected.size < 1 || reason === 'time') return m.edit({
                
                    content: "**¡No confirmaste a tiempo!** <:enojado:931434000751394867>",
                    components: []
              
                });

                console.log('Razón del término de colección de Malta: '+reason)
                
            });
              
        });
    }
    
    /*let reven = new RegExp(`^<@!?${'710588969557164113'}>( |)$`);
    
    if (message.content.match(reven))
    {
    
        message.channel.send(`𝑬𝒍 𝒖́𝒍𝒕𝒊𝒎𝒐 𝒇𝒊𝒆𝒍 𝒒𝒖𝒆 𝒒𝒖𝒆𝒅𝒂 𝒆𝒏 𝒆𝒔𝒕𝒆 𝒎𝒖𝒏𝒅𝒐 <a:FuegoRojo:882761255381790750>`)
    
    }*/
    
    /*let mencionado = message.guild.members.resolve(message.mentions.users.first())

    if(mencionado)
    {

        if (mencionado.id === '753435606410985573'){
        
            message.channel.send(`¿Qué necesitas de mi dueño? <a:ositovino:880306728867078165>`)
    
        } else if (mencionado.id === '683501310527668228'){

            message.channel.send('Tan al pendiente estás que tienes que hacerme ping? <a:ayajasisi:890684634369777724>')
            
        }

    }*/

    let malta = new RegExp(`^<@!?${'753435606410985573'}>( |)$`)

    if (message.content.match(malta))
    {
    
        message.channel.send(`¿Qué necesitas de mi dueño? <a:ositovino:880306728867078165>`).catch((e) => console.log('Error al enviar mensaje: '+e))
    
    }

    let insp = new RegExp(`^<@!?${'683501310527668228'}>( |)$`)

    if (message.content.match(insp))
    {
    
        var i = [

            '¿Qué necesitas de la Inspectora? <a:ayajasisi:890684634369777724> Por ahora solo inspecciones al dm <:X_pw:887055706509959178>…. Ya sabes, tu Inspectora de confianza al servicio de la comunidad <a:ositovino:880306728867078165>',
            '<:simp_:915076757802086401>',

        ]

        message.channel.send(i[Math.floor(Math.random()*i.length)]).catch((e) => console.log('Error al enviar mensaje: '+e))
    
    }
  
    let ian = new RegExp(`^<@!?${'603344396351438889'}>( |)$`);
    
    if (message.content.match(ian))
    {
        
        if(message.guild.id !== '777620055344545842') return 
        message.channel.send(`<a:megaphone:932192877449191424> Alo? Tierra llamando al **argentino con más flow** <a:darkcrown2:886466286773739530>, Ian en camino bebé <a:bmirusboyrunfast:880411644893724672>`).catch((e) => console.log('Error al enviar mensaje: '+e))
    
    }
  
    let ana = new RegExp(`^<@!?${'883633609498570762'}>( |)$`);
    
    if (message.content.match(ana))
    {
        
        if(message.guild.id !== '777620055344545842') return    
        message.channel.send(`<:emoji_233:890722279074451506> Días,tardes,noches,madrugadas <:mmsi:925934342016995379> porque Buena está la persona que me acaba de mencionar <a:Zuii:890684724673150996> <a:Ytodomedavuelta:890721775699259422>`).catch((e) => console.log('Error al enviar mensaje: '+e))
    
    }
  
    let nia = new RegExp(`^<@!?${'743960732542042203'}>( |)$`);
    
    if (message.content.match(nia))
    {
        
        if(message.guild.id !== '777620055344545842') return  
        message.channel.send(`¿¡𝑸𝒖𝒆 𝒏𝒆𝒄𝒆𝒔𝒊𝒅𝒂𝒅 𝒅𝒆 𝒑𝒊𝒏𝒈𝒆𝒂𝒂𝒂𝒂𝒓!? <:gatoNojao:930403164266565642>`).catch((e) => console.log('Error al enviar mensaje: '+e))
    
    }
    
    if (message.content.toLowerCase() === 'piropo')
    {
    
        var piropo = [
            'El amor será ciego, pero hay que ver lo mucho que alegras la vista.','Con esos ojos mirándome, ya no me hace falta la luz del sol.',
            'Por la luna daría un beso, daría todo por el sol, pero por la luz de tu mirada, doy mi vida y corazón.','Si yo fuera un avión y tú un aeropuerto, me la pasaría aterrizando por tu hermoso cuerpo.',
            'Me gusta el café, pero prefiero tener-té.','No eres google, pero tienes todo lo que yo busco.',
            'Mis ganas de ti no se quitan, se acumulan.','Cuando te multen por exceso de belleza, yo pagaré tu fianza.',
            'Si cada gota de agua sobre tu cuerpo es un beso, entonces quiero convertirme en aguacero.','Estás como para invitarte a dormir, y no dormir.',
            'Si tu cuerpo fuera cárcel y tus brazos cadenas, ese sería el lugar perfecto para cumplir condena.','Qué bonitos ojos tienes, tan redondos como el sol, se parecen a los ceros que me pone el profesor.',
            'Eres como la chancha de mi mamá, te veo venir y se me acelera el corazón.','Si lo bonito fuera pecado, tú no tendrías el perdón de Dios.',
            'Ni en clase de matemáticas me perdía tanto como en tu mirada.','Quisiera olvidarte, pero sin el olvi.',
            'Se te ha caído el papel que te envuelve, bombón.','Me gustas más que dormir hasta tarde.',
            '¿Me haces un favor? Sal de mis sueños y entra en mi realidad.','Ni en el mejor libro de recetas se encuentra semejante bombón.',
            '¿Están lloviendo estrellas o solo tú caíste del cielo?','Mi amor, quién fuera cemento para sostener ese monumento.',
            'Si tuviera que regalarte algo, te regalaría un espejo, porque después de este mundo, lo más bonito es tu reflejo.','No me gusta atarme, pero por ti, yo me encadeno.',
            'Eres tan dulce que solo con mirarte engordo.','Si los besos transmiten gérmenes, yo contigo sí empiezo una epidemia.',
            '¿De que panadería te escapaste bizcochito?','Y Dios dijo: «Hágase lo más hermoso del universo» y nació la hermosura que está leyendo esto.',
            'Quien fuera mago para echarte un polvo y desaparecer.','Quisiera ser hamburguesa y que me llenes de mayonesa.',
            'Tienes la sonrisa que quiero darle a mis hijos.','Dios te guarde y me dé la llave.',
            'Ningún «Escribiendo…» me pone tan feliz como el tuyo.','Tú eres Coca Cola y yo un hielito, ¡no me toques que me derrito!',
            '¿Tienes algo que hacer? Podemos hacer turismo por mi cuarto.','Eres como el chocolate, te me antojas a cada ratito.',
            'Perdí mi número de teléfono, ¿me das el tuyo?','Tu amor me ha contagiado, como un virus imposible de curar.',
            'Acabo de perder tres besos bajo tu camiseta, ¿me ayudas a buscarlos?','Que bonito sería despertarme a mitad de noche y verte ahí, a mi lado.',
            'Si solo con ver tu nombre me haces suspirar, imagínate cuando te veo.','Quisiera ser pensamiento y estar dentro de ti, y así saber el momento en que te acuerdas de mi.',
            'Te quiero, pero no sé en qué posición, ¿me ayudas a elegir?','¿Crees en el amor a primera vista o tengo que darme otra vuelta y volver a pasar?',
            '¿Quién te crees para gustarme tanto?','La distancia y el tiempo no saben la falta que le haces a mi corazón.',
            'Eres la canción que hace sonar mi guitarra.','No pretendo decir algo bonito, lo que te digo es muy sincero: el cariño que siento es infinito y mi amor por ti es verdadero.',
            'Si ser bella fuese delito, te condenarían de por vida.','Si Cristóbal Colón te viese, diría; «Santa María, pero qué Pinta tiene esa Niña».',
            'Quisiera ser hormiguita para subir por tu balcón y decirte al oído; guapa, bonita, bombón.','Cómo me gustaría ser tu secador de pelo… para que todos los días me agarres del mango.',
            'A lo mejor mi hogar no es un palacio, pero me gustaría que tú fueras mi princesa.','La belleza de una rosa no tiene comparación con la dulzura de tu rostros y la hermosura de tu corazón.',
            'Aprovecha que estoy en rebajas guapa y te dejo dos besos por el precio de uno.','¿Estás preparada para subir a la Luna? Porque tengo el cohete preparado.',
            'Si un día olvido lo hermosa que eres, ayúdame a recordarlo con la luz de tu sonrisa y el sabor de tus labios.','Tú con tantas curvas y yo sin frenos.',
            'No es el whisky ni la cerveza, eres tú quien se me ha subido a la cabeza.','Me encanta la soltería, pero por ti me lo pensaría.'
        ]
    
        let rpiropo = piropo[Math.floor(Math.random()*piropo.length)]
    
        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription(rpiropo)

        if(message.guild.id !== '777620055344545842') return
        message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
  
    }
    
    
    if (message.content.toLowerCase() === 'chiste')
    {
    
        var chiste = [
            '- ¿Tienes WiFi?\n- Sí\n- ¿Y cuál es la clave?\n- Tener dinero y pagarlo.',
            'En una entrevista de trabajo:\n- ¿Nivel de inglés?\n- Alto\n- Bien. Traduzca *mirar*.\n- Look.\n- Perfecto. Úselo en una frase.\n- *Luke*, yo soy tu padre.\n- Contratado.',
            '¿Cuál es el café más peligroso del mundo?\nEl ex-preso',
            '- Mamá, mamá, los spaghetti se están pegando.\n- Déjalos que se maten',
            '- Soy Rosa.\n- Ah, perdóname, es que soy daltónico.',
            '- Oye, ¿cuál es tu plato favorito y por qué?\n- Pues el hondo, porque cabe más comida…',
            '¿Qué pasa si tiras un pato al agua?.\nNada.',
            '- Ayer llamé a la policía porque unos ladrones robaron en mi casa y se llevaron hasta los vasos.\n- ¿Y los detuvo?\n-Sí, sí, los de tubo también.',
            '¿Cómo te llamas?\n- Lancelot.\n- Pues atrápalot…',
            '- Papá, ¿qué está más lejos, Córdoba o la Luna?.\n - Pero vamos a ver, ¿tú ves desde aquí Córdoba?',
            'Mi ordenador me gana al ajedrez, pero yo le gano boxeando.',
            'General: Soldado, ice la bandera\n Soldado: Pues le quedó muy bonita',
            '- A las 10 te pito y bajas.\n- ¿Te has comprado un coche?\n- No, un pito.',
            '¿Cuál es el coche favorito de un fotógrafo?\nEl Ford Focus',
            'Oye, ¿cuánto te costó esa terapia que hiciste para dejar de pensar en comida todo el rato?\n- Pimientos euros.',
            'Pero mira que te he dicho diez mil millones de veces que no exageres…',
            '¿Te gusta el rock progresivo?\n- Cada vez más.',
            '- Buf, me ha caído mal el estofado.\n- ¡Pues no le hables, hombre!',
            '- A mí me gustaría vivir en una isla desierta.\n- A mí también.',
            'Errar es humano, pero lo es todavía más echarle las culpas a otro.',
            'Pues sí, el viaje a la India me cambió la vida.\n- ¿Más langosta, señor?\n- Pero ponle curry.',
            'Suena el teléfono:\n- ¿Hola?\n- Hola.\n- ¿Es aquí donde lavan ropa?\n- No.\n- Pues sí que son guarros.',
            'Llaman a la puerta y es un técnico del ayuntamiento.\n- Perdone, pero vamos a proceder al derribo del edificio contiguo.\n- ¿Conmigo?'
        ]
    
        let rchiste = chiste[Math.floor(Math.random()*chiste.length)]
    
        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription(rchiste)

        if(message.guild.id !== '777620055344545842') return
        message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
    }

    //? REMINDERS NEKOTINA

    // var canal =  [

    //     '870195067338506271',
    //     '880336724662825040',
    //     '881432157602611230',
    //     '917258698202677258',
    //     '880260537659850792',
    //     '935391521480527922',
    //     '880295833252265994',
    //     '848755526347128872',
    //     '880317466557952000',
    //     '840421355736530985',
    //     '882258445334626344',
    //     '882258853767577621',
    //     '887820617632583772',
    //     '896865094250684466',
    //     '935454536678649856',
    //     '880319348496039946'

    // ]

    var canal = [
        
        '912790956057710623'
        
    ]

    if (message.content.toLowerCase() === 'mine'){

        if(!canal.some(id => message.channel.id === id)) return

        function reminder() {
    
            message.reply({embeds: [
    
              new Discord.MessageEmbed()
              .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
              .setThumbnail('https://c.tenor.com/AMnlFqJnKhwAAAAd/se-va-a-minar-minar.gif')
              .setColor('RANDOM')
              .setDescription('<a:flech:931432469935312937> | Es hora de ir a la mina<a:exclama2:880930071731392512>')
        
            ]})
    
        }

        const embed = new Discord.MessageEmbed()
        .setAuthor({ name: 'Nekotina', iconURL: client.user.avatarURL({ dynamic: true }) })
        .setTitle('<a:tiempogif:931434689481285662> Recordatorio activado para: *`'+message.author.username+'`*')
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setDescription('<a:flech:931432469935312937> Te recordaré dentro de `3 minutos` usar el comando `mine`.')
        .setColor('RANDOM')
        .setTimestamp(new Date())
        .setFooter({ text: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true }) })
        message.channel.send({ embeds: [embed] })

        setTimeout(reminder, 180000);

    }

    if (message.content.toLowerCase() === 'hmine'){

        if(!canal.some(id => message.channel.id === id)) return

        function reminder() {
    
            message.reply({embeds: [
    
              new Discord.MessageEmbed()
              .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
              .setThumbnail('https://c.tenor.com/AMnlFqJnKhwAAAAd/se-va-a-minar-minar.gif')
              .setColor('RANDOM')
              .setDescription('<a:flech:931432469935312937> | Es hora de ir a la mina, antes que se acabe el Haste<a:exclama2:880930071731392512>')
        
            ]})
    
        }

        const embed = new Discord.MessageEmbed()
        .setAuthor({ name: 'Nekotina', iconURL: client.user.avatarURL({ dynamic: true }) })
        .setTitle('<a:tiempogif:931434689481285662> Recordatorio activado para: *`'+message.author.username+'`*')
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setDescription('<a:flech:931432469935312937> Te recordaré dentro de `1 minuto y 20 segundos` usar el comando `mine`.')
        .setColor('RANDOM')
        .setTimestamp(new Date())
        .setFooter({ text: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true }) })
        message.channel.send({ embeds: [embed] })

        setTimeout(reminder, 80000);

    }

    if (message.content.toLowerCase() === 'fish'){

        if(!canal.some(id => message.channel.id === id)) return
        
        function reminder() {
    
            message.reply({embeds: [
    
              new Discord.MessageEmbed()
              .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
              .setThumbnail('https://www.gifsanimados.org/data/media/157/pesca-imagen-animada-0057.gif')
              .setColor('RANDOM')
              .setDescription('<a:flech:931432469935312937> | Es hora de ir a la pesca<a:exclama2:880930071731392512>')
        
            ]})
    
        }

        const embed = new Discord.MessageEmbed()
        .setAuthor({ name: 'Nekotina', iconURL: client.user.avatarURL({ dynamic: true }) })
        .setTitle('<a:tiempogif:931434689481285662> Recordatorio activado para: *`'+message.author.username+'`*')
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setDescription('<a:flech:931432469935312937> Te recordaré dentro de `3 minutos` usar el comando `fish`.')
        .setColor('RANDOM')
        .setTimestamp(new Date())
        .setFooter({ text: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true }) })
        message.channel.send({ embeds: [embed] })

        setTimeout(reminder, 180000);

    }

    if (message.content.toLowerCase() === 'hfish'){

        if(!canal.some(id => message.channel.id === id)) return
        
        function reminder() {
    
            message.reply({embeds: [
    
              new Discord.MessageEmbed()
              .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
              .setThumbnail('https://www.gifsanimados.org/data/media/157/pesca-imagen-animada-0057.gif')
              .setColor('RANDOM')
              .setDescription('<a:flech:931432469935312937> | Es hora de ir a la pesca, antes que se acabe el Haste<a:exclama2:880930071731392512>')
        
            ]})
    
        }

        const embed = new Discord.MessageEmbed()
        .setAuthor({ name: 'Nekotina', iconURL: client.user.avatarURL({ dynamic: true }) })
        .setTitle('<a:tiempogif:931434689481285662> Recordatorio activado para: *`'+message.author.username+'`*')
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setDescription('<a:flech:931432469935312937> Te recordaré dentro de `1 minuto y 20 segundos` usar el comando `fish`.')
        .setColor('RANDOM')
        .setTimestamp(new Date())
        .setFooter({ text: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true }) })
        message.channel.send({ embeds: [embed] })

        setTimeout(reminder, 80000);

    }

    if (message.content.toLowerCase() === 'pet'){

        if(!canal.some(id => message.channel.id === id)) return
        
        function reminder() {
    
            message.reply({embeds: [
    
              new Discord.MessageEmbed()
              .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
              .setThumbnail('https://c.tenor.com/AMnlFqJnKhwAAAAd/se-va-a-minar-minar.gif')
              .setColor('RANDOM')
              .setDescription('<a:flech:931432469935312937> | Tu mascota ya está lista para regresar<a:exclama2:880930071731392512>')
        
            ]})
    
        }

        const embed = new Discord.MessageEmbed()
        .setAuthor({ name: 'Nekotina', iconURL: client.user.avatarURL({ dynamic: true }) })
        .setTitle('<a:tiempogif:931434689481285662> Recordatorio activado para: *`'+message.author.username+'`*')
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setDescription('<a:Dancing_Duck:930402083625111613> Le deseo un buen viaje a tu `pet` y que te traiga algo muy bueno!\n<a:flech:931432469935312937> Te recordaré en `30 minutos`.')
        .setColor('RANDOM')
        .setTimestamp(new Date())
        .setFooter({ text: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true }) })
        message.channel.send({ embeds: [embed] })

        setTimeout(reminder, 1800000);

    }

    if (message.content.toLowerCase() === 'hpet'){

        if(!canal.some(id => message.channel.id === id)) return
        
        function reminder() {
    
            message.reply({embeds: [
    
              new Discord.MessageEmbed()
              .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
              .setThumbnail('https://c.tenor.com/AMnlFqJnKhwAAAAd/se-va-a-minar-minar.gif')
              .setColor('RANDOM')
              .setDescription('<a:flech:931432469935312937> | Tu mascota ya está lista para regresar<a:exclama2:880930071731392512>')
        
            ]})
    
        }

        const embed = new Discord.MessageEmbed()
        .setAuthor({ name: 'Nekotina', iconURL: client.user.avatarURL({ dynamic: true }) })
        .setTitle('<a:tiempogif:931434689481285662> Recordatorio activado para: *`'+message.author.username+'`*')
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setDescription('<a:Dancing_Duck:930402083625111613> Le deseo un buen viaje a tu `pet` y que te traiga algo muy bueno, antes que se acabe el Haste!\n<a:flech:931432469935312937> Te recordaré en `15 minutos`.')
        .setColor('RANDOM')
        .setTimestamp(new Date())
        .setFooter({ text: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true }) })
        message.channel.send({ embeds: [embed] })

        setTimeout(reminder, 900000);

    }

    if (message.content.toLowerCase() === 'work'){

        if(!canal.some(id => message.channel.id === id)) return
        
        function reminder() {
    
            message.reply({embeds: [
    
              new Discord.MessageEmbed()
              .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
              .setThumbnail('https://i.giphy.com/media/7E8tiGcPf1G78dMXRf/giphy.gif')
              .setColor('RANDOM')
              .setDescription('<a:flech:931432469935312937> | Es hora de ir a trabajar<a:exclama2:880930071731392512>')
        
            ]})
    
        }

        const embed = new Discord.MessageEmbed()
        .setAuthor({ name: 'Nekotina', iconURL: client.user.avatarURL({ dynamic: true }) })
        .setTitle('<a:tiempogif:931434689481285662> Recordatorio activado para: *`'+message.author.username+'`*')
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setDescription('<a:flech:931432469935312937> Te recordaré dentro de `1 hora` usar el comando `work`.')
        .setColor('RANDOM')
        .setTimestamp(new Date())
        .setFooter({ text: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true }) })
        message.channel.send({ embeds: [embed] })

        setTimeout(reminder, 3600000);

    }

    if (message.content.toLowerCase() === 'hwork'){

        if(!canal.some(id => message.channel.id === id)) return
        
        function reminder() {
    
            message.reply({embeds: [
    
              new Discord.MessageEmbed()
              .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
              .setThumbnail('https://i.giphy.com/media/7E8tiGcPf1G78dMXRf/giphy.gif')
              .setColor('RANDOM')
              .setDescription('<a:flech:931432469935312937> | Es hora de ir a trabajar, antes que se acabe el Haste<a:exclama2:880930071731392512>')
        
            ]})
    
        }

        const embed = new Discord.MessageEmbed()
        .setAuthor({ name: 'Nekotina', iconURL: client.user.avatarURL({ dynamic: true }) })
        .setTitle('<a:tiempogif:931434689481285662> Recordatorio activado para: *`'+message.author.username+'`*')
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setDescription('<a:flech:931432469935312937> Te recordaré dentro de `30 minutos` usar el comando `work`.')
        .setColor('RANDOM')
        .setTimestamp(new Date())
        .setFooter({ text: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true }) })
        message.channel.send({ embeds: [embed] })

        setTimeout(reminder, 1800000);

    }

    if (message.content.toLowerCase() === 'zodiac'){

        if(!canal.some(id => message.channel.id === id)) return
        
        function reminder() {
    
            message.reply({embeds: [
    
              new Discord.MessageEmbed()
              .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
              .setThumbnail('https://i.giphy.com/media/7E8tiGcPf1G78dMXRf/giphy.gif')
              .setColor('RANDOM')
              .setDescription('<a:flech:931432469935312937> | Es hora de recoger lo que tu zodiac recolectó para ti<a:exclama2:880930071731392512>')
        
            ]})
    
        }

        const embed = new Discord.MessageEmbed()
        .setAuthor({ name: 'Nekotina', iconURL: client.user.avatarURL({ dynamic: true }) })
        .setTitle('<a:tiempogif:931434689481285662> Recordatorio activado para: *`'+message.author.username+'`*')
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setDescription('<a:flech:931432469935312937> Te recordaré dentro de `1 hora` usar el comando `work`.')
        .setColor('RANDOM')
        .setTimestamp(new Date())
        .setFooter({ text: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true }) })
        message.channel.send({ embeds: [embed] })

        setTimeout(reminder, 3600000);

    }

    if (message.content.toLowerCase() === 'wf'){

        if(!canal.some(id => message.channel.id === id)) return
        
        function reminder() {
    
            message.reply({embeds: [
    
              new Discord.MessageEmbed()
              .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
              .setThumbnail('https://c.tenor.com/rvnbqOmEEXIAAAAC/cute-loli-waifu.gif')
              .setColor('RANDOM')
              .setDescription('<a:flech:931432469935312937> | Ya puedes volver a votar por tu waifu favorita<a:exclama2:880930071731392512>')
        
            ]})
    
        }

        const embed = new Discord.MessageEmbed()
        .setAuthor({ name: 'Nekotina', iconURL: client.user.avatarURL({ dynamic: true }) })
        .setTitle('<a:tiempogif:931434689481285662> Recordatorio activado para: *`'+message.author.username+'`*')
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setDescription('<a:flech:931432469935312937> Te recordaré dentro de `6 horas` volver a votar por tu `waifu`.')
        .setColor('RANDOM')
        .setTimestamp(new Date())
        .setFooter({ text: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true }) })
        message.channel.send({ embeds: [embed] })

        setTimeout(reminder, 21600000);

    }

    if (message.content.toLowerCase() === 'hb'){

        if(!canal.some(id => message.channel.id === id)) return
        
        function reminder() {
    
            message.reply({embeds: [
    
              new Discord.MessageEmbed()
              .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
              .setThumbnail('https://i.gifer.com/8WlW.gif')
              .setColor('RANDOM')
              .setDescription('<a:flech:931432469935312937> | Ya puedes volver a votar por tu husbando favorito<a:exclama2:880930071731392512>')
        
            ]})
    
        }

        const embed = new Discord.MessageEmbed()
        .setAuthor({ name: 'Nekotina', iconURL: client.user.avatarURL({ dynamic: true }) })
        .setTitle('<a:tiempogif:931434689481285662> Recordatorio activado para: *`'+message.author.username+'`*')
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setDescription('<a:flech:931432469935312937> Te recordaré dentro de `6 horas` volver a votar por tu `husbando`.')
        .setColor('RANDOM')
        .setTimestamp(new Date())
        .setFooter({ text: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true }) })
        message.channel.send({ embeds: [embed] })

        setTimeout(reminder, 21600000);

    }

    if (message.content.toLowerCase() === 'rep'){

        if(!canal.some(id => message.channel.id === id)) return
        
        function reminder() {
    
            message.reply({embeds: [
    
              new Discord.MessageEmbed()
              .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
              .setThumbnail('http://3.bp.blogspot.com/-gU7DGjh_SSQ/VgMc-zPIeKI/AAAAAAAA2R8/ZjnSgT77tZw/s1600/hotel-27.gif')
              .setColor('RANDOM')
              .setDescription('<a:flech:931432469935312937> | Ya puedes volver a dar rep<a:exclama2:880930071731392512>')
        
            ]})
    
        }

        const embed = new Discord.MessageEmbed()
        .setAuthor({ name: 'Nekotina', iconURL: client.user.avatarURL({ dynamic: true }) })
        .setTitle('<a:tiempogif:931434689481285662> Recordatorio activado para: *`'+message.author.username+'`*')
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setDescription('<a:flech:931432469935312937> Te recordaré dentro de `6 horas` usar el comando `rep`.')
        .setColor('RANDOM')
        .setTimestamp(new Date())
        .setFooter({ text: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true }) })
        message.channel.send({ embeds: [embed] })

        setTimeout(reminder, 21600000);

    }

    if (message.content.toLowerCase() === 'farm'){

        if(!canal.some(id => message.channel.id === id)) return
        
        function reminder() {
    
            message.reply({embeds: [
    
              new Discord.MessageEmbed()
              .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
              .setThumbnail('http://olegif.com/bin/gifs/00/49/46.gif')
              .setColor('RANDOM')
              .setDescription('<a:flech:931432469935312937> | Es hora de farmear<a:exclama2:880930071731392512>')
        
            ]})
    
        }

        const embed = new Discord.MessageEmbed()
        .setAuthor({ name: 'Nekotina', iconURL: client.user.avatarURL({ dynamic: true }) })
        .setTitle('<a:tiempogif:931434689481285662> Recordatorio activado para: *`'+message.author.username+'`*')
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setDescription('<a:flech:931432469935312937> Te recordaré dentro de `6 minutos` usar los comandos de farmeo: `mine` y `fish`.')
        .setColor('RANDOM')
        .setTimestamp(new Date())
        .setFooter({ text: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true }) })
        message.channel.send({ embeds: [embed] })

        setTimeout(reminder, 360000);

    }

    if (message.content.toLowerCase() === 'hfarm'){

        if(!canal.some(id => message.channel.id === id)) return
        
        function reminder() {
    
            message.reply({embeds: [
    
              new Discord.MessageEmbed()
              .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
              .setThumbnail('http://olegif.com/bin/gifs/00/49/46.gif')
              .setColor('RANDOM')
              .setDescription('<a:flech:931432469935312937> | Es hora de farmear, antes que se acabe el haste<a:exclama2:880930071731392512>')
        
            ]})
    
        }

        const embed = new Discord.MessageEmbed()
        .setAuthor({ name: 'Nekotina', iconURL: client.user.avatarURL({ dynamic: true }) })
        .setTitle('<a:tiempogif:931434689481285662> Recordatorio activado para: *`'+message.author.username+'`*')
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setDescription('<a:flech:931432469935312937> Te recordaré dentro de `3 minutos` usar los comandos de farmeo: `mine` y `fish`.')
        .setColor('RANDOM')
        .setTimestamp(new Date())
        .setFooter({ text: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true }) })
        message.channel.send({ embeds: [embed] })

        setTimeout(reminder, 180000);

    }


    //& COMANDO ALIANZAS BABEL

    if(message.channel.id === '961001644294824017'){

        if(message.content.includes('https://discord.gg/')){

            try {

                const invite = await client.fetchInvite(message.content)
    
                const embed = new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                .setColor('RANDOM')
                .setTimestamp(new Date())
                .setFooter({ text: '!capply Midgard', iconURL: 'https://i.imgur.com/aaky0WD.png' })
    
                if(invite.guild){

                    if(invite.guild.bannerURL()){

                        embed.setThumbnail(invite.guild.iconURL() ? invite.guild.iconURL({ dynamic: true, size: 4096 }).replace('webp','png') : message.author.displayAvatarURL({ dynamic: true, size: 4096 }).replace('webp','png') )
                        embed.setImage(invite.guild.bannerURL({ size: 2048, format: 'gif' }))

                    }else {

                        embed.setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 4096 }).replace('webp','png'))
                        embed.setImage(invite.guild.iconURL({ dynamic: true, size: 4096 }))

                    }
    
                    embed.setTitle('<:babel_Midgard:978300970868035604> __𝑩𝒂𝒃𝒆𝒍 𝑨𝒃𝒊𝒆𝒓𝒕𝒐 𝒆𝒏:__ ')
                    embed.setDescription('\n\n◞┈┈┈⋆┈┈⊰✩⊱┈┈⋆┈┈┈◟\n\n     ★ ' + invite.guild.name + ' ★     \n\n◝┈┈┈⋆┈┈⊰✩⊱┈┈⋆┈┈┈◜\n\n' + (invite.inviter ? invite.inviter.toString() : invite.guild.name) + ' **Te invita** <a:ositotikabella:880307057981542432> a disfrutar de la apertura de :tokyo_tower: *Babel*\n\n<:Awebo_a_simpiar:901600161875259452> *A por muchas <:Bolsitas_Midgard:978305556311838800> bolsitas y ese preciado <:hmorado_Midgard:978305606098255902> __Thanatos__*\n\n<a:Flecha3:880315279903703060> **Recuerda** que solo tienes <a:reloj:915171222961135646> **12 HORAS!!!!**')
    
                    message.reply({ content: '<@&960987738553868348>', embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
                
                    setTimeout(() => {
                        
                        message.channel.send({ content: 'https://images-ext-2.discordapp.net/external/9iPHKFXXnKKSQpcFazlW79dr1zbbtdo7QT7-xxtfDY4/%3Fwidth%3D600%26height%3D86/https/media.discordapp.net/attachments/897951731462316073/915663567213199390/bar-1.gif?width=450&height=65' }).catch((e) => console.log('Error al enviar mensaje: '+e))
                     
                    }, 1000)

                }else {
    
                    return logschannel.send({ content: '<@753435606410985573> <@683501310527668228>\n```El link enviado por: ' + message.author.username + ' No pertenece a un servidor.```' }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
                }
                   
            } catch (error) {
                
                if(error.message === 'Unknown Invite'){
    
                    return logschannel.send({ content: '<@753435606410985573> <@683501310527668228>\n```La API respondió que la invitación enviada por ' + message.author.username + ' es Desconocida o No existe```' }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
                } else{
                    
                    return logschannel.send({ content: '<@753435606410985573> <@683501310527668228>\n```Ocurrió un error al intentar buscar información del link enviado por ' + message.author.username + '. \nError: ' + error + '```' }).catch((e) => console.log('Error al enviar mensaje: '+e))
                }
        
            }
            
        }


    }

    //& COMANDO ALIANZAS BABEL


    //% COMANDO BARRA GIF

    if(message.content.toLowerCase() === 'barra'){

        if(message.guild.id !== '777620055344545842') return
        
        let idadmins = ['753435606410985573','683501310527668228']
  
        if(!idadmins.some(id => message.author.id === id)) return 
        
        setTimeout(() => message.delete(), 100)
        
        message.channel.send('https://images-ext-2.discordapp.net/external/9iPHKFXXnKKSQpcFazlW79dr1zbbtdo7QT7-xxtfDY4/%3Fwidth%3D600%26height%3D86/https/media.discordapp.net/attachments/897951731462316073/915663567213199390/bar-1.gif?width=450&height=65').catch((e) => console.log('Error al enviar mensaje: '+e))
        
    }

    //% COMANDO BARRA GIF

    //& COMANDO CMEMBER UPDATE XP

    /*if(message.content.toLowerCase() === '!cmember'){
            
        if(message.channel.id !== '941504777056038922') return

        let fields, idxpclub, xpclub, indexid, indexxp, indexa, topchannel, userxp, subtotal, lista, dem, demxp, first, c, best, pos

        message.channel.sendTyping().then(async me => {
            
            let filter = a => a.author.id == '429457053791158281'

            const collector = message.channel.createMessageCollector({ filter, idle: 60000, max: 1 })
            
            collector.on('collect', async m => {
               
                try {
                    
                    fields = JSON.stringify(m.embeds, ['fields','value'], 2)

                    if(fields.includes(message.author.id)){

                        indexid = fields.indexOf(message.author.id)

                        idxpclub = fields.substring(indexid, indexid + 18)

                    }

                    if(fields.includes('**Experiencia:**')){

                        indexxp = fields.indexOf('**Experiencia:**')

                        indexa = fields.indexOf('**Aniversario:**')

                        xpclub = fields.substring(indexxp + 17, indexa - 2).replace(/,/g, '')

                    }

                    if(!xpclub || xpclub === undefined || xpclub === '' || xpclub === ' ' || parseInt(xpclub) < 0){

                        logschannel.send({ content: '```Error al detectar XP en el contenido del embed: ' + xpclub + '```' }).catch((e) => console.log('Error al enviar mensaje de logs: ' + e))

                        m.react('<a:Verify2:931463492677017650>').catch((e) => console.log('Error al reaccionar mensaje: '+e))

                        return

                    }

                } catch (error) {
                    
                    logschannel.send({ content: '```Ocurrió un error al obtener datos del embed: ' + error + '```' }).catch((e) => console.log('Error al enviar mensaje de logs: ' + e))

                    m.react('<a:Verify2:931463492677017650>').catch((e) => console.log('Error al reaccionar mensaje: '+e))

                    return

                }
                
                topchannel = client.channels.cache.get('970094487059709953')

                try {

                    userxp = await xpclubSchema.findOne({ idusuario: idxpclub })
                
                    if(!userxp){
        
                        return

                    } else{
        
                        if(userxp.xpinicial > xpclub){
                         
                            logschannel.send({ content: '```El XP ingresado es menor que el XP inicial del participante: ' + idxpclub + '```' }).catch((e) => console.log('Error al enviar mensaje de logs: ' + e))

                            m.react('<a:Verify2:931463492677017650>').catch((e) => console.log('Error al reaccionar mensaje: '+e))

                            return
                            
                        }

                        subtotal = xpclub - userxp.xpinicial
        
                        console.log('========================= ACTUALIZACIÓN DE XP CLUB =========================');
                                
                        let update = await xpclubSchema.findOneAndUpdate({idusuario: idxpclub},
                            {
        
                                xpfinal: xpclub,
                                xpsubtotal: subtotal,
                                xptotal: subtotal + userxp.xpadicional
        
                            })
        
                        update.save()
                        console.log('XP de Participante Registrado ===> Id: '+ idxpclub + ' - XP inicial: ' + userxp.xpinicial + ' - Total XP: ' + subtotal)
                         
                        console.log('========================= ACTUALIZACIÓN DE XP CLUB =========================');
        
                        m.react('<a:cargando:887482093481902101>').catch((e) => console.log('Error al reaccionar mensaje: '+e))

                        try {
                    
                            lista = await xpclubSchema.find().sort({ xptotal: -1 })
                
                            dem = new Discord.MessageEmbed()
                            demxp = new Discord.MessageEmbed()
                
                            first = []
                
                            c = 1
                            pos = 0
                
                            var tablexp = new AsciiTable()
                            var tablexpm = new AsciiTable()
                            // tablexp.setHeading('**N°**','**Participante**','**XP**','**Extra**','**TOTAL**')
                            // tablexp.setHeadingAlignCenter()
            
                            for(let ls of lista){
                
                                pos = pos + 1

                                if(c <= 10){
                                    
                                    tablexp.addRow('**' + c + '.**', '<@' + ls.idusuario + '>\n\n> *XP:* ' + ls.xpsubtotal + '  |  *Extra:* ' + ls.xpadicional + '\n> *TOTAL:* **' + ls.xptotal + '**\n\n')
                                    first.push(ls.idusuario)
                                    c = c + 1

                                }
                                
                                if(ls.idusuario === message.author.id){

                                    tablexpm.addRow('> <:flech:982579866358673448> 𝚇𝙿: ', '**' + ls.xpsubtotal + '**')
                                    tablexpm.addRow('> <:flech:982579866358673448> 𝙰𝚍𝚒𝚌𝚒𝚘𝚗𝚊𝚕: ', '**' + ls.xpadicional + '**')
                                    tablexpm.addRow('> <:flech:982579866358673448> 𝚃𝚘𝚝𝚊𝚕: ', '**' + ls.xptotal + '**')
                                    tablexpm.setAlignLeft(0)
                                    tablexpm.setAlignRight(1)
                                    tablexpm.removeBorder()
                                    tablexpm.setJustify()
                                    demxp.setDescription('> <:estrellita:982579093365215252> 𝙿𝚘𝚜𝚒𝚌𝚒𝚘́𝚗: **' + pos + '**\n> \n' + tablexpm.toString())

                                }
                        
                            }
                            
                            tablexp.setAlignCenter(0)
                            tablexp.setAlignCenter(1)
                            // tablexp.setAlignRight(2)
                            // tablexp.setAlignRight(3)
                            // tablexp.setAlignRight(4)
                            tablexp.removeBorder()

                            if(!lista){
    
                                logschannel.send({ content: '```No se encontró datos en la BD XP Club: ' + datos + '```' }).catch((e) => console.log('Error al enviar mensaje de logs: ' + e))
    
                                m.react('<a:Verify2:931463492677017650>').catch((e) => console.log('Error al reaccionar mensaje: '+e))
    
                                return
    
                            }
                
                            best = client.users.cache.get(first[0])
            
                            dem.setTitle('𝑴𝒊𝒅𝒈𝒂𝒓𝒅 𝑿𝑷 𝑹𝒂𝒄𝒆 💎')
                            dem.setThumbnail(best.displayAvatarURL() ? best.displayAvatarURL({dynamic: true, size: 2048}) : message.guild.iconURL({ dynamic: true, size: 2048 }))
                            dem.setImage('https://i.imgur.com/VKOLvQT.gif')
                            dem.setDescription(tablexp.toString())   	
                            dem.setColor("RANDOM")
                            dem.setTimestamp(new Date())
                            dem.setFooter({ text: '𝐌𝐢𝐝𝐠𝐚𝐫𝐝 𝐍𝐞𝐤𝐨𝐂𝐥𝐮𝐛', iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true, size: 2048 }) : 'https://i.imgur.com/MNWYvup.gif' })
            
                            demxp.setTitle('𝑴𝒊𝒅𝒈𝒂𝒓𝒅 𝑿𝑷 𝑹𝒂𝒄𝒆 💎')
                            demxp.setAuthor({ name: message.author.username+'#'+message.author.discriminator, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
                            demxp.setColor("RANDOM")
                            demxp.setTimestamp(new Date())
                            demxp.setFooter({ text: '𝐌𝐢𝐝𝐠𝐚𝐫𝐝 𝐍𝐞𝐤𝐨𝐂𝐥𝐮𝐛', iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true, size: 2048 }) : 'https://i.imgur.com/MNWYvup.gif' })
            
                            setTimeout(() => {
                        
                                topchannel.bulkDelete(3).catch((e) => console.log('Error al eliminar mensajes: '+e))
                                topchannel.send('https://images-ext-2.discordapp.net/external/9iPHKFXXnKKSQpcFazlW79dr1zbbtdo7QT7-xxtfDY4/%3Fwidth%3D600%26height%3D86/https/media.discordapp.net/attachments/897951731462316073/915663567213199390/bar-1.gif?width=450&height=65').catch((e) => console.log('Error al enviar mensaje: '+e))
                                topchannel.send({ embeds: [dem] }).catch((e) => console.log('Error al enviar mensaje: '+e))
                                topchannel.send('https://images-ext-2.discordapp.net/external/9iPHKFXXnKKSQpcFazlW79dr1zbbtdo7QT7-xxtfDY4/%3Fwidth%3D600%26height%3D86/https/media.discordapp.net/attachments/897951731462316073/915663567213199390/bar-1.gif?width=450&height=65').catch((e) => console.log('Error al enviar mensaje: '+e))
            
                                m.reactions.removeAll().then(() => {

                                    m.react('<a:Verify1:931463354357276742>').catch((e) => console.log('Error al reaccionar mensaje: '+e))

                                }).catch((e) => console.log('Error al reaccionar mensaje: '+e))
    
                                message.reply({ allowedMentions: { repliedUser: false }, embeds: [demxp] }).catch((e) => console.log('Error al enviar mensaje: '+e))

                            }, 5000)
    
                            
                        } catch (error) {
                            
                            logschannel.send({ content: '```Ocurrió un error al consultar Lista de BD XP CLub: ' + error + '```' }).catch((e) => console.log('Error al enviar mensaje de logs: ' + e))

                            m.react('<a:Verify2:931463492677017650>').catch((e) => console.log('Error al reaccionar mensaje: '+e))

                            return

                        }

                    }
                    
                } catch (error) {
        
                    logschannel.send({ content: '```Ocurrió un error al actualizar Lista de BD XP CLub: ' + error + '```' }).catch((e) => console.log('Error al enviar mensaje de logs: ' + e))

                    m.react('<a:Verify2:931463492677017650>').catch((e) => console.log('Error al reaccionar mensaje: '+e))

                    return

                }

                
            })
            
            collector.on('end', async (collected, reason) => {
                
                if(collected.size < 1 || reason === 'time') return

            })
            
        }).catch((e) => {
            
            console.log('Error al enviar contenido del embed: ' + e)
            logschannel.send({ content: '```Error al detectar y enviar contenido del embed: ' + e + '```' }).catch((e) => console.log('Error al enviar mensaje de logs: ' + e))
        
        })

    }*/

    //& COMANDO CMEMBER UPDATE XP

    
    let bot = new RegExp(`^<@!?${'904290001196556369'}>( |)$`);
    
    if (message.content.match(bot))
    {
    
        const embed = new Discord.MessageEmbed()
        .setAuthor({ name: message.author.username+'#'+message.author.discriminator, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
        .setDescription('Hola! **'+ message.author.username +'** Mi Prefix en  **' + message.guild.name + '**  es: `' + prefix + '`\nPuedes ver mis comandos disponibles usando: `' + prefix + 'help`. Para enviar un reporte usa: `' + prefix + 'report` y para una sugerencia: `' + prefix + 'suggestion`.')
        .setColor('RANDOM')
        message.reply({ allowedMentions: { repliedUser: false }, embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
    }

    //var mencionbot = message.content.startsWith('mg') || message.content.startsWith('Mg') || message.content.startsWith('MG')
    //console.log(mencionbot+' mencion: '+client.user.id)

    if(!message.content.startsWith(prefix)) return; 
  
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()
    //const prueba = message.content.split(' ')

    if(!command) return
    
    try {
        
        let userbl = await blSchema.findOne({idusuario: message.author.id})

        if(userbl)
        {

            console.log('Usuario en Lista Negra ===> Id: '+ message.author.id + ' Username: ' + message.author.username)
            
            const e = new Discord.MessageEmbed()
            .setAuthor({ name: message.author.username+'#'+message.author.discriminator, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
            .setColor('RED')
            .setDescription('<a:Verify2:931463492677017650> | ¡Estás prohibido de usar estos comandos!\n\n**Razón:**\n`'+userbl.reason+'`\n\nContacta con el equipo de desarrolladores para más información.!')
          
            return message.channel.send({embeds: [e]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        }

    } catch (error) {

        console.log('Error al buscar (comando) en la Tabla BL: '+ error)

    }

    let cmd = client.commands.get(command) ||
              client.commands.find((a) => a.aliases && a.aliases.includes(command)); // Obtiene el comando de la colección client.commandos
  
    let canalcmd = client.channels.cache.get('965156845712994314')

    if(!cmd){

        let similares = []

        client.commands.map((comando) => {

            similares.push(comando.name)

        })

        const matches = Similar.findBestMatch(command, similares);

        similares = [];

        matches.ratings.map((rating) => {
            
            rating.rating > 0.5 ? similares.push(rating.target) : false;
                  
        });

        const e = new Discord.MessageEmbed()
        .setAuthor({ name: message.author.username+'#'+message.author.discriminator, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
        .setColor('RED')
        .setDescription(`<a:Verify2:931463492677017650> | El comando **${command}** no existe!\n\n> Sugerencias: ${similares.map(s => `**${s}**`).join(' - ') || 'No tengo sugerencias'}`)
        
        return message.channel.send({embeds: [e]})
        .then(m => setTimeout(() => m.delete(), 15000))
        .catch((e) => console.log('Error al enviar mensaje: '+e))

    } else{

        if(cmd.owner == true){

            if(message.author.id != config.IdOwner){
                
                const e = new Discord.MessageEmbed()
                .setAuthor({ name: message.author.username+'#'+message.author.discriminator, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | El comando **${command}** no existe!\n\n> Sugerencias: No tengo sugerencias`)
                
                return message.channel.send({embeds: [e]})
                .then(m => setTimeout(() => m.delete(), 15000))
                .catch((e) => console.log('Error al enviar mensaje: '+e))

            }

        }

        try {

            cmd.execute(client, message, args, Discord)

            let xyz = (message.content ? message.content : 'No se pudo obtener mensaje')

            if(xyz.length >= 1000){

                xyz = 'Contenido del comando demasiado largo.'

            }

            const embedcmd = new Discord.MessageEmbed()
            .setThumbnail(message.author.displayAvatarURL() ? message.author.displayAvatarURL({ dynamic: true , size: 2048 }).replace('webp','png') : client.user.avatarURL({ dynamic: true }))
            .setAuthor({ name: 'MidgardBot', iconURL: client.user.avatarURL({ dynamic: true}) })
            .setTitle('📢 | Comando Ejecutado: ' + (cmd ? cmd.name : 'No se pudo obtener comando'))
            .addField('\u200B','\u200B')
            .addField('Servidor: ', `<a:flech:931432469935312937> ${message.guild.name}`)
            .addField('Canal: ', `<a:flech:931432469935312937> <#${idcanal}>`)
            .addField('Autor: ', `<a:flech:931432469935312937> ${message.author}`)
            .addField('Comando: ', '> ' + xyz )
            .addField('\u200B','\u200B')
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `ID: ${message.author.id}`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : client.user.avatarURL({ dynamic: true }) })
            
            canalcmd.send({ embeds: [embedcmd] }).catch((e) => {
                
                console.log('Error al enviar mensaje: '+e)
                logschannel.send({ content: 'Error al enviar embed de comando ' + cmd.name + ' - ' + e })
            
            })

        } catch (error) {

            console.log('Error al ejecutar comando: '+error)
            logschannel.send({ content: 'Error al ejecutar comando ' + cmd.name + ' - ' + e })
          
        }

        //* Registro de Usuarios

        let userData;

        try {

            userData = await userModel.findOne({idusuario: message.author.id})

            if(!userData){

                console.log('========================= REGISTRO DE USUARIO =========================');
        
                let user = await userModel.create({

                    idusuario: message.author.id,
                    username: message.author.username,
    
                })
    
                user.save();
                console.log('Usuario Registrado ===> Id: '+ message.author.id + ' Username: ' + message.author.username)
   
                console.log('========================= REGISTRO DE USUARIO =========================');
   
            } else {

                //<-- UPDATE EXPERIENCIA/NIVELES -->
            
                console.log('========================= UPDATE EXPERIENCIA DE USUARIO =========================');
   
                let curLevel = Math.floor(0.1 * Math.sqrt(userData.exp + 1));

                if(curLevel > userData.nivel) {

                    let update = await userModel.findOneAndUpdate({idusuario: message.author.id},
                        {

                            exp: userData.exp + 1,
                            nivel: curLevel,
                            banco: userData.banco + (curLevel*1000),
                            total: userData.dinero + userData.banco + (curLevel*1000)

                        })

                    update.save()

                    console.log('Usuario: '+message.author.id+' ha subido al nivel: '+curLevel)
      
                }

                if(userData.vip === true) {

                    let update = await userModel.findOneAndUpdate({idusuario: message.author.id},
                        {
    
                            exp: userData.exp + 2
                            
                        })
    
                    update.save()

                } else if (userData.vip === false){

                    let update = await userModel.findOneAndUpdate({idusuario: message.author.id},
                        {
    
                            exp: userData.exp + 1
    
                        })
    
                    update.save()

                }

            }
   
        } catch (error) {

            console.log('Error al Registrar Usuario: '+ error)
    
        }
  
        //* Registro de Usuarios

    }
    
}