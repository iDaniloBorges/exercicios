window.history.pushState(null, null, 'sobre.html')

window.addEventListener('popstate', ()=>{
    console.log('Teste')
})


function handleClick(event){
    event.preventDefault()
    fetchPage(event.target.href)
}


async function fetchPage(url){
    const pageResponse = await fetch(url)
    const pageText = await pageResponse.text()
    console.log(url)
    console.log(pageText)
    replaceContent(pageText)
}

function replaceContent(newText){
    const newHTML = document.createElement('div')
    newHTML.innerHTML = newText
    
    const oldContent = document.querySelector('.content')
    const newContent = newHTML.querySelector('.content')

    oldContent.innerHTML = newContent.innerHTML
    console.log(newContent)
}

const links = document.querySelectorAll('a')

links.forEach(link =>{
    link.addEventListener('click', handleClick)
})