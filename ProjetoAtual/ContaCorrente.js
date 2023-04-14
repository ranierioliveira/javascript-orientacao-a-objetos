export class ContaCorrente{
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