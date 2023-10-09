// Lista de palabras para adivinar
const palabras = ["javascript", "html", "css", "programacion", "computadora", "desarrollo"];

// Elegir una palabra al azar
const palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];
const palabraOculta = "_".repeat(palabraSecreta.length);

let intentosRestantes = 6;

// Mostrar la palabra oculta en la página
document.getElementById('palabra').textContent = palabraOculta;

document.getElementById('adivinar').addEventListener('click', function () {
    const letra = document.getElementById('letra').value.toLowerCase();
    if (letra.length !== 1 || !/^[a-z]$/.test(letra)) {
        alert('Ingresa una letra válida.');
        return;
    }

    if (palabraSecreta.includes(letra)) {
        // La letra está en la palabra secreta
        for (let i = 0; i < palabraSecreta.length; i++) {
            if (palabraSecreta[i] === letra) {
                palabraOculta[i] = letra;
            }
        }
        document.getElementById('palabra').textContent = palabraOculta;
    } else {
        // La letra no está en la palabra secreta
        intentosRestantes--;
        document.getElementById('intentos').textContent = intentosRestantes;
    }

    if (palabraOculta === palabraSecreta) {
        document.getElementById('resultado').textContent = '¡Ganaste! La palabra era: ' + palabraSecreta;
        document.getElementById('adivinar').disabled = true;
    } else if (intentosRestantes === 0) {
        document.getElementById('resultado').textContent = '¡Perdiste! La palabra era: ' + palabraSecreta;
        document.getElementById('adivinar').disabled = true;
    }

    document.getElementById('letra').value = '';
});
