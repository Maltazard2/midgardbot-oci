const discordTTS = require("discord-tts")
const {AudioPlayer, createAudioResource, StreamType, entersState, VoiceConnectionStatus, joinVoiceChannel} = require("@discordjs/voice")

module.exports =  {
    
    name: 'tts',
    aliases: [],
    description: '🔊 Convierte tus mensajes en audio.',
    category: 'Utilidad 💡',
    use: '<prefix>tts <mensaje>',
    owner: true,
    vip: false,
    slash: false,
  
    async execute(client, message, args, Discord) { 

        if(message.guild.id !== '777620055344545842') return

        let id = ['753435606410985573']

        if(!id.some(id => message.author.id == id)) return

        const voiceChannel = message.member.voice.channel
        const texto = args.join(' ')

        if(!voiceChannel) return message.reply({embeds: [
            
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | Entra a un canal de voz y vuelve a intentarlo.`)
      
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        if(!texto) return message.reply({embeds: [
            
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | ¿Qué quieres que diga?`)
      
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
        
        let voiceConnection
        let audioPlayer = new AudioPlayer()

        const stream = discordTTS.getVoiceStream(texto)

        const audioResource = createAudioResource(stream, { inputType: StreamType.Arbitrary, inlineVolume:true });

        try {
            
            if(!voiceConnection || voiceConnection?.status === VoiceConnectionStatus.Disconnected){
            
                voiceConnection = joinVoiceChannel({
                    
                    channelId: message.member.voice.channel.id,
                    guildId: message.guild.id,
                    adapterCreator: message.guild.voiceAdapterCreator,
    
                })
    
                voiceConnection = await entersState(voiceConnection, VoiceConnectionStatus.Connecting, 5_000)
    
            }
            
            
            if(voiceConnection.status === VoiceConnectionStatus.Connected){
                
                voiceConnection.subscribe(audioPlayer);
                audioPlayer.play(audioResource);
            
            }

        } catch (error) {
            
            console.log('Error al usar comando tts: ' + error)
            message.reply('Hubo un error interno. Por favor, inténtelo de nuevo.').catch((e) => console.log('Error al enviar mensaje: '+e))
            
        }

    }

}