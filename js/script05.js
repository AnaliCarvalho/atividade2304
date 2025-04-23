const numeroAleatorio = Math.floor(Math.random() * 10) + 1;

function adivinharNumero() {
    const palpite = parseFloat(document.getElementById('palpite').value);

    if (isNaN(palpite) || palpite < 1 || palpite > 10) {
        document.getElementById('resultado').innerHTML = "Insira número de 1 a 10";
    } else if (palpite > numeroAleatorio) {
        document.getElementById('resultado').innerHTML = "O número é menor. Tente outra vez :)";
    } else {
        document.getElementById('resultado').innerHTML = "Parabéns, você adivinhou o número!!"
    }
}