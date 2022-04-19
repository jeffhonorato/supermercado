let menuMobile = document.querySelector(".icone__mobile");

const toggleMenu = () => {
    let nav = document.querySelector(".nav");
    nav.classList.toggle("ativo");

} 

menuMobile.addEventListener("click", toggleMenu);