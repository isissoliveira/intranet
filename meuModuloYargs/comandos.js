const yargs = require('yargs')
const chalk = require('chalk')
const bolsaValores= require('../meuModuloRequestCallBack/bolsaValores')


yargs.command(
    {
        command:'buscaItemBolsa',
        describe:'Busca dados da companhia na bolsa de valores pela sua sigla a bolsa',
        builder: {
            sigla:{describe:'Sigla da companhia', demandOption: true, type:'string'},
            token:{describe:'Token para acesso', demandOption: true, type:'string'}
        },
        handler:function(argv){
            //console.log('teste')
            // bolsaValores.buscaCompanhia( argv.sigla, argv.token)
            bolsaValores.buscaCompanhia( argv.sigla, argv.token, (argCompanhia, erro)=>{
                try {
                    console.log( chalk.bgGreen( argCompanhia.symbol))
                    console.log(argCompanhia.name)
                    console.log(argCompanhia.pais)
                    console.log(`OBJETO ENCONTRADO!!!!!!! `)
                } catch (error) {
                    console.log("Não encontrado " + erro.mensagem)
                }
            } )   
        }

    }
)

yargs.parse()