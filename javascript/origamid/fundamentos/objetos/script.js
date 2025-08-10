var pessoa = {
  nome: "Danilo",
  idade: 28,
  genero: "Masculino",
  altura: 1.71 + "m",
  peso: 69 + " kg",
};

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return lado * this.lados;
  },
};

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

console.table(pessoa);

var carro = {
  preço: 1000,
  portas: 4,
  marca: "Audi",
};

var dog = {
  raça: "labrador",
  cor: "preto",
  idade: 10,
  latir(pessoa) {
    if (pessoa == "Homem") {
      return "Latir";
    } else {
      return "Nada";
    }
  },
};
