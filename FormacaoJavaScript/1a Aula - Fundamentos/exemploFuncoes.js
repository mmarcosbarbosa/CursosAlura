// declaracao da funcao
function imprime(texto) {
    console.log(texto);
}

// chamada 
imprime ("Oi");

const teste = "testando...";
imprime (teste);

function soma (a, b) {
    const resultado = a+b;
    return (resultado);
}

imprime(soma(10, 30));

function hipotenusa (cateto1, cateto2) {
    const quadradoCateto1 = Math.pow(cateto1, 2);
    const quadradoCateto2 = Math.pow(cateto2, 2);
    const temp = quadradoCateto1 + quadradoCateto2;
    return Math.sqrt(temp);
}

const cat1 = 3;
const cat2 = 4;
imprime(hipotenusa(3,4));