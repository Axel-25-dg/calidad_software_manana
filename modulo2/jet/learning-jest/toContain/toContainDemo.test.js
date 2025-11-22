const { obtenerFrutas, contienePalabra, agregarElemento } = require('./toContainDemo');

describe('toContain Matcher', () => {

    test('Happy path: elemento dentro de array', () => {
        const frutas = obtenerFrutas();
        expect(frutas).toContain('pera');
    });

    test('Sad path: palabra dentro de texto', () => {
        const response = contienePalabra('Jest es super', 'Jest');
        expect(response).toBe(true);
    });

    test('Sad path: elemento no encontrado o tipo incorrecto', () => {
        const frutas = obtenerFrutas();
        expect(frutas).not.toContain('banana');
    });

    test('Sad path: elementos inválidos', () => {
        expect(() => agregarElemento({}, 'x'))
            .toThrow('Lista debe ser un array');
    });
});