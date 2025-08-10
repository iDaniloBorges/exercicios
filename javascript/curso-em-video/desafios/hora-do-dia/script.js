function carregar() {

var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()
var res = document.querySelector('div#msg')
var img = document.querySelector('img#foto')

if (hora >= 0 && hora < 12){
        res.innerHTML=(`Agora são exatamente ${hora} e ${min} minutos. Bom Dia!`)
        document.body.style.background('#e2cd9f')
        img.src = 'fotomanha.png'
    } else if (hora >= 12 && hora < 18){
        res.innerHTML=(`Agora são exatamente ${hora} e ${min} minutos. Boa tarde!`)
        document.body.style.background('#b9846f')
        img.src = 'fototarde.png'
        
    } else {
        res.innerHTML=(`Agora são exatamente ${hora} e ${min} minutos. Boa tarde!`)
        document.body.style.background('#515154')
        img.src = 'fotonoite.png'
        
    }
}