class cliente{
    nome;
    cpf;
}
class contaCorrente{
    agencia;
    saldo;
    sacar(valor){ //this.saldo representa o saldo da conta em questão
        if(this.saldo >= valor){
            this.saldo -= valor;
        }
    }
}

const cliente1 = new cliente;
const cliente2 = new cliente;

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new contaCorrente;

contaCorrenteRicardo.agencia = 0001;
contaCorrenteRicardo.saldo = 0;
console.log(contaCorrenteRicardo.saldo); 

contaCorrenteRicardo.saldo = 100;
console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.sacar(20);
console.log(contaCorrenteRicardo.saldo);






console.log(cliente1);
console.log(cliente2);