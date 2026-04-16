const numeros = [1, 2, 5, 9, 8, 10, 14, 18];

let suma = 0;
let mayor = numeros[0];
let menor = numeros[0];

for (const num of numeros) {
    suma += num;
    if (num > mayor) mayor = num;
    if (num < menor) menor = num;  
}

const promedio = suma / numeros.length;
console.log(`suma total: ${suma}`);
console.log(`promedio: ${promedio}`);
console.log(`numero mayor: ${mayor}`);
console.log(`numero menor: ${menor}`);

const generarAsteriscos = (n) => {
    let resultado = "";
    for (let i = 0; i < n; i++) {
        resultado += "*";
    }
    return resultado;
};

console.log(generarAsteriscos(5));
console.log(generarAsteriscos(2));