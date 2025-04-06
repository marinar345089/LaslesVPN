const menu = document.querySelector(".menu");
const menuClose = document.querySelector(".menu__close");
const menuOpen = document.querySelector(".header__burger");
const links = document.querySelectorAll(".menu .header__link");

function openMenu() {
  menu.classList.add("menu-open");
}
function closeMenu() {
  menu.classList.remove("menu-open");
}

menuOpen.onclick = openMenu;
menuClose.onclick = closeMenu;

links.forEach(function (link) {
  link.onclick = closeMenu;
});
