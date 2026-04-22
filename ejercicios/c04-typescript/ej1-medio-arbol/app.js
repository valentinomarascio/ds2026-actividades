"use strict";
function generarAsteriscos(filas) {
    let resultado = "";
    for (let i = 1; i <= filas; i++) {
        resultado += "*".repeat(i) + "\n";
    }
    return resultado;
}
const boton = document.getElementById("generar");
const input = document.getElementById("filas");
const resultado = document.getElementById("resultado");
boton?.addEventListener("click", function () {
    const filas = parseInt(input.value);
    if (resultado) {
        resultado.textContent = generarAsteriscos(filas);
    }
});
