const nomes = [ 'João', 'Juliana', 'Ana', 'Caio', 'Camilo'];

nomes.forEach(ImprimeNomes)

function ImprimeNomes(nome) {
    console.log(nome)
}

nomes.forEach((nome, indice) => {
    console.log(indice, ":", nome);
})

let notas = [ 10, 9.5, 8, 5.5, 7, 8.5]

// For each anda pelo vetor mas não retorna valores.
console.log ("Notas antes do foreach: ", notas);
nomes.forEach(num => {
    if (num<=9) num+=1;
    else num=10;
})

console.log("Notas depois do forEach: ", notas); // Foreach não altera... passagem de parametro por valor.

// Map retorna um ARRAY, forEach não.
const notasAtualizadas = notas.map( nota => nota <= 9? ++nota : 10);

console.log("Notas atualizadas:", notasAtualizadas);

const notasAtualizadas2 = notas.map( nota => {
    if (nota <= 9) return ++nota;
    else return 10;
})

console.log("Notas atualizadas 2:", notasAtualizadas);

// Alterando os nomes  (Padronizando)
const nomes2 = [ 'Marcelo MARCOS', 'paulo cesar', 'VALDECIR laia'];

console.log("Nomes antes do map:", nomes2);
const nomesPadronizados = nomes2.map ( nome => nome.toUpperCase());

console.log("Nomes padronizados:", nomesPadronizados);