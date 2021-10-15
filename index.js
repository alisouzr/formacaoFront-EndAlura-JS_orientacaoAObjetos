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

            return valor;
        }
    }

    depositar(valor) {
        if (valor < 0) {
            return;
        }
        this.saldo += valor;
    }
}

const cliente1 = new cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233344;

const cliente2 = new cliente();
cliente2.nome = "Alice";
cliente2.cpf = 66622233344;

const contaCorrenteRicardo = new contaCorrente();
contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;

console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(200);
console.log(contaCorrenteRicardo.saldo);

const valorSacado = contaCorrenteRicardo.sacar(50);;

console.log(valorSacado);
console.log(contaCorrenteRicardo.saldo);