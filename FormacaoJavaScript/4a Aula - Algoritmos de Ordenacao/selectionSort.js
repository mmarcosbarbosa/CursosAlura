const Livros = require('./listalivros')
const menorValor = require('./ordenacaoLivrosObjetos')

for (let atual = 0; atual < Livros.length-1; atual++) {
    // procurar o menor livro do subconjunto
    let menor = menorValor(Livros, atual);

    // Troca... o livro de menor posicao vai para a posicao atual e
    // o livro que esta na posicao atual vai para a posicao que estava o menor.
    let livroAtual = Livros[atual];
    Livros[atual] = Livros[menor];
    Livros[menor] = livroAtual;

}

console.log(Livros);