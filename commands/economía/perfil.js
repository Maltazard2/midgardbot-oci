const { Collection } = require('mongoose');
const userSchema = require('../../models/userSchema');

module.exports =  {
    
    name: 'perfil',
    aliases: ['profile','pp'],
    description: '⭐ Muestra tu perfil o el de un usuario.',

    async execute(client, message, args, Discord) {

        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));

        if(!img){

            let userData;

            try {

                userData = await userSchema.findOne({idusuario: message.author.id})

                if(!userData){

                    let user = await userSchema.create({

                        idusuario: message.author.id,
                        username: message.author.username,
                        serverId: message.guild.id,
    
                    })
    
                    user.save();
                    console.log('Usuario Registrado ===> Id: '+ message.author.id + ' Username: ' + message.author.username)

                    return message.reply({ embeds: [
                            
                        new Discord.MessageEmbed()
                        .setAuthor(message.author.tag, message.author.displayAvatarURL())
                        .setColor('RED')
                        .setDescription(`<a:Verify2:931463492677017650> | No hay perfil registrado para el usuario!`)
                        
                    ]})
    

                } else {

                    let obtener = args[0]

                    if(!obtener){
          
                        let nivel = userData.nivel
                        let xp = userData.exp

                        if(nivel === 0){
           
                            xp = '('+xp+'/'+100+' XP)'
          
                        } else if(nivel === 1){
            
                            xp = '('+(xp-100)+'/'+300+' XP)'
          
                        } else if(nivel === 2){
            
                            xp = '('+(xp-400)+'/'+500+' XP)'
          
                        } else if(nivel === 3){
            
                            xp = '('+(xp-900)+'/'+700+' XP)'
          
                        } else if(nivel === 4){
            
                            xp = '('+(xp-1600)+'/'+900+' XP)'
          
                        } else if(nivel === 5){
            
                            xp = '('+(xp-2500)+'/'+1100+' XP)'
          
                        } else if(nivel === 6){
            
                            xp = '('+(xp-3600)+'/'+1300+' XP)'
          
                        } else if(nivel === 7){
            
                            xp = '('+(xp-4900)+'/'+1500+' XP)'
          
                        } else if(nivel === 8){
            
                            xp = '('+(xp-6400)+'/'+1700+' XP)'
          
                        } else if(nivel === 9){
            
                            xp = '('+(xp-8100)+'/'+1900+' XP)'
          
                        } else if(nivel === 10){
            
                            xp = '('+(xp-10000)+'/'+2100+' XP)'
          
                        } else if(nivel === 11){
            
                            xp = '('+(xp-12100)+'/'+2300+' XP)'
          
                        } else if(nivel === 12){
            
                            xp = '('+(xp-14400)+'/'+2500+' XP)'
          
                        } else if(nivel === 13){
            
                            xp = '('+(xp-16900)+'/'+2700+' XP)'
          
                        } else if(nivel === 14){
          
                            xp = '('+(xp-19600)+'/'+2900+' XP)'
          
                        } else if(nivel === 15){
          
                            xp = '('+(xp-22500)+'/'+3100+' XP)'
          
                        } else if(nivel === 16){
          
                            xp = '('+(xp-25600)+'/'+3300+' XP)'
          
                        } else if(nivel === 17){
          
                            xp = '('+(xp-28900)+'/'+3500+' XP)'
          
                        } else if(nivel === 18){
          
                            xp = '('+(xp-32400)+'/'+3700+' XP)'
          
                        } else if(nivel === 19){
          
                            xp = '('+(xp-36100)+'/'+3900+' XP)'
          
                        } else if(nivel === 20){
          
                            xp = '('+(xp-40000)+'/'+4100+' XP)'
          
                        } else if(nivel === 21){
          
                            xp = '('+(xp-44100)+'/'+4300+' XP)'
          
                        } else if(nivel === 22){
          
                            xp = '('+(xp-48400)+'/'+4500+' XP)'
          
                        } else if(nivel === 23){
          
                            xp = '('+(xp-52900)+'/'+4700+' XP)'
          
                        } else if(nivel === 24){
          
                            xp = '('+(xp-57600)+'/'+4900+' XP)'
          
                        } else if(nivel === 25){
          
                            xp = '('+(xp-62500)+'/'+5100+' XP)'
          
                        } else if(nivel === 26){
          
                            xp = '('+(xp-67600)+'/'+5300+' XP)'
          
                        } else if(nivel === 27){
          
                            xp = '('+(xp-72900)+'/'+5500+' XP)'
          
                        } else if(nivel === 28){
          
                            xp = '('+(xp-78400)+'/'+5700+' XP)'
          
                        } else if(nivel === 29){
          
                            xp = '('+(xp-84100)+'/'+5900+' XP)'
          
                        } else if(nivel === 30){
          
                            xp = '('+(xp-90000)+'/'+6100+' XP)'
          
                        } else if(nivel === 31){
          
                            xp = '('+(xp-96100)+'/'+6300+' XP)'
          
                        } else if(nivel === 32){
          
                            xp = '('+(xp-102400)+'/'+6500+' XP)'
          
                        } else if(nivel === 33){
          
                            xp = '('+(xp-108900)+'/'+6700+' XP)'
          
                        } else if(nivel === 34){
          
                            xp = '('+(xp-115600)+'/'+6900+' XP)'
          
                        } else if(nivel === 35){
          
                            xp = '('+(xp-122500)+'/'+7100+' XP)'
          
                        } else if(nivel === 36){
          
                            xp = '('+(xp-129600)+'/'+7300+' XP)'
          
                        } else if(nivel === 37){
          
                            xp = '('+(xp-136900)+'/'+7500+' XP)'
          
                        } else if(nivel === 38){
          
                            xp = '('+(xp-144400)+'/'+7700+' XP)'
          
                        } else if(nivel === 39){
          
                            xp = '('+(xp-152100)+'/'+7900+' XP)'
          
                        } else if(nivel === 40){
          
                            xp = '('+(xp-160000)+'/'+8100+' XP)'
          
                        } else if(nivel === 41){
          
                            xp = '('+(xp-168100)+'/'+8300+' XP)'
          
                        } else if(nivel === 42){
          
                            xp = '('+(xp-176400)+'/'+8500+' XP)'
          
                        } else if(nivel === 43){
          
                            xp = '('+(xp-184900)+'/'+8700+' XP)'
          
                        } else if(nivel === 44){
          
                            xp = '('+(xp-193600)+'/'+8900+' XP)'
          
                        } else if(nivel === 45){
          
                            xp = '('+(xp-202500)+'/'+9100+' XP)'
          
                        } else if(nivel === 46){
          
                            xp = '('+(xp-211600)+'/'+9300+' XP)'
          
                        } else if(nivel === 47){
          
                            xp = '('+(xp-220900)+'/'+9500+' XP)'
          
                        } else if(nivel === 48){
          
                            xp = '('+(xp-230400)+'/'+9700+' XP)'
          
                        } else if(nivel === 49){
          
                            xp = '('+(xp-240100)+'/'+9900+' XP)'
          
                        } else if(nivel === 50){
          
                            xp = '('+(xp-250000)+'/'+11100+' XP)'
          
                        } else if(nivel > 50){

                            xp = '(' + xp + 'XP)'

                        }

                        let tmarry

                        if(userData.marry === 'Soltero(a)'){
            
                            tmarry = 'Soltero(a)'
          
                        }else {
          
                            let id = await client.users.fetch(userData.marry)
                            tmarry = '💞 '+id.username+'#'+id.discriminator
          
                        }

                        let embed = new Discord.MessageEmbed()
                        .setAuthor('Perfil de ' + message.author.username, message.author.displayAvatarURL())
                        .setThumbnail(userData.foto ? userData.foto : 'https://c.tenor.com/FLR3dFSlH1sAAAAC/bully-tierno.gif')
                        .addField('Nivel', '<a:start:930399379800592394>  '+userData.nivel+' '+xp, true)
                        .addField('Carisma', '<a:corazon:930399275643453500> '+userData.rep, false)
                        .addField('Pats', '<a:gatoasomar:930399873113677834> '+userData.pat, false)
                        .addField('Abrazos', '<:burbujita:925927258789666826> '+userData.hug, false)
                        .addField('Sapes', '<:maje:925927838492811295> '+userData.sape, false)
                        .addField('Frase', '<a:megaphone:932192877449191424> '+userData.frase, false)
                        .addField('Matrimonio <:GatoLove:925929538863628318>', tmarry ? tmarry : 'Soltero(a)', true)
                        .addField('<a:barracolor:930401303249698816><a:barracolor:930401303249698816><a:barracolor:930401303249698816><a:barracolor:930401303249698816><a:barracolor:930401303249698816>','<a:dinero:930404747326914590> **Economía**',false)
                        .addField(`**Total:**`, '<a:money:930397094924124180>  '+userData.total, true)
                        .setColor(userData.color)
                        .setFooter(`Midgard's VIP`,client.user.avatarURL())
            
                        message.reply({ allowedMentions: { repliedUser: false}, embeds: [embed] });
      
                    } else {

                        switch (obtener.slice(-2)){
            
                            case '-i': {

                                let i = args[1] ? args[1]:'https://c.tenor.com/FLR3dFSlH1sAAAAC/bully-tierno.gif';
                                
                                if (!userData) return message.reply({ embeds: [
                            
                                    new Discord.MessageEmbed()
                                    .setAuthor(message.author.tag, message.author.displayAvatarURL())
                                    .setColor('RED')
                                    .setDescription(`<a:Verify2:931463492677017650> | No hay perfil registrado para el usuario!`)
                        
                                ]})
              
                                let update = await userSchema.findOneAndUpdate({idusuario: message.author.id},
                                    {
                                        foto: i
                                    })

                                update.save();

                                console.log("Foto actualizada de "+update.username+': '+ i)

                                message.reply({ allowedMentions: { repliedUser: false}, content: '<a:Dancing_Duck:930402083625111613> | Acabas de actualizar tu foto de perfil!'});
     
                                break
            
                            }

                            case '-f': {

                                let f = args.slice(1).join(' ');
                            
                                if (!userData) return message.reply({ embeds: [
                            
                                    new Discord.MessageEmbed()
                                    .setAuthor(message.author.tag, message.author.displayAvatarURL())
                                    .setColor('RED')
                                    .setDescription(`<a:Verify2:931463492677017650> | No hay perfil registrado para el usuario!`)
                        
                                ]})

                                let update = await userSchema.findOneAndUpdate({idusuario: message.author.id},
                                    {
                                        frase: f
                                    })

                                update.save();

                                console.log("Frase actualizada de "+update.username+': '+ f)

                                message.reply({ allowedMentions: { repliedUser: false}, content: '<a:Dancing_Duck:930402083625111613> | Acabas de actualizar tu frase de perfil!'});

                                break
            
                            }

                            default: {

                                message.reply({ embeds: [
                           
                                    new Discord.MessageEmbed()
                                    .setAuthor(message.author.tag, message.author.displayAvatarURL())
                                    .setColor('RED')
                                    .setDescription(`<a:Verify2:931463492677017650> | Para actualizar Frase, agrega **-f** antes del texto. Para actualizar Foto, agrega **-i** antes del link de la imagen o gif.`)
                        
                                ]})
              
                                break;
            
                            }
          
                        }
        
                    }

                }
    
            } catch (error) {

                console.log('Error al Actualizar Usuario: '+ error)
                
                message.reply({ embeds: [
                            
                    new Discord.MessageEmbed()
                    .setAuthor(message.author.tag, message.author.displayAvatarURL())
                    .setColor('RED')
                    .setDescription(`<a:Verify2:931463492677017650> | Error al actualizar perfil del usuario!`)
        
                ]})
    
            }

        } else{
        
        
            let userData;
            let idm=img.id;

            try {

                userData = await userSchema.findOne({idusuario: idm})

                if (!userData){

                    let user = await userSchema.create({

                        idusuario: message.author.id,
                        username: message.author.username,
                        serverId: message.guild.id,
    
                    })
    
                    user.save();
                    console.log('Usuario Registrado ===> Id: '+ message.author.id + ' Username: ' + message.author.username)

                    return message.reply({ embeds: [
                            
                        new Discord.MessageEmbed()
                        .setAuthor(message.author.tag, message.author.displayAvatarURL())
                        .setColor('RED')
                        .setDescription(`<a:Verify2:931463492677017650> | No hay perfil registrado para el usuario!`)
                        
                    ]})
                } else {

                    let nivel = userData.nivel
                    let xp = userData.exp

                    if(nivel === 0){
        
                        xp = '('+xp+'/'+100+' XP)'
        
                    } else if(nivel === 1){
        
                        xp = '('+(xp-100)+'/'+300+' XP)'
        
                    } else if(nivel === 2){
        
                        xp = '('+(xp-400)+'/'+500+' XP)'
        
                    } else if(nivel === 3){
        
                        xp = '('+(xp-900)+'/'+700+' XP)'
        
                    } else if(nivel === 4){
        
                        xp = '('+(xp-1600)+'/'+900+' XP)'
        
                    } else if(nivel === 5){
        
                        xp = '('+(xp-2500)+'/'+1100+' XP)'
        
                    } else if(nivel === 6){
        
                        xp = '('+(xp-3600)+'/'+1300+' XP)'
        
                    } else if(nivel === 7){
        
                        xp = '('+(xp-4900)+'/'+1500+' XP)'
        
                    } else if(nivel === 8){
        
                        xp = '('+(xp-6400)+'/'+1700+' XP)'
        
                    } else if(nivel === 9){
        
                        xp = '('+(xp-8100)+'/'+1900+' XP)'
        
                    } else if(nivel === 10){
        
                        xp = '('+(xp-10000)+'/'+2100+' XP)'
        
                    } else if(nivel === 11){
        
                        xp = '('+(xp-12100)+'/'+2300+' XP)'
        
                    } else if(nivel === 12){
        
                        xp = '('+(xp-14400)+'/'+2500+' XP)'
        
                    } else if(nivel === 13){
        
                        xp = '('+(xp-16900)+'/'+2700+' XP)'
        
                    } else if(nivel === 14){
        
                        xp = '('+(xp-19600)+'/'+2900+' XP)'
        
                    } else if(nivel === 15){
        
                        xp = '('+(xp-22500)+'/'+3100+' XP)'
        
                    } else if(nivel === 16){
        
                        xp = '('+(xp-25600)+'/'+3300+' XP)'
        
                    } else if(nivel === 17){
        
                        xp = '('+(xp-28900)+'/'+3500+' XP)'
        
                    } else if(nivel === 18){
        
                        xp = '('+(xp-32400)+'/'+3700+' XP)'
        
                    } else if(nivel === 19){
        
                        xp = '('+(xp-36100)+'/'+3900+' XP)'
        
                    } else if(nivel === 20){
        
                        xp = '('+(xp-40000)+'/'+4100+' XP)'
        
                    } else if(nivel === 21){
        
                        xp = '('+(xp-44100)+'/'+4300+' XP)'
        
                    } else if(nivel === 22){
        
                        xp = '('+(xp-48400)+'/'+4500+' XP)'
        
                    } else if(nivel === 23){
        
                        xp = '('+(xp-52900)+'/'+4700+' XP)'
        
                    } else if(nivel === 24){
        
                        xp = '('+(xp-57600)+'/'+4900+' XP)'
        
                    } else if(nivel === 25){
        
                        xp = '('+(xp-62500)+'/'+5100+' XP)'
        
                    } else if(nivel === 26){
        
                        xp = '('+(xp-67600)+'/'+5300+' XP)'
        
                    } else if(nivel === 27){
        
                        xp = '('+(xp-72900)+'/'+5500+' XP)'
        
                    } else if(nivel === 28){
        
                        xp = '('+(xp-78400)+'/'+5700+' XP)'
        
                    } else if(nivel === 29){
        
                        xp = '('+(xp-84100)+'/'+5900+' XP)'
        
                    } else if(nivel === 30){
        
                        xp = '('+(xp-90000)+'/'+6100+' XP)'
        
                    } else if(nivel === 31){
        
                        xp = '('+(xp-96100)+'/'+6300+' XP)'
        
                    } else if(nivel === 32){
        
                        xp = '('+(xp-102400)+'/'+6500+' XP)'
        
                    } else if(nivel === 33){
        
                        xp = '('+(xp-108900)+'/'+6700+' XP)'
        
                    } else if(nivel === 34){
        
                        xp = '('+(xp-115600)+'/'+6900+' XP)'
        
                    } else if(nivel === 35){
        
                        xp = '('+(xp-122500)+'/'+7100+' XP)'
        
                    } else if(nivel === 36){
        
                        xp = '('+(xp-129600)+'/'+7300+' XP)'
        
                    } else if(nivel === 37){
        
                        xp = '('+(xp-136900)+'/'+7500+' XP)'
        
                    } else if(nivel === 38){
        
                        xp = '('+(xp-144400)+'/'+7700+' XP)'
        
                    } else if(nivel === 39){
        
                        xp = '('+(xp-152100)+'/'+7900+' XP)'
        
                    } else if(nivel === 40){
        
                        xp = '('+(xp-160000)+'/'+8100+' XP)'
        
                    } else if(nivel === 41){
        
                        xp = '('+(xp-168100)+'/'+8300+' XP)'
        
                    } else if(nivel === 42){
        
                        xp = '('+(xp-176400)+'/'+8500+' XP)'
        
                    } else if(nivel === 43){
        
                        xp = '('+(xp-184900)+'/'+8700+' XP)'
        
                    } else if(nivel === 44){
        
                        xp = '('+(xp-193600)+'/'+8900+' XP)'
        
                    } else if(nivel === 45){
        
                        xp = '('+(xp-202500)+'/'+9100+' XP)'
        
                    } else if(nivel === 46){
        
                        xp = '('+(xp-211600)+'/'+9300+' XP)'
        
                    } else if(nivel === 47){
        
                        xp = '('+(xp-220900)+'/'+9500+' XP)'
        
                    } else if(nivel === 48){
        
                        xp = '('+(xp-230400)+'/'+9700+' XP)'
        
                    } else if(nivel === 49){
        
                        xp = '('+(xp-240100)+'/'+9900+' XP)'
        
                    } else if(nivel === 50){
        
                        xp = '('+(xp-250000)+'/'+11100+' XP)'
        
                    } else if(nivel > 50){

                        xp = '(' + xp + 'XP)'

                    }

                    let tmarry
                    let id

                    if(userData.marry === 'Soltero(a)'){
          
                        tmarry = 'Soltero(a)'
        
                    } else if (userData.marry !== 'Soltero(a)') {
         
                        try {
            
                            id = message.guild.members.resolve(client.users.cache.get(userData.marry))
                            tmarry = '💞 '+id.user.username+'#'+id.user.discriminator
          
                        } catch (error) {
            
                            tmarry = 'Soltero(a)'
          
                        }
       
                    }

                    let embed = new Discord.MessageEmbed()
                    .setAuthor('Perfil de ' + img.user.username, img.displayAvatarURL())
                    .setThumbnail(userData.foto ? userData.foto : 'https://c.tenor.com/FLR3dFSlH1sAAAAC/bully-tierno.gif')
                    .addField('Nivel', '<a:start:930399379800592394>  '+userData.nivel+' '+xp, true)
                    .addField('Carisma', '<a:corazon:930399275643453500> '+userData.rep, false)
                    .addField('Pats', '<a:gatoasomar:930399873113677834> '+userData.pat, false)
                    .addField('Abrazos', '<:burbujita:925927258789666826> '+userData.hug, false)
                    .addField('Sapes', '<:maje:925927838492811295> '+userData.sape, false)
                    .addField('Frase', '<a:megaphone:932192877449191424> '+userData.frase ? userData.frase : 'No hay frase agregada', false)
                    .addField('<:GatoLove:925929538863628318> Matrimonio', tmarry ? tmarry : 'Soltero(a)', true)
                    .addField('<a:barracolor:930401303249698816><a:barracolor:930401303249698816><a:barracolor:930401303249698816><a:barracolor:930401303249698816><a:barracolor:930401303249698816><a:barracolor:930401303249698816>','<a:dinero:930404747326914590> **Economía**',false)
                    .addField(`**Total:**`, '<a:money:930397094924124180>  '+userData.total, true)
                    .setColor(userData.color)
                    .setFooter(`Midgard's VIP`,client.user.avatarURL())
        
                    message.reply({ allowedMentions: { repliedUser: false}, embeds: [embed] });
        
                }
            
            } catch (error) {

                console.log('Error al Obtener Usuario: '+ error)
           
            }
    
        }

    }
    
}