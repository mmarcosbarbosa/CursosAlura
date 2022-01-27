const cliente = {
    nome: "Marcelo",
    idade: 47,
    cpf: "00820715786",
    email: "mmarcosbarbosa@gmail.com",
}

cliente.telefones = [ "11949938266", "27999753905"]

cliente.telefones.forEach(fone => console.log(fone))

console.log(cliente)

cliente.dependentes = [{
    nome: "Pedro",
    parentesco: "filho",
    dataNascimento: "18/02/2010"
}]

console.log(cliente);

cliente.dependentes[0].nome = "Pedro Barbosa";


console.log(cliente);

cliente.dependentes.push({
    nome: "Paulo",
    parentesco: "filho",
    dataNascimento: "28/10/2012"
})

console.log(cliente);

filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNascimento=="28/10/2012")

console.log(filhaMaisNova)
console.log(filhaMaisNova[0].nome)