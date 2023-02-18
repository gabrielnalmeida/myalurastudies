import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    // Negociacao[] == Array<Negociacao>
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

    // readonly Negociacao[] == Array<Negociacao>
    lista(): readonly Negociacao[] {
        return this.negociacoes;
    }
}