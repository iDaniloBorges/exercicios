//  Atividade 1: Função de Saudação Personalizada
//  Crie uma função chamada saudacao que recebe um nome e um horário
//  (manhã, tarde ou noite) e retorna uma saudação apropriada. Utilize parametros.

// function saudacao(nome, horario) {
//   if (horario > 6 && horario < 12) {
//     return `Bom dia, ${nome}!`;
//   } else if (horario >= 12 && horario < 18) {
//     return `Boa tarde, ${nome}!`;
//   } else if (
//     (horario >= 18 && horario <= 24) ||
//     (horario >= 0 && horario <= 6)
//   ) {
//     return `Boa noite, ${nome}!`;
//   }
// }

// var n = 5;
// function somar() {
//   var n = 10;
//   var x = 20;
//   soma = n + x;
//   return soma;
// }

// console.log(somar());

//  Atividade 2: Calculadora Simples
//  Crie uma função calculadora que recebe dois números e uma operação
// ('soma', 'subtracao', 'multiplicacao', 'divisao') e retorna o resultado.

// function calculadora() {
//   let number1 = parseFloat(prompt("Digite o primeiro valor: "));
//   let number2 = parseFloat(prompt("Digite o segundo valor: "));
//   let operacao = parseInt(
//     prompt(`Escolha a operação a ser realizada:
//         1- Soma
//         2- Subtração
//         3- Divisão
//         4- Multiplicação
//         5- Potenciação
//         6- Radiciação`)
//   );
//   if (operacao == 1) {
//     return number1 + number2;
//   } else if (operacao == 2) {
//     return number1 - number2;
//   } else if (operacao == 3) {
//     return number1 / number2;
//   } else if (operacao == 4) {
//     return number1 * number2;
//   } else if (operacao == 5) {
//     return number1 ** number2;
//   } else if (operacao == 6) {
//     return Math.pow(number1, 1 / number2);
//   }
// }
// console.log(calculadora());

//  Atividade 3: Validador de Senha -  Utilize variáveis globais.
//  Crie uma função validarSenha que verifica se uma senha tem pelo menos 8
// caracteres, contém pelo menos um número e uma letra maiúscula.
let senha = prompt("Digite sua senha");

let hasNumber = /[\d]/.test(senha);
let hasString = /[a-z]/.test(senha);
let hasQtd = senha.length >= 8;
let hasUpperString = /[A-Z]/.test(senha);
console.log(hasNumber);
console.log(hasString);
console.log(hasUpperString);
console.log(hasQtd);

function validarSenha() {
  if (senha === "") {
    console.log("Sua senha não pode estar vazia.");
    alert("Sua senha não pode estar vazia.");
  } else if (!hasNumber && hasString && hasUpperString && hasQtd) {
    console.log("Sua senha precisa ter pelo menos 1 número");
    alert("Sua senha precisa ter pelo menos 1 número");
  } else if (!hasNumber && !hasString && hasUpperString && hasQtd) {
    console.log(
      "Sua senha precisa ter pelo menos 1 número e 1 letra minúscula"
    );
    alert("Sua senha precisa ter pelo menos 1 número e 1 letra minúscula");
  } else if (!hasNumber && hasString && !hasUpperString && hasQtd) {
    console.log(
      "Sua senha precisa ter pelo menos 1 número e 1 letra MAIÚSCULA"
    );
    alert("Sua senha precisa ter pelo menos 1 número e 1 letra MAIÚSCULA");
  } else if (!hasNumber && hasString && hasUpperString && !hasQtd) {
    console.log(
      "Sua senha precisa ter pelo menos 1 número e ter mais de 8 dígitos"
    );
    alert("Sua senha precisa ter pelo menos 1 número e ter mais de 8 dígitos");
  } else if (hasNumber && !hasString && hasUpperString && hasQtd) {
    console.log("Sua senha precisa ter pelo menos 1 letra minúscula");
    alert("Sua senha precisa ter pelo menos 1 letra minúscula");
  } else if (hasNumber && !hasString && !hasUpperString && hasQtd) {
    console.log(
      "Sua senha precisa ter pelo menos 1 letra minúscula e uma letra MAIÚSCULA"
    );
    alert(
      "Sua senha precisa ter pelo menos 1 letra minúscula e uma letra MAIÚSCULA"
    );
  } else if (hasNumber && !hasString && hasUpperString && !hasQtd) {
    console.log(
      "Sua senha precisa ter pelo menos 1 letra minúscula e ter mais de 8 dígitos"
    );
    alert(
      "Sua senha precisa ter pelo menos 1 letra minúscula e ter mais de 8 dígitos"
    );
  } else if (hasNumber && hasString && !hasUpperString && hasQtd) {
    console.log("Sua senha precisa ter pelo menos 1 letra MAIÚSCULA");
    alert("Sua senha precisa ter pelo menos 1 letra MAIÚSCULA");
  } else if (hasNumber && hasString && !hasUpperString && !hasQtd) {
    console.log(
      "Sua senha precisa ter pelo menos 1 letra MAIÚSCULA e mais de 8 dígitos"
    );
    alert(
      "Sua senha precisa ter pelo menos 1 letra MAIÚSCULA e mais de 8 dígitos"
    );
  } else if (hasNumber && hasString && hasUpperString && !hasQtd) {
    console.log("Sua senha precisa ter mais de 8 dígitos");
    alert("Sua senha precisa ter mais de 8 dígitos");
  } else if (!hasNumber && !hasString && !hasUpperString && hasQtd) {
    console.log(
      "Sua senha precisa ter pelo menos 1 número, 1 letra minúscula e 1 letra MAIÚSCULA"
    );
    alert(
      "Sua senha precisa ter pelo menos 1 número, 1 letra minúscula e 1 letra MAIÚSCULA"
    );
  } else if (!hasNumber && !hasString && hasUpperString && !hasQtd) {
    console.log(
      "Sua senha precisa ter pelo menos 1 número, 1 letra minúscula e mais de 8 dígitos"
    );
    alert(
      "Sua senha precisa ter pelo menos 1 número, 1 letra minúscula e mais de 8 dígitos"
    );
  } else if (!hasNumber && hasString && !hasUpperString && !hasQtd) {
    console.log(
      "Sua senha precisa ter pelo menos 1 número, 1 letra MAIÚSCULA e mais de 8 dígitos"
    );
    alert(
      "Sua senha precisa ter pelo menos 1 número, 1 letra MAIÚSCULA e mais de 8 dígitos"
    );
  } else if (hasNumber && !hasString && !hasUpperString && !hasQtd) {
    console.log(
      "Sua senha precisa ter 1 letra minúscula, 1 letra MAIÚSCULA e mais de 8 dígitos"
    );
    alert(
      "Sua senha precisa ter 1 letra minúscula, 1 letra MAIÚSCULA e mais de 8 dígitos"
    );
  } else {
    console.log("Sua senha atende aos requisitos.");
    alert("Sua senha atende aos requisitos.");
  }
}
validarSenha(senha);

//TESTE COM LOOPING
// const numero = "fdgdfg5j5dsfsdfdf";
// caracter = 0
// const numero2 = numero[caracter]

// for (caracter;)

// console.log(numero[0]);
// console.log(typeof numero);
// console.log(numero);

//  Atividade 4: Gerador de Tabuada utilize variáveis locais.
//  Crie uma função gerarTabuada que recebe um número e retorna sua tabuada de 1 a 10.
// function tabuada() {
//   console.log("--------Início--------");
//   let number = parseInt(prompt("Digite um valor: "));
//   for (i = 0; i <= 10; i++) {
//     console.log(`${number} x ${i} = ${number * i}`);
//   }
//   console.log("--------FIM--------");
// }
// console.log(tabuada());

// Atividade 5: CRie uma calculadora de IMC, utilize parâmetros
// 1 -  O usuario precisa digitar o peso e a idade
// 2 -  O sistema precisa fazer o calculo
// 3 -  Precisa mostrar ao usuário a saída de acordo com o calculo
// Obesidade 1, peso normal, desnutrição, obesidade 2, obedidade 3.

// let peso = parseFloat(prompt("Digite seu peso"));
// let altura = parseFloat(prompt("Digite sua altura"));
// function imc() {
//   let imc = peso / altura ** 2;
//   console.log(imc);
// }
// imc();

// DESAFIO JAVA SCRIPT
// CRIE UM SISTEMA DE CALCULO TRABALHISTA
// 1 -  descubra o valor hora do trabalhador
// function horaTrabalhador() {
//   let salario = parseFloat(prompt("Digite o valor do seu salário"));
//   let jornadaDeTrabalhado = parseInt(
//     prompt("Digite sua jornada de trabalho mensal")
//   );
//   let informacoes = [salario, jornadaDeTrabalhado];
//   console.log(informacoes);
//   return informacoes;
// }

// // 2 -  aplique uma função hora extra 50%
// function horaExtra() {
//   let informacoes = horaTrabalhador();
//   let horasExtras = parseInt(prompt("Digite as horas extras trabalhadas"));
//   let valorHoraExtra = (informacoes[0] / informacoes[1]) * 1.5;
//   let informacoesHoraExtra = [...informacoes, horasExtras, valorHoraExtra];
//   console.log(informacoesHoraExtra);
//   return informacoesHoraExtra;
// }

// // 3 -  aplique uma função o calculo da quantidade de horas extras que foi realizada x extra
// function calculoHoraExtra() {
//   let informacoesHoraExtra = horaExtra();
//   let totalHorasExtras = informacoesHoraExtra[2] * informacoesHoraExtra[3];
//   let informacoes = [...informacoesHoraExtra, totalHorasExtras];
//   console.log(informacoes);
//   return informacoes;
// }

// // 4 -  aplique uma outra função que some o salário mais as extras
// function salarioTotal() {
//   let salarioTrabalhador = calculoHoraExtra();
//   let salarioFinal = salarioTrabalhador[0] + salarioTrabalhador[4];
//   let informacoes = [...salarioTrabalhador, salarioFinal];
//   console.log(informacoes);
//   return informacoes;
// }

// // 5 -  mostre o total a receber
// function informacoesGeraisTrabalhador() {
//   let informacoes = salarioTotal();
//   console.log(`Valor total a receber R$${informacoes[5]}`);
// }
// informacoesGeraisTrabalhador();

// totalSalarioTrabalhador = [salario, jornadaDeTrabalhado, horasExtras, valorHoraExtra, totalHorasExtras, salarioFinal]

