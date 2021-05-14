class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    saldo;

    sacar(valor) {
      if (this.saldo >= valor) {
        this.saldo -= valor
      } 
    }
}


const cliente1 = new Cliente()
cliente1.nome = "Ricardo"
cliente1.cpf = 11122233309

const cliente2 = new Cliente()
cliente2.nome = "Alice"
cliente2.cpf = 88822233309

const contaCorrenteRicardo = new ContaCorrente()
contaCorrenteRicardo.saldo = 0
contaCorrenteRicardo.agencia = 1001



console.log(`O saldo de Ricardo é: ${contaCorrenteRicardo.saldo}`)
contaCorrenteRicardo.saldo = 300
contaCorrenteRicardo.sacar(200)
console.log(`O saldo de Ricardo é: ${contaCorrenteRicardo.saldo}`)


