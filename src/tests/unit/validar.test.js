const { ValidarCPF } = require("../../commom/validar")

describe('Validacao de CPF', () =>{
    it('deve verificar se o cpf é válido', () => {
        const res = ValidarCPF('11569771936');
        expect(res).toBe(true);
    })
    it('deve verificar se o cpf é inválido', () => {
        const res = ValidarCPF('11111111112');
        expect(res).toBe(false);
    })
})