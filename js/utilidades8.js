function extraerPares() {
    const inputNumeros = document.getElementById('numeros').value;
    const numeros = inputNumeros.split(',').map(Number);
    const numerosPares = numeros.filter(numero => numero % 2 === 0);
    const resultado = document.getElementById('resultado');

    if (numerosPares.length === 0) {
        resultado.textContent = "No se encontraron números pares.";
    } else {
        resultado.textContent = numerosPares.join(', ');
    }
}
