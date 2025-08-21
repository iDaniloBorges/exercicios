// ### 3 - Desafio aluno

// # DESAFIO: Sistema de Cálculo Trabalhista

// Passe o sistema de calculo trabalhista para o paradigma de programação a objetos.

// calcule a hora do colaborador

// calcule a hora extra

// calcule a quantidade de hora extra

// faça o calculo do salário mais a extra

class Salario {
  constructor(carga, salario) {
    this.carga = carga;
    this.salario = salario;
  }

  hora_colaborador() {
    let cal = this.salario / this.carga;
    return cal;
  }

  extra_colaborador(ho_colab) {
    let cal = ho_colab * 1.5;
    return cal;
  }

  quant_extra(quantidade, ho_colab) {
    return quantidade * ho_colab;
  }

  salario_total(salario, quant_extra) {
    return salario + quant_extra;
  }
}

let salario = new Salario(220, 2000);
let hora_colaborador = salario.hora_colaborador();
console.log("Valor hora R$", salario.hora_colaborador());
console.log("Extra R$", salario.extra_colaborador(hora_colaborador));
let quantidade_h = 10;
console.log("Quantidade de hora extra", quantidade_h);
let extra = salario.extra_colaborador(hora_colaborador);
console.log("Valor extra R$", salario.quant_extra(quantidade_h, extra));
let _extra_t = salario.quant_extra(quantidade_h, extra);
console.log("Total Salario R$", salario.salario_total(2000, _extra_t));
