export class Negociacao {
/*    private _data: Date;
    private _quantidade: number;
    private _valor: number;

    constructor (data: Date, quantidade: number, valor:number){
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }*/

    /* Essa é a simplificação 1 
    constructor (
        private _data: Date,
        private _quantidade: number,
        private _valor:number
    ) {}
    get data() : Date { return this._data; }
    get quantidade() : number { return this._quantidade; }
    get valor(): number { return this._valor; } */

    // simplificação 2
    constructor (
        //public readonly data: Date, // ele libera metodos que permitem alterar a data... setDate
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) {}
    get data(): Date {  // programação defensiva... nesse caso, tem que ter o getter
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume(): number { return this.valor * this.quantidade }
}
