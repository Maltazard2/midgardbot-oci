const Discord = require('discord.js');
const rmSchema = require('../../models/rmSchema');
const autonsfwSchema = require('../../models/autonsfwSchema');
const NSFW = require('discord-nsfw');
const nsfw3 = new NSFW();

module.exports = async (client) => {
  
  client.user.setPresence( 
    {
      status: 'online', 
      activities: [{ 
        
        name: client.guilds.cache.size + ' server' + (client.guilds.cache.size === 1 ? '' : 's')+' | '+ client.users.cache.size + ' usuarios', 
        type: 'WATCHING',
        
      }],
    }
  );  

  console.log('Listo!');

  // * CÓDIGO DE ROL RAINBOW

  // let autosend, consulta, serverauto
 
  // let rolVIP = '951688457258942494'

  // var colores = [
        
  //   '#ffa9cf',
  //   '#f3a9ff',
  //   '#a9b7ff',
  //   '#a9fff8',
  //   '#a9ffaa',
  //   '#f8ffa9',
  //   '#ffe1a9',
  //   '#ffa9a9',
  //   '#e4587b',
  //   '#a901db',
  //   '#0101df',
  //   '#00ffff',
  //   '#01df01',
  //   '#d7df01',
  //   '#eb5926',
  //   '#af0505',
  //   '#8b0349',
  //   '#df01a5',
  //   '#ff00f6',
  //   '#7401df',
  //   '#5b01df',
  //   '#01a9db',
  //   '#01dfa5',
  //   '#dba901',
  //   '#a5df00',
  //   '#aa5900',
  //   '#8a0101',
  //   '#520e29',
  //   '#86018a',
  //   '#05052e',
  //   '#018a8a',
  //   '#098a01',
  //   '#7a9ace',
  //   '#8975d0',
  //   '#010101',
  //   '#6e6e6e',
  //   '#ffffff',
  //   '#113939',
  //   '#081f2f',
  //   '#c0dd76',
  //   '#c8be89',
  //   '#4a51d4',

  // ]

  // var serverM = client.guilds.cache.find(s => s.id === '777620055344545842')

  // //if(!serverM.member(client.user).permissions.has(Permissions.FLAGS.MANAGE_ROLES)) return;
    
  // var rol = serverM.roles.cache.find(x => x.id === rolVIP)

  // // let c = 1

  // if(rol){
    
  //   let rolrainbow = setInterval(async () => {

  //     let color = colores[Math.floor(Math.random()*colores.length)]

  //     await rol.edit({
    
  //       color: color
        
  //     })
  //     .then(r => console.log('Rol MBVIP editado: '+ color))
  //     .catch(e => console.log('Error al actualizar color de rol: '+e))
      
  //     //c === 200 ? clearInterval(rolrainbow) : c = c + 1

  //     console.log('========================= ROL RAINBOW =========================');
  
  //   }, 600000)
      
  // }

}