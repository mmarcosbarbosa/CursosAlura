// Usando o this
const pessoa = {
    nome: "Ana",
    email: "a@email.com",
    imprimeNome: function(){
        // console.log(`${pessoa.nome}`)
        console.log(`${this.nome}`)
    }
}

pessoa.imprimeNome() //Ana

function imprimeNomeEmail(){
    console.log(`nome: ${this.nome}, email: ${this.email}`)
}

const pessoa1 = {
    nome: "Ana",
    email: "a@email.com",
    imprimeInfo: imprimeNomeEmail
}
   
const pessoa2 = {
    nome: "Paula",
    email: "p@email.com",
    imprimeInfo: imprimeNomeEmail
}
   
pessoa1.imprimeInfo()
pessoa2.imprimeInfo()

function Person (nome, email){
    this.nome =nome
    this.email =email
    this.imprimeNomeEmail = function(){
        console.log(`nome: ${this.nome}, email: ${this.email}`)
    }
}

const pessoa3 = new Person("Ana", "a@email.com")
const pessoa4 = new Person("Paula", "p@email.com")

pessoa3.imprimeNomeEmail()
pessoa4.imprimeNomeEmail()


// Usando o call
function imprimeNomeEmail2(tipoCliente){
    console.log(`${tipoCliente} - nome: ${this.nome}, email: ${this.email}`)
}
   
const cliente1 = {
    nome: "Carlos",
    email: "c@email.com"
}
   
const cliente2 = {
    nome: "Fred",
    email: "f@email.com"
}
imprimeNomeEmail2.call(cliente1, "cliente especial")
imprimeNomeEmail2.call(cliente2, "cliente estudante")

// Não entendi direito o bind e o apply.