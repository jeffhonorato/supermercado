// SESSÃO TAB ALIMENTOS
const tabmenu = document.querySelectorAll(".js-menu-alimentos a");
const tabConteudo = document.querySelectorAll(".alimentos section");
tabConteudo[0].classList.add("ativo");


function activeTab(index) {

    tabConteudo.forEach((section) => {
        section.classList.remove("ativo");
    })

    tabConteudo[index].classList.add("ativo");
}

tabmenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener("click", () => {
        activeTab(index);
    });
});

// SESSÃO TAB BEBIDAS
const tabMenuBebidas = document.querySelectorAll(".js-menu-bebidas a");
const tabConteudoBebidas = document.querySelectorAll(".bebidas section");
tabConteudoBebidas[0].classList.add("ativo")


function activeTab(index) {
    tabConteudoBebidas.forEach((section) => {
        section.classList.remove("ativo");
    })

    tabConteudoBebidas[index].classList.add("ativo");
}

tabMenuBebidas.forEach((itemMenu, index) => {
    itemMenu.addEventListener("click", () => {
        activeTab(index);
    });
});