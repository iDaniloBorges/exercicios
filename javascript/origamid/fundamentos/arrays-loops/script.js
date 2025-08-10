var games = ["Switch", "PS5", "XBOX"];

games.pop();
games.push("3DS");

for (var num = 0; num < 10; num++) {
  console.log(num);
}

var i = 0;
while (i <= 100) {
  console.log(i);
  i = i + 5;
}

for (var item = 0; item < games.length; item++) {
  console.log(games[item]);
  if (games[item] === "PS5") {
    break;
  }
}

games.forEach(function () {
  console.log("Hello");
});

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var brasil = ["1959", "1962", "1970", "1994", "2002"];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

for (var item = 0; item < brasil.length; ) {
  console.log(`O Brasil ganhou a copa de ${brasil[item]}`);
  item++;
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];

for (var i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
  if (frutas[i] === "Pera") {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var ultfruta = frutas[frutas.length - 1];
