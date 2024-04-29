let array = [];

function Soma(a,b){
    return a + b;
}

function Sub(a, b) {
    return a - b
}

function Mul(a, b) {
    return a * b
}

function Div(a, b) {
    if (b==0) {
        return "Operação Inválida";
    }
    return a/b
}

function Impar_Par(a) {
    if (a%2) {
        return 'ímpar'
    }
    else{
        return 'par'
    }
}

function Primo(a){
    array = [];
    for (let index = 2; index <= a/2; index++) {
        if ((a % index) == 0) {
            return false
        }
    }
    return true
}

function CPF(cpf) {
    
}

module.exports = { Soma, Sub, Mul, Div, Impar_Par, Primo}