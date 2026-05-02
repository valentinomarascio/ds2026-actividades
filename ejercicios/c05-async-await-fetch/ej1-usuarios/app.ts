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

try {
    const usuarios = await obtenerUsuarios();
    for (const usuario of usuarios) {
    console.log(`Nombre: ${usuario.name} — Email: ${usuario.email}`);
  }
} catch (error) {
  console.error("Error al obtener usuarios:", error);
}
export {};