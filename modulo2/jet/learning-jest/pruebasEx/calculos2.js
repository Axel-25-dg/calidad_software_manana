function calcularTotalCafeteria(items, ivaPorcentaje) {
    if (!Array.isArray(items))
        throw new TypeError('Items invalidos');
    if (typeof ivaPorcentaje !== 'number' || ivaPorcentaje < 0 || ivaPorcentaje > 100) {
        throw new TypeError('ivaPorcentaje no valido');
    }
    let subtotal = 0;
    for (let item of items) {
        const subTotalItem = item.precioUnitario * item.cantidad;
        subtotal += subTotalItem;
    }
    const iva = subtotal * (ivaPorcentaje / 100);
    const total = subtotal + iva;
    return {
        total,
        iva,
        subtotal: subtotal
    };
}

module.exports = {
    calcularTotalCafeteria,
}


const items = [
    {
        nombre: 'cafe',
        precioUnitario: 2.5,
        cantidad: 2
    },
    {
        nombre: 'cafe',
        precioUnitario: 2.5,
        cantidad: 2
    }
]

const resultado = calcularTotalCafeteria(items, 15);
console.log('resultado: ', resultado);