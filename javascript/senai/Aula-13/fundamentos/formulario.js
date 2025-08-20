export class Form {
  constructor(nome, idade, endereco, email) {
    this.nome = nome;
    this.idade = idade;
    this.endereco = endereco;
    this.email = email;
  }
  display() {
    console.log("Nome: ", this.nome);
    console.log("Idade: ", this.idade);
    console.log("Enderço: ", this.endereco);
    console.log("E-mail: ", this.email);
  }

  done() {
    if (this.name && this.idade && this.endereco && this.email) {
      console.log("Cadastro realizado");
    }
  }
}
