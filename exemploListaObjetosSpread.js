const clientes = [{
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
    }] 
},
{
    nome: "Maria",
    idade: 28,
    cpf: "111333222-11",
    email: "mariamadalena1111@gmail.com",
    dependentes: [{
        nome: "Thiago",
        parentesco: "filho",
        dataNascimento: "18/02/2010"
    },
    {
        nome: "Matheus",
        parentesco: "filho",
        dataNascimento: "28/10/2012"
    }] 
}]

const listaDependentes1 = [...clientes[0].dependentes, ...clientes[1].dependentes];
const listaDependentes2 = [ clientes[0].dependentes, clientes[1].dependentes];

console.table(listaDependentes1)
console.table(listaDependentes2)