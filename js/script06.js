function calcularFatorial() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultado = document.getElementById('resultado');

    function fatorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * fatorial(n - 1);
        }
    }


    document.getElementById('resultado').innerHTML = `O resultado de ${numero} é ${fatorial(numero)}`;
}