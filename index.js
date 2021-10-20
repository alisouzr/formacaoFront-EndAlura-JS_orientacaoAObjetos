import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const Cliente1 = new Cliente();
Cliente1.nome = "Ricardo";
Cliente1.cpf = 11122233344;

const Cliente2 = new Cliente();
Cliente2.nome = "Alice";
Cliente2.cpf = 66622233344;

const ContaCorrenteRicardo = new ContaCorrente();
ContaCorrenteRicardo.saldo = 0;
ContaCorrenteRicardo.agencia = 1001;

console.log(ContaCorrenteRicardo.saldo);
ContaCorrenteRicardo.depositar(100);
ContaCorrenteRicardo.depositar(200);
console.log(ContaCorrenteRicardo.saldo);

const valorSacado = ContaCorrenteRicardo.sacar(50);;

console.log(valorSacado);
console.log(ContaCorrenteRicardo.saldo);