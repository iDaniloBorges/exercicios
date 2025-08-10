let valores = [0, 1, 7, 4, 2, 9]
/*
for (let pos = 0; pos<= valores.length; pos++){
    valores.sort()
    console.log(`A posição ${pos} tem valores de ${valores[pos]}`)
}
valores.sort()
for(let pos in valores){
    console.log(`A posição ${pos} tem valores de ${valores[pos]}`)
}
*/
let pos = valores.indexOf(4)
valores.sort()
console.log(valores)
if (pos == -1){
    console.log(`O valor 4 não foi encontrado!`)
} else {
    console.log(`O valor 4 está na posição ${valores.indexOf(4)}`)
}

    