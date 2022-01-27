const cliente = {
    nome: "Marcelo",
    idade: 47,
    cpf: "00820715786",
    email: "mmarcosbarbosa@gmail.com",
    dependentes: [{
        nome: "Pedro",
        parentesco: "filho",
        dataNascimento: "18/02/2010"
    },
    {
        nome: "Paulo",
        parentesco: "filho",
        dataNascimento: "28/10/2012"
    }],
    saldo: 100,

    depositar: function(valor) {
        this.saldo += valor;
    },
    sacar: function (valor) {
        this.saldo -= valor;
    }

}

console.log(cliente.saldo);
cliente.depositar(50);
console.log(cliente.saldo);
cliente.sacar(80);
console.log(cliente.saldo)