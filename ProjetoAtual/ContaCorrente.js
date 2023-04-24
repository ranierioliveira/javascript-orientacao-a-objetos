import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    agencia;
    _cliente;//atribuir só se for do tipo cliente

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }
    get cliente(){
        return this._cliente;
    }
    //#saldo
    _saldo;
    
    get saldo(){
        return this._saldo;
    }

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

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}