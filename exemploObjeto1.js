const cliente = {
    nome: "Marcelo",
    idade: 47,
    cpf: "00820715786",
    email: "mmarcosbarbosa@gmail.com",
}

console.log(cliente)

console.log(cliente.cpf)
console.log(cliente.nome)

// Usando template string

console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos.`)
console.log(`Por segurança, somente os primeiros 3 numeros do meu cpf sao ${cliente.cpf.substring(0,3)}.`)
console.log(`Usando colchetes: ${cliente["email"]}.`)

const chaves = [ "nome", "idade", "cpf", "email"]

// 3 formas de varrer o vetor e imprimir as informações do cliente.
for (let i=0; i<chaves.length; i++){
    console.log(`${chaves[i]} : ${cliente[chaves[i]]}`)
}

// forEach usando somente o índice
chaves.forEach((_,indice) => console.log(`${chaves[indice]} : ${cliente[chaves[indice]]}`))

// forEach usando valor
chaves.forEach( valor => console.log(`${valor} : ${cliente[valor]}`))

// adicionar chave e valor no objeto
cliente.telefone = "11222222222"
console.log(cliente)
cliente.telefone = "11949938266"
console.log(cliente)

// deletando
const deletou = delete cliente.telefone;
if (deletou) console.log ("Deletou o campo telefone.")
else console.log ("Não deletou o campo telefone.")

console.log(cliente)
