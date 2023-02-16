const navBarras = document.querySelector(".menu-barras")
const navMenu = document.querySelector(".nav-menu")
navBarras.addEventListener("click",() => {
    navMenu.classList.toggle("nav-menu_visible");
});