class cliente{
    nome;
    cpf;
}
class contaCorrente{
    agencia;
    //#saldo
    saldo;
    sacar(valor){ //this.saldo representa o saldo da conta em questão
        if(this.saldo >= valor){
            this.saldo -= valor;
        }
    }
    depositar(valor){
        if (valor > 0){
            this.saldo += valor;
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

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.sacar(50);

console.log(contaCorrenteRicardo);