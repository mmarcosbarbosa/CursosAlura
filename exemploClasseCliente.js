// Padrão é nome de classe iniciando com maiúscula
class Cliente {
    constructor(nome, cpf, email, saldo) {
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.saldo = saldo;
    }
    depositar (valor) {
        this.saldo += valor;
    };

    exibirSaldo () {
        console.log(`O saldo é de ${this.saldo} reais.`)
    }
}

class ClientePoupanca extends Cliente {
    constructor(nome, cpf, email, saldo, saldoPoupanca) {
        super(nome, cpf, email, saldo);
        this.saldoPoupanca = saldoPoupanca;
    }
    depositarPoupanca(valor){
        this.saldoPoupanca += valor;
    }
    exibirSaldoPoupanca () {
        console.log(`O saldo da poupança é de ${this.saldoPoupanca} reais.`)
    }
}

const cliente1 = new Cliente("Marcelo", "00820715786", "mmarcosbarbosa@gmail.com", 100);

cliente1.depositar(50);
cliente1.exibirSaldo();

// console.log(cliente1);

const cliente2 = new ClientePoupanca("Maria", "01231231211", "maria@gmaill.com", 100, 10000);
cliente2.depositar(30);
cliente2.depositarPoupanca(350);
cliente2.exibirSaldo();
cliente2.exibirSaldoPoupanca();

console.log(cliente1)
console.log(cliente2)