class CampoInvalido extends Error {
    constructor (campo) {
        super(`O campo ${campo} está inválido`)
        this.name = 'CampoInvalido'
        this.idErro = 2
    }
}

module.exports = CampoInvalido