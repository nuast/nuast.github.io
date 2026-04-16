(function () {
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('primaryNav');
  const year = document.getElementById('footerYear');

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  if (year) {
    year.textContent = new Date().getFullYear();
  }
})();
