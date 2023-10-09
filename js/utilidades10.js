function calcularLongitudes() {
    const inputStrings = document.getElementById('strings').value;
    const strings = inputStrings.split(',');
    const longitudes = strings.map(function(string) {
        return string.trim().length;
    });
    const resultado = document.getElementById('resultado');
    resultado.textContent = JSON.stringify(longitudes);
}
