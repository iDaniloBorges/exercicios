let array = []
let valores =  [1,2,3,5,68,9,10,30,30,40,50]
let teste = ['10','3','6','9','9']
// teste.length()
// // console.log(teste)
// console.log(teste.length);

//formas de criar array

const numeros =  [1,2,3,4]
const teste  =  new Array(1,2,3,6)
const mista = [10,2,3,{'teste':20},[1,2,3]]
const bidimensional = [[1,2,3,[1,2,3,6]],[4,5,6],[7,8,9]]

console.log(bidimensional[0][3][3])

// acessar elementos:

console.log(mista[mista.length - 2 ])
console.log(mista[0])

// métodos básicos
// ação

// add valores
array = [1,2,34,5,6]
array.push(100)
console.log(array)

// remover o ultimo valor
array.pop()
console.log(array)

// remover o indice 0
array.shift()
console.log(array)

//adicionar no inicio

array.unshift(10)
console.log(array)

// adicionar declarando o indice
array[2] =  100
console.log(array)

loops em js  for = para

// for classico

let arrayNomes = []
let arrayIdades = []
for(i=1; i<=10; i+=2){

    let nome  =  prompt('Nome:')
    arrayNomes.push(nome)
    console.log(arrayNomes,i)
    let idade  =  prompt('Idade:')
    arrayIdades.push(idade)
    console.log(arrayIdades, i)

}

let array = [1,2,3,4,5,6]

array.forEach((a)=> console.log(a))

// forEach

array.forEach(function(a,index)){
 console.log(index, a)

// }

// for(let a of array ){
//     console.log(a)
// }

const array =  ['c','d','a']
const array2 = [25,65,879,1]

array.sort()
console.log(array)

array2.sort((a,b)=>a-b)

console.log(array2)

// concatenação

 let ar = [1,2,3]
 let ar2 =  [4,5,6]
 let ar3 = [...ar,...ar2]
 console.log(ar3)
 
 
 //  Números aleatórios
 let aleatorio = parseInt(Math.random()*10)
 console.log(aleatorio)