// Inicializar el inventario como un objeto vacío
const inventario = {};

// Manejar el envío del formulario para agregar producto
document.getElementById('agregarProductoForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const precio = parseFloat(document.getElementById('precio').value);
    const cantidad = parseInt(document.getElementById('cantidad').value);

    // Verificar si el producto ya existe en el inventario
    if (inventario[nombre]) {
        inventario[nombre].precio = precio;
        inventario[nombre].cantidad += cantidad;
    } else {
        inventario[nombre] = { precio, cantidad };
    }

    actualizarResultados(`Producto "${nombre}" agregado al inventario. Stock actual: ${inventario[nombre].cantidad} unidades.`);
    limpiarFormulario('agregarProductoForm');
});

// Manejar el envío del formulario para realizar venta
document.getElementById('realizarVentaForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const productoVendido = document.getElementById('productoVendido').value;
    const cantidadVendida = parseInt(document.getElementById('cantidadVendida').value);

    // Verificar si el producto existe en el inventario
    if (inventario[productoVendido] && inventario[productoVendido].cantidad >= cantidadVendida) {
        inventario[productoVendido].cantidad -= cantidadVendida;
        const totalVenta = cantidadVendida * inventario[productoVendido].precio;
        actualizarResultados(`Venta exitosa. Total de ventas: $${totalVenta}. Stock actual: ${inventario[productoVendido].cantidad} unidades.`);
    } else {
        actualizarResultados(`No hay suficiente stock de "${productoVendido}" para realizar la venta.`);
    }

    limpiarFormulario('realizarVentaForm');
});

// Función para actualizar los resultados en la página
function actualizarResultados(mensaje) {
    document.getElementById('resultados').innerHTML = mensaje;
}

// Función para limpiar los formularios después de enviarlos
function limpiarFormulario(formId) {
    document.getElementById(formId).reset();
}
