document.addEventListener("DOMContentLoaded", function() {

    // Hamburger menu
    var hamburger = document.getElementById("hamburger");
    var navMenu = document.getElementById("nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", function() {
            navMenu.classList.toggle("show");
        });
    }

    // Fermer le menu quand on clique sur un lien
    var menuLinks = document.querySelectorAll("#nav-menu a");

    if (menuLinks.length > 0 && navMenu) {
        menuLinks.forEach(function(link) {
            link.addEventListener("click", function() {
                navMenu.classList.remove("show");
            });
        });
    }

});