const Atendimento = require('../model/atendimento');

module.exports = app => {
    // requisicao é o que está vindo.
    // resposta é o que devolvemos.
    app.get('/atendimento', (_, resposta) => {
        Atendimento.lista(resposta);
    });

    app.get('/atendimento/:id', (requisicao, resposta) => {
        // requisicao.params retorna um json no formato { id: '9' } (exemplo)
        const idCliente = parseInt(requisicao.params.id);
        Atendimento.buscaPorId(idCliente, resposta);
    });

    app.post('/atendimento', (requisicao, resposta) => { 
        // pega o corpo da requisição (somente o corpo = json)
        const atendimento = requisicao.body;

        // chama o método adiciona da classe importada de model Atendimento.
        Atendimento.adiciona(atendimento, resposta);
        //resposta.send("Você está na nossa página de atendimento! Executando POST.");
    })

    app.patch('/atendimento/:id', (requisicao, resposta) => {
        const idCliente = parseInt(requisicao.params.id);
        const valores = requisicao.body;
        
        Atendimento.altera(idCliente, valores, resposta);
    })

    app.delete('/atendimento/:id', (requisicao, resposta) => {
        const idCliente = parseInt(requisicao.params.id);
        
        Atendimento.deleta(idCliente, resposta);
    })

}