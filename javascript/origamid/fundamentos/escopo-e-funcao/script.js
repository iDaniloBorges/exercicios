var carro = "Fusca";

function mostrarCarro() {
  console.log(carro);
}

console.log(carro);

let mes = "Dezembro";

{
  let mes = "Dezembro"; //let não vaza o escopo
}

console.log(mes);

const semana = "Sexta";
//const semana = 'Domingo'
console.log(semana);

data = {
  ano: 2025,
  mes: "Dezembro",
};

// Por qual motivo o código abaixo retorna com erros?
{
  var cor = "preto";
  var marca = "Fiat";
  var portas = 4;
}
console.log(cor, marca, portas);

// Como corrigir o erro abaixo?

var dois = 2;
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
console.log(somarDois(4));
console.log(dividirDois(6));

// O que fazer para total retornar 500?
var numero = 50;

for (var numero = 50; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
