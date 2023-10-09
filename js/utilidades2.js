document.getElementById('tarjeta').addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Obtener la información ingresada por el usuario
    const nombre = document.getElementById('nombre').value;
    const cargo = document.getElementById('cargo').value;
    const empresa = document.getElementById('empresa').value;
    const contacto = document.getElementById('contacto').value;

    // Crear la tarjeta de presentación en formato de texto
    const tarjetaTexto = `
        Tarjeta de Presentación:
        Nombre: ${nombre}
        Cargo: ${cargo}
        Empresa: ${empresa}
        Contacto: ${contacto}
    `;

    // Mostrar la tarjeta de presentación en la página
    document.getElementById('tarjetaPresentacion').textContent = tarjetaTexto;
});
