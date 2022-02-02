// comand line interface = CLI
import AbreArquivo from './index.js';
import chalk from 'chalk';
import validaURLs from './http-validacao.js';

const caminho = process.argv;

async function ProcessaTexto (caminhoArquivo) {
    const vetor = await AbreArquivo(caminhoArquivo[2]);
    if (caminhoArquivo[3] == "validar"){
        console.log(chalk.yellow("Links Validados"), await validaURLs(vetor));
    } else {
        console.log(chalk.yellow("Lista de links"), vetor);
    }

}

ProcessaTexto(caminho);