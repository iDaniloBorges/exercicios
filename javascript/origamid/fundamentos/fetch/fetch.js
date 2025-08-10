// const doc = fetch('./doc.txt')

// doc
// .then(r => r.text())
// .then(body => {
//     const conteudo = document.querySelector('.conteudo')
//     conteudo.innerText = body
//     console.log(body)
// })


// const cep = fetch('http://viacep.com.br/ws/01001000/json/')

// cep
// .then(r => r.json())
// .then(body => {
//     const conteudo = document.querySelector('.conteudo')
//     conteudo.innerText = body.logradouro
//     console.log(body)
//     console.log(body.logradouro)

// })


// const css = fetch('/css/fetch.css')

// css
// .then(r => r.text())
// .then(body => {
//     const conteudo = document.querySelector('.conteudo')
//     const style = document.createElement('style')
//     style.innerHTML = body
//     conteudo.appendChild(style)
//     // conteudo.innerText = body
//     console.log(style)
    

// })


// const sobre = fetch('../sobre.html')

// const div = document.createElement('div')

// sobre.then(r => r.text())
// .then(body => {
    //     div.innerHTML = body
    //     const titulo = div.querySelector('h1')
    //     document.querySelector('h1').innerText = titulo.innerHTML
    // })
    
    
    
// const cep2 = fetch('http://viacep.com.br/ws/01001000/json/')
// const div = document.createElement('div')

// cep2.then(r => {
//     const r2 = r.clone()

//     .text().then((text) =>{
//         console.log(text)
//     })
//     r2.json().then((json) =>{
//         console.log(json)
//     })
// console.log(r)
// })
// .then(body => {
//     console.log(body)
// })


// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

// const viacep = fetch('http://viacep.com.br/ws/01001000/json/')
const inputCep = document.getElementById('cep')
const btnCep = document.getElementById('btnCep')
const resultadoCep = document.querySelector('.resultadoCep')

btnCep.addEventListener('click', handleClick)

function handleClick(event){
    // event.preventDeafult()
    const cep = inputCep.value
    buscaCep(cep)
    console.log(event)
}

function buscaCep(cep){
    fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`)
    .then(response => response.text())
    .then(body =>{
        resultadoCep.innerText = body
    })
}


// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const btc = document.querySelector('.btc')

function fetchBtc(){
    fetch('https://www.blockchain.com/pt/ticker')
    .then(r => r.json())
    .then(btcJson => {
        console.log(btcJson.BRL.buy)
        btc.innerText = ('R$' + btcJson.BRL.buy).replace('.', ',')
    })
}
// setInterval(fetchBtc, 1000)

fetchBtc()

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const btnProxima = document.querySelector('.proxima')
const montrarPiada = document.querySelector('.piadas')

function piadaNoris(){
    fetch('https://api.chucknorris.io/jokes/random')
    .then(r => r.json())
    .then(piada =>{
        console.log(piada.value)
        // console.log(piada.value)
        montrarPiada.innerText = piada.value
    })
}
piadaNoris()

btnProxima.addEventListener('click', piadaNoris)

