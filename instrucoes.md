*Aula 01*

**Necessidades do ByteBank**

Nome
CPF
Agencia
Saldo

Essa estrutura será repetida diversas vezes. Para deixar o código mais prático e usual, utilizam-se _classes_

_class_ é uma palavra reservada do JS. É aconselhável utilizar nomes específicos para as classes para melhor organização e representação.

**Exemplo**

class Cliente {
    nome;
    cpf;
    agencia;
    saldo;
}

Dentro das classes, chamamos suas variáveis internas de campos, propriedades ou atributos (qualquer um dos três pode ser utilizado).

Para utilizar a classe, utiliza-se o comando *new* e o nome da classe.

*new Cliente()*

_const cliente1 = new Cliente()_ - atribue-se o novo cliente a uma variável para poder acessá-lo

Cada cliente criado dessa maneira é um _OBJETO_, também sendo chamado de _INSTÂNCIA_ dessa respectiva classe

**Criação da classe conta corrente**

Não é considerado boa prática manter muitas atribuições para classes e métodos, sendo o menor número de atribuições possiveis o ideal para a boa execução e entendimento do código.

Pensando nisso, vamos dividir a classe cliente em duas:

class cliente {
  nome;
    cpf;
}

Agora a classe cliente só terá como conteúdo itens referentes a dados pessoais do cliente, como nome, cpf e demais dados desse tipo. 

Os campos *agência* e *saldo* agora fazem parte da classe **conta corrente**

class contaCorrente {
  agencia;
  saldo; 
}

Dentro dessa classe, vamos criar os métodos responsáveis pelas operações financeiras referentes a saldo (saque e depósito)

class contaCorrente {
  agencia;
  _saldo; __o sinal _ serve para 'sinaliazar' que estamos lidando com dados sensíveis e que não podem ser alterados no decorrer do código__ 

*Método responsável pelo saque*
  sacar(valor) {  __inserimos o termo *valor* no parâmetro.__
      if (this._saldo >= valor) { *se o valor de saldo for maior que o valor sacado, o if será executado*
        this._saldo -= valor *operação de subtração do saldo a partir do valor inserido no parâmetro*
        return valor *apresenta o valor que foi sacado*
      } 
    }
    *Método responsável pelo depósito*
    depositar(valor) { *valor como parâmetro*
      if (valor > 0) { *se o valor for maior que 0, o if será executado*
        this._saldo += valor *operação de soma ao valor total do saldo*
      }
    }
}

**Criação de clientes com o conta**

*const contaCorrenteRicardo = new contaCorrente()*

No código acima, foi criado um novo objeto nos padrões do método __contaCorrente__.

*contaCorrenteRicardo.agencia = 1001*
Aqui, o campo agencia do objeto foi preenchido com o valor *1001*

**Atribuindo o valor do saque com o método**

*const valorSacado = contaCorrenteRicardo.saque(100)*

Aqui foi atribuído o valor de saque a uma variável para que ele possa ser apresentado posteriormente.

