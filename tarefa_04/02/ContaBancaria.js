class ContaBancaria {
    constructor(titular, saldo){
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor){
        this.saldo += valor;
    }

    levantar(valor){
        this.saldo -= valor;
    }
}

module.exports = ContaBancaria;