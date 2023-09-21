let humburger_menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

humburger_menu.addEventListener("click", function() {
    navbar.classList.toggle("active")
})

window.onscroll = () => {
    navbar.classList.remove("active")
}

function sendMail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }
    const serviceID = "service_1midykm"
    const templateID = "template_j81tstj"
    
    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById("name").value = ""
            document.getElementById("email").value = ""
            document.getElementById("message").value = ""
            console.log(res)
            alert("Your message sent successfully")
        })
        .catch((err) => console.log(err))
}
