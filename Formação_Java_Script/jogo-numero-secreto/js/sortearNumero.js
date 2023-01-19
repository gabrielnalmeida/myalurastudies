const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroSecreto()

function gerarNumeroSecreto(){
    return parseInt(Math.random() * maiorValor + 1);
}

console.log('Número Secreto: ', numeroSecreto)

const elementoMenorValor = document.querySelector('#menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.querySelector('#maior-valor')
elementoMaiorValor.innerHTML = maiorValor