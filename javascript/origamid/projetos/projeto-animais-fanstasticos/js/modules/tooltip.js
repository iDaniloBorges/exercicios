export default function initToolTip(){

}

const tooltip = document.querySelectorAll('[data-tooltip]')
// console.log(tooltip)

tooltip.forEach((item) =>{
    item.addEventListener('mouseover', onMouseOver)
})

function onMouseOver(event){
    const tooltipBox = criarToolTipBox(this)
    tooltipBox.style.top = event.pageY + 'px'
    tooltipBox.style.left = event.pageX + 'px'

    onMouseMove.tooltipBox = tooltipBox
    onMouseLeave.tooltipBox = tooltipBox
    onMouseLeave.element = this
    this.addEventListener('mouseleave', onMouseLeave)
    this.addEventListener('mousemove', onMouseMove)
}

const onMouseLeave = {
    handleEvent(){
       this.tooltipBox.remove()
       this.element.removeEventListener('mouseleave', onMouseLeave)
       this.element.removeEventListener('mousemouse', onMouseMove)

    }
}

const onMouseMove = {
    handleEvent(event){
        this.tooltipBox.style.top = event.pageY + 20 + 'px'
        this.tooltipBox.style.left = event.pageX + 20 + 'px'

    }
}

function criarToolTipBox(element){
    const tooltipBox = document.createElement('div')
    const text = element.getAttribute('aria-label')

    tooltipBox.classList.add('tooltip')
    tooltipBox.innerText = text
    document.body.appendChild(tooltipBox)
    return tooltipBox
}