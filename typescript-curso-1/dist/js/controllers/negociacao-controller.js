import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        // this.negociacoes.imprime();
        console.log(this.negociacoes.retornaLista());
        this.limpaFormulario();
    }
    criaNegociacao() {
        /* Eu fiz assim mas vou comentar para fazer igual o flavio

        const negociao = new Negociacao(
            this.inputData.valueAsDate,
            this.inputQuantidade.valueAsNumber,
            this.inputValor.valueAsNumber
        );
        */
        const exp = /-/g;
        const data = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(data, quantidade, valor);
    }
    limpaFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
