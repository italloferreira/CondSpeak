
document.querySelector('.download-btn').addEventListener('click', function () {
    alert('Download iniciado!');
});

const toggleMenu = document.querySelector('.toggle-menu');
const header = document.querySelector('header');
const menuOverlay = document.querySelector('.menu-overlay');

toggleMenu.addEventListener('click', () => {
    header.classList.toggle('open');
    menuOverlay.classList.toggle('open');
});

menuOverlay.addEventListener('click', () => {
    header.classList.remove('open');
    menuOverlay.classList.remove('open');
});