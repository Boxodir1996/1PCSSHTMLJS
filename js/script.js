const menuBtn = document.getElementById("menu-bar");
const icon = document.getElementById("fa-bars");
const navbar = document.querySelector(".navbar");

// Клик по меню
menuBtn.onclick = () => {
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
    navbar.classList.toggle("active");
};

// Скролл — закрывает меню
window.onscroll = () => {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
    navbar.classList.remove("active");
};