// ### 2 - Atividades aluno:

// 1:  Classe Pessoa Básica -atributos  -  nome, idade, endereco, formacao
class Pessoa {
  constructor(nome, idade, endereco, formacao) {
    this.nome = nome;
    this.idade = idade;
    this.endereco = endereco;
    this.formacao = formacao;
  }
  display() {
    return `Seu nome é ${this.nome}, você tem ${idade} anos, mora em ${this.endereco} e é formado em ${this.formacao}`;
  }
}

const nome = String(prompt("Digite seu nome"));
const idade = String(prompt("Digite sua idade"));
const endereco = String(prompt("Digite seu endereço"));
const formacao = String(prompt("Digite sua formação"));

const novaPessoa = new Pessoa(nome, idade, endereco, formacao);
console.log(novaPessoa.display());

// 2: Classe Retângulo - atributos -  largura e altura
class Retangulo {
  constructor(altura, largura) {
    this.altura = altura;
    this.largura = largura;
  }
  display() {
    return `A area do retângulo é igual a: ${largura * altura}m²`;
  }
}

const altura = Number(prompt("Digite a altura do retângulo em metros"));
const largura = Number(prompt("Digite a largura do retângulo metros"));

const novoRetangulo = new Retangulo(altura, largura);
console.log(novoRetangulo.display());

// 3: Classe Conta Bancária , métodos - saque, deposito
class Metodo {
  constructor(saldo, metodo, valor) {
    this.saldo = saldo;
    this.metodo = metodo;
    this.valor = valor;
  }
  opcao() {
    if (this.metodo == 1) {
      return `Saque efetuado com sucesso. \nSeu novo saldo é de R${
        this.saldo - this.valor
      }`;
    } else if (this.metodo == 2) {
      return `Depósito efetuado com sucesso. \nSeu novo saldo é de R$${
        this.saldo + this.valor
      }`;
    }
  }
}

const saldo = Number(prompt("Digite seu saldo"));
const metodo = Number(prompt(`1- Saque \n 2- Depósito`));
const valor = Number(prompt("Digite o valor"));

const opcao = new Metodo(saldo, metodo, valor);
console.log(opcao.opcao());

// 4: Classe Produto - attributos -  cor, tamanho
class Produto {
  constructor(cor, tamanho) {
    this.cor = cor;
    this.tamanho = tamanho;
  }
  atributos() {
    console.log(`
    Atributos \n
    Cor: ${this.cor}
    Tamanho: ${this.tamanho}`);
  }
}
const cor = prompt("Escolha a cor");
const tamanho = prompt("Escolho o tamanho");
const atributos = new Produto(cor, tamanho);

console.log(atributos.atributos());

// 5: Com Herança - Animal e Cachorro, cria a classe Animal, onde cachorro herdará
class Animal {
  constructor(animal, acao) {
    this.animal = animal;
    this.acao = acao;
  }
  falar() {
    return `O gato miou!`;
  }
}

class Cachoro extends Animal {
  falar() {
    return `O cachorro latiu!`;
  }
}
const dog = new Cachoro();
console.log(dog.falar());

// 6: Classe Carro -  método dirigir
class Carro {
  constructor(acao) {
    this.acao = acao;
  }
  metodo() {
    if (this.acao == 1) {
      return `O carro acelerou`;
    } else if (this.acao == 2) {
      return `O carro freiou`;
    }
  }
}
const acao = prompt(`Escolha a opção: \n1- Acelerar \n2-Freiar`);

const dirigir = new Carro(acao);
console.log(dirigir.metodo());

// 7: Classe Aluno -  atributos - nome, serie - método estudar()
class Aluno {
  constructor(nome, serie) {
    this.nome = nome;
    this.serie = serie;
  }
  estudar() {
    return `O(A) ${this.nome} está na ${serie}º série e está estudando!`;
  }
}
const nome = prompt("Digite seu nome");
const serie = prompt("Digite sua ´serie");

const novoAluno = new Aluno(nome, serie);
console.log(novoAluno.estudar());
