// ### 3 - Desafio aluno

// # DESAFIO: Sistema de Cálculo Trabalhista

// Passe o sistema de calculo trabalhista para o paradigma de programação a objetos.
class Salario {
  constructor(carga, salario, qtdHorasExtras, valorHorasExtras) {
    this.carga = carga;
    this.salario = salario;
    this.qtdHorasExtras = qtdHorasExtras;
    this.valorHorasExtras = valorHorasExtras;
  }

  // calcule a hora do colaborador
  horaColaborador() {
    let calculo = this.salario / this.carga;
    return calculo;
  }

  // calcule a hora extra
  valorHoraExtra() {
    let calculo = this.horaColaborador() * this.valorHorasExtras;
    return calculo;
  }

  // calcule a quantidade de hora extra
  totalHoraExtra() {
    let calculo = this.qtdHorasExtras * this.valorHoraExtra();
    return calculo;
  }
  // faça o calculo do salário mais a extra
  totalSalario() {
    let calculo = this.salario + this.totalHoraExtra(this.valorHoraExtra());
    return calculo;
  }
}

const carga = Number(prompt("Digite a quantidade de horas trabalhadas no mês"));
const salario = Number(prompt("Digite o o valor do salário"));
const qtdHorasExtras = Number(
  prompt("Digite a quantidade de horas extras trabalhadas no mês")
);
const valorHorasExtras = Number(prompt("Digite o valor da hora extra"));

const salarioFuncionario = new Salario(
  carga,
  salario,
  qtdHorasExtras,
  valorHorasExtras
);

console.log(
  `O valor da hora do colaborador é R$ ${salarioFuncionario
    .horaColaborador()
    .toFixed(2)}`
);
console.log(
  `O valor da hora extra do colaborador é R$ ${salarioFuncionario
    .valorHoraExtra()
    .toFixed(2)}`
);
console.log(
  `O total de horas extras do colaborador é R$ ${salarioFuncionario
    .totalHoraExtra()
    .toFixed(2)}`
);
console.log(
  `O salário total do colaborador é R$ ${salarioFuncionario
    .totalSalario()
    .toFixed(2)}`
);
