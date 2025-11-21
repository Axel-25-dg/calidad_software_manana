const { calcularTotalCafeteria } = require('./calculos2');

describe('calcularTotalCafeteria', () => {
    test('debe calcular el subtotal, IVA y Total correctamente', () => {
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
        expect(resultado.subtotal).toBe(10);
        expect(resultado.iva).toBe(1.5);
        expect(resultado.total).toBe(11.5);
    });
    test('Sad Path: valores de ingreso  errados', () => {
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
        expect(() => calcularTotalCafeteria(0, 12))
            .toThrow('Items invalidos');
        expect(() => calcularTotalCafeteria(items, "12"))
            .toThrow('ivaPorcentaje no valido');
    });
});
