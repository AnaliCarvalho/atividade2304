function somarPares() {
    const numero = parseFloat(document.getElementById('numero').value);

    let soma = 0;

    for (let i = 1; i <= numero; i++) {
        if (i % 2 === 0) {
            soma += i;
        }
    }

    document.getElementById('resultado').innerHTML = `O resultado é ${soma}`;
}