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

    if(window.scrollY > 60){
        document.querySelector('#scroll-top').classList.add('active');
    }else{
        document.querySelector('#scroll-top').classList.remove('active');

    }
};

function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
    setInterval(loader, 1500);
}

window.onload = fadeOut;