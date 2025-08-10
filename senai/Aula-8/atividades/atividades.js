// Lista de Atividades: Operadores Lógicos e Condicionais

// 1 - Verificador de Números
// Peça um número ao usuário e verifique se é positivo, negativo ou zero.
// promt()

let numero = parseInt(prompt("Digite um número"));
if (numero == 0) {
  console.log("O valor é 0!");
} else if (numero < 0) {
  console.log("O valor é negativo!");
} else {
  console.log("O valor é positivo!");
}

// 2 - Verificador de Votação
// Peça a idade do usuário e verifique se pode votar.

let idade = parseInt(prompt("Digite sua idade"));
if (idade < 0) {
  console.log("Você ainda não nasceu!!!");
} else if (idade >= 0 && idade < 18) {
  console.log("Você ainda não pode votar.");
} else {
  console.log("Você já pode votar.");
}

// 3 - Par ou Ímpar
// Declare um número qualquer e determine se é par ou ímpar.

let numeroQualquer = parseFloat(prompt("Digite um valor"));
if (numeroQualquer % 2 == 0) {
  console.log("O número é par");
} else {
  console.log("O número é ímpar");
}

// 4 - Classificador de Triângulos
// Peça 3 números ao usuário e classifique o triângulo como:
// Equilátero (todos lados iguais)
// Isósceles (dois lados iguais)
// Escaleno (todos lados diferentes)

let lado1 = parseFloat(prompt("Digite o valor do primeiro lado"));
let lado2 = parseFloat(prompt("Digite o valor do segundo lado"));
let lado3 = parseFloat(prompt("Digite o valor do terceiro lado"));

if (lado1 == lado2 && lado2 == lado3) {
  console.log(`Os três lados são iguais. É um triângulo equilátero`);
} else if (lado1 !== lado2 && lado2 !== lado3) {
  console.log(`Os três lados são diferentes. É um triângulo Escaleno`);
} else {
  console.log(`Há dois lados iguais. É um triângulo Isósceles`);
}

// 5 - Múltiplo de  8 e 16
// Verifique se um número é múltiplo de 8 e 16 simultaneamente.

let numeroMultiplo = parseInt(prompt("Digite um valor"));
if (numeroMultiplo % 8 == 0 && numeroMultiplo % 16 == 0) {
  console.log(
    `O número ${numeroMultiplo} É múltiplo de 8 e 16 simultâneamente.`
  );
} else {
  console.log(
    `O número ${numeroMultiplo} NÃO É múltiplo de 8 e 16 simultâneamente.`
  );
}

// 6 - Número Positivo e Maior que 15
// Verifique se um número atende às duas condições:
// positivo e maior que 15

let numeroPositivo = parseFloat(prompt("Digite um valor"));
if (numeroPositivo > 15) {
  console.log(`O número ${numeroPositivo} é positivo e maior que 15.`);
} else {
  console.log(`O número ${numeroPositivo} não é maior que 15.`);
}

// 7 - Divisível por 9 e 6
// Verifique se um número é divisível por 9 ou .6

let numeroDivisivel = parseInt(prompt("Digite um valor"));
if (numeroDivisivel % 9 == 0 && numeroDivisivel % 6 == 0) {
  console.log("O número é divisivel por 9 e 6.");
} else if (numeroDivisivel % 9 == 0) {
  console.log("O número é divisivel por 9.");
} else if (numeroDivisivel % 6 == 0) {
  console.log("O número é divisivel por 6.");
} else {
  console.log("O número não é divisivel por 6 ou 9.");

}

