function ValidarCPF(cpf) {

    if (cpf.length != 11) {
        return false;
    }

    let soma = 0;
    for (let index = 0; index < 9; index++) {
        soma += (10 - index) * cpf.charAt(index);
    }

    let primeiroverificador = soma % 11;

    primeiroverificador = primeiroverificador < 2 ? 0 : 11 - primeiroverificador;

    soma = 0;

    for (let index = 0; index < 10; index++) { 
        soma += (11 - index) * cpf.charAt(index);
    }
 
    let segundoverificador = soma % 11;

    segundoverificador = segundoverificador < 2 ? 0 : 11 - segundoverificador;

    return primeiroverificador === parseInt(cpf.charAt(9)) && segundoverificador === parseInt(cpf.charAt(10)) ? true : false;
}

module.exports = { ValidarCPF }