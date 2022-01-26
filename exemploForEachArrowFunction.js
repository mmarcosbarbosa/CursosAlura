const notas = [ 10, 8, 6, 7.5, 4];

let somaNotas = 0;

// com Callback
notas.forEach( nota => {
    somaNotas += nota;
})

console.log ("Usando Callback... Arrow Function")
console.log("Sejam as notas: ", notas);
console.log("A media destas notas é ", somaNotas/notas.length);

console.log("\nUsando função normal...")
let somaNota2 = 0;
function soma(valor) {
    somaNota2 += valor;
}
notas.forEach(soma);
console.log("Sejam as notas: ", notas);
console.log("A media destas notas é ", somaNota2/notas.length);
