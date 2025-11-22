const { sueldoAnual } = require("./sueldoAnual");

describe('sueldoAnual', () => {
    test('Happy path: 500 -> 6000', () => {
        expect(sueldoAnual({
            nombre: "Juan",
            sueldoMensual: 500
        })).toBe(6000);
    });

    test('Sad path: empleado inválido', () => {
        expect(() => sueldoAnual({
            sueldoMensual: -1
        })).toThrow('Sueldo mensual inválido');

        expect(() => sueldoAnual(null))
            .toThrow('Empleado inválido');
    });
});