import ScrollSuave from './modules/scroll-suave.js'
import initScroll from './modules/animacao-scroll.js'
import initAccordion from './modules/accordion-list.js'
import iniTabNav from './modules/tab-nav.js'
import initModal from './modules/modal.js'
import initToolTip from './modules/tooltip.js'
import initDropDownMenu from './modules/dropdown.js'
import initMenuMobile from './modules/menu-mobile.js'
import initFuncionamento from './modules/funcionamento.js'
import initFetchAnimais from './modules/fetch-animais.js'
import initFetchBitcoin from './modules/fetch-bitcoin.js'

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]')
scrollSuave.init()

initAccordion()          //Animação em dt e dd (FAQ)
initScroll()            //Aparecimento do conteúdo de acordo com scroll
iniTabNav()             //Transição da descrição dos animais de acordo com o click nas imagens
initModal()             //Tela de login
initToolTip()           //Animação ao passar o mouse sob o mapa.
initDropDownMenu()  
initMenuMobile()        //Menu mobile
initFuncionamento()        //Animação dos números
initFetchAnimais()
initFetchBitcoin()