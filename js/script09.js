function converterHoras(tipo) {
    let horas;
    if (tipo === 'minutos') {
        horas = parseFloat(document.getElementById('inputHorasMinutos').value);
        const converterMinutos = horas * 60;
        document.getElementById('resultado').innerHTML = `A conversão de ${horas} horas para minutos é ${converterMinutos} minutos.`;
    } else if (tipo === 'segundos') {
        horas = parseFloat(document.getElementById('inputHorasSegundos').value);
        const converterSegundos = horas * 3600;
        document.getElementById('resultado').innerHTML = `A conversão de ${horas} horas para segundos é ${converterSegundos} segundos.`;
    }
}
