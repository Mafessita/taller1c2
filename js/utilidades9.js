function convertirMayusculas() {
    const fraseOriginal = document.getElementById('frase').value;
    const palabras = fraseOriginal.split(' ');
    const palabrasMayusculas = palabras.map(function(palabra) {
        return palabra.charAt(0).toUpperCase() + palabra.slice(1);
    });
    const fraseConMayusculas = palabrasMayusculas.join(' ');
    const resultado = document.getElementById('resultado');
    resultado.textContent = fraseConMayusculas;
}
