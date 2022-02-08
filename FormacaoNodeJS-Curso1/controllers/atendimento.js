const Atendimento = require('../model/atendimento');

module.exports = app => {
    // requisicao é o que está vindo.
    // resposta é o que devolvemos.
    app.get('/atendimento', (_, resposta) => {
        Atendimento.lista()
            .then(resultados => resposta.json(resultados)) // padrão do status é 200, quando a gente omite ele entende que é 200
            .catch(erros => resposta.status(400).json(erros))
    });

    app.get('/atendimento/:id', (requisicao, resposta) => {
        // requisicao.params retorna um json no formato { id: '9' } (exemplo)
        const idCliente = parseInt(requisicao.params.id);
        Atendimento.buscaPorId(idCliente)
            .then(resultados => resposta.json(resultados))
            .catch(erros => resposta.status(400).json(erros))
    });

    app.post('/atendimento', (requisicao, resposta) => { 
        // pega o corpo da requisição (somente o corpo = json)
        const atendimento = requisicao.body;

        // chama o método adiciona da classe importada de model Atendimento.
        Atendimento.adiciona(atendimento)
            .then(atendimentoCadastrado => resposta.status(201).json(atendimentoCadastrado))
            .catch(erros => resposta.status(400).json(erros))
        
    })

    app.patch('/atendimento/:id', (requisicao, resposta) => {
        const idCliente = parseInt(requisicao.params.id);
        const valores = requisicao.body;
        
        Atendimento.altera(idCliente, valores)
            .then(resultados => resposta.json(resultados))
            .catch(erros => resposta.status(400).json(erros));
    })

    app.delete('/atendimento/:id', (requisicao, resposta) => {
        const idCliente = parseInt(requisicao.params.id);
        
        Atendimento.deleta(idCliente)
            .then(resultados => resposta.json(resultados))
            .catch(erros => resposta.status(400).json(erros));
    })
}