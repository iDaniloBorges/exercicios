//Animação dos números
export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana')
  const diaSemana = funcionamento.dataset.semana.split(',').map(Number)
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number)
  
  // console.log(diaSemana)
  // console.log(horarioSemana)
  
  const dataAgora = new Date()
  const diaAgora = dataAgora.getDay()
  const horarioAgora = dataAgora.getHours()
  
  const teste = [1,2,3,4,5].indexOf(6)
  const semanaAberto = diaSemana.indexOf(diaAgora) !== -1
  const horarioAberto = horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]
  
  if(semanaAberto && horarioAberto){
    funcionamento.classList.add('aberto')
  }
}










// const agora = new Date()
// const futuro = new Date('Dec 24 2025 23:59')

// console.log(agora.getDay())
// console.log(futuro.getDay())

// function transformarDias(tempo){
//   return tempo / (24 * 60 * 60 * 1000)
// }

// const diasAgora = transformarDias(agora.getTime())
// const diasFuturo = transformarDias(futuro.getTime())
// console.log(Math.floor(diasFuturo - diasAgora))