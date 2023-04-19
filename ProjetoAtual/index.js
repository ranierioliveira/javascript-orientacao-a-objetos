import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente;
const cliente2 = new Cliente;

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new ContaCorrente;
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo._saldo = 0;
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(100);

const conta2 = new ContaCorrente;
conta2.agencia = 1001;
conta2.cliente = cliente2;
conta2._saldo = 0;

contaCorrenteRicardo.transferir(50, conta2);

console.log(contaCorrenteRicardo);
console.log(conta2);
