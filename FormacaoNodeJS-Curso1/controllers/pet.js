const Pet = require('../model/pet');

module.exports = app => {
    // requisicao é o que está vindo.
    // resposta é o que devolvemos.
    app.get('/pet', (_, resposta) => {
        Pet.lista(resposta);
    });

    app.post('/pet', (requisicao, resposta) => { 
        // pega o corpo da requisição (somente o corpo = json)
        const pet = requisicao.body;

        // chama o método adiciona da classe importada de model Atendimento.
        Pet.adiciona(pet, resposta);
        //resposta.send("Você está na nossa página de atendimento! Executando POST.");
    })

}