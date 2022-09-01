const fs = require('fs'); 
const ascii = require('ascii-table')
let table = new ascii('Events')
table.setHeading('EVENTOS','ESTADO')

module.exports = async (client, Discord) => {
 
    console.log('========================= CONTROLADOR DE EVENTOS =========================')
    
    // let sv = client.guilds.cache.get('777620055344545842')
    // let canalowner = sv.channels.cache.get('880312288593195028')

    fs.readdirSync('./events/').forEach((dir) => {

        const events = fs
        .readdirSync(`./events/${dir}`)
        .filter((file) => file.endsWith('.js'))

        for(const file of events) { 

            try {

                let evn = require(`../events/${dir}/${file}`)

                if(evn.event && typeof evn.event !== 'string'){

                    table.addRow(file,'❌ ')
                    //console.log('Error de evento: '+file)
                    continue;

                }

                evn.event = evn.event || file.replace('.js','');

                client.on(evn.event, evn.bind(null, client, Discord));

                table.addRow(file,'✅')
                //console.log('Evento cargado: '+file)
                
            } catch (error) {

                //console.log('Error al cargar evento: '+file+' - '+error)
                table.addRow(file,'❌ ' + error)

            }
            
            
          
        }
          
    })
    
    console.log(table.toString())
    
    //console.log('canal: ' + canalowner)
    //canalowner.send({content: '<@753435606410985573> \n\n' + table.toString})
    
    console.log('========================= CONTROLADOR DE EVENTOS =========================')

}