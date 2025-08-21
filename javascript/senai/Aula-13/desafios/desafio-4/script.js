// 4 -  Monte um sistema de carrinho de compras de um e-commerce.

// #DESAFIO:Sistema de mercado

// Classe Produto com nome e preco.

// Classe Carrinho que pode:

// adicionarProduto(produto)

// removerProduto(nome)

// mostrarCarrinho()

// calcularTotal()

let carrinho = [];
class Produto {
  constructor(opcao) {
    this.opcao = opcao;
  }
  adicionar() {
    if (this.opcao == 1) {
      const nome = String(prompt("Digite o nome do produto"));
      const preco = Number(prompt("Digite o preço do produto"));
      carrinho.push(nome, preco);
      return carrinho;
    }
  }
  remover() {
    if (opcao == 2) {
    }
  }
}

class Carrinho {
  constructor() {}
}
