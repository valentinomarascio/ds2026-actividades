function generarAsteriscos(filas: number): string {
    let resultado: string = "";

    for (let i: number = 1; i <= filas; i++) {
        resultado += "*".repeat(i) + "\n";
    } 
    return resultado;
}

const boton = document.getElementById("generar");
const input = document.getElementById("filas") as HTMLInputElement;
const resultado = document.getElementById("resultado");

boton?.addEventListener("click", function() {
    const filas: number = parseInt(input!.value);
    if (resultado) {
        resultado.textContent = generarAsteriscos(filas);
    }
});