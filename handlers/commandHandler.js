const fs = require('fs'); 
const ascii = require('ascii-table')
let table = new ascii('Commands')
table.setHeading('COMANDOS','ESTADO')

module.exports = async (client, Discord) => {
    
    console.log('========================= CONTROLADOR DE COMANDOS =========================')
    
    // let sv = client.guilds.cache.get('777620055344545842')
    // let canalowner = sv.channels.cache.get('880312288593195028')
    
    fs.readdirSync("./commands/").forEach((dir) => {

        const commands = fs
        .readdirSync(`./commands/${dir}/`)
        .filter((file) => file.endsWith('.js'));

        for(const file of commands) { 
    
            const cmd = require(`../commands/${dir}/${file}`); 

            if(cmd.name){

                //console.log('Comando cargado: '+cmd.name)
                client.commands.set(cmd.name, cmd)
                table.addRow(cmd.name,'✅')

            } else{

                //console.log('Error al cargar comando: '+cmd.name)
                table.addRow(cmd.name,'❌')

            }

        }

    })

    console.log(table.toString())

    // console.log('sv: ' + sv)
    // console.log('canal: ' + canalowner)
    //canalowner.send({content: '<@753435606410985573> \n\n' + table.toString})
    
    console.log('========================= CONTROLADOR DE COMANDOS =========================')

}