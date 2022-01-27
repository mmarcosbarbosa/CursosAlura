const nomes = [ 'João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

let tamanhoSala = nomes.length;
let meioDaSala = tamanhoSala / 2;
const sala1 = nomes.slice(0, meioDaSala);  // [0..10) ou seja, não inclui o meio da sala
const sala2 = nomes.slice(meioDaSala, tamanhoSala); // [10..20), ou seja, vai do meio da sala até 19

console.log(`Todos os alunos: ${nomes}`);
console.log(`Alunos da sala 1: ${sala1}`);
console.log(`Alunos da sala 2: ${sala2}`);

// Brincando com splice
console.log("\n\nVamos alterar a sala 1, por que Ana e Caio mudaram de Escola.\nRodrigo é aluno novo.")

// retirando Ana e colocando Rodrigo.
console.log("Retirando Ana e colocando Rodrigo...");
sala1.splice(sala1.indexOf('Ana'), 1, 'Rodrigo');
console.log(`Alunos da sala 1: ${sala1}`);
console.log(`Tamanho do vetor é ${sala1.length}.`);
// retirando Caio
console.log("Apenas retirando Caio...")
sala1.splice(sala1.indexOf('Caio'), 1);
console.log(`Alunos da sala 1: ${sala1}`);
console.log(`Tamanho do vetor, agora, é ${sala1.length}.`);
// Colocando Matheus depois de Lara
console.log("Agora, colocando Matheus logo após Lara...")
sala1.splice(sala1.indexOf('Lara')+1, 0, 'Matheus');
console.log(`Alunos da sala 1: ${sala1}`);
console.log(`Tamanho do vetor mudou para ${sala1.length}.`);