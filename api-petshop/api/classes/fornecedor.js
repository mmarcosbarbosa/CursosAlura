const TabelaFornecedor = require ('../bancodedados/tabelaFornecedor');
const CampoInvalido = require('../erros/CampoInvalido');

class fornecedor {
    constructor ({ id, empresa, email, categoria, dataCriacao, dataAtualizacao, versao }) {
        this.id = id;
        this.empresa = empresa;
        this.email = email;
        this.categoria = categoria;
        // this.dataCriacao = dataCriacao;
        // this.dataAtualizacao = dataAtualizacao;
        // this.versao = versao;
    }
    async insere () {
        const dadosEnviados = {
            empresa: this.empresa, 
            email: this.email, 
            categoria: this.categoria
        }
        const resultado = await TabelaFornecedor.insere(dadosEnviados);
        this.id = resultado.id;
        this.dataCriacao = resultado.dataCriacao;
        this.dataAtualizacao = resultado.dataAtualizacao;
        this.versao = resultado.versao;
    }
    async busca() {
        const fornecedorEncontrado = await TabelaFornecedor.busca(this.id);
        if (fornecedorEncontrado){
            this.empresa = fornecedorEncontrado.empresa;
            this.email = fornecedorEncontrado.email;
            this.categoria = fornecedorEncontrado.categoria;
            this.dataCriacao = fornecedorEncontrado.dataCriacao;
            this.dataAtualizacao = fornecedorEncontrado.dataAtualizacao;
            this.versao = fornecedorEncontrado.versao;
            return fornecedorEncontrado;
        } else {
            return false;
        }
    }

    async deleta() {
        const fornecedorDeletado = await TabelaFornecedor.busca(this.id);
        if (fornecedorDeletado){
            console.log(fornecedorDeletado)
            const resultado = await TabelaFornecedor.delete(this.id);
            console.log(resultado)
            return resultado;
        } else {
            return false;
        }
    }

    async atualiza(){
        const fornecedorEncontrado = await TabelaFornecedor.busca(this.id);
        if (fornecedorEncontrado){
            const dadosEnviados = {};
            if (this.empresa) {
                dadosEnviados.empresa = this.empresa;
            } 
            if (this.email) {
                dadosEnviados.email = this.email;
            }
            if (this.categoria){
                dadosEnviados.categoria = this.categoria;
            }
            // }
            // const dadosEnviados = {
            //     empresa: this.empresa, 
            //     email: this.email, 
            //     categoria: this.categoria
            // }
            console.log(dadosEnviados)
            const resultado = await TabelaFornecedor.atualiza(this.id, dadosEnviados);
            console.log(resultado)
            return resultado;
        } else {
            return false;
        }
    }

    valida () {
        // const erros = [];
        if (!this.empresa) {
            // erros.push ({
            //     campo: 'empresa',
            //     descricao: 'Campo empresa não pode ser nulo.'
            // })
            throw new CampoInvalido('empresa')
        }
        if (!this.email) {
            // erros.push ({
            //     campo: 'email',
            //     descricao: 'Campo email não pode ser nulo.'
            // })
            throw new CampoInvalido('email')
        }
        if (!this.categoria || (this.categoria != "ração" && this.categoria != "brinquedos")) {
            // erros.push ({
            //     campo: 'categoria',
            //     descricao: 'Campo categoria tem que ser "ração" ou "brinquedos".'
            // })
            throw new CampoInvalido('categoria')
        }
        // return erros;
    }
}

module.exports = fornecedor