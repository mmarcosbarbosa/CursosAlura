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
    constructor(
    //public readonly data: Date, // ele libera metodos que permitem alterar a data... setDate
    _data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume() { return this.valor * this.quantidade; }
}
