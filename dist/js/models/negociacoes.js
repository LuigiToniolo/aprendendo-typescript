export class Negociacoes {
    constructor() {
        //private negociacoes: Array<Negociacao> = []; ou
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return [...this.negociacoes];
    }
}
