const hamburgerMenu = document.querySelector('.hamburger');
const hamburgerSite = document.querySelector('.hamburger-menu');
const closeButton = document.querySelector('.close-button');

const hamburgerLinks = document.querySelectorAll('.hamburger-wrap-a');

hamburgerMenu.addEventListener('click', () => {
    hamburgerSite.classList.toggle('hamburger-menu-active');
})
closeButton.addEventListener('click', () => {
    hamburgerSite.classList.toggle('hamburger-menu-active');
})

hamburgerLinks.forEach(hamburgerLink => {
    hamburgerLink.addEventListener('click', () => {
        hamburgerSite.classList.toggle('hamburger-menu-active');
    })
});