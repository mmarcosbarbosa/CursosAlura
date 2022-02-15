const express = require ('express')
const bodyParser = require('body-parser')
const config = require('config')
const roteador = require('./controllers/fornecedores')
const ValorNaoSuportado = require('./erros/valorNaoSuportado')
const NaoEncontrado = require('./erros/NaoEncontrado')
const CampoInvalido = require('./erros/CampoInvalido')
const DadosNaoFornecidos = require ('./erros/DadosNaoFornecidos')
const formatosAceitos = require('./serializador').formatosAceitos
const SerializadorErro = require('./serializador').SerializadorErro

const app = express()
app.use(bodyParser.json())

app.use((requisicao, resposta, verificaEntrada) => {
    let formatoRequisitado = requisicao.header('Accept') // formato aceito do lado cliente = formato enviado.
    
    if (formatoRequisitado == '*/*') formatoRequisitado = 'application/json'

    if (formatosAceitos.indexOf(formatoRequisitado) == -1) {  // formato enviado pelo cliente não está na lista de formatos aceitos.
        resposta.status(406).end()
    } else {
        resposta.setHeader('Content-Type', formatoRequisitado)
        verificaEntrada()
    }
})

app.use('/api/fornecedores', roteador)

app.use((erro, requisicao, resposta, trataErro) => {
    let status = 500
    if (erro instanceof NaoEncontrado) {
        status = 404
    }
    if (erro instanceof CampoInvalido || erro instanceof DadosNaoFornecidos) {
        status = 400
    }
    if (erro instanceof ValorNaoSuportado) {
        status = 406
    }

    const serializador = new SerializadorErro(
        resposta.getHeader('Content-Type')
    )
    resposta.status(status)
    resposta.end(
        serializador.serializar({
            mensagem: erro.message,
            id: erro.idErro
        })
    )
})

app.listen(config.get('api.porta'), () => {
    console.log("API funcionando corretamente.")
})