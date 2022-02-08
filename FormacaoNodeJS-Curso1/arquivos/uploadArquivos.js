const fs = require('fs');
const path = require ('path');

module.exports = (caminho, nomeArquivo, callbackImagemCriada) => {
    const tipo = path.extname(caminho); 
    const novoCaminho = `./assets/imagem/${nomeArquivo}${tipo}`;

    if (tipo == '.jpg' || tipo == '.jpeg' || tipo == '.png') {
        fs.createReadStream(caminho)
            .pipe(fs.createWriteStream(novoCaminho))
            .on('finish', () => callbackImagemCriada(false, novoCaminho))
    } else { 
        const erro = 'Erro! Tipo invalido de imagem.';
        console.log(erro);
        callbackImagemCriada(erro);
    }
}

// fs.readFile('./assets/salsicha.jpg', (erro, buffer) => {
//     if(!erro) {
//         console.log("Imagem bufferizada.");
//         console.log(buffer);

//         fs.writeFile('./assets/outroSalsicha.jpg', buffer, (erro) => {
//             console.log('Imagem foi escrita em novo arquivo.')
//         })
//     } else {
//         console.log("Deu ruim.");
//     }
// })