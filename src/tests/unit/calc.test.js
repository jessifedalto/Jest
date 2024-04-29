const { Soma } = require("../../commom/calc")
const { Sub } = require("../../commom/calc")
const { Mul } = require("../../commom/calc")
const { Div } = require("../../commom/calc")
const {Impar_Par} = require("../../commom/calc")
const {Primo} = require("../../commom/calc");
describe('Calculadora', () => {
    it('deve retornar o resultado da soma de 1+2', () => {
        const res = Soma(1,2);
        expect(res).toBe(3);
    })
    it('Deve retornar o resultado da subtração de 2 - 1', () =>{
        const res = Sub(2,1);
        expect(res).toBe(1);
    })
    it('Deve retornar o resultado da multiplicação de 2 * 2', () =>{
        const res = Mul(4,2)
        expect(res).toBe(8)
    })
    it('Deve retornar o resultado da divisão de 4 / 2', () =>{
        const res = Div(10,5);
        expect(res).toBe(2);
    })
    it('Deve retornar o resultado da divisão de 10 / 0', () =>{
        const res = Div(10,0);
        expect(res).toBe("Operação Inválida");    
    })
    it('Deve retornar se o numero 4 é par ou ímpar', () =>{
        const res = Impar_Par(4);
        expect(res).toBe('par');
    })
    it('Deve retornar se o numero 5 é par ou ímpar', () =>{
        const res = Impar_Par(5);
        expect(res).toBe('ímpar');
    })
    it('Dve retornar se o numero 4 é primo', () =>{
        const res = Primo(4);
        expect(res).toBe(false);
    })    
    it('Dve retornar se o numero 2 é primo', () =>{
        const res = Primo(2);
        expect(res).toBe(true);
    })    
    
})