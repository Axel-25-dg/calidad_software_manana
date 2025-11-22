const {
    esTruthy,
    retornarDefault,
    requiereTextoNoVacio
} = require('./trutthyFalsy');

describe('Truthy / Falsy', () => {
    test('Happy: valores truthy y falsy', () => {
        expect(esTruthy('hola')).toBeTruthy();
        expect(esTruthy(1)).toBeTruthy();
        expect(esTruthy([])).toBeTruthy();
        expect(esTruthy({})).toBeTruthy();

        expect(esTruthy(0)).toBeFalsy();
        expect(esTruthy('')).toBeFalsy();
        expect(esTruthy(null)).toBeFalsy();
        expect(esTruthy(undefined)).toBeFalsy();
    });

    test('Happy: retornarDefault usa falsy para asignar defecto', () => {
        expect(retornarDefault('OK', 'DEF')).toBe('OK');
        expect(retornarDefault(0, 'DEF')).toBe('DEF');
        expect(retornarDefault('', 'DEF')).toBe('DEF');
        expect(retornarDefault(null)).toBe('N/A');
    });

    test('Sad: requiereTextoNoVacio lanza en falsy o no string', () => {
        expect(() => requiereTextoNoVacio('')).toThrow('texto requerido');
        expect(() => requiereTextoNoVacio('   ')).toThrow('texto requerido');
        expect(() => requiereTextoNoVacio(null)).toThrow('texto requerido');
        expect(requiereTextoNoVacio(' test ')).toBe('test');
    });
});