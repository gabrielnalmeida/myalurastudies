const elementoChute = document.querySelector('#chute');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak);

function onSpeak(numeroFalado) {
    const chute = numeroFalado.results[0][0].transcript;
    exibeChute(chute)
    verificaValorValido(chute)
}

function exibeChute(chute){
    elementoChute.innerHTML = `
        <div>Você Disse:</div>
        <span class="box">${chute}</span>
    `
}