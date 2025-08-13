//  Atividade 1: Função de Saudação Personalizada
//  Crie uma função chamada saudacao que recebe um nome e um horário
//  (manhã, tarde ou noite) e retorna uma saudação apropriada. Utilize parametros.

function saudacao(nome, horario) {
  if (horario > 6 && horario < 12) {
    return `Bom dia, ${nome}!`;
  } else if (horario >= 12 && horario < 18) {
    return `Boa tarde, ${nome}!`;
  } else if (
    (horario >= 18 && horario <= 24) ||
    (horario >= 0 && horario <= 6)
  ) {
    return `Boa noite, ${nome}!`;
  }
}

var n = 5;
function somar() {
  var n = 10;
  var x = 20;
  soma = n + x;
  return soma;
}

console.log(somar());

//  Atividade 2: Calculadora Simples
//  Crie uma função calculadora que recebe dois números e uma operação
// ('soma', 'subtracao', 'multiplicacao', 'divisao') e retorna o resultado.

// function (number1, number2){
//     if()
// }

//  Atividade 3: Validador de Senha -  Utilize variáveis globais.
//  Crie uma função validarSenha que verifica se uma senha tem pelo menos 8
// caracteres, contém pelo menos um número e uma letra maiúscula.

//  Atividade 4: Gerador de Tabuada utilize variáveis locais.
//  Crie uma função gerarTabuada que recebe um número e retorna sua tabuada de 1 a 10.

// Atividade 5: CRie uma calculadora de IMC, utilize parâmetros
// 1 -  O usuario precisa digitar o peso e a idade
// 2 -  O sistema precisa fazer o calculo
// 3 -  Precisa mostrar ao usuário a saída de acordo com o calculo
// Obesidade 1, peso normal, desnutrição, obesidade 2, obedidade 3.

let peso = parseFloat(prompt("Digite seu peso"));
let altura = parseFloat(prompt("Digite sua altura"));
function imc() {
  let imc = peso / altura ** 2;
  console.log(imc);
}
imc();

// DESAFIO JAVA SCRIPT
// CRIE UM SISTEMA DE CALCULO TRABALHISTA
// 1 -  descubra o valor hora do trabalhador
// 2 -  aplique uma função hora extra 50%
// 3 -  aplique uma função o calculo da quantidade de horas extra que foi realizada x extra
// 4 -  aplique uma outra função que some soma o salário mais as extras
// 5 -  mostre o total a receber
