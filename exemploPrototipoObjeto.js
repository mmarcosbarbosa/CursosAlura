function Cliente (nome, cpf, email, saldo){
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor) {
        this.saldo += valor;
    }
}

const cliente1 = new Cliente("Marcelo", "00820715786", "mmarcosbarbosa@gmail.com", 100);

cliente1.depositar(50);

console.log(cliente1);

function ClientePoupanca (nome, cpf, email, saldo, saldoPoupanca){
    Cliente.call(this, nome, cpf, email, saldo);
    this.saldoPoupanca = saldoPoupanca;
}

const cliente2 = new ClientePoupanca("Maria", "01231231211", "maria@gmaill.com", 100, 10000);

ClientePoupanca.prototype.depositarPoupanca = function (valor) { this.saldoPoupanca += valor; }

cliente2.depositarPoupanca(350);

console.log(cliente2);

console.log(cliente1.hasOwnProperty("saldoPoupanca"))
console.log(cliente2.hasOwnProperty("saldoPoupanca"))
console.log(cliente1 instanceof Cliente)
console.log(typeof cliente1)
console.log(typeof cliente2)
console.log(cliente2 instanceof ClientePoupanca)
console.log(Function.prototype.isPrototypeOf(Cliente))
console.log(Cliente.constructor === Function)