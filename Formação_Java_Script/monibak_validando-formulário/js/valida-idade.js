export default function ehMaiorDeIdade(campo) {
    const dataNascimento = new Date(campo.value);
    if (!validaIdade(dataNascimento)){
        campo.setCustomValidity('O usuário precisa ser maior de 18 anos')
    }
}

function validaIdade(data) {
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dataAtual >= dataMais18;
}