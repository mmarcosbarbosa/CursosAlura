class NaoEncontrado extends Error {
    constructor () {
        super("O fornecedor não foi encontrado")
        this.name = 'NaoEncontrado'
        this.idErro = 1
    }
}

module.exports = NaoEncontrado