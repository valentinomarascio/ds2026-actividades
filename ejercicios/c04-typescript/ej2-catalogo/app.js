"use strict";
const catalogo = [
    { isbn: "1", titulo: "Bajo la misma estrella", autor: "John Green", precio: 100, disponible: true },
    { isbn: "2", titulo: "Programacion en C++", autor: "Joaquin Reyes Sandler", precio: 50, disponible: false },
    { isbn: "3", titulo: "Calculo con geometria analitica", autor: "Earl Swokowski", precio: 15, disponible: true }
];
function buscarPorAutor(autor) {
    return catalogo.filter(l => l.autor.toLowerCase().includes(autor.toLowerCase()));
}
function librosDisponibles() {
    return catalogo.filter(l => l.disponible);
}
function precioPromedio(libros) {
    if (libros.length === 0)
        return 0;
    return libros.reduce((acc, l) => acc + l.precio, 0) / libros.length;
}
function renderizar(libros) {
    const ul = document.getElementById("listado");
    const stats = document.getElementById("stats");
    ul.innerHTML = "";
    libros.forEach(l => {
        const li = document.createElement("li");
        li.textContent = `${l.titulo} - ${l.autor} ($${l.precio})`;
        ul.appendChild(li);
    });
    stats.textContent = `Cantidad: ${libros.length} | Promedio: $${precioPromedio(libros)}`;
}
const input = document.getElementById("filtroAutor");
document.getElementById("filtrar").addEventListener("click", () => {
    renderizar(buscarPorAutor(input.value));
});
document.getElementById("mostrarDisponibles").addEventListener("click", () => {
    renderizar(librosDisponibles());
});
document.getElementById("mostrarTodos").addEventListener("click", () => {
    renderizar(catalogo);
});
renderizar(catalogo);
