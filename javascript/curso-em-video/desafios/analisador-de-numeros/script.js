function adicionar(){
    let inputElement = document.querySelector('input#txtn1')
    let num = Number(inputElement.value)

    let dados = document.querySelector('select#dados')
    //selectElement.innerHTML=''
    let numeros = []

    if (isNaN(num) || num <= 0 || num > 100 ){
        window.alert('Digite um valor entre 1 e 100.')
    } else {
        for (let c = 1; c <= num; c++){
            numeros.push(num)
            let item = document.createElement('option')
            item.value = `dados${c}`
            dados.appendChild(item)

        }
    }
}



/*
res.innerText=(`Ao todo, temos ${} números cadastrados. <\br>`)
res.innerText+=(`O maior valor informado foi: ${}`)
res.innerText+=(`O menor valor informado foi: ${}`)
res.innerText+=(`Somando todos os valores, temos ${}`)
res.innerText+=(`A média dos valores digitados é: ${}`)
*/