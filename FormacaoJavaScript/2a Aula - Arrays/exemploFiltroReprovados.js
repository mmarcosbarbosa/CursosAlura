const nomes = [ 'João', 'Juliana', 'Ana', 'Caio', 'Camilo'];
const notas = [ 10, 2, 4, 5.5, 7]

//const reprovados = nomes.filter( (aluno,indice) => notas[indice] < 5)
const reprovados = nomes.filter( (_,indice) => notas[indice] < 5)

console.log ("Reprovados:", reprovados)

// funcao normal
function taReprovado(_, indice) {
    if (notas[indice]<5) return nomes[indice];
    else return false;
}

const reprovados2 = nomes.filter (taReprovado);
console.log ("Reprovados2:", reprovados)