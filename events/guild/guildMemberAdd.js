//& Modelos
const userModel = require('../../models/userSchema')
//& Modelos

module.exports = async (client, Discord, member) => {

  if(member.bot) return;

  //* Registro de Usuarios

  console.log('========================= REGISTRO DE USUARIO =========================');
  
  let userData

  try {

    userData = await userModel.findOne({idusuario: member.id})

    if(!userData){

      let user = await userModel.create({

        idusuario: member.id,
        username: member.user.username,
  
      })
  
      user.save();
      console.log('Usuario Registrado ===> Id: '+ member.id + ' Username: ' + member.user.username)

    }

    
  } catch (error) {

    console.log('Error al Registrar Usuario: '+error)
    
  }
  
  console.log('========================= REGISTRO DE USUARIO =========================');
   
  //* Registro de Usuarios

  const guild = member.guild;
  
  console.log(`Nuevo usuario:  ${member.user.username} se ha unido a ${guild.name}.`);
  
  if(guild.id !== '777620055344545842') return

  const channel = guild.channels.cache.find(ch => ch.id === '926412412570198076');
  
  //! Cómo exportar una imagen local

  // const img = await loadImage(join(__dirname, "../img", 'imagen.png'));

  //! Cierre

  var welcome = [
    
    'https://i.imgur.com/lrCrOHL.gif',
    'https://i.imgur.com/f1G5dcG.gif',
    'https://i.imgur.com/AQNJVuV.gif',
    'https://i.imgur.com/qVqnEG0.gif',
    'https://i.imgur.com/3hWr6pW.gif',
    'https://i.imgur.com/SbrE2kK.gif',
    'https://i.imgur.com/HSzzqNX.gif',
    'https://i.imgur.com/aKwbNL2.gif',
    'https://i.imgur.com/tqGvmk9.gif',
    'https://i.imgur.com/vgorIfC.gif',
    'https://i.imgur.com/3oYaE3t.gif',
    'https://i.imgur.com/l6cymKg.gif',
    'https://i.imgur.com/L4hxVZF.gif',
    'https://i.imgur.com/J6cBi0L.gif',
    'https://i.imgur.com/IMNJnwF.gif',
    'https://i.imgur.com/FIzxGki.gif',
    'https://i.imgur.com/eMvv7hf.gif',
    'https://i.imgur.com/9ZJHqCC.gif',
    'https://i.imgur.com/mazyilZ.gif',
    'https://i.imgur.com/5cmDDkl.gif',
    'https://i.imgur.com/zYnoqMZ.gif',
    'https://i.imgur.com/BXuPZ0W.gif',
    'https://i.imgur.com/V8qDELi.gif',
    'https://i.imgur.com/7WukHVY.gif',
    'https://i.imgur.com/mwzvMI7.gif',
    'https://i.imgur.com/R4qzZi9.gif',
    'https://i.imgur.com/NNilk07.gif',
    'https://i.imgur.com/VHyUBmB.gif',
    'https://i.imgur.com/7YIT9QR.gif',
    'https://i.imgur.com/ZP5hbxs.gif',
    'https://i.imgur.com/RARNlfn.gif',
    'https://i.imgur.com/3peLKnN.gif',
    'https://i.imgur.com/JGOz5Ro.gif',
    'https://i.imgur.com/ETDiKBV.gif',
    'https://i.imgur.com/hW12nh3.gif',
    'https://i.imgur.com/v29RCSG.gif',
    'https://i.imgur.com/dczGaWU.gif',
    'https://i.imgur.com/evOBF9j.gif',
    'https://i.imgur.com/QXyWlNy.gif',
    'https://i.imgur.com/ZBYxm4d.gif',

  ] 
  
  let ramdonwelcome = welcome[Math.floor(Math.random()*welcome.length)]
     
  const embed = new Discord.MessageEmbed()
  .setThumbnail(`${member.displayAvatarURL({ dynamic: true }).replace('webp','png')}`)
  .setTitle(`Bienvenid@ Terrícola! **${member.user.username}** <:abby:931432327354155038> , a este nuestro **Universo**. <a:pepedance:880928616416968745>`)
  .setDescription(`<:shylove:931432905421520927> Gracias por unirte <a:exclama2:880930071731392512> <a:sc_ositobailin:880930467774365707> Espero que lo pases genial en este server libre de toxicidad <a:abdul_dance:880930576683630662>, con muchos eventos programados, premios y más sorpresas!!! <a:Sara:880304101215334401> Recuerda pasar por <#777623227321155614> y <#926556796838109226> Y si tienes alguna queja, duda o sugerencia, pasa por <#880402803825188874>. Cualquier incoveniente aquí estará todo el equipo de Staff a su disposición. <a:dc_party1:881033439367815239>`)
  .setImage(ramdonwelcome)
  .setColor('RANDOM')
  .setTimestamp(new Date())
  .setFooter({ text: guild.name, iconURL: guild.iconURL() ? guild.iconURL({ dynamic: true }) : client.user.avatarURL({ dynamic: true }) })
  
  if (!channel) return;
  
  channel.send({embeds:[embed]}).catch((e) => console.log('Error al enviar mensaje: '+e))
  channel.send('https://images-ext-2.discordapp.net/external/9iPHKFXXnKKSQpcFazlW79dr1zbbtdo7QT7-xxtfDY4/%3Fwidth%3D600%26height%3D86/https/media.discordapp.net/attachments/897951731462316073/915663567213199390/bar-1.gif?width=450&height=65').catch((e) => console.log('Error al enviar mensaje: '+e))
      
}