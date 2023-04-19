var botao = document.querySelector(".btnMenu")
var closeMenu = document.querySelector('.closeMenu')
var menu = document.querySelector('.menu')
var atvMenu = document.querySelector('.ativarMenu')

//menu mobile

botao.addEventListener("click", () => { //ativa o menu ao clicar no icone de menu hamburger
    menu.style.display = 'block'
})

closeMenu.addEventListener('click', () => { //some com o menu ao clicar no "X"
    menu.style.display = 'none'
})

//chama o menu no tablet

atvMenu.addEventListener('click', () => {
    if (menu.style.display == 'none') {
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
})