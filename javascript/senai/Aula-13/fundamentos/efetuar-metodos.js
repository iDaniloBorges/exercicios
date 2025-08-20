import { Calculadora } from "./calculadora.js";
import { Form } from "./formulario.js";

function teste() {
  //   Formulario
  let d;
  d = new Form("a", 25, "rua x", "@.com");
  console.log(d.display());
  console.log(d.done());

  //   Calculadora
  //   let c;
  //   c = new Calculadora(10, 15);
  // //   console.log(c.somar());
  // //   console.log(c.subtrair());
  // //   console.log(c.dividir());
  // //   console.log(c.multiplicar());
}

teste();
