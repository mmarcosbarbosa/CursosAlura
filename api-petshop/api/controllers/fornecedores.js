const roteador = require('express').Router()
const TabelaFornecedor = require ('../bancodedados/tabelaFornecedor')
const Fornecedor = require ('../classes/fornecedor')
const DadosNaoFornecidos = require('../erros/DadosNaoFornecidos')
const NaoEncontrado = require('../erros/NaoEncontrado')
const SerializadorFornecedor = require('../serializador').SerializadorFornecedor

roteador.get('/', async (_, resposta) => {
    const resultados = await TabelaFornecedor.lista()
    // resposta.status(200).json(resultados)
    // Usando serializador - NAO GOSTEI
    resposta.status(200)
    const serializador = new SerializadorFornecedor (
        resposta.getHeader('Content-Type')
    )
    resposta.send( 
        serializador.serializar(resultados)
    )
})

roteador.post('/', async (requisicao, resposta, trataErro) => {
    try {
        const dadosRecebidos = requisicao.body;
        const fornecedor = new Fornecedor(dadosRecebidos);
        fornecedor.valida()
        await fornecedor.insere()
        //resposta.status(201).json(fornecedor);
        // Com serializador (não gostei)
        resposta.status(201)
        const serializador = new SerializadorFornecedor (
            resposta.getHeader('Content-Type')
        )
        resposta.send( 
            serializador.serializar(fornecedor)
        )

        // const erros = fornecedor.valida();
        // if(!erros.length){
        //     await fornecedor.insere();
        //     resposta.status(201).json(fornecedor);
        // } else {
        //     resposta.status(400).json(erros);
        // }
    } catch (erro) {
        trataErro(erro)
    }
})

roteador.get('/:id', async (requisicao, resposta, trataErro) => {
    try{
        const idFornecedor = requisicao.params.id;
        const fornecedor = new Fornecedor({ id: idFornecedor });
        const resultados = await fornecedor.busca();
        if (resultados) {
            // Usando serializador... Ainda vou entender esse bicho
            resposta.status(200)
            const serializador = new SerializadorFornecedor (
                resposta.getHeader('Content-Type'), 
                ['email', 'dataCriacao', 'dataAtualizacao', 'versao']
            )
            resposta.send( 
                serializador.serializar(resultados)
            )
            // resposta.status(200).json(resultados);
        } else {
            throw new NaoEncontrado;
        }        
    } catch (erro){
        trataErro(erro);
    }
})

roteador.delete('/:id', async ( requisicao, resposta, trataErro) => {
    try{
        const idFornecedor = requisicao.params.id;
        const fornecedor = new Fornecedor({ id: idFornecedor });
        const resultados = await fornecedor.deleta();
        if (resultados) {
            resposta.status(204).json(resultados)
        } else {
            throw new NaoEncontrado
            // mensagemErro = { "id": idFornecedor,
            // "mensagem": "ID não encontrado na base." };
            // resposta.status(404).json(mensagemErro);
        }
    } catch(erro) {
        trataErro(erro);
    }
})

roteador.patch('/:id', async(requisicao, resposta, trataErro) => {
    const idFornecedor = requisicao.params.id;
    const camposAlterados = requisicao.body;
    const valoresParaCriacao = { "id" : idFornecedor, ...camposAlterados};
    const quaisCampos = Object.keys(camposAlterados);
    
    // Será que recebeu valores na requisicao
    try {
        if (quaisCampos.length > 0 ) {    
            console.log("Campos que serão alterados:", quaisCampos);
            const fornecedor = new Fornecedor(valoresParaCriacao);
            const resultados = await fornecedor.atualiza();
            console.log(resultados)
            if (resultados) {
                if (resultados.Erro) {
                    // tivemos erro na atualização
                    //resposta.status(400).json(resultados);
                    throw new NaoEncontrado;
                } else {
                    // resposta trouxe sucesso
                    const mensagem = {}
                    if (resultados == 1) {
                        mensagem.mensagem = "Uma linha da tabela foi atualizada com sucesso."
                    } else {
                        mensagem.mensagem = "Várias linhas foram atualizadas com sucesso."
                    }
                    resposta.status(204).json(mensagem);
                }
            } else {
                // Esse else trata o retorno de resultado quando a busca (antes do update) traz nulo
                // const mensagemErro = { "id": idFornecedor,
                //                     "mensagem": "ID não encontrado na base." };
                // resposta.status(404).json(mensagemErro);
                throw new NaoEncontrado;
            }
        }  else {
            // Esse else trata as chamadas que vem sem "corpo" (sem campos para alterar)
            // const mensagemErro = { "mensagem": "Nenhum campo foi solicitado para alteração." };
            // resposta.status(400).json(mensagemErro);
            throw new DadosNaoFornecidos;
        }
    } catch (erro) {
        trataErro(erro)
    }
})

module.exports = roteador