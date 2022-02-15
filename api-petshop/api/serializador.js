const valorNaoSuportado = require ('./erros/valorNaoSuportado')
const jsontoxml = require('jsontoxml')

class Serializador {
    json (dados){
        return JSON.stringify(dados);
    }

    xml (dados) {
        let tag = this.tagSingular

        if (Array.isArray(dados)) {
            tag = this.tagPlural
            dados = dados.map((item) => {
                return {
                    [this.tagSingular]: item
                }
            })
        } 
            
        return jsontoxml ({ [tag]: dados});
        
    }

    serializar (dados) {

        dados = this.filtrar(dados)
        if (this.contentType == 'application/json') {
            return this.json(dados)
        } else if (this.contentType == 'application/xml') {
            return this.xml(dados)
        }
        else 
            throw new ValorNaoSuportado(this.contentType)
    }

    filtrarCampos (dados) {
        const novoObjeto = {}

        this.camposPublicos.forEach( (campo) => {
            if (dados[campo]) {
                novoObjeto[campo] = dados[campo]
            }
        })
        
        return novoObjeto
    }

    filtrar(dados) {
        if (Array.isArray(dados)) {
            return dados.map(item => {
                return this.filtrarCampos(item)
            })
        } else {
            return this.filtrarCampos(dados)
        }
S
    }
}

class SerializadorFornecedor extends Serializador {
    constructor(contentType, camposExtras) {
        super()
        this.contentType = contentType
        this.camposPublicos = [ 'id', 'empresa', 'categoria' ].concat(camposExtras || [])
        this.tagSingular = 'fornecedor'
        this.tagPlural = 'fornecedores'
    }
}

class SerializadorErro extends Serializador {
    constructor(contentType, camposExtras) {
        super()
        this.contentType = contentType
        this.camposPublicos = [ 'id', 'mensagem' ].concat(camposExtras || [])
        this.tagSingular = 'erro'
        this.tagPlural = 'erros'
    }
}

module.exports = { 
    Serializador: Serializador,
    SerializadorFornecedor: SerializadorFornecedor,
    SerializadorErro: SerializadorErro,
    formatosAceitos: [ 'application/json', 'application/xml' ]
}