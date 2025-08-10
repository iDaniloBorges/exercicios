// let cliente1 = prompt("Nome do primeiro cliente");
// let mesaEscolhida1 = prompt(`Escolha o tipo de mesa:
//     (1) Padrão Mesa comum      (até 4 pessoas)     R$ 50 por pessoa
//     (2) VIP Mesa espaçosa       (até 6 pessoas)     R$ 80 por pessoa
//     (3) Varanda Vista externa     (até 4 pessoas)     R$ 100 por pessoa`);

// let cliente2 = prompt("Nome do segundo cliente");

// let mesaEscolhida2 = prompt(`Escolha o tipo de mesa:
//     (1) Padrão Mesa comum      (até 4 pessoas)     R$ 50 por pessoa
//     (2) VIP Mesa espaçosa       (até 6 pessoas)     R$ 80 por pessoa
//     (3) Varanda Vista externa     (até 4 pessoas)     R$ 100 por pessoa`);
// let cliente3 = prompt("Nome do terceiro cliente");

// let mesaEscolhida3 = prompt(`Escolha o tipo de mesa:
//     (1) Padrão Mesa comum      (até 4 pessoas)     R$ 50 por pessoa
//     (2) VIP Mesa espaçosa       (até 6 pessoas)     R$ 80 por pessoa
//     t(3) Varanda Vista externa   (até 4 pessoas)     R$ 100 por pessoa`);

// const padrao = 4 * 50;
// const vip = 6 * 80;
// const vistaExterna = 4 * 100;

// // IF ELSE

// var totalCliente1 = 0;
// var totalCliente2 = 0;
// var totalCliente3 = 0;

// if (mesaEscolhida1 == 1) {
//   totalCliente1 = padrao;
// } else if (mesaEscolhida1 == 2) {
//   totalCliente1 = vip;
// } else if (mesaEscolhida1 == 3) {
//   totalCliente1 = vistaExterna;
// }

// if (mesaEscolhida2 == 1) {
//   totalCliente2 = padrao;
// } else if (mesaEscolhida2 == 2) {
//   totalCliente2 = vip;
// } else if (mesaEscolhida2 == 3) {
//   totalCliente2 = vistaExterna;
// }

// if (mesaEscolhida3 == 1) {
//   totalCliente3 = padrao;
// } else if (mesaEscolhida3 == 2) {
//   totalCliente3 = vip;
// } else if (mesaEscolhida3 == 3) {
//   totalCliente3 = vistaExterna;
// }

// console.log(
//   `O valor mínimo a ser pago pelo(a) ${cliente1} é de: R$ ${totalCliente1},00`
// );
// console.log(
//   `O valor mínimo a ser pago pelo(a) ${cliente1} é de: R$ ${totalCliente1},00`
// );
// console.log(
//   `O valor mínimo a ser pago pelo(a) ${cliente1} é de: R$ ${totalCliente1},00`
// );

// console.log(
//   `O valor total a ser pago pelos clientes é de ${
//     totalCliente1 + totalCliente2 + totalCliente3
//   },00`
// );

// SWITCH

// function restaurante() {
//   var total_cliente1 = 0;
//   var total_cliente2 = 0;
//   var total_cliente3 = 0;
//   var total_restaurante = 0;

//   switch (mesaEscolhida1) {
//     case "1":
//       console.log(
//         `O valor mínimo a ser pago pelo(a) ${cliente1} é de: R$ ${padrao},00`
//       );
//       total_cliente1 = padrao;
//       break;
//     case "2":
//       console.log(
//         `O valor mínimo a ser pago pelo(a) ${cliente1} é de: R$ ${vip},00`
//       );
//       total_cliente1 = vip;
//       break;
//     case "3":
//       console.log(
//         `O valor mínimo a ser pago pelo(a) ${cliente1} é de: R$ ${vistaExterna},00`
//       );
//       total_cliente1 = vistaExterna;
//       break;
//   }
//   switch (mesaEscolhida2) {
//     case "1":
//       console.log(
//         `O valor mínimo a ser pago pelo(a) ${cliente2} é de: R$ ${padrao},00`
//       );
//       total_cliente2 = padrao;
//       break;
//     case "2":
//       console.log(
//         `O valor mínimo a ser pago pelo(a) ${cliente2} é de: R$ ${vip},00`
//       );
//       total_cliente2 = vip;
//       break;
//     case "3":
//       console.log(
//         `O valor mínimo a ser pago pelo(a) ${cliente2} é de: R$ ${vistaExterna},00`
//       );
//       total_cliente2 = vistaExterna;
//       break;
//   }
//   switch (mesaEscolhida3) {
//     case "1":
//       console.log(
//         `O valor mínimo a ser pago pelo(a) ${cliente3} é de: R$ ${padrao},00`
//       );
//       total_cliente3 = padrao;
//       break;
//     case "2":
//       console.log(
//         `O valor mínimo a ser pago pelo(a) ${cliente3} é de: R$ ${vip},00`
//       );
//       total_cliente3 = vip;
//       break;
//     case "3":
//       console.log(
//         `O valor mínimo a ser pago pelo(a) ${cliente3} é de: R$ ${vistaExterna},00`
//       );
//       total_cliente3 = vistaExterna;
//       break;
//   }
//   console.log(`O total a ser pago pelos clientes é de R$${total_restaurante}`);
// }
// restaurante();
