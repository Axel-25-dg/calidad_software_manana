const { calcularTotalCafeteria, calcularPropina } = require('./calculos');

describe('calcularTotalCafeteria', () => {
    const itemsValidos = [
        { nombre: 'Cafe', precioUnitario: 2.5, cantidad: 2 },
        { nombre: 'Tostada', precioUnitario: 3.0, cantidad: 1 },
        { nombre: 'Zumo', precioUnitario: 2.0, cantidad: 3 },
    ];

    test('debe calcular el subtotal, IVA y Total correctamente', () => {
        const resultado = calcularTotalCafeteria(itemsValidos, 10);
        expect(resultado.subtotal).toBe(14.0);
        expect(resultado.IVA).toBe(10);
        expect(resultado.total).toBe(15.4);
    });

    test('debe lanzar un "TypeError" con "iva invalido" si es mayor a 100', () => {
        expect(() => calcularTotalCafeteria(itemsValidos, 150)).toThrow('Items invalidos');
    });
});

describe('calcularPropina', () => {
    test('debe calcular la propina y el total a pagar correctamente', () => {
        const resultado = calcularPropina(100, 15);
        expect(resultado.cuenta).toBe(100);
        expect(resultado.propina).toBe(15);
        expect(resultado.totalPagar).toBe(115);
    });

    test('debe lanzar un "TypeError" con "cuenta inválida" si la cuenta es negativa', () => {
        expect(() => calcularPropina(-50, 10)).toThrow('cuenta inválida');
    });

    test('debe lanzar un "TypeError" con "porcentaje inválido" si el porcentaje es mayor a 100', () => {
        expect(() => calcularPropina(100, 150)).toThrow('porcentaje inválido');
    });
});