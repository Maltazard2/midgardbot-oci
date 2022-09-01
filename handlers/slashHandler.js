const fs = require('fs'); 
let slash = [];
const ascii = require('ascii-table')
let table = new ascii('Slash')
table.setHeading('SLASH COMMANDS','ESTADO')

module.exports = async (client, Discord) => {

    console.log('========================= CONTROLADOR DE SLASH COMMANDS =========================')
    
    // let sv = client.guilds.cache.get('777620055344545842')
    // let canalowner = sv.channels.cache.get('880312288593195028')

    fs.readdirSync('./slashCommands/').forEach((dir) => {

        const commands = fs
        .readdirSync(`./slashCommands/${dir}/`)
        .filter((file) => file.endsWith('.js'))

        for(const file of commands) { 

            try {

                let scmd = require(`../slashCommands/${dir}/${file}`)

                if(scmd.name){

                    client.slash.set(scmd.name, scmd)
                    slash.push(scmd);

                    //console.log('Slash Command cargado: '+scmd.name)
                    table.addRow(scmd.name,'✅')

                } else {

                    //console.log('Error de Slash Command: '+file)
                    table.addRow(file,'❌ ')
                }
                
            } catch (error) {

                //console.log('Error al cargar Slash Command: '+file+' - '+error)
                table.addRow(file,'❌ ' + error)
            }
          
        }
          
    })

    client.on('ready', async () => {

        await client.application.commands.set(slash);
        
    })
    
    console.log(table.toString())
    
    //console.log('canal: ' + canalowner)
    //canalowner.send({content: '<@753435606410985573> \n\n' + table.toString})
    
    console.log('========================= CONTROLADOR DE SLASH COMMANDS =========================')

}