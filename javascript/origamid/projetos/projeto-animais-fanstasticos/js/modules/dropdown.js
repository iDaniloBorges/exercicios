import outsideClick from './outsideclick.js'

export default function initDropDownMenu(){
    const dropdownMenus = document.querySelectorAll('[data-dropdown]')
    dropdownMenus.forEach(menu =>{
        //Para utilizar dois tipos de eventos juntos
        ['touchstart', 'click'].forEach(userEvent => {
            menu.addEventListener(userEvent, handleClick)
        })
    })
    function handleClick(event){
        event.preventDefault()
        // console.log(event)
        this.classList.add('active')
        outsideClick(this, ['touchstart', 'click'], () => {
            this.classList.remove('active')
            // console.log('ativou')
        })
    }
}
