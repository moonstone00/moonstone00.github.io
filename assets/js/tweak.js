let humburger_menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

humburger_menu.addEventListener("click", function() {
    navbar.classList.toggle("active")
})

window.onscroll = () => {
    navbar.classList.remove("active")
}

