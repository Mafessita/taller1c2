document.getElementById('datosForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const datosInput = document.getElementById('datos').value;
    const datosArray = datosInput.split(',').map(Number);
    const grafico = generarGrafico(datosArray);
    document.getElementById('grafico').textContent = grafico;
});
function generarGrafico(datos) {
    for (let i = 0; i < datos.length; i++) {
        const valor = datos[i];
        const barra = '*'.repeat(valor);
        grafico += `${i + 1}: ${barra}\n`;
    }

    return grafico;
}
