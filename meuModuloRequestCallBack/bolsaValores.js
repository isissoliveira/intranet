const request = require('request')
const minhaUrl = 'http://api.marketstack.com/v1/tickers?access_key=' // 9083265e967730a9de2c808837f6dcfb

const filtraDados = (listaBolsaValor, symbol) => {

    if (symbol) {
        const arrayBolsa = listaBolsaValor.filter(function (item) {
            return item.symbol === symbol
        })
        //console.log(bolsa)
        return arrayBolsa
    }
    else return listaBolsaValor ;


}
const buscaCompanhia = (simbolo, token, funcaoCallback) => {
    var arrayCompanhia = [];

    request({ url: minhaUrl + token, json: true }, (err, response) => {
        if (err) {
            const erro = {
                erro_: {
                    mensagem: `Alguma coisa deu errado Jim: ${err}`,
                    codigo: 400
                }

            }
            return funcaoCallback(null, erro)
        }
        //console.log(response.body)

        // if (info === undefined){
        //     throw new Error(`Dados não encontrados`)
        // }

        try {
            const info = response.body.data //RETORNA O ARRAY DE OBJETOS JSON DA BOLSA DE VALORES
            //console.log(info)
            const companhias = filtraDados(info, simbolo) //FILTRA ARRAY DE OBJETOS JSON DA BOLSA DE VALORES

            for (let c of companhias ){
                //console.log(c.stock_exchange.country)
                let { symbol, name, pais = c.stock_exchange.country } = c  // utilizando o DESTRUCTURE para extrair apenas os atributos que desejamos
                arrayCompanhia.push(  { symbol, name, pais }   ) ; 
            }
            //console.log(arrayCompanhia)
            // const { symbol, name, pais = companhia.stock_exchange.country } = companhia // utilizando o DESTRUCTURE para extrair apenas os atributos que desejamos
            //objetoCompanhia = { symbol, name, pais } // usando ES6 para contruir objeto (valores atribuídos automaticamente aos atributos) 
            console.log("até aqui tudo bem")

            if (! arrayCompanhia[0]){
                const erro = {
                    erro_: {
                        mensagem: `Símbolo não encontrado`,
                        codigo: 400
                    }
                }
                return funcaoCallback(null, erro)
            }
            return funcaoCallback(arrayCompanhia, null)
        } catch{
            const erro = {
                erro_: {
                    mensagem: `Não foi possível encontrar os dados desejaddos`,
                    codigo: 400
                }
            }
            return funcaoCallback(null, erro)
        }

    }  )

}


module.exports = { buscaCompanhia }

