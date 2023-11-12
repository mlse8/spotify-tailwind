const $ = (selector) => document.querySelector(selector)

const hideElement = (selector) => $(selector).classList.add("hidden")
const showElement = (selector) => $(selector).classList.remove("hidden")

const openMenu = () => showElement('#menu')
const closeMenu = () => hideElement('#menu')
const openCloseMenuItem = () =>$('#account').classList.toggle('md:hidden')
const toggleUpDown = () => {
    $('#down').classList.toggle('hidden')
    $('#up').classList.toggle('hidden')
}
const showCards = () => showElement('#more-cards')
const hideCards = () => hideElement('#more-cards')

const initializeProject = () =>{
    $('#btn-menu').addEventListener('click', openMenu)
    $('#btn-close').addEventListener('click', closeMenu)
    $('#profile').addEventListener('click', () =>{
        openCloseMenuItem()
        toggleUpDown()
    })
    $('#more').addEventListener('mouseover', showCards)
    $('#more').addEventListener('mouseout', hideCards)
}

window.addEventListener("load", initializeProject)