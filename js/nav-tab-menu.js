const tabmenu = document.querySelectorAll(".js-menu-alimentos a");
const tabConteudo = document.querySelectorAll(".alimentos section");

function activeTab(index) {

    tabConteudo.forEach((section) => {
        section.classList.remove("ativo");
    })

    tabConteudo[index].classList.add("ativo");
}

tabmenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener("click", () => {
        activeTab(index);
    })
})