const menuIkon = document.querySelector(".menuikon");
const nav = document.querySelector(".headernav");

menuIkon.addEventListener("click", menuClicked);
function menuClicked() {
  menuIkon.classList.toggle("menuopen");
  nav.classList.toggle("menuopen");
}

//dropdown menuen, så den vises både ved hover(vha. css) og click så den kan bruges i mobil
const ikon = document.querySelector(".dropdown-ikon");
const indhold = document.querySelector(".dropdown-indhold");
const dropdown = document.querySelector("#dropdown-menu");

dropdown.addEventListener("click", dropdownClicked);
function dropdownClicked() {
  indhold.classList.toggle("dropdown-open");
  ikon.classList.toggle("dropdown-open");
}
