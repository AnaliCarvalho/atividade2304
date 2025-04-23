function exibirPrimos() {
    const numeroInicial = parseInt(document.getElementById('valorInicial').value);
    const numeroFinal = parseInt(document.getElementById('valorFinal').value);

    function isPrime(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
            return true;
        }


        let primos = [];


        for (let i = numeroInicial; i <= numeroFinal; i++) {
            if (isPrime(i)) {
                primos.push(i);
            }
        }


        document.getElementById('resultado').textContent = `Os números primos entre ${numeroInicial} e ${numeroFinal} são:  ${primos.join(', ')}`;
    }
}