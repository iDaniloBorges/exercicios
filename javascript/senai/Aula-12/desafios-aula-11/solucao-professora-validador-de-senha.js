function validador(senha) {
  let numeros = /[\d]/;
  let t1 = numeros.test(senha);
  let maiusculas = /[A-Z]/;
  let t2 = maiusculas.test(senha);
  let tamanho = senha.length;

  if (t1 == true && t2 == true && tamanho >= 8) {
    console.log("Senha valida");
  } else {
    console.log("Senha invalida");
  }
}

validador("T");
