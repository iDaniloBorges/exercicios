//Função simples 1
function pi() {
  return 3.14;
}

var total = 5 * pi();

console.log(pi);
console.log(total);

//Função simples 2
function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}
console.log(imc(68, 1.71));

//Função if else
function corfav(cor) {
  if (cor === "azul") {
    return "Eu gosto do céu";
  } else if (cor === "verde") {
    return " Eu gosto de mato";
  } else {
    return "Não gosto de nada";
  }
}

console.log(corfav("azul"));

//Eventos com funções
addEventListener("click", function () {
  console.log("Hello, world!");
});

//Utilizando Funções com idade
function terceiraIdade(idade) {
  console.log(typeof idade);
  if (typeof idade !== "number") {
    return "Por favor, digite um número.";
  } else if (idade >= 60) {
    return "Você está na terceira idade";
  } else {
    return "Você não está na terceira idade";
  }
}

console.log(terceiraIdade(40));

//Teste lógico de função dentro de função
var profissao = "Designer";

function dados() {
  var nome = "André";
  var idade = 28;
  function outrosDados() {
    var endereco = "Rio de Janeiro";
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}
console.log(dados());

//Hosting
