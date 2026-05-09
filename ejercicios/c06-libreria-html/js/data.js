async function buscarLibros(query) {
    const respuesta = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`);
    const datos = await respuesta.json();
    return datos.docs.slice(0, 10);
}

const inputBusqueda = document.getElementById("inputBusqueda");
const botonBuscar = document.getElementById("botonBuscar");
const elementoError = document.getElementById("error");
const contenedorResultados = document.getElementById("resultados");

botonBuscar.addEventListener("click", async () => {
    const query = inputBusqueda.value.trim();
    elementoError.style.display = "none";
    contenedorResultados.innerHTML = "";

    if (query === "") {
        elementoError.style.display = "block";
        elementoError.textContent = "Por favor escribí algo para buscar.";
        return;
    }

    try {
        const libros = await buscarLibros(query);
        for (const libro of libros) {
            const coverId = libro.cover_i;
            const imgUrl = coverId
                ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
                : "https://via.placeholder.com/128x190?text=Sin+tapa";

            const col = document.createElement("div");
            col.className = "col";

            col.innerHTML = `
                <div class="card h-100">
                    <img src="${imgUrl}" class="card-img-top" alt="${libro.title}">
                    <div class="card-body">
                        <h5 class="card-title">${libro.title}</h5>
                        <p class="card-text text-muted">
                            ${libro.author_name ? libro.author_name[0] : "Autor desconocido"}
                        </p>
                        <p class="card-text text-muted">
                            ${libro.first_publish_year ? `Año: ${libro.first_publish_year}` : ""}
                        </p>
                        <a href="libro.html" class="btn btn-outline-primary btn-sm">Ver más</a>
                    </div>
                </div>
            `;

            contenedorResultados.appendChild(col);
        }
    } catch (error) {
        elementoError.style.display = "block";
        elementoError.textContent = "Hubo un error al buscar los libros.";
    }
});