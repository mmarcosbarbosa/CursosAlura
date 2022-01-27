const livro = {
    id: 50,
    titulo: "Primeiros Passos com NodeJS",
    autor: "João Rubens",
    categoria: "programação",
    versoes: ["ebook", "impresso"]
};

const jsonLivro = JSON.stringify(livro);
   
console.log(jsonLivro)

const livroObj = JSON.parse(jsonLivro);

console.log(livroObj);