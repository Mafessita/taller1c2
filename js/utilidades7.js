// Manejar el envío del formulario
document.getElementById('contratoForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtener la información ingresada por el usuario
    const nombreCliente = document.getElementById('nombreCliente').value;
    const fechaInicio = document.getElementById('fechaInicio').value;
    const terminos = document.getElementById('terminos').value;

    // Generar el contrato legal completo en formato de texto
    const contratoTexto = `
        CONTRATO LEGAL

        Entre ${nombreCliente} y la empresa (nombre de la empresa), en adelante denominada "La Empresa".

        Fecha de Inicio: ${fechaInicio}

        Términos y Condiciones:

        ${terminos}

        Firma del Cliente: ______________________
        Firma de La Empresa: ______________________
    `;

    // Mostrar el contrato en la página
    document.getElementById('contrato').textContent = contratoTexto;
});
