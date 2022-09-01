const tresenraya = require('tresenraya');
const { MessageActionRow, MessageButton } = require('discord.js');
const blSchema = require('../../models/blSchema');

module.exports =  {
    
    name: 'ttt',
    aliases: ['3enraya','tictactoe','tresenraya'],
    description: '#️⃣ Juega Tic Tac Toe con algún miembro del servidor.',
  
    async execute(client, message, args, Discord) {

        if (tresenraya.partidas.map(x => x).some(x => message.author.id) && args[0] ?.toLowerCase() !== "stop") return message.reply("Ya estás en una partida!").then(m => {
            setTimeout(() => m.delete(), 10000)
          }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
          let member = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
    
          /* Verificamos los argumentos */
        
          if (!member) return message.reply({ allowedMentions: { repliedUser: false}, content: "Para jugar debes mencionar a alguien."}).catch((e) => console.log('Error al enviar mensaje: '+e)) //Si el no mencionó a alguien retornamos 
        
          if (member.id === message.author.id) return message.reply({ allowedMentions: { repliedUser: false}, content: "Según las reglas del juego no puedes competir contigo mismo U.U"}).catch((e) => console.log('Error al enviar mensaje: '+e)) //Si se mencionó el mismo retornamos.
        
          if (member.user.bot) return message.reply({ allowedMentions: { repliedUser: false}, content: "No puedes competir contra un bot"}).catch((e) => console.log('Error al enviar mensaje: '+e)) //Si el mencionado es un bot retornamos.
    
          try {
        
            let userbl = await blSchema.findOne({idusuario: member.id})
    
            if(userbl)
            {
    
                console.log('Usuario en Lista Negra ===> Id: '+ member.id + ' Username: ' + member.username)
                
                const e = new Discord.MessageEmbed()
                .setAuthor({ name: message.author.username+'#'+message.author.discriminator, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
                .setColor('RED')
                .setDescription('<a:Verify2:931463492677017650> | ¡No puedes jugar con el usuario mencionado debido a que está en mi Black List! <:nimoro:887176572711342120>')
              
                return message.reply({embeds: [e]}).catch((e) => console.log('Error al enviar mensaje: '+e))
    
            }
    
        } catch (error) {
    
            console.log('Error al buscar (comando) en la Tabla BL: '+ error)
    
        }

          message.reply({ allowedMentions: { repliedUser: false}, 
            content: member.toString() + ", ¿aceptas jugar **Tres en raya** contra " + message.author.toString() + "?",
            components: [
              /* Botones para aceptar y rechazar el juego */
              new MessageActionRow().addComponents([
                new MessageButton()
                  .setCustomId("acceptJuegoTTT")
                  .setLabel("SI")
                  .setStyle("SUCCESS"),
                new MessageButton()
                  .setCustomId("denyJuegoTTT")
                  .setLabel("NO")
                  .setStyle("DANGER")
              ])
            ]
          }).then(async m => {
          
            /* Creamos un collector de componentes para detectar lainteracción con los botones */
            
            let filter = int => int.isButton() && int.user.id == member.id //Agregamos el filtro para que solo permita que el miembro mencionado interactue con los botones.
           
            const collector = m.createMessageComponentCollector({ filter, max: 1, maxUsers: 1, maxComponents: 1, time: 30000 /* Tiempo para que el miembro interatue con los botones */ });
            
            
            collector.on("collect", async int => {
              
              /* Cuando el miembro mencionado de click en un boton */
              
              int.deferUpdate();
              
              /* Si dio click en el boton aceptar ... */
              
              if (int.customId === "acceptJuegoTTT") {
                
                /* Creamos una nueva partida con los jugadores y lo guardamos en una constante llamada "game", el id es para detectar si ya esta en una partida */
                
                const game = new tresenraya.partida({
                  jugadores: [message.author.id, member.id],
                  id: message.author.id
                });
                
                //Enviamos un mensaje cuando empieze el juego y lo guardamos en una variable.
                
                let msg = await m.edit({
                  content: "**TicTacToe** - Turno de " + client.users.cache.get(game.turno.jugador).username + "[" + game.turno.ficha + "]",
                  components: []
                }).catch((e) => console.log('Error al editar mensaje: '+e))
                
                jugarTicTacToe(game, msg); //Iniciamos el juego con la función que vamos a crear mas adelante, le daremos la variable game del juego y la variable msg del mensaje.
                
                if (game.finalizado) return collector.stop(); //Si la partida ya finalizo detenemos el collector, creo que no es necesario pero lo hago por seguridad xd
                
                
              } else if (int.customId === "denyJuegoTTT") {
                
                /* Si el juego fue rechazado ... */
                
                // Editamos el mensaje y quitamos los botones.
                m.edit({
                  content: "El juego ha sido rechazado...",
                  components: []
                }).catch((e) => console.log('Error al editar mensaje: '+e))
              
              }
            });
      
            collector.on("end", (collected,reason) => {
              /* Si no dio click en ningun boton durante los 60s ...*/
              
              if(collected.size < 1) return m.edit({
                content: "**El jugador tardó en responder la solicitud. Juego terminado.**",
                components: []
              }).catch((e) => console.log('Error al editar mensaje: '+e))

              console.log('Razón del término de colección de Tic Tac Toe: '+reason)
              
            });
            
          }).catch((e) => console.log('Error al enviar mensaje: '+e))
          
          /* Ahora se viene lo mejor */
          
          /* Vamos a crear un Objeto, este objeto es muy importante, este será el tablero que se representara con botones de esta manera: 
          
          [ a1 ] [ a2 ] [ a3 ]
          [ b1 ] [ b2 ] [ b3 ]
          [ c1 ] [ c2 ] [ c3 ]
          
          Por defecto todos tendran el emoji ➖, el color Secundario y la posición, por ejemplo a1 es la posición 1, c3 es la posición 9.
        */
      
      
          let btns_skelet = {
            a1: {
              style: "SECONDARY",
              label: "➖",
              disabled: false,
              number: 1
            },
            a2: {
              style: "SECONDARY",
              label: "➖",
              disabled: false,
              number: 2
            },
            a3: {
              style: "SECONDARY",
              label: "➖",
              disabled: false,
              number: 3
            },
            b1: {
              style: "SECONDARY",
              label: "➖",
              disabled: false,
              number: 4
            },
            b2: {
              style: "SECONDARY",
              label: "➖",
              disabled: false,
              number: 5
            },
            b3: {
              style: "SECONDARY",
              label: "➖",
              disabled: false,
              number: 6
            },
            c1: {
              style: "SECONDARY",
              label: "➖",
              disabled: false,
              number: 7
            },
            c2: {
              style: "SECONDARY",
              label: "➖",
              disabled: false,
              number: 8
            },
            c3: {
              style: "SECONDARY",
              label: "➖",
              disabled: false,
              number: 9
            }
          }
          
          /* Perfecto */
          /* Ahora crearemos la función del juego, esta sera llamada  "jugarTicTacToe" y requerira de 2 parametros, el juego y el mensaje (que ya se lo dimos en la linea 76).*/
      
          async function jugarTicTacToe(game, msg) {
            
            /* Crearemos los botones a partir del esqueleto que hicimos ahora */
            
            let a1 = new MessageButton()
              .setStyle(btns_skelet.a1.style)
              .setLabel(btns_skelet.a1.label)
              .setCustomId('a1') //Importante poner la ID para luego editar el esqueleto del tablero.
              .setDisabled(btns_skelet.a1.disabled);
            
            let a2 = new MessageButton()
              .setStyle(btns_skelet.a2.style)
              .setLabel(btns_skelet.a2.label)
              .setCustomId('a2')
              .setDisabled(btns_skelet.a2.disabled);
            
            let a3 = new MessageButton()
              .setStyle(btns_skelet.a3.style)
              .setLabel(btns_skelet.a3.label)
              .setCustomId('a3')
              .setDisabled(btns_skelet.a3.disabled);
            
            let b1 = new MessageButton()
              .setStyle(btns_skelet.b1.style)
              .setLabel(btns_skelet.b1.label)
              .setCustomId('b1')
              .setDisabled(btns_skelet.b1.disabled);
            
            let b2 = new MessageButton()
              .setStyle(btns_skelet.b2.style)
              .setLabel(btns_skelet.b2.label)
              .setCustomId('b2')
              .setDisabled(btns_skelet.b2.disabled);
            
            let b3 = new MessageButton()
              .setStyle(btns_skelet.b3.style)
              .setLabel(btns_skelet.b3.label)
              .setCustomId('b3')
              .setDisabled(btns_skelet.b3.disabled);
            
            let c1 = new MessageButton()
              .setStyle(btns_skelet.c1.style)
              .setLabel(btns_skelet.c1.label)
              .setCustomId('c1')
              .setDisabled(btns_skelet.c1.disabled);
            
            let c2 = new MessageButton()
              .setStyle(btns_skelet.c2.style)
              .setLabel(btns_skelet.c2.label)
              .setCustomId('c2')
              .setDisabled(btns_skelet.c2.disabled);
            
            let c3 = new MessageButton()
              .setStyle(btns_skelet.c3.style)
              .setLabel(btns_skelet.c3.label)
              .setCustomId('c3')
              .setDisabled(btns_skelet.c3.disabled);
            
            /* Juntamos los botones en 3 filas */
            
            //estos botones los guardaremos en una variable llamada "btns_options" que seran agregados en el mensaje.
      
            const btns_options = [
              new MessageActionRow().addComponents(a1, a2, a3), //Fila "A"
              new MessageActionRow().addComponents(b1, b2, b3), //Fila "B" 
              new MessageActionRow().addComponents(c1, c2, c3), //Fila "C"
              
              /* Yo eh agregado un boton para cuando un jugador quiera detener el juego, esto ya es opcional */
              new MessageActionRow().addComponents([
                new MessageButton()
                  .setCustomId("stop_game")
                  .setLabel("Detener")
                  .setStyle("DANGER")
              ])
            ];
            
            /* Eventos del juego */
            /* Esto es facil de entender asi que no explicaré nada xd */
            
            game.on('ganador', (jugador, tablero, paso) => {
              return msg.edit({
                content: `:trophy: Ha ganado ${client.users.cache.get(jugador).username}`,
                components: []
              }).catch((e) => console.log('Error al editar mensaje: '+e))
            });
      
            game.on('empate', (jugadores, tablero, paso) => {
              return msg.edit({
                content: ":man_gesturing_no: Hubo un empate!",
                components: []
              }).catch((e) => console.log('Error al ediar mensaje: '+e))
            });
      
            game.on('finalizado', (jugadores, tablero, turno, user) => {
              if(!user) return;
              return msg.edit({
                content: ":no_entry: El juego ha sido finalizado por <@!" + user + ">",
                components: []
              }).catch((e) => console.log('Error al editar mensaje: '+e))
            });
            
            
            /* Bien perfecto, ahora haremos la parte donde los jugadores podran interactuar con el tablero por turnos. :D */
            
            // game.turno.jugador nos devolvera la id del jugador que sigue.      	  // game.turno.ficha nos devolvera la ficha del jugador que sigue.
      
      
            msg.edit({
              content: "**TicTacToe** - Turno de " + client.users.cache.get(game.turno.jugador).username + "[" + game.turno.ficha + "]",
              components: btns_options //No olviden agregar los botones
            }).then(m => {
              
              /* Creamos otro collector de componentes */
              
              let filter = int => int.isButton(); //Filtrar que interactue con un boton.
              
              const collector = m.createMessageComponentCollector({ filter, max: 1, time: 30000 /* 2 minutos para que interactue con un boton */ });
      
              collector.on("collect", int => {
                
                /* Si dio click en el boton "detener" ... */
                
                if (int.customId === "stop_game" && (int.user.id == member.id || int.user.id == message.author.id)) {
                  int.deferUpdate();
                  
                 
                  return game.finalizar(int.user.id); //Finalizamos el juego.
                }
                
                //Si no es el turno del que interactuo con el tablero ...
                if (int.user.id !== game.turno.jugador) {
                  jugarTicTacToe(game, msg); //Repetimos la funcion.
                  return int.deferUpdate();
                }
                
                /* Ahora vamos a editar la posicion donde se dio click */
      
                btns_skelet[int.customId] = { // Obtenemos del objeto la posición del tablero con la id del boton.
                  style: (game.turno.ficha == "❌") ? "DANGER" : "PRIMARY", //Cambiamos el estilo dependiendo de cual ficha se pondra ahi.
                  label: game.turno.ficha, //Ponemos la ficha.
                  disabled: true, //Desactivamos el boton
                  number: btns_skelet[int.customId].number //Ponemos el mismo numero.
                }
                
                int.deferUpdate();
                
                game.elegir(btns_skelet[int.customId].number); //Usamos la funcion "elegir" para que el juego sepa que pusimos una ficha en la posicion donde se dio click.
                
                if (game.finalizado) return collector.stop(); //Si el jeugo finalizo detenemos el collector.
                
                jugarTicTacToe(game, msg); //Repetimos la funcion..
              });
              
              /* Si tarda en dar click en el tablero terminamos el juego. */
              
              collector.on("end", colected => {
                if(colected.size < 1){
                  game.finalizar();
                  return m.edit({
                    content: `**Tiempo agotado!, el juego ha terminado.**`,
                    components: []
                  }).catch((e) => console.log('Error al editar mensaje: '+e))
                }
              });
            }).catch((e) => console.log('Error al enviar mensaje: '+e))
            
          }


    }

}