// conversão implicita
const numero = 45;
const numeroString = "45";

console.log(numero == numeroString)
console.log(numero === numeroString)

// Implicitamente, converte a variável numero em String
console.log (numero + numeroString)

// conversão explícita
console.log (numero + Number(numeroString))