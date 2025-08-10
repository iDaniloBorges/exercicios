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
