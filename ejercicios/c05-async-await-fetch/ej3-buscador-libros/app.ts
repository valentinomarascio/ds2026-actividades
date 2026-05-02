interface LibroOL {
    title: string;
    author_name?: string[];
    first_publish_year?: number;
}
interface RespuestaAPI {
  docs: LibroOL[];
}
async function buscarLibros(query: string): Promise<LibroOL[]> {
  const respuesta = await fetch(
    `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`
  );
  const datos = await respuesta.json() as RespuestaAPI;
  return datos.docs.slice(0, 10);
}

const inputBusqueda = document.getElementById("inputBusqueda") as HTMLInputElement;
const botonBuscar = document.getElementById("botonBuscar")!;
const elementoError = document.getElementById("error")!;
const contenedorResultados = document.getElementById("resultados")!;

botonBuscar.addEventListener("click", async () => {
  const query = inputBusqueda.value.trim();

  elementoError.style.display = "none";
  contenedorResultados.innerHTML = "";

  if (query === "") {
    elementoError.style.display = "block";
    elementoError.textContent = "Por favor escribi algo para buscar";
    return;
  }

  try {
    const libros = await buscarLibros(query);

    for (const libro of libros) {
      const tarjeta = document.createElement("div");
      tarjeta.style.border = "1px solid #ccc";
      tarjeta.style.padding = "10px";
      tarjeta.style.marginBottom = "10px";

      const titulo = document.createElement("h3");
      titulo.textContent = libro.title;

      const autor = document.createElement("p");
      autor.textContent = libro.author_name
        ? `Autor: ${libro.author_name[0]}`
        : "Autor: desconocido";

      const anio = document.createElement("p");
      anio.textContent = libro.first_publish_year
        ? `Año: ${libro.first_publish_year}`
        : "Año: desconocido";

      tarjeta.appendChild(titulo);
      tarjeta.appendChild(autor);
      tarjeta.appendChild(anio);
      contenedorResultados.appendChild(tarjeta);
    }
  } catch (error) {
    elementoError.style.display = "block";
    elementoError.textContent = "Hubo un error al buscar los libros";
  }
});
export {};