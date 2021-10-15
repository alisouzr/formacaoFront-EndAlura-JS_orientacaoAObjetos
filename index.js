class cliente {
    nome;
    cpf;
}

class contaCorrente {
    saldo;
    agencia;

    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
        }
    }
}

const cliente1 = new cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233344;

const cliente2 = new cliente();
cliente2.nome = "Alice";
cliente2.cpf = 66622233344;

const contaCorrenteRicardo = new contaCorrente();
contaCorrenteRicardo.saldo = 100;
contaCorrenteRicardo.agencia = 1001;
console.log(contaCorrenteRicardo.agencia);

console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.saldo = 100;
console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.sacar(200);

console.log(cliente1, cliente2);