// IF
let idade = 22;

if (idade < 0) {
  console.log("Você ainda não nasceu!");
} else if (idade < 13) {
  console.log("Criança");
} else if (idade < 18) {
  console.log("Adolescente");
} else {
  console.log("Adulto");
}

// IF TERNÁRIO
let podeDirigir =
  idade >= 18
    ? "Maior de idade. Pode dirigir!"
    : "Ainda é menor de idade. Não pode dirigir!";
console.log(podeDirigir);

// SWITCH CASE
let diaSemana = "Segunda";

switch (idade) {
  case 18:
    console.log("Maior de idade");
  case 17:
    console.log("Menor de idade");
    break;
}

// NÚMEROS ALEATÓRIOS
aleatorio = parseInt(Math.random * 21);
console.log(aleatorio);
