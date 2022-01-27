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

const cliente1 = {
    nome: "Marcelo",
    idade: 47,
    cpf: "00820715786",
    email: "mmarcosbarbosa@gmail.com",
    dependentes: [],
    saldo: 100,

    depositar: function(valor) {
        this.saldo += valor;
    },
    sacar: function (valor) {
        this.saldo -= valor;
    }

}

const cliente2 = {
    nome: "Marcelo",
    idade: 47,
    cpf: "00820715786",
    email: "mmarcosbarbosa@gmail.com",
    saldo: 100,

    depositar: function(valor) {
        this.saldo += valor;
    },
    sacar: function (valor) {
        this.saldo -= valor;
    }

}

function oferecerSeguro (obj) {
    const chavesCliente = Object.keys(obj);
    let relatorio = "É necessário oferecer seguro por que o cliente tem ";
    if (chavesCliente.includes("dependentes")) {
        if (obj["dependentes"].length > 0) {
            relatorio += `${obj["dependentes"].length} filhos: `;
            for (let i=0; i<obj["dependentes"].length; i++) {
                relatorio += obj["dependentes"][i].nome + " ";
            }
        } else {
            relatorio = "A lista de dependentes do cliente está vazia."
        }
    } else {
        relatorio = "O cliente não possui dependentes."
    }
    console.log(relatorio)
}

oferecerSeguro(cliente);
oferecerSeguro(cliente1);
oferecerSeguro(cliente2);

// observando o object.keys
console.log(Object.keys(cliente));
// aprendendo object.values
console.log(Object.values(cliente));
// aprendendo object.entries
console.log(Object.entries(cliente));