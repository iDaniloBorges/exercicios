class Pessoa {
  constructor(nome, endereco, curso, anoNascimento, anoAtual, peso, altura) {
    this.nome = nome;
    this.endereco = endereco;
    this.curso = curso;
    this.anoNascimento = anoNascimento;
    this.anoAtual = anoAtual;
    this.peso = peso;
    this.altura = altura;
  }
  saudar() {
    return `Olá ${this.nome}, mora em ${this.endereco} e está cursando ${this.curso}.`;
  }
  calcularIdade() {
    return `Você nasceu em ${this.anoNascimento} e tem atualmente ${
      this.anoAtual - this.anoNascimento
    } anos.`;
  }
  imc() {
    let imc = this.peso / this.altura ** 2;
    return `Seu IMC é: ${imc}`;
  }
}

const primeiraPessoa = new Pessoa(
  "Maria",
  "Guarulhos",
  "Js",
  1996,
  2025,
  66,
  1.71
);
const segundaPessoa = new Pessoa(
  "Joana",
  "Goiânia",
  "Massoterapia",
  1965,
  2025,
  67,
  1.68
);

console.log(primeiraPessoa.saudar());
console.log(primeiraPessoa.calcularIdade());
console.log(primeiraPessoa.imc());

console.log("------------------------------------------------------------");

console.log(segundaPessoa.saudar());
console.log(segundaPessoa.calcularIdade());
console.log(segundaPessoa.imc());

console.log("------------------------------------------------------------");


