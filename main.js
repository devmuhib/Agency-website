// select elements
// mobile menu
const mobileMenu = document.querySelector(".mobile__menu");
const navMenu = document.querySelector(".navigation");

mobileMenu.addEventListener("click", () => {
  navMenu.classList.add("show__menu");
});

navMenu.addEventListener("click", () => {
  navMenu.classList.remove("show__menu");
});
