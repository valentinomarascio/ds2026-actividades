const clasificarNota = (nota) => {
    if (nota < 4) {
        return "desaprobado";
    }   else if (nota >= 4 && nota <= 7) {
        return "aprobado";
    }   else {
        return "Promocionado";
    }
};

const diaDeLaSemana = (numero) => {
    switch (numero) {
        case 1: return "lunes";
        case 2: return "martes";
        case 3: return "miercoles";
        case 4: return "jueves";
        case 5: return "viernes";
        case 6: return "sabado (fin de semana)";
        case 7: return "domingo (fin de semana)";
        default: return "dia invalido";
    }
};

console.log(clasificarNota(2));
console.log(clasificarNota(6));
console.log(clasificarNota(9));
console.log(diaDeLaSemana(1));
console.log(diaDeLaSemana(6));
console.log(diaDeLaSemana(8));