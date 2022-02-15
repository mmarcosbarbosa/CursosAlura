class DadosNaoFornecidos extends Error {
    constructor (contentType) {
        super(`Os dados não foram fornecidos para atualizacao`)
        this.name = 'DadosNaoFornecidos'
        this.idErro = 3
    }
}

module.exports = DadosNaoFornecidos