window.alert('Hello, world!')

alert('Hello 2')

const h1sel = document.querySelector('h1');

h1sel.innerHTML=('É ISSO?')

function callback (){
  console.log('Clicou em ', h1sel.innerText)
}

h1sel.addEventListener('click', callback);





// Retorne o url da página atual utilizando o objeto window
const hrefp = window.location.href;
console.log(hrefp)


// Seleciona o primeiro elemento da página que
// possua a classe ativo

const elemt = document.querySelector('.ativo')
console.log(elemt)

// Retorne a linguagem do navegador
const linguagem = window.navigator.language;
console.log(linguagem)


// Retorne a largura da janela 
const largura = window.innerWidth;
console.log(largura)