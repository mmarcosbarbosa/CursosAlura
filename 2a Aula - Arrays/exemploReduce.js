const salaJavaScript = [ 7, 8, 8, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function mediaSala (notasSala) {
    const somaDasNotas = notasSala.reduce ((acumula, aux) => acumula + aux, 0);
    return somaDasNotas/notasSala.length;
}

console.log(`Media da sala de JS é ${mediaSala(salaJavaScript)}.`);
console.log(`Media da sala de Java é ${mediaSala(salaJava)}.`);
console.log(`Media da sala de Python é ${mediaSala(salaPython)}.`);