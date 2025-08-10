var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()
//var hora = 2

if (hora > 6 && hora < 12){
    console.log(`Agora são ${hora} horas e ${min} minutos. Portanto, Bom dia!`)
} else if (hora >=12 && hora < 18){
    console.log(`Agora são ${hora} horas e ${min} minutos. Portanto, Boa tarde!`)
} else if (hora >=18 && hora < 24){
    console.log(`Agora são ${hora} horas e ${min} minutos. Portanto, Boa noite!`)
} else {
    console.log(`Agora são ${hora} horas e ${min} minutos. Portanto, Boa madrugada!`)
}
