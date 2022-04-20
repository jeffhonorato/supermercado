let iconeMobile = document.querySelector(".icone__mobile");
// let iconeMobileClose = document.

const toggleMenu = () => {
    let nav = document.querySelector(".nav");
    nav.classList.toggle("ativo");
    

} 

iconeMobile.addEventListener("click", toggleMenu);