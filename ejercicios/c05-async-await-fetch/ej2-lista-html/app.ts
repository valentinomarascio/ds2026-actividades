interface Usuario {
  id: number;
  name: string;
  email: string;
  phone: string;
}

async function obtenerUsuarios(): Promise<Usuario[]> {
  const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
  const datos = await respuesta.json() as Usuario[];
  return datos;
}

const elementoCargando = document.getElementById("cargando")!;
const elementoError = document.getElementById("error")!;
const elementoLista = document.getElementById("lista")!;

try {
  const usuarios = await obtenerUsuarios();

  elementoCargando.style.display = "none";

  for (const usuario of usuarios) {
    const li = document.createElement("li");
    li.textContent = `${usuario.name} — ${usuario.email}`;
    elementoLista.appendChild(li);
  }
} catch (error) {
  elementoCargando.style.display = "none";
  elementoError.style.display = "block";
  elementoError.textContent = "Hubo un error al cargar los usuarios.";
}
export{};