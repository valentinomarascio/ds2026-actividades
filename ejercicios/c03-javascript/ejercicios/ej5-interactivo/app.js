const btn = document.querySelector("#btnGenerar");
const input = document.querySelector("#altura");
const resultado = document.querySelector("#resultado");
const error = document.querySelector("#error");

btn.addEventListener("click", () => {
    const altura = parseInt(input.value);

    if (!input.value || altura < 1) {
        error.textContent = "por favor ingresa un numero mayor a 0";
        resultado.textContent = "";
        return;
    }

    error.textContent = "";
    let arbol = "";

    for (let i = 1; i <= altura; i++) {
        arbol += "*".repeat(i) + "\n";
    }
    resultado.textContent = arbol;
});