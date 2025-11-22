const { buscarAlumno, leerProp } = require('./buscarAlumno');

describe('Null / undefined / Defined', () => {
    test('Happy path: buscarAlumno devuelve objeto o null', () => {
        const lista = [{
            nombre: 'Ana',
            id: 1
        }, {
            nombre: 'Luis',
            id: 2
        }];

        expect(buscarAlumno(lista, 'Ana')).toEqual({
            nombre: 'Ana',
            id: 1
        });

        expect(buscarAlumno(lista, 'NoExiste')).toBeNull();
    });

    test('Happy path: leerProp puede ser defined o undefined', () => {
        const obj = {
            a: 1,
            b: undefined
        };

        expect(leerProp(obj, 'a')).toBeDefined();
        expect(leerProp(obj, 'b')).toBeUndefined();
        expect(leerProp(obj, 'c')).toBeUndefined();
    });

    test('Sad: parámetros inválidos', () => {
        expect(() => buscarAlumno('Ana', 'Ana'))
            .toThrow('alumnos debe ser un array');
        expect(() => buscarAlumno([], 123))
            .toThrow('nombre inválido');
        expect(() => leerProp(null, 'a'))
            .toThrow('obj inválido');
        expect(() => leerProp(123, 'a'))
            .toThrow('obj inválido');
        expect(() => leerProp({}, 123))
            .toThrow('prop inválida');
    });
});