interface Libro {
    isbn: string;
    titulo: string;
    autor: string;
    precio: number;
    disponible: boolean;
    genero?: string;
}

const catalogo: Libro[] = [
    { isbn: "1", titulo: "Bajo la misma estrella", autor:"John Green", precio: 100, disponible: true },
    { isbn: "2", titulo: "Programacion en C++", autor: "Joaquin Reyes Sandler", precio: 50, disponible: false},
    { isbn: "3", titulo: "Calculo con geometria analitica", autor: "Earl Swokowski", precio: 15, disponible: true}
];

function buscarPorAutor(autor: string): Libro[] {
    return catalogo.filter(l => l.autor.toLowerCase().includes(autor.toLowerCase()));
}
function librosDisponibles(): Libro[] {
    return catalogo.filter(l => l.disponible);
}
function precioPromedio(libros: Libro[]): number {
    if (libros.length === 0) return 0;
    return libros.reduce((acc, l) => acc + l.precio, 0) / libros.length;
}
function agregarLibro(libro: Libro): void {
    catalogo.push(libro);
    renderizar(catalogo);
}
function eliminarLibro(isbn: string): void {
    const index = catalogo.findIndex(l => l.isbn === isbn);
    if (index !== -1) {
        catalogo.splice(index, 1);
        renderizar(catalogo);
    }
}
function validarFormulario(): Libro | null {
    const titulo = (document.getElementById("titulo") as HTMLInputElement).value;
    const autor = (document.getElementById("autor") as HTMLInputElement).value;
    const precio = Number((document.getElementById("precio") as HTMLInputElement).value);
    const disponible = (document.getElementById("disponible") as HTMLInputElement).checked;
    const errorDiv = document.getElementById("errorForm") as HTMLDivElement;

    if (!titulo || !autor || precio <= 0) {
        errorDiv.textContent = "Datos invalidos";
        return null;
    }
    errorDiv.textContent = ""
    return {
        isbn: "AUTO-" + Date.now(),
        titulo,
        autor,
        precio,
        disponible
    };
}
function renderizar(libros: Libro[]): void {
    const ul = document.getElementById("listado") as HTMLUListElement;
    const stats = document.getElementById("stats") as HTMLParagraphElement;

    ul.innerHTML = "";
    libros.forEach(l => {
        const li = document.createElement("li");

        li.textContent = `${l.titulo} - ${l.autor} ($${l.precio}) `;
        const btn = document.createElement("button");
        btn.textContent = "Eliminar";
        btn.addEventListener("click", () => eliminarLibro(l.isbn));
        li.appendChild(btn);
        ul.appendChild(li);
    });
    stats.textContent = `Cantidad: ${libros.length} | Promedio: $${precioPromedio(libros)}`;
}

const input = document.getElementById("filtroAutor") as HTMLInputElement;

document.getElementById("filtrar")!.addEventListener("click", () => {
    renderizar(buscarPorAutor(input.value));
});
document.getElementById("mostrarDisponibles")!.addEventListener("click", () => {
    renderizar(librosDisponibles());
});
document.getElementById("mostrarTodos")!.addEventListener("click", () => {
    renderizar(catalogo);
});
document.getElementById("agregar")!.addEventListener("click", () => {
    const libro = validarFormulario();
    if (libro) {
        agregarLibro(libro);

        (document.getElementById("titulo") as HTMLInputElement).value = "";
        (document.getElementById("autor") as HTMLInputElement).value = "";
        (document.getElementById("precio") as HTMLInputElement).value = "";
        (document.getElementById("disponible") as HTMLInputElement).checked = false;
    }
});

renderizar(catalogo);