/* Javascript to toggle Menu */
var navLinks = document.getElementById("navLinks");
var openMenu = document.getElementById("openMenu");
var closeMenu = document.getElementById("closeMenu");

openMenu.addEventListener("click", () => {
  navLinks.classList.add("open-menu");
});

closeMenu.addEventListener("click", () => {
  navLinks.classList.remove("open-menu");
});
