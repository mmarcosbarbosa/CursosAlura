const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
   }

// Nao faz cópia, faz referencia
const objPersonagem2 = objPersonagem  
objPersonagem2.nome = "Gandalf, o Cinzento"

console.log(objPersonagem.nome) //Gandalf, o Cinzento
console.log(objPersonagem2.nome) //Gandalf, o Cinzento

// agora é cópia
const objPersonagem3 = Object.create(objPersonagem)
objPersonagem3.nome = "O Hobbit"

console.log(objPersonagem.nome) //Gandalf, o Cinzento
console.log(objPersonagem3.nome) //Gandalf, o Cinzento