// ### 3 - Desafio aluno

// # DESAFIO: Sistema de Cálculo Trabalhista

// Passe o sistema de calculo trabalhista para o paradigma de programação a objetos.

// calcule a hora do colaborador

// calcule a hora extra

// calcule a quantidade de hora extra

// faça o calculo do salário mais a extra

class Salario {
  constructor(carga, Salario) {
    this.carga = carga;
    this.salario = salario;
  }
  horaColaborador() {
    let cal = this.salario / this.carga;
    return cal;
  }
  extraColaborador(hColaborador) {
    let cal = hColaborador * 1.5;
    return cal;
  }
  quantidadeExtra(quantidade, hColaborador) {
    let cal = quantidade * hColaborador;
    return cal;
  }
  salarioTotal(salario, quantidadeExtra) {
    return salario + quantidadeExtra;
  }
}
