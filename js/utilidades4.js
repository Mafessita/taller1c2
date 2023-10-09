// Manejar el envío del formulario
document.getElementById('calculadoraForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtener los valores ingresados por el usuario
    const monto = parseFloat(document.getElementById('monto').value);
    const tasaAnual = parseFloat(document.getElementById('tasa').value);
    const periodoAnios = parseInt(document.getElementById('periodo').value);

    // Calcular la tasa de interés mensual
    const tasaMensual = (tasaAnual / 100) / 12;

    // Calcular el número total de pagos mensuales
    const numeroPagos = periodoAnios * 12;

    // Calcular la cuota mensual utilizando la fórmula de la cuota de préstamo
    const cuotaMensual = (monto * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -numeroPagos));

    // Mostrar el resultado en la página
    document.getElementById('resultado').textContent = `La cuota mensual es de $${cuotaMensual.toFixed(2)}`;
});
