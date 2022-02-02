const Livros = require('./listalivros')

function menorValor (vetor, posicaoInicial) {

    let maisBarato = posicaoInicial;

    for (let atual = posicaoInicial+1; atual < vetor.length; atual++) {
        if (vetor[atual].preco < vetor[maisBarato].preco) {
            maisBarato = atual;
        }
    }

    return maisBarato;
}

module.exports = menorValor;