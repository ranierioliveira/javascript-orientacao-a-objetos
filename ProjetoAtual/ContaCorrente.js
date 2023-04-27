import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    //atributos
    agencia;
    _cliente;//atribuir só se for do tipo cliente
    _saldo = 0//#saldo

    //acessores
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }
    get cliente(){
        return this._cliente;
    }
    
    get saldo(){
        return this._saldo;
    }

    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente; //Usa o acessor set para verificar 
    }

    //métodos
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