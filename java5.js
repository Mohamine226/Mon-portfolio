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

    form.addEventListener("submit", async function(e) {
        e.preventDefault(); // bloque toujours le rechargement

        // Récupération des données
        const prenom = document.getElementById("surname").value.trim();
        const nom = document.getElementById("name").value.trim();
        const age = document.getElementById("year").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.querySelector("textarea").value.trim();
        const cgv = document.getElementById("cgv").checked;
        const profession = document.querySelector("input[name='type']:checked");

        // Vérifications
        if (!prenom || !nom || !age || !email || !message) {
            document.getElementById("result").innerHTML =
                `<p style="color:red;">Veuillez remplir tous les champs.</p>`;
            return;
        }
        if (!profession) {
            document.getElementById("result").innerHTML =
                `<p style="color:red;">Veuillez choisir une profession.</p>`;
            return;
        }
        if (!cgv) {
            document.getElementById("result").innerHTML =
                `<p style="color:red;">Vous devez accepter les conditions générales.</p>`;
            return;
        }

        // Envoi vers FastAPI
        const formData = new FormData(form);
        const response = await fetch("/action", {
            method: "POST",
            body: formData
        });
        const result = await response.json();

        // Affichage du message sous le bouton
        document.getElementById("result").innerHTML =
            `<p style="color:green;">${result.message}</p>`;

        // Réinitialiser le formulaire après envoi
        form.reset();
    });

    cancelBtn.addEventListener("click", function () {
        document.getElementById("result").innerHTML =
            `<p style="color:orange;">Le formulaire a été annulé.</p>`;
    });
});