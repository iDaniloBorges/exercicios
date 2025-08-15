// 1 -  descubra o valor hora do trabalhador
// 2 -  aplique uma função hora extra 50%
// 3 -  aplique uma função o calculo da quantidade de horas extra que foi realizada x extra
// 4 -  aplique uma outra função que some o salário mais as extras
// 5 -  mostre o total a receber

function valor_hora(carga, salario) {
  return salario / carga;
}

function h_extra(valor_h) {
  return valor_h * 1.5;
}

function quantidade_extras(quantidade, h_extra) {
  return quantidade * h_extra;
}

function soma_sal_extra(quantidade_extra, salario) {
  return quantidade_extra + salario;
}

function sistema_rh() {
  let salario = parseFloat(prompt("Digite o salário: "));
  let carga = parseFloat(prompt("Carga Horária: "));
  let quantidadeHoras = parseFloat(prompt("quantidade horas: "));

  console.log("Sistema de horas:  ");

  let valor_h = valor_hora(carga, salario);
  console.log("Valor hora R$", valor_h.toFixed(2));

  let extra_h = h_extra(valor_h);
  console.log("Hora extra 50% R$", extra_h.toFixed(2));

  let quant_extra = quantidade_extras(quantidadeHoras, extra_h.toFixed(2));
  console.log("Extra a receber R$", quant_extra.toFixed(2));

  console.log(
    `Rendimentos R$ ${soma_sal_extra(quant_extra, salario).toFixed(2)}`
  );
}

sistema_rh();
