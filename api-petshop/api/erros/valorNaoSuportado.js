class ValorNaoSuportado extends Error {
    constructor (contentType) {
        super(`O tipo de conteúdo ${contentType} não é suportado`)
        this.name = 'ValorNaoSuportado'
        this.idErro = 4
    }
}

module.exports = ValorNaoSuportado