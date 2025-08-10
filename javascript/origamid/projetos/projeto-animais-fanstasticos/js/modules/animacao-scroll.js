// Animação ao Scroll

//innerHeight para saber altura
//getBoundingClientRect altura do objeto

export default function initScroll(){
    const section = document.querySelectorAll('[data-anime="scroll"]')
    const activeClass = 'ativo'
    section[0].classList.add(activeClass)
  
    function animaScroll(){
      section.forEach((section) =>{
        const windowMetade = window.innerHeight * 0.6
        const sectionTop = section.getBoundingClientRect().top
        const isVisible = (sectionTop - windowMetade ) < 0
        if (isVisible){
          section.classList.add(activeClass)
        } else if (section.classList.contains(activeClass)){
          section.classList.remove(activeClass)
        }
      })
    }
    window.addEventListener('scroll', animaScroll)
  }