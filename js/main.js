/* =============================================================
   NUAST Computer Science – main.js
   Minimal JavaScript for:
     1. Mobile navigation toggle
     2. Auto-update footer copyright year

   Keep this file small. Only add what is genuinely needed.
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     1. MOBILE NAVIGATION TOGGLE
     Toggles the .is-open class on the nav when the hamburger
     button is clicked, and updates aria-expanded for accessibility.
     ---------------------------------------------------------- */
  var toggle = document.getElementById('navToggle');
  var nav    = document.getElementById('primaryNav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    /* Close nav if user clicks a nav link (smooth scroll UX) */
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    /* Close nav if user clicks outside it */
    document.addEventListener('click', function (event) {
      if (!nav.contains(event.target) && !toggle.contains(event.target)) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }


  /* ----------------------------------------------------------
     2. AUTO-UPDATE FOOTER YEAR
     Keeps the copyright year current without manual edits.
     EDIT: If you want a fixed year, remove this block and
     simply type the year directly in the HTML.
     ---------------------------------------------------------- */
  var yearEl = document.getElementById('footerYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

})();
