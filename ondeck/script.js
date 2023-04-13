var botao = document.querySelector("#btnMenu")
var closeMenu = document.querySelector('.closeMenu')
var menu = document.querySelector('.menu')

botao.addEventListener("click", () => {
    menu.style.display = 'block'
    botao.style.display = "none"
})

closeMenu.addEventListener('click', () => {
    menu.style.display = 'none'
    botao.style.display = "block"
})

