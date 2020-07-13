const path = require('path')
const meuYargs = require('./meuModuloYargs/comandos')
const bolsaValor= require('./meuModuloRequestCallBack/bolsaValores')
const express = require('express')
const hbs = require('hbs')
const token='9083265e967730a9de2c808837f6dcfb'

// node app.js buscaItemBolsa --sigla='NVDA' --token='9083265e967730a9de2c808837f6dcfb'

const app = express()
const diretorioPublico = path.join(__dirname, "/publico")
const diretorioViews = path.join(__dirname, "/templates/paginas")
const diretorioPartials = path.join(__dirname,"/templates/partials")


//DEFININDO A "VIEW ENGINE" -> TRECHO ADICIONADO APÓS PASSARMOS A UTILIZAR O MÓDULO HBS
// COM ESSE MÉTODO DEFINIMOS A EXTENSÃO '.HBS' PARA OS ARQUIVOS DAS PÁGINAS , A QUAL É OMITIDA QUANDO A APLICAÇÃO É EXIBIDA NO NAVEGADOR
// NOS ARQUIVOS '.HBS' PODEMOS INSERIR ATRIBUTOS PARA SEREM RENDERIZADOS DINAMICAMENTE NA PÁGINA
//PRECISA ESTAR NA PASTA 'VIEWS'
app.set("view engine", 'hbs')

app.set('views',diretorioViews) //PERSONALIZANDO O DIRETÓRIO ONDE FICARÃO AS PÁGINAS
hbs.registerPartials(diretorioPartials) //REGISTRANDO O DIRETÓRIO DAS PÁGINAS PARTIALS


app.use(express.static(diretorioPublico)) //APONTA O DIRETÓRIO DA APLICAÇÃO

//  DEFININDO AS ROTAS

app.get('', (req,res)=>{
    var data = new Date();
var dias = new Array(
 'domingo','segunda','terça','quarta','quinta','sexta','sábado'
);

    res.render('index',{
        titulo: dias[data.getDay()] + data
    })
})
app.get('/missao', (req,res)=>{
    res.render('missao')
})

// TRECHO ABAIXO FOI COMENTADO DEPOS QUE PASSAMOS A UTILIZAR O "diretorioPublico"
// UTILIZANDO O "diretorioPublico" A PLICAÇÃO UTILIZA AUTOMATICAMENTE O INDEX.HTML
/*
app.get('/',(req, res)=>{
    res.send("Minha primeira aplicação com express")
})
*/
app.get('/bolsavalor', (req,res)=>{
    res.render('bolsavalor')
})

app.get('/bolsavalores',(req, res)=>{
    // BUSCA PELO PARÂMETRO "SIMBOLO" NA URL DA REQUISIÇÃO
    /*
    if( ! req.query.simbolo ){
        const erro = {
            mensagem: "Favor informar o símbolo com parâmetro da bolsa de valores.",
            codigo: 400
        }
        return res.status(400).json(erro)
    }
    */
    const simbolo = req.query.simbolo.toUpperCase()
    bolsaValor.buscaCompanhia( simbolo, token, (companhias, objetoErro)=>{
        if( objetoErro){
            res.status(400).json(objetoErro)
        }
        else{
            res.status(200).json(companhias)
        }
    }
    )

/*
    const companhia={
        symbol: "NFLX",
        name: "NETFLIX",
        pais: "USA"
    }
    const companhias = new Array()
    companhias.push(companhia)
    companhias.push(companhia) 
    res.send(companhias)
    */
})

app.get('*', (req,res)=>{
    res.render('404',{
        titulo: req.originalUrl
    })
})
//LINHA ABAIXO ADICIONADA PARA QUE POSSAMOS UTILIZAR QUALQUER PORTA RETORNADA PELO SERVIDOR EM QUE REALIZEMOS O DEPLOY DA APLICAÇÃO
const port = process.env.PORT || 3000

app.listen( port, ()=>{
    console.log(`Ouvindo pela porta ${port}`)
})