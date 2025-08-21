// // 1:  Classe Pessoa Básica -atributos  -  nome, idade, endereco, formacao

class Pessoa {
  constructor() {
    this.nome = "Carlos";
    this.idade = 25;
    this.formacao = "ADS";
  }

  display() {
    console.log(this.nome, this.idade, this.formacao);
  }
}

const nova_pessoa = new Pessoa();

// // 2: Classe Retângulo - atributos -  largura e altura

class Retangulo {
  constructor() {
    this.largura = 20;
    this.altura = 150;
  }

  display() {
    console.log(this.altura, this.altura);
  }
}

novo_retangulo = new Retangulo();

// // 3: Classe Conta Bancária , métodos - saque, deposito

class ContaBancaria {
  constructor(saldo) {
    this.saldo = saldo;
  }

  display() {
    console.log(" Saldo  -  R$", this.saldo);
  }

  saque(valor_) {
    let calculo = this.saldo - valor_;
    return calculo;
  }

  deposito(valor_) {
    let calculo = this.saldo + valor_;
    return calculo;
  }
}

// let conta = new ContaBancaria(1000)

conta.display();
let v_saque = parseFloat(prompt("Digite o valor do saque"));
console.log("Valor em conta R$", conta.saque(v_saque));
let v_dep = parseFloat(prompt("Digite o valor do deposito"));
console.log("Valor em conta R$", conta.deposito(v_dep));

// 4: Classe Produto - attributos -  cor, tamanho

class Produto {
  constructor() {
    this.cor = "red";
    this.tamanho = 65;
  }
}

// 5: Classe Carro -  método dirigir

class Carro {
  constructor(velocidade) {
    this.velocidade = velocidade;
  }

  dirigir() {
    let acel = [40, 50, 60, 70, 80, 90, 100, 150];
    if (this.velocidade == 0) {
      for (let x = 0; acel.length; x++) {
        this.velocidade = this.velocidade + acel;
        console.log(this.velocidade);
      }
    }
  }
}

let carro = new Carro(0);
carro.dirigir();

// 75 Classe Aluno -  atributos - nome, serie - método estudar()

class Aluno {
  constructor() {
    this.nome = "Pedro";
    this.serie = "8ª série";
  }
  estudar(metodologia) {
    if (
      metodologia == "em grupo" ||
      metodologia == "escrever com caneta" ||
      metodologia == "criar resumo"
    ) {
      console.log("Basta estudar apenas 1h dia");
    } else {
      console.log("estudar ao menos 2h o dia ");
    }
  }
}

let aluno = new Aluno();
aluno.estudar("em grupo");
