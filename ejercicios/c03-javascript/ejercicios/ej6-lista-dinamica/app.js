const btnAgregar = document.querySelector("#btnAgregar");
const input = document.querySelector("#producto");
const error = document.querySelector("#error");
const contador = document.querySelector("#contador");
const lista = document.querySelector("#lista");

let cantidadProductos = 0;

btnAgregar.addEventListener("click", () => {
    const nombre = input.value.trim();

    if (!nombre) {
        error.textContent = "por favor ingrese un nombre de producto";
        return;
    }
    error.textContent = "";

    const li = document.createElement("li");
    li.textContent = nombre;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "eliminar";
    btnEliminar.addEventListener("click", () => {
        li.remove();
        cantidadProductos--;
        contador.textContent = `${cantidadProductos} productos en la lista`;
    });

    li.appendChild(btnEliminar);
    lista.appendChild(li);

    cantidadProductos++;
    contador.textContent = `${cantidadProductos} productos en la lista`;
    input.value = "";
} );
