/*1 - Crie uma função (livro) que possui 3 parâmetros: nome, ano e autor.
2 - No corpo da função:
 2.1 - Transforme o nome para letra maiúscula: toUpperCase()
 2.2 - Calcule o total de anos desde o lançamento do livro: 2050 - ano
 2.3 - Crie uma variável com a frase: nome + ' por ' + autor;
 2.4 - Coloque os 3 valores acima em um objeto.
3 - Retorne (return) o objeto definido.
4 - Execute a função com os seguintes argumentos:
    'O Senhor dos Anéis', 1954, 'J. R. R. Tolkien'
5 - Guarde o retorno da função executada em uma variável.
6 - Log a frase final da função executada no console.*/


// Método 1

// function livro(nome, ano, autor){
//   const nome_livro = nome.toUpperCase();
//   const ano_livro = 2025 - ano;
//   const autor_livro = nome + ' por ' + autor;
//   const dados = {
//     nome: nome_livro,
//     ano: ano_livro,
//     autor: autor_livro,
//   };
//   return dados;
// }

// Método 2

/**
function livro(nome, ano, autor){
  const dados = {
    nome: nome.toUpperCase(),
    ano: 2025 - ano,
    autor: nome + ' por ' + autor,
  };
  return dados;
}

const livroRetorno = livro('O Senhor dos Anéis', 1954, 'J. R. R. Tolkien')
console.log(livroRetorno)
 */

// Eventos 3
/**1 - Crie um círculo com uma div de width: 16px, height: 16px e background: #999;
2 - Adicione ao window uma função que ocorre ao "mousemove";
3 - Na função mude as propriedades top e left do círculo com base no mouse.
4 - Você pode usar elemento.style.propriedade para mudar o CSS diretamente. */

/**
function seguirMouse(event){
  const x = event.x;
  const y = event.y;
  const circulo = document.querySelector('.circulo');
  circulo.style.top = y +'px';
  circulo.style.left = x +'px';
  console.log(circulo)
};

window.addEventListener("mousemove", seguirMouse)
 */

// Condicionais 2
/**1 - Crie um botão com nome de Adicionar.
2 - Adicione uma função (somar) ao clique desse botão
3 - Só adicione a função se o botão existir na tela.
4 - Crie uma div com o texto 0 dentro dela: <div>0</div>
5 - Na função do botão, pegue o total que estiver dentro da div e adicione + 1.
6 - Mude o valor da div para o novo total.
7 - Mude o valor apenas se o total for menor que 10.
8 - Quando não for mais possível adicionar, mostre uma mensagem no console.*/

/**const botao = document.querySelector('button')

function somar(){
  const div = document.querySelector('div')
  const total = Number(div.innerText) + 1
  
  if (total < 10){
    div.innerText = total
  } else {
    console.log('Não é possível adicionar mais')
    }
}  

if (botao){
botao.addEventListener("click", somar)
}*/

// Repetições
// for
/**const lista = ["JavaScript", "HTML", "CSS", "PHP"]

const body = document.querySelector('body')

for (let index = 0; index < lista.length; index++){
  console.log(lista[index])
  body.innerHTML += "<li>" + lista[index] + "</li>"

}



  /**


 const imagens = document.querySelectorAll('#galeria li img')
 
 function galeriaTrocar(event){
  const principal = document.querySelector("#imagem-principal")
  const clicada = event.currentTarget
  principal.src = clicada.src
  principal.alta = clicada.alt
  // principal.setAttribute('alt', clicada.getAttribute('alt')) -Alternativa
  console.log(clicada.getAttribute("src"))
}

function galeriaClique(imagem){
  imagem.addEventListener('click', galeriaTrocar)
}

imagens.forEach(galeriaClique)

*/

// Criamos um objeto chamado "pessoa"
let pessoa = {
  nome: "Mariana",
  idade: 30,
  saudacao: function() {
    console.log("Olá, meu nome é " + this.nome + " e tenho " + this.idade + " anos.");
  }
};

// Acessando uma propriedade
console.log(pessoa.nome); // Exibe "Mariana"

console.log(pessoa.idade); // Exibe 30

// Chamando um método
pessoa.saudacao(); // Exibe "Olá, meu nome é Mariana e tenho 30 anos."