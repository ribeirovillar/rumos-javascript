class ContaPoupanca extends ContaBancaria {
    TAXA_DE_RENDIMENTO = 1.02;

    calculaRendimento() {
        this.saldo *= this.TAXA_DE_RENDIMENTO;
    }
}