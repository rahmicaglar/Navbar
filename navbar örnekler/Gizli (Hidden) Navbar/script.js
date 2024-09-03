// Gizli Navbar'ın Sayfa Kaydırıldığında Görünmesi İçin JS
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('hiddenNavbar');
    if (window.scrollY > 50) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});