export class Calculadora {
  constructor(n1, n2) {
    this.n1 = parseInt(n1);
    this.n2 = parseInt(n2);
  }
  somar() {
    let calculo = this.n1 + this.n2;
    console.log(calculo);
  }
  subtrair() {
    let calculo = this.n1 - this.n2;
    console.log(calculo);
  }
  dividir() {
    let calculo = this.n1 / this.n2;
    console.log(calculo);
  }
  multiplicar() {
    let calculo = this.n1 * this.n2;
    console.log(calculo);
  }
}

// let n1 = Number(prompt("Digite o primeiro valor"));
// let n2 = Number(prompt("Digite o segundo valor"));

// c = new Calculadora(n1, n2);

// c.somar();
// c.subtrair();
// c.dividir();
// c.multiplicar();
