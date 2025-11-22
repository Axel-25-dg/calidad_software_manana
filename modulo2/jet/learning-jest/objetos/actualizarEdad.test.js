const { actualizarEdad } = require('./actualizarEdad');

describe('Actualizar Edad', () => {
    test('Happy path: 30 -> 60', () => {
        const response = actualizarEdad({
            nombre: 'Juan',
            edad: 30
        }, 60);
        expect(response.edad).toBe(60);
    });

    test('Sad path: edad inválidos', () => {
        expect(() => actualizarEdad(
            null, 10
        )).toThrow('persona inválida');

        expect(() => actualizarEdad({})
        ).toThrow('edad inválida');
    });
});