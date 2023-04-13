var botao = document.querySelector("#btnMenu")
var closeMenu = document.querySelector('.closeMenu')
var menu = document.querySelector('.menu')

botao.addEventListener("click", () => {
    menu.style.display = 'block'
})

closeMenu.addEventListener('click', () => {
    menu.style.display = 'none'
})

