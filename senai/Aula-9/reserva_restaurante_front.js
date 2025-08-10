const cliente1 = document.getElementById("nome1");
const cliente2 = document.getElementById("nome2");
const cliente3 = document.getElementById("nome3");
const calcular = document.querySelector("#calcular");
const retorno = document.getElementById("retorno");
const c1 = document.getElementById("c1");
const c2 = document.getElementById("c2");
const c3 = document.getElementById("c3");

// console.log(cliente1.innerText)

calcular.addEventListener("click", () => {
  const padrao = "padrao";
  const vip = "vip";
  const vistaExterna = "vistaExterna";

  let totalCliente1 = 0;
  let totalCliente2 = 0;
  let totalCliente3 = 0;
  let totalRestaurante = totalCliente1 + totalCliente2 + totalCliente3;

  const mesaCliente1 = document.querySelector(
    'input[name="typeMesa1"]:checked'
  ).value;
  const mesaCliente2 = document.querySelector(
    'input[name="typeMesa2"]:checked'
  ).value;
  const mesaCliente3 = document.querySelector(
    'input[name="typeMesa3"]:checked'
  ).value;

  if (mesaCliente1 == padrao) {
    totalCliente1 = 4 * 50;
  } else if (mesaCliente1 == vip) {
    totalCliente1 = 6 * 80;
  } else if (mesaCliente1 == vistaExterna) {
    totalCliente1 = 4 * 100;
  }

  if (mesaCliente2 == padrao) {
    totalCliente2 = 4 * 50;
  } else if (mesaCliente2 == vip) {
    totalCliente2 = 6 * 80;
  } else if (mesaCliente2 == vistaExterna) {
    totalCliente2 = 4 * 100;
  }

  if (mesaCliente3 == padrao) {
    totalCliente3 = 4 * 50;
  } else if (mesaCliente3 == vip) {
    totalCliente3 = 6 * 80;
  } else if (mesaCliente3 == vistaExterna) {
    totalCliente3 = 4 * 100;
  }

  c1.innerText = `${cliente1.value}
            Total a pagar: R$${totalCliente1},00)`;
  c2.innerText = `${cliente2.value}
            Total a pagar: R$${totalCliente2},00)`;
  c3.innerText = `${cliente3.value}
            Total a pagar: R$${totalCliente3},00)`;

  console.log(`Cliente 1: ${cliente1.value}
            Total a pagar: R$${totalCliente1},00`);
  console.log(`Cliente 2: ${cliente2.value}
            Total a pagar: R$${totalCliente2},00`);
  console.log(`Cliente 3: ${cliente3.value}
            Total a pagar: R$${totalCliente3},00`);
  console.log("-----------------------------");
  console.log(`Valor mínimo de consumo R$${totalRestaurante},00`);
});
