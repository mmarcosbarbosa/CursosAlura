function soma(num1, num2) {
    return num1 + num2;
}
   
function multiplica(num1, num2) {
    return soma(num1, 0)*num2;
}
   
module.exports = { multiplica, soma };