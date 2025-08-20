//Calculadora.js

export class Calculadora {
  constructor(n1, n2) {
    this.numero_1 = n1;
    this.numero_2 = n2;
  }

  somar() {
    let calculo = this.numero_1 + this.numero_2;
    console.log("Resultado", calculo);
  }
  subtrair() {
    let calculo = this.numero_1 - this.numero_2;
    console.log("Resultado", calculo);
  }

  dividir() {
    let calculo = this.numero_1 / this.numero_2;
    console.log("Resultado", calculo);
  }

  multiplicar() {
    let calculo = this.numero_1 * this.numero_2;
    console.log("Resultado", calculo);
  }
}

// let n1 = parseFloat(prompt('Digite um número: '))
// let n2 = parseFloat(prompt('Digite um número: '))

// c = new Calculadora(n1,n2)

// c.somar()
// c.dividir()
// c.multiplicar()
// c.subtrair()
