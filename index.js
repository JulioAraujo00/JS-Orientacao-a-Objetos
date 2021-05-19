import {Cliente} from './Cliente.js'
import {ContaCorrente} from './ContaCorrente.js'

const cliente1 = new Cliente("Ricardo", 11122233309)

const cliente2 = new Cliente("Alice", 88822233309)
console.log(cliente2.cpf)

const conta1 = new ContaCorrente()
conta1.agencia = 1001
conta1.cliente = cliente1

const conta2 = new ContaCorrente()
conta2.cliente = cliente1
conta2.agencia = 1002


conta1.depositar(500)

let valor = 200
conta1.transefir(valor, conta2)





