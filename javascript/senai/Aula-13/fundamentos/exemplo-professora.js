class Pessoa {
  constructor(nome, ano_nascimento, endereco, curso, peso, altura) {
    // auxiliador da class
    this.nome = nome;
    this.ano_nascimento = ano_nascimento;
    this.endereco = endereco;
    this.curso = curso;
    this.peso = peso;
    this.altura = altura;
  }

  displayName() {
    console.log(this.nome);
  }

  calcular_Idade() {
    let ano_atual = parseInt(prompt("Digite o ano atual:  "));
    let calculo = ano_atual - this.ano_nascimento;
    console.log("Idade:  ", calculo);
  }

  imc() {
    let novo_imc;
    novo_imc = this.peso / this.altura ** 2;
    console.log(`IMC da ${this.nome} -> ${novo_imc.toFixed()}`);
  }
}

// filho da classe 1
outra_pessoa = new Pessoa("Carlos", 1980, "Rua 70", "Python", 80, 2.0);

// filho da classe 2
segunda_pessoa = new Pessoa("Maria", 2000, "Rua 150, centro", "Java", 65, 1.71);

// filho da classe 3
terceira_pessoa = new Pessoa(
  "Fernando",
  1960,
  "Rua Aruja, centro",
  "Golang",
  90,
  1.71
);

segunda_pessoa.displayName();
outra_pessoa.displayName();
terceira_pessoa.displayName();

segunda_pessoa.calcular_Idade();
outra_pessoa.calcular_Idade();
terceira_pessoa.calcular_Idade();

segunda_pessoa.imc();
outra_pessoa.imc();
terceira_pessoa.imc();
