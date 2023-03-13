import { Negociacao } from "../models/negociacao.js";
import { Imprimivel } from "../interfaces/imprimivel.js";

export function imprimir(...objetos: Imprimivel[]) {
    for (let objeto of objetos) {
        console.log(objeto.paraTexto());
    }
}