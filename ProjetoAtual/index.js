import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
const conta2 = new ContaCorrente(1001, cliente2);

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.transferir(50, conta2);

//console.log(ContaCorrente.numeroDeContas);
