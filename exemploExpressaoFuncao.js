// Expressão de funções (cria função anonima... o const tem, vai entender)
const soma = function (num1, num2) { return num1 + num2 };

console.log (soma (10, 15));  // eu só posso usar soma depois de declarar a função em expressão.

console.log(teste()); // quando eu declaro como função, funciona parecido com var, vale no código todo.

function teste () {
    return "Ola";
}