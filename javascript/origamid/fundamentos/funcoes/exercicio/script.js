function verdade(valor) {
  return !!valor;
}

function quadrado(lado) {
  return lado * 4;
}

function ncompleto(nome, sobrenome) {
  return nome + " " + sobrenome;
  return `${nome} ${sobrenome}`;
}

function par(valor) {
  if (valor % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function tipo(dado) {
  return typeof dado;
}

addEventListener("click", function mostrarnome() {
  console.log("Danilo Borges");
});

function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  console.log(
    `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`
  );
  console.log(
    `Já visitei ${paisesVisitados} do total de ${totalPaises} países`
  );
}

var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
