const request = require('supertest');
const app = require('../../index');
const User = require('../../models/User');

jest.mock('../../models/User', () => ({
    find: jest.fn(),
    findById: jest.fn()
}));

describe('GET /user', () => {
    beforeEach(() => {
        // Configurando o comportamento do mock para o método find
        User.find.mockResolvedValue([ //mock: é um fingido
            { _id: '1', name: 'Queila', lastname: 'Lima', salary: 1234 },
            { _id: '2', name: 'Alisson', lastname: 'Ferro', salary: 1234 },
            { _id: '3', name: 'Dom', lastname: 'Ramalho', salary: 1234 },
        ]);
    });
    afterEach(() => {
        // Limpando o mock após cada teste
        jest.clearAllMocks();
    });
    afterAll(() => {
        app.close();
    });
    it('Deve retornar um array com 3 elementos', async () => {
        const res = await request(app).get('/api/user');
        expect(res.status).toBe(200);
        expect(res.body.length).toBe(3);
    });
})


describe('GET / :id', () =>{
    beforeEach(() => {
        // Configurando o comportamento do mock para o método find
        User.findById.mockResolvedValue([ //mock: é um fingido
            { _id: '1', name: 'Queila', lastname: 'Lima', salary: 1234 }
            ]);
        });
        afterEach(() => {
            // Limpando o mock após cada teste
            jest.clearAllMocks();
        });
        afterAll(() => {
            app.close();
        });

        it('Deve retornar o status 200 e retornar um usuário', async () => {
            User.findById.mockResolvedValue([ //mock: é um fingido
        { _id: '1', name: 'Queila', lastname: 'Lima', salary: 1234 }
        ]);
    
            const res = await request(app).get('/api/user/1');
            expect(res.status).toBe(200);
            expect(User.findById).toBeCalled()
        });
        it('Deve retornar erro', async () => {
            User.findById.mockResolvedValue(null);

            const res = await request(app).get('/api/user/4');
            expect(res.status).toBe(404);
            expect(User.findById).toBeCalled()
        });
})