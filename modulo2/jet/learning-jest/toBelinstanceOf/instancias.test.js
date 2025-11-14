const { Persona, crearPersona, esFecha } = require('./instancias');

describe('InstanceOf', () => {

    test('Happy: crearPersona retorna instancia de Persona', () => {
        const p = crearPersona('Ana', 25);
        expect(p).toBeInstanceOf(Persona);
        expect(p).not.toBeInstanceOf(Date);
    });

    test('Happy: esFecha detecta instancias Date válidas', () => {
        expect(esFecha(new Date())).toBe(true);
        expect(esFecha(new Date('Invalid'))).toBe(false);
    });


    test('Sad: crearPersona con datos inválidos', () => {
        expect(() => crearPersona(99, 30))
            .toThrow('nombre inválido');
        expect(() => crearPersona('Luis', -5))
            .toThrow('edad inválida');
        expect(esFecha('2025-01-01')).toBe(false);
    });
});