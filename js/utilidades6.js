// Listas de autores y citas
const autores = ["Albert Einstein", "Isaac Newton", "Leonardo da Vinci", "Marie Curie", "Nelson Mandela"];
const citas = [
    "La imaginación es más importante que el conocimiento.",
    "Lo que sabemos es una gota de agua; lo que ignoramos es el océano.",
    "La simplicidad es la máxima sofisticación.",
    "La vida no se mide por el número de veces que respiramos, sino por los momentos que nos dejan sin aliento.",
    "Después de escalar una montaña muy alta, descubrimos que hay muchas más montañas por escalar."
];

// Función para generar una cita aleatoria
function generarCitaAleatoria() {
    const autor = autores[Math.floor(Math.random() * autores.length)];
    const cita = citas[Math.floor(Math.random() * citas.length)];
    return `${autor} dijo: '${cita}'`;
}

// Mostrar una cita aleatoria al cargar la página
document.getElementById('cita').textContent = generarCitaAleatoria();

// Generar una nueva cita al hacer clic en el botón
document.getElementById('generarCita').addEventListener('click', function () {
    document.getElementById('cita').textContent = generarCitaAleatoria();
});
