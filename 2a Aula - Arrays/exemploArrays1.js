// medias 10, 6.5, 8, 7.5
// let nota1 = 10;
// let nota2 = 6.5;
// let nota3 = 8;
// let nota4 = 7.5;

// let media = (nota1 + nota2 + nota3 + nota4)/4;

const notas = [10, 6.5, 8, 7.5]

let media = 0;

for (let i=0; i<notas.length; i++) media+= notas[i]
console.log("Soma do vetor:", media);
media/=notas.length;
// (notas[0] + notas[1] + notas[2] + notas[3])/ notas.length

console.log("Media das notas:", media);
console.log("Tamanho do vetor:", notas.length);

// método para adicionar elemento (ultima posição)
notas.push(3.5);
console.log("Vetor novo (ultimo elemento adicionado):", notas);
console.log("Tamanho novo do vetor:", notas.length);

// O método pop() retira o último e retorna ele.
console.log(`Excluímos a nota ${notas.pop()} do vetor notas.`) 
console.log(`Agora, o vetor ficou assim ${notas} (ultimo elemento excluído):`);
console.log(`Com isso, o vetor ficou com ${notas.length} elementos.`);

// Vamos aprender a concatenar
let vetor2 = [ 10, 11, 45, -20 ];
console.log(`Vetor novo para brincadeiras: ${vetor2}`);
let vetor3 = notas.concat(vetor2);
console.log ("vetor notas:", notas);
console.log ("vetor2:", vetor2);
console.log("Vetor3, resultado do concat de notas com vetor2:", vetor3);
console.log (vetor3[0], vetor3[1], vetor3[2], vetor3[3], vetor3[4], vetor3[5], vetor3[6], vetor3[7]);

//  VAmos usar essa função para filtrar e encontrar elementos.
function MaiorQue10(valor){
    if (valor>10) return true;
    else return false;
}

// Usando o Filter
console.log (vetor3.filter(MaiorQue10));
// Usando o Find
console.log (vetor3.find(MaiorQue10));
// Descobrindo qual posição está o elemento 8
console.log (vetor3.indexOf(8));
// Descobrindo qual a última ocorrencia (ultimo indice) está o valor 10
console.log (vetor3.lastIndexOf(10));

// Vamos usar essa função para aplica-la em todos os elementos do vetor (forEach)
let total = 0;
function Soma (valor) {
    total += valor;
}
vetor3.forEach(Soma)
console.log (total);

// vetor vazios
const arrayVazia = [];

console.log(arrayVazia)
console.log(arrayVazia.length)

// Varias posições indefinidas
const arrayVazia2 = [,,,];
console.log(arrayVazia2.length)
console.log(arrayVazia2[0])
console.log(arrayVazia2[1])
console.log(arrayVazia2[2])

// ADicionando um rapazinho no final.
const arrayVazia3 = [,,,];
console.log(arrayVazia3.length)
arrayVazia3.push(50)
console.log(arrayVazia3)
console.log(arrayVazia3.length)