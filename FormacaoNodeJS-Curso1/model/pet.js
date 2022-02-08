const conexao = require ('../infra/database/conexao');
const uploadArquivos = require('../arquivos/uploadArquivos');

class Pet {
    adiciona (pet, resposta) {
        const sql = "INSERT INTO pet SET ?";

        uploadArquivos(pet.imagem, pet.nome, (erro, novoCaminho) => {
            if (erro) {
                resposta.status(400).json({ erro });
            } else {
                const novoPet = { nome: pet.nome, imagem: novoCaminho}
    
                console.log(novoPet);
                conexao.query (sql, novoPet, (err, resultado) => {
                    if (err) {
                        console.log(err)
                        resposta.status(400).json(err);
                    } else {
                        console.log(resultado);
                        // resposta.status(201).json(resultado);
                        resposta.status(201).json(novoPet);
                    }
                })
            }
        })
    
    }
    lista(resposta){
        const sql = "Select * from pet";
        conexao.query (sql, (erro, resultado) => {
            if (erro) {
                console.log(erro)
                resposta.status(400).json(erro);
            } else {
                console.log(resultado);
                resposta.status(200).json(resultado);
            }
        })
    }
}

module.exports = new Pet