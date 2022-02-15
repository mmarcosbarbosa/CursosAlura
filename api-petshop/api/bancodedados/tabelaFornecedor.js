const modeloTabelaFornecedor = require ('./modeloTabelaFornecedor')
module.exports = {
    lista() {
        return modeloTabelaFornecedor.findAll( { raw : true });
    },
    insere(fornecedor) {
        return modeloTabelaFornecedor.create(fornecedor);
    },
    async busca(id) {
        const encontrado = await modeloTabelaFornecedor.findOne({
            where: {
                id: id
            }
        }).catch( () => {
            throw new Error ("Fornecedor não encontrado.") 
        })
        return encontrado;
    },
    async delete(id) {
        const deletado = await modeloTabelaFornecedor.destroy( {
            where: {
                id: id
            }
        }).catch( () => {
            throw new Error ("Fornecedor não encontrado oara deleção.") 
        })
        return deletado;
    },
    async atualiza(id, dadosParaAtualizar) {
        const atualizado = await modeloTabelaFornecedor.update(
            dadosParaAtualizar,
            {
                where: {
                    id: id
                }
            }
        ).catch( () => {
            mensagemErro = { "Erro": "Erro no Update. Verifique o valor dos campos enviados." };
            return mensagemErro;
        })
        return atualizado;
    }
}