function imc(peso, altura) {
  atri_imc = peso / altura ** 2;
  console.log("SEU IMC É", atri_imc);

  if (atri_imc >= 18.5 && atri_imc <= 24.9) {
    console.log("Peso normal: IMC entre 18,5 e 24,9");
  } else if (atri_imc <= 18.5) {
    console.log("Abaixo do peso");
  } else if ((atri_imc >= 25 && atri_imc <= 29, 9)) {
    console.log("Sobrepeso: IMC entre 25 e 29,9.");
  } else if (atri_imc == 30) {
    console.log("Obesidade: IMC igual ou superior a 30.");
  } else {
    console.log("Obesidade grau I: IMC entre 31 e 34,9");
  }
}

let peso = parseFloat(prompt("Peso: "));
let altura = parseFloat(prompt("Altura: "));
imc(peso, altura);
