document.addEventListener("DOMContentLoaded", function() {
    const generarBtn = document.getElementById('generarBtn');
    const graficoResultado = document.getElementById('graficoResultado');

    generarBtn.addEventListener('click', function() {
        const datosInput = document.getElementById('datosInput').value;
        const datos = datosInput.split(',').map(Number);

        // Validar que se ingresaron datos válidos
        if (datos.some(isNaN)) {
            alert('Ingresa números válidos separados por comas.');
            return;
        }

        graficoResultado.innerHTML = '';

        for (let i = 0; i < datos.length; i++) {
            const barra = '*'.repeat(datos[i]);
            const fila = `${i + 1}: ${barra}`;
            graficoResultado.innerHTML += fila + '\n';
        }
    });
});
