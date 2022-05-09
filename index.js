const burgerMenu = document.querySelector(".burgerMenu");
const Navbar = document.querySelector("nav");

burgerMenu.addEventListener("click", () => {
  Navbar.classList.toggle("active");
});
