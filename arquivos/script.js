const header = document.querySelector("header")

window.addEventListener("scroll", function(){
    header.classList.toggle ("sticky", window.scrollY > 0);
});


let menu = document.querySelector('#menu-icon');
let navegação = document.querySelector('.navegação');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navegação.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navegação.classList.remove('active');
}
