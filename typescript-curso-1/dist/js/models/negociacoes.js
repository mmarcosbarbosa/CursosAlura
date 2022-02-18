export class Negociacoes {
    constructor() {
        // private negociacoes: Array<Negociacao> = [];
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // retornaLista(): ReadonlyArray<Negociacao> { // ler texto abaixo
    retornaLista() {
        // return this.negociacoes;
        // Quando vc retorna o this.negociacões para fora, lá fora é criada uma referencia
        // para a lista de objetos aqui dentro, ou seja, se lá fora vc der um ".pop()" vc
        // vai excluir o que está aqui dentro. Saída, retonar uma nova lista com todos
        // os elementos que estão aqui dentro, usando spread operator
        // return [... this.negociacoes];
        // ou usar ReadonlyArray... 
        return this.negociacoes;
    }
    imprime() {
        this.negociacoes.forEach(item => {
            console.log(item);
        });
    }
}
