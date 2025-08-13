console.log("EX1-----------------------------");
// Exercícios com Loops for, while e Listas (Arrays) em JavaScript

// Exercícios com Loop for
// // 1 Contagem de 1 a 10
for (i = 0; i <= 10; i++) {
  console.log(i);
}
console.log("EX2-----------------------------");

// 2 Números pares de 0 a 20
for (i = 0; i < 20; i += 2) {
  console.log(i);
}
console.log("EX3-----------------------------");

// 3 Tabuada do 5
let tabuada5 = 0;
for (tabuada5; tabuada5 <= 10; tabuada5++) {
  console.log(tabuada5, "x 5 = ", tabuada5 * 5);
}
console.log("EX4-----------------------------");

// 4 Imprimir elementos de um array
let array = ["Danilo", 29, "anos", "de", "idade"];
array.forEach((array) => {
  console.log(array);
});
console.log("EX5-----------------------------");

// 5 Soma de números de 1 a 100
// Exercícios com Loop while
let n = 0;
let x = 0;
while (n < 100) {
  x += n;
  n++;
  console.log(x);
}
console.log("EX6-----------------------------");

// 6 Contagem regressiva de 10 a 1
for (e = 10; e >= 0; e--) {
  console.log(e);
}
console.log("EX7-----------------------------");

// 7 Adivinhe o número (1 a 10)
let random = parseInt(Math.random() * 10);
console.log(random);

console.log("EX8-----------------------------");
// 8 Soma até digitar 0
let somaNum = 0;

while ((digiteNum = parseInt(prompt("Digite um número"))) !== 0) {
  somaNum += digiteNum;
  console.log("Somatório:", somaNum);
}

console.log("EX9-----------------------------");
// 9 Percorrendo array com while
let array2 = [1, 2, 5, 8, 9, 4];
let cont = 0;
while (cont < array2.length) {
  console.log(array2[cont]);
  cont++;
}

// ***Desafio que mistura for, while e listas***

// **Desafio: Criar um programa de array de compras interativo que:**

// **1 Use um array para armazenar os itens
// 2 Use while para manter o programa rodando até o usuário decidir sair
// 3 Use for para mostrar a lista de compras
// 4 Tenha opções para adicionar, remover e listar itens**

let lista = document.querySelector(".lista");

let listaDeCompras = [
  "Leite",
  "Amaciante",
  "Toddy",
  "Biscoito",
  "Arroz",
  "Feijao",
  "Macarrao",
];

function listaAtualizada() {
  listaDeCompras.forEach((item, index) => {
    console.log(index, item);
  });
}

while (
  (opcoes = parseInt(
    prompt(`Escolha uma opção:
    0- Encerrar
    1- Adicionar item ao início da lista
    2- Adicionar item ao fim da lista
    3- Remover item ao início da lista
    4- Remover item ao fim da lista`)
  )) !== 0
) {
  if (opcoes == 1) {
    let itemAdicionado = prompt("Informe o item a ser adicionado");
    listaDeCompras.unshift(itemAdicionado);
    listaAtualizada();
  } else if (opcoes == 2) {
    let itemAdicionado = prompt("Informe o item a ser adicionado");
    listaDeCompras.push(itemAdicionado);
    listaAtualizada();
  } else if (opcoes == 3) {
    listaDeCompras.shift();
    listaAtualizada();
  } else if (opcoes == 4) {
    listaDeCompras.pop();
    listaAtualizada();
  }
  console.log("------------------------------------------------------");
}
