export class ContaCorrente {
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
    if (valor <= 0) {
      return
    }
    this._saldo += valor
  }
}

