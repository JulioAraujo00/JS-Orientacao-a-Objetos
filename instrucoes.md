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