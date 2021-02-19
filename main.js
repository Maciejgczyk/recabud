const hamburgerMenu = document.querySelector('.hamburger');
const hamburgerSite = document.querySelector('.hamburger-menu');
const closeButton = document.querySelector('.close-button');

hamburgerMenu.addEventListener('click', () => {
    hamburgerSite.classList.toggle('hamburger-menu-active');
})
closeButton.addEventListener('click', () => {
    hamburgerSite.classList.toggle('hamburger-menu-active');
})