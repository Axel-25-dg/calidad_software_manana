function calcularPropina(cuenta, porcentajePropina) {
    if (cuenta <= 0)
        throw new TypeError('cuenta no valida');
    if (porcentajePropina <= 0 || porcentajePropina > 100)
        throw new TypeError('Porcentaje no valido');
    const propina = cuenta * (porcentajePropina / 100);
    const totalPagar = cuenta + propina;
    return {
        cuenta: cuenta,
        propina: propina,
        totalPagar: totalPagar
    }
}

module.exports = {
    calcularPropina
}

console.log(calcularPropina(10,15));
