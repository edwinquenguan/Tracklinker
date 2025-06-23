const aside = document.getElementById("aside");
const menuButton = document.getElementById("menu-button");

menuButton.addEventListener("click", () => {
    aside.classList.toggle('show-aside');
});