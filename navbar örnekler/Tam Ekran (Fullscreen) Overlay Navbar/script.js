// Hamburger menüye tıklandığında menüyü açma ve kapatma
const menuIcon = document.querySelector('.menu-icon');
const overlay = document.getElementById('myNav');

menuIcon.addEventListener('click', function() {
    if (overlay.style.height === '100%') {
        overlay.style.height = '0';
    } else {
        overlay.style.height = '100%';
    }
});

function closeNav() {
    overlay.style.height = '0';
}