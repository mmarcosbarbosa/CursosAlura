const alunos = [ 'Joao','Juliana', 'Caio', 'Ana'];
const notas = [10, 9.5, 7, 6.5]
// Exemplo Alunos
console.log ("Brincando com vetor de alunos...");
let matrizAlunosNotas = [ alunos, notas];

console.log(matrizAlunosNotas);

for (let i = 0; i<matrizAlunosNotas[0].length; i++) {
    console.log (`A nota dx alunx ${matrizAlunosNotas[0][i]} é igual a ${matrizAlunosNotas[1][i]}.`);
}


// Exemplo funcionarios
console.log("Brincando com vetor de funcionários...");
idades = [30, 35, 28]
nomes = ["Ana", "Juliana", "Leonardo"]
faculdade = [false, true, true]

funcionarios = [nomes,idades,faculdade]
console.log("Matriz de funcionarios:", funcionarios);

for (let i=0; i<funcionarios[0].length; i++){
    console.log(`O(A) funcionário(a) ${funcionarios[0][i]} tem ${funcionarios[1][i]} anos e ${funcionarios[2][i]? "tem": "não tem"} faculdade.`);
}

console.log("\n\nVoltando ao vetor de alunos.");

const exibeAlunoNota = (nomeAluno) => {
    let indice = matrizAlunosNotas[0].indexOf(nomeAluno);
    //if (matrizAlunosNotas[0].includes(nomeAluno)){
    if (indice >= 0) {
        //let indice = matrizAlunosNotas[0].indexOf(nomeAluno);
        return "O aluno " + matrizAlunosNotas[0][indice] + " possui nota igual a " + matrizAlunosNotas[1][indice] + "."
    } else return "Este aluno não está matriculado."
}

console.log ("Pesquisando aluno Caio...");
console.log (exibeAlunoNota("Caio"));
console.log ("Pesquisando aluno Marcelo...");
console.log (exibeAlunoNota("Marcelo"));