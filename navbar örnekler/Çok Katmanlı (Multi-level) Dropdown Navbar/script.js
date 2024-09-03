// Çok katmanlı dropdown menüler için gerekli olan ek JS kodu
document.addEventListener('DOMContentLoaded', function() {
    // Tüm dropdown menüler üzerinde gezinmek
    var dropdowns = document.querySelectorAll('.dropdown-submenu');

    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('mouseover', function() {
            var submenu = this.querySelector('.dropdown-menu');
            if (submenu) {
                submenu.style.display = 'block';
            }
        });

        dropdown.addEventListener('mouseout', function() {
            var submenu = this.querySelector('.dropdown-menu');
            if (submenu) {
                submenu.style.display = 'none';
            }
        });
    });
});