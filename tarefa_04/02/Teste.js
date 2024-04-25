const contaPoupanca = new ContaPoupanca('Demostenis', 100);
contaPoupanca.depositar(100); // €200
contaPoupanca.calculaRendimento(); // €200 * 1.02 = €204
console.log(contaPoupanca.saldo);