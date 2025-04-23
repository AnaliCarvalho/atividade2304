function revelarIdade() {
    var idade = parseFloat(document.getElementById('idade').value);

    let status = "";
    if (idade <= 11) {
        status = "Criança";
    } else if (idade <= 18) {
        status = "Adolescente";
    } else if (idade <= 60) {
        status = "Adulto";
    } else {
        status = "Idoso";
    }

    document.getElementById('resultado').innerHTML = `Você é um(a): ${status}`;
}