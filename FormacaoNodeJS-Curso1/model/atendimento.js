const conexao = require ('../infra/database/conexao');
const moment = require ('moment');
const axios = require('axios');
const repositorio = require('../repositorios/atendimento')

class Atendimento {
    valida (data, dataCriacao, tamanho=0) {
        const erros = [];
        if (data && moment(data).isSameOrBefore(dataCriacao)) {
            erros.push ({
                campo: 'Data',
                descricao: 'Data de agendamento deve ser maior que data atual.'
            })
        }
        if (tamanho && tamanho <= 5) {
            erros.push({
                campo: 'Cliente',
                descricao: 'Nome de cliente invalido, deve ter mais de 5 letras.'
            })
        }
        return erros;
    }

    adiciona(atendimento){
        const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss');
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss');
         
        // Verificar error
        const vetorErros = this.valida(data, dataCriacao, atendimento.cliente.length);

        // Se erros apareceram...
        if (vetorErros.length > 0) {
            return new Promise ((_, reject) => reject(vetorErros));
            //resposta.status(400).json(vetorErros);
        } else {
            const atendimentoComDataCriacao = { ...atendimento, data, dataCriacao }; 
            console.log(atendimentoComDataCriacao);

            return repositorio.adiciona(atendimentoComDataCriacao)
                .then( resultados => {
                    const id = resultados.insertId;
                    return ({...atendimento, id})
                    //return atendimentoComDataCriacao;
                })
        }
    }

    lista(){
        return repositorio.lista();
    }

    buscaPorId(idCliente){

        return repositorio.busca(idCliente)
            .then( async resultados => {
                if (resultados.length==0){
                    // Não trouxe resultados
                    const mensagemErro = {
                        campo: "ID Cliente",
                        descricao: "ID não encontrado na base."
                    };
                    return mensagemErro;
                } else {
                    const atendimento = resultados[0];

                    // Utilizando Axios para buscar os dados do cliente na API externa
                    const cpf = atendimento.cliente;
                    const stringConexao = `http://localhost:8082/${cpf}`;
                    const {data}  = await axios.get(stringConexao);
                    atendimento.cliente = data;
                    
                    console.log(atendimento);
                    return atendimento;
                }
            });
    }

    altera(idCliente, valores){
        // Se tiver alteração de data, é importante colocar no formato
        let vetorErros = [];
        if (valores.data) {
            const dataAtual = moment().format('YYYY-MM-DD HH:mm:ss');
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss');
            // Verificar error
            vetorErros = [  ...vetorErros,  ...this.valida(valores.data,dataAtual) ] ;
        }
        if (valores.cliente.length){
            vetorErros = [  ...vetorErros,  ...this.valida(false,false,valores.cliente.length) ] ;
        }


        // Se erros apareceram...
        if (vetorErros.length > 0) {
            return new Promise ((_, reject) => reject(vetorErros));
            //resposta.status(400).json(vetorErros);
        } else {

            return repositorio.altera(idCliente, valores)
                .then(resultados => {
                    const mensagem = {}
                    if (resultados.affectedRows){
                        mensagem.campo = "idCliente";
                        mensagem.valor = idCliente;
                        mensagem.descricao = `Cliente ${idCliente} foi alterado na base.`;
                    } else {
                        mensagem.campo = "idCliente";
                        mensagem.descricao = `Identificador ${idCliente} não encontrado na base.`;
                    }
                    return mensagem;
                })                                 
        }
    }

    deleta(idCliente){
        return repositorio.deleta(idCliente)
            .then(resultados => {
                const mensagem = {}
                if (resultados.affectedRows){
                    mensagem.campo = "idCliente";
                    mensagem.valor = idCliente;
                    mensagem.descricao = `Foi/foram deleta(s) ${resultados.affectedRows} linha(s) com esse ID.`;
                } else {
                    mensagem.campo = "idCliente";
                    mensagem.descricao = `Identificador ${idCliente} não encontrado na base.`;
                }
                console.log(mensagem);
                return mensagem;
            })
    }
}

module.exports = new Atendimento