export class Negociacao {
    //private calopsitaName = 'calo'; --> mesma coisa que escrever dentro do constructor
    constructor(data, quantidade, valor) {
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
}
