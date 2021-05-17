class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    //#saldo = 0; //0 # é utilizado para transformar a variável saldo como privada. Dessa forma, ela ficará invisível nos console.log e não pode ser alterada no decorrer do código DIRETAMENTE!
      _saldo = 0 //o _ serve para identificar um valor como privado.
      
    sacar(valor) {
      if (this._saldo >= valor) {
        this._saldo -= valor
        return valor
      } 
    }
    depositar(valor) {
      if (valor > 0) {
        this._saldo += valor
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
contaCorrenteRicardo.agencia = 1001

contaCorrenteRicardo.depositar(300)
const valorSacado = contaCorrenteRicardo.sacar(150)


console.log(contaCorrenteRicardo)
console.log(valorSacado)



