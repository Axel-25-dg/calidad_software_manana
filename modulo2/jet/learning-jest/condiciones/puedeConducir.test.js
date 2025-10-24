const { puedeConducir} = require('./puedeConducir');

describe('puedeConducir', () => {
    test('Happy path: edad 20 puede conducir', () => {
        expect(puedeConducir(20)).toBe('si');
    });
    test('Happy path: edad 16 NO puede conducir', () => {
        const respuesta = puedeConducir(20);
        expect(puedeConducir(16)).toBe('no');
    });
    test('Sad path: edad invalida', () => {
        expect(() => puedeConducir(-1)).toThrow('Edad invalida');
        expect(() => puedeConducir('19')).toThrow('Edad invalida');
    });
});