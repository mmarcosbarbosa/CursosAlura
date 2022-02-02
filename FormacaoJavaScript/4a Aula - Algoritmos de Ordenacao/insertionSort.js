const Livros = require('./listalivros');

function insertionSort(vetor) {
    console.log(vetor);
    for (let aux=0; aux<vetor.length; aux++){
        let analise = aux;
        while (analise>0 && vetor[analise].preco < vetor[analise-1].preco){
            let livroAtual = vetor[analise];
            vetor[analise] = vetor[analise-1];
            vetor[analise-1] = livroAtual;
            analise--;           
        }
    }
}

insertionSort(Livros);
console.log(Livros);