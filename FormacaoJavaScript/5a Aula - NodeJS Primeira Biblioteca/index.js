//const chalk = require('chalk');
import chalk from 'chalk';
import fs from 'fs';

const arquivo ='./arquivos/texto1.md';

function extraiLinks (texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const vetorLinks = [];
    let temp;
    while ((temp = regex.exec(texto)) != null) {
        vetorLinks.push({ [temp[1]]: temp[2]});
    }
    return vetorLinks.length === 0? "Não há links.": vetorLinks;
}

function trataErro (erro){
    throw new Error(chalk.red(erro.code, 'Arquivo não encontrado.'));
}

// USando Async e Await
async function  AbreArquivo (caminhoArquivo) {
    const codificacao= "utf-8";
    try{
        const texto = await fs.promises.readFile(caminhoArquivo, codificacao);
        // console.log(chalk.green(texto));
        return extraiLinks(texto);
    } catch (erro) {
        trataErro(erro);
    } 
}

// Usando Then e Catch
// function AbreArquivo(caminhoArquivo) {
//     const codificacao= "utf-8";
//     fs.promises
//     .readFile(caminhoArquivo, codificacao)
//     .then((texto) => console.log(texto)) //só é executado depois de pegar o texto todo
//     .catch((erro) => trataErro(erro)) // catch pega o erro
// }

// function AbreArquivo(caminhoArquivo) {
//     const codificacao= "utf-8";
//     fs.readFile(caminhoArquivo, codificacao, (erro, dado) =>{
//         if (erro) {
//             // return console.log(erro);
//             // return console.log(chalk.red("Não conseguimos abrir o arquivo."));
//             trataErro(erro);
//         }
//         console.log(chalk.green("Conseguimos abrir o arquivo. Eis o conteúdo..."));
//         return console.log(dado);
//     });
// }

// AbreArquivo(caminho[2]);

// module.exports = AbreArquivo;
export default AbreArquivo;