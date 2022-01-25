// arrow é a seta =>   SEMPRE CONST
function imprime (nome) {
    return `Meu nome é ${nome}`;
}

// Arrow Function com somente 1 linha
const imprimeArrow = nome => `Meu nome é ${nome}`; // como é um parametro apenas, não precisa de ()
const soma = (num1, num2) => num1 + num2; // se tiver mais de uma linha de código é necessário return e {}

// Arrow Function com mais de 1 linha
const soma2 = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return "somente numeros de 1 a 9";
    } else {
        return num1 + num2;
    }
}

console.log (soma2(1,5));
