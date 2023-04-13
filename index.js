class cliente{
    nome;
    cpf;
}
class contaCorrente{
    agencia;
    //#saldo
    _saldo;
    sacar(valor){ //this.saldo representa o saldo da conta em questão
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }
    depositar(valor){
        if (valor <= 0) return;
        this._saldo += valor;
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
contaCorrenteRicardo._saldo = 0;

contaCorrenteRicardo.depositar(100);
const valorSacado = contaCorrenteRicardo.sacar(50);

console.log(valorSacado);

console.log(contaCorrenteRicardo);