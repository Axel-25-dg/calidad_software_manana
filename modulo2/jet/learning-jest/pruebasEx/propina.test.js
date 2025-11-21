const { calcularPropina } = require('./propina');

describe('calcularPropina', () => {
    test('Happy: calcular correctamente', () => {
        const valorEsperado =
        {cuenta: 10, propina: 1.5, totalPagar: 11.5};
        const resultado = calcularPropina(10, 15);
        expect(resultado).toEqual(valorEsperado);
    });
    test('Sad Path: valores de ingreso  errados', () => {
        expect(() => calcularPropina(0, 12))
            .toThrow('cuenta no valida');
        expect(() => calcularPropina(133, -2))
            .toThrow('Porcentaje no valido');
    });
});
