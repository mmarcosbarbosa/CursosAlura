const precosLivros = [ 25, 15, 30, 50, 45, 20];
const nomesLivros = ["JavaScript", "PHP", "Java", "Elixir", "Go", "Python"];

let maisBarato = 0;

for (let atual = 1; atual < precosLivros.length; atual++) {
    if (precosLivros[atual] < precosLivros[maisBarato]) {
        maisBarato = atual;
    }
}

console.log (`Livro mais barato é o ${nomesLivros[maisBarato]}, ele custa ${precosLivros[maisBarato]} reais.`);

