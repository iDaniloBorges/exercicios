var hoje = new Date()
//var dia = hoje.getDay()
var dia = 7

switch (dia){
    case 0: 
        console.log('Domingo.')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
    case 7:
        console.log('Esse dia da semana não existe. Digite um valor entre 0 [Domingo] e 6 [Sábado].')
}
