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

let relatorio = "";

for (let info in cliente) {
    if (typeof cliente[info] != "object" && typeof cliente[info] != "function") 
       relatorio += `\n${info}: ${cliente[info]} `
}

console.log(relatorio);