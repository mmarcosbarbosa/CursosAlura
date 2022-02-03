const conexao = require ('../database/conexao');
const moment = require ('moment');

class Atendimento {
    adiciona(atendimento, resposta){
        const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss');
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss');
        
        // Verificar error
        const vetorErros = [];
        if (moment(data).isSameOrBefore(dataCriacao)) {
            vetorErros.push ({
                campo: 'Data',
                descricao: 'Data de agendamento deve ser maior que data atual.'
            })
        }
        if (atendimento.cliente.length <= 5) {
            vetorErros.push({
                campo: 'Cliente',
                descricao: 'Nome de cliente invalido, deve ter mais de 5 letras.'
            })
        }
        // Se erros apareceram...
        if (vetorErros.length > 0) {
            resposta.status(400).json(vetorErros);
        } else {
            const atendimentoComDataCriacao = { ...atendimento, data, dataCriacao }; 
            console.log(atendimentoComDataCriacao);

            const sql = "INSERT INTO atendimento SET ?";
    
            conexao.query (sql, atendimentoComDataCriacao, (erro, resultado) => {
                if (erro) {
                    console.log(erro)
                    resposta.status(400).json(erro);
                } else {
                    console.log(resultado);
                    // resposta.status(201).json(resultado);
                    resposta.status(201).json(atendimentoComDataCriacao);
                }
            })

        }

    }

    lista(resposta){
        const sql = "Select * from atendimento";
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

    buscaPorId(idCliente, resposta){
        const sql = "Select * from atendimento where id =" + idCliente;
        conexao.query (sql, (erro, resultado) => {
            if (erro) {
                console.log(erro)
                resposta.status(400).json(erro);
            } else {
                console.log(resultado);
                if (resultado.length==0){
                    resposta.status(400).json({
                        campo: "ID Cliente",
                        descricao: "ID não encontrado na base."
                    })
                } else {
                    resposta.status(200).json(resultado[0]);
                }
            }
        })
    }

    altera(idCliente, valores, resposta){
        if (valores.data) {
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss');
        }
        const sql = "Update atendimento set ? where id = ?";
        // ou sql = "Update atendimento set ? where id = " + id;
        
         // ou ..... (sql, valores, ...)
        conexao.query(sql, [ valores, idCliente ], (erro, resultado) => {
            if (erro) {
                console.log(erro)
                resposta.status(400).json(erro);
            } else {
                console.log(resultado);
                // resposta.status(200).json(resultado);
                resposta.status(200).json({...valores, idCliente});
            }
        })
    }

    deleta(idCliente, resposta){
        const sql = "Delete from atendimento where id = "+idCliente;

        conexao.query(sql, (erro, resultado) =>{
            if (erro) {
                console.log(erro)
                resposta.status(400).json(erro);
            } else {
                console.log(resultado);
                // resposta.status(200).json(resultado);
                resposta.status(200).json({idCliente});
            }
        })
    }
}

module.exports = new Atendimento