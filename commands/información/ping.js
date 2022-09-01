module.exports =  {
    
    name: 'ping',
    aliases: ['latencia','lat'],
    description: '🏓 Comprueba la latencia del bot y de tus mensajes.',

    async execute(client, message, args, Discord) {

        let ping = Math.floor(message.client.ws.ping);

        message.reply({ allowedMentions: { repliedUser: false}, content: ':ping_pong: Pong!'})
        .then(m => {
        
            m.edit({ allowedMentions: { repliedUser: false}, content: `:incoming_envelope: Ping Mensajes: \`${Math.floor(m.createdTimestamp - Date.now())} ms\`\n:satellite_orbital: Ping DiscordAPI: \`${ping} ms\``}).catch((e) => console.log('Error al enviar mensaje: '+e))
              
        }).catch((e) => console.log('Error al enviar mensaje: '+e))

    }
         
}