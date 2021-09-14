export class Negociacao {
    //private calopsitaName = 'calo'; --> mesma coisa que escrever dentro do constructor
    constructor(
        public readonly _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
        ) {}

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }
    //Basicamente clonamos a data, fazendo uma cópia e, consequentemente, quando alguém muda
    //ela irá mudar apenas sua cópia e não sua original.
}
