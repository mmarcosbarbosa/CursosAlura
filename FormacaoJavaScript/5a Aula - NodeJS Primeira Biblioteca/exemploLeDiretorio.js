import { promises } from 'fs';
import { join } from 'path';

async function pegarArquivo(caminho) {
    const caminhoAbsoluto = join(__dirname, '..', caminho);
    const encoding = 'utf-8';
    const arquivos = await promises.readdir(caminhoAbsoluto, { encoding });
    console.log('arquivos', arquivos);
}