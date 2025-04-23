function validarCPF() {
    const cpf = document.getElementById('cpf').value.replace(/\D/g, '');


    if (cpf.length !== 11) {
        document.getElementById('resultado').textContent = 'CPF inválido! O CPF deve ter 11 dígitos.';
        return;
    }


    if (/^(\d)\1{10}$/.test(cpf)) {
        document.getElementById('resultado').textContent = 'CPF inválido! Todos os dígitos são iguais.';
        return;
    }


    function calcularDigito(cpf, peso) {
        let soma = 0;
        for (let i = 0; i < peso.length; i++) {
            soma += cpf[i] * peso[i];
        }
        let resto = soma % 11;
        if (resto < 2) return 0;
        return 11 - resto;
    }


    const peso1 = [10, 9, 8, 7, 6, 5, 4, 3, 2];
    const peso2 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];

    const digito1 = calcularDigito(cpf, peso1);
    const digito2 = calcularDigito(cpf, peso2);


    if (parseInt(cpf[9]) === digito1 && parseInt(cpf[10]) === digito2) {
        document.getElementById('resultado').textContent = 'CPF válido!';
    } else {
        document.getElementById('resultado').textContent = 'CPF inválido!';
    }
}
