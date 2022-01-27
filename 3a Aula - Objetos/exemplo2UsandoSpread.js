const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
}
   
const equipoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
}

const guerreiro = { fichaGuerreiro, equipoGuerreiro }
console.log(guerreiro)

const guerreiro2 = { ...fichaGuerreiro, ...equipoGuerreiro }
console.log(guerreiro2)

const mago = {
    nome: "Gandalf",
    classe: "mago"
}
const hobbit = {
    nome: "Aragorn",
    classe: "guerreiro"
}
   
const ranger = {
    nome: "Legolas",
    classe: "ranger"
}

const personagens = { ...mago, ...hobbit, ...ranger }
console.log(personagens)