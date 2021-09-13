export class Negociacao {
    private _data;
    private _quantidade;
    private _valor;
    private _volume;


    constructor(data, quantidade, valor, volume) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
        this._volume = volume;
    }

    get data(){ 
        return this._data;
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }

    get volume(){
        return this._quantidade * this._valor;
    }
}