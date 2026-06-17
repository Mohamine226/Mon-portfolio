document.addEventListener('DOMContentLoaded', function () {

  // ===== HAMBURGER MENU =====
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');

  hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });

  window.closeMobile = function () {
    mobileNav.classList.remove('open');
  };

  // ===== SKILL BARS ANIMATION =====
  const skillCards = document.querySelectorAll('.skill-card');
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const card = entry.target;
        const level = card.dataset.level;
        const bar = card.querySelector('.skill-bar-fill');
        setTimeout(() => { bar.style.width = level + '%'; }, 100);
        skillObserver.unobserve(card);
      }
    });
  }, { threshold: 0.3 });
  skillCards.forEach(card => skillObserver.observe(card));

  // ===== CONTACT FORM =====
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const prenom  = document.getElementById('prenom').value.trim();
      const nom     = document.getElementById('nom').value.trim();
      const email   = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const cgv     = document.getElementById('cgv').checked;
      const result  = document.getElementById('form-result');

      if (!prenom || !nom || !email || !message) {
        result.innerHTML = '<p style="color:#FF6B6B;margin-top:10px;font-size:0.85rem;">⚠ Veuillez remplir tous les champs obligatoires.</p>';
        return;
      }
      if (!cgv) {
        result.innerHTML = '<p style="color:#FF6B6B;margin-top:10px;font-size:0.85rem;">⚠ Vous devez accepter les conditions.</p>';
        return;
      }
      result.innerHTML = '<p style="color:#6C63FF;margin-top:10px;font-size:0.85rem;">✓ Message envoyé ! Je vous répondrai rapidement.</p>';
      form.reset();
    });
  }

  // ===== ACTIVE NAV ON SCROLL =====
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 100) current = s.id;
    });
    navLinks.forEach(a => {
      a.style.color = a.getAttribute('href') === '#' + current ? 'var(--accent)' : '';
    });
  });

  // ===== LIGHTBOX CERTIFICATS =====
  const lightbox    = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');

  window.openLightbox = function (src) {
    lightboxImg.src = src;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  window.closeLightbox = function () {
    lightbox.classList.remove('open');
    lightboxImg.src = '';
    document.body.style.overflow = '';
  };

  if (lightbox) {
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeLightbox();
    });
  }

});
