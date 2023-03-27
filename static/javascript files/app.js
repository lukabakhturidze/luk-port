const burgerMenu = document.getElementById('burger-menu');
const activatedHeader = document.getElementById('header-nav-ul');

function burgerMenuActivation(){
    activatedHeader.classList.toggle('header-nav-ul-active');
}
burgerMenu.addEventListener('click', burgerMenuActivation);