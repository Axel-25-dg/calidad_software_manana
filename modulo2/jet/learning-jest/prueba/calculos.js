function calcularTotalCafeteria(items, ivaPorcentaje) {
    if (typeof ivaPorcentaje !== 'number' || ivaPorcentaje < 0 || ivaPorcentaje > 100) {
        throw new TypeError('Items invalidos');
    }
    let subtotal = 0;
    for (const item of items) {
        const { precioUnitario, cantidad } = item;
        if (typeof precioUnitario !== 'number' || precioUnitario <= 0 || typeof cantidad !== 'number' || cantidad <= 0) {
            throw new TypeError('items invalidos');
        }
        subtotal += precioUnitario * cantidad;
    }
    const tasaIva = ivaPorcentaje / 100;
    const ivaCalculo = subtotal * tasaIva;
    const total = subtotal + ivaCalculo;
    return {
        subtotal: subtotal,
        IVA: ivaPorcentaje,
        total: total,
    };
}

function calcularPropina(cuenta, porcentajePropina) {
    if (typeof cuenta !== 'number' || cuenta <= 0) {
        throw new TypeError('cuenta inválida');
    }

    if (typeof porcentajePropina !== 'number' || porcentajePropina < 0 || porcentajePropina > 100) {
        throw new TypeError('porcentaje inválido');
    }

    const propina = cuenta * (porcentajePropina / 100);
    const totalPagar = cuenta + propina;

    return {
        cuenta: cuenta,
        propina: propina,
        totalPagar: totalPagar,
    };
}

module.exports = {
    calcularTotalCafeteria,
    calcularPropina,
};


