

    var inicio = document.querySelector('input#txtn1')
    var fim = document.querySelector('input#txtn2')
    var passo = document.querySelector('input#txtn3')
    var res = document.querySelector('div#res')

    function contar(){
    
    var n1 = Number(inicio.value)
    var n2 = Number(fim.value)
    var p = Number(passo.value)

    if ( inicio.value.length == 0 || fim.value.length == 0 || passo.value.length ==0 ){
        res.innerHTML=('[ERRO] Verifique os dados e tente novamente.')
    } else {
        res.innerHTML="Contando: <br>"
        if(p<=0){
            res.innerHTML=('Passo não pode ser menor ou igual a 0. Passo será igual a 1. <br>')
            p = 1
        } 
        if ( n1 < n2){
            for(let c = n1; c <= n2 ; c += p){
                res.innerHTML += (`${c} \u{1F449} `)
            }

        } else if (n1 > n2){
            for(let c = n1; c>= n2; c-=p){
                res.innerHTML += `${c} \u{1F449} `
            }
            
        }   res.innerHTML += ('Fim. \u{1F3C1}')
    }
    }
    