const calcularPrecioFinal = (monto, medioPago) => {
    if (monto < 200) {
        return monto;
    }   else if (monto >= 200 && monto <= 400) {
        if (medioPago === "E") return monto * 0.7;
        if (medioPago === "D") return monto * 0.8;
        if (medioPago === "C") return monto * 0.9;
    }   else {
        return monto * 0.6;
    }
};

console.log(`monto: $100 | pago: E | final: $${calcularPrecioFinal(100, "E")}`);
console.log(`monto: $300 | pago: E | final: $${calcularPrecioFinal(300, "E")}`);
console.log(`monto: $300 | pago: D | final: $${calcularPrecioFinal(300, "D")}`);
console.log(`monto: $500 | pago: C | final: $${calcularPrecioFinal(500, "C")}`);