const { filterActiveUsers } = require('./filterActiveUsers');

describe('Filtrar Usuarios Activos', () => {
    test('Happy Path: Usuarios Filtardos Correctamente', () => {
        const users = [
        {id:1, username: "carlos", active:true},
        {id:2, username: "luis", active:false},
        {id:3, username: "evelyn", active:true},
        ]
        const response = filterActiveUsers(users);
        const expectUsers = [
            {id:1, username: "carlos", active:true},
            {id:3, username: "evelyn", active:true},
        ]
        expect(response).toStrictEqual(expectUsers);
    });

    test('Sad path: diferencia tipo en objetos', () => {
        const users = [
        {id:1, username: "carlos", active:true},
        {id:2, username: "luis", active:false},
        ]
        const response = filterActiveUsers(users);
        const expectUsers = [
            {id:1, username: "carlos", active:"true"},
        ]
        expect(response).not.toStrictEqual(expectUsers);
        });
});