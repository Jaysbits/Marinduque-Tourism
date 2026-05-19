/* ═══════════════════════════════════════
   MARINDUQUE TOURISM — SHARED JS (main.js)
   Nav, footer, fade-in — runs on every page
═══════════════════════════════════════ */

/* ── NAV ACTIVE LINK ── */
(function markActiveNav() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });
})();

/* ── NAV MOBILE TOGGLE ── */
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  document.addEventListener('click', e => {
    if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
    }
  });
}

/* ── FADE-IN OBSERVER ── */
function initFadeIn() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

/* ── SHARED NAV HTML ── */
function renderNav() {
  const placeholder = document.getElementById('nav-placeholder');
  if (!placeholder) return;
  placeholder.outerHTML = `
  <nav id="mainNav">
    <a href="index.html" class="nav-logo">Marinduque <span>/ PH</span></a>
    <ul class="nav-links" id="navLinks">
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="destinations.html">Destinations</a></li>
      <li><a href="festivals.html">Festivals</a></li>
      <li><a href="food.html">Food</a></li>
      <li><a href="gallery.html">Gallery</a></li>
      <li><a href="tips.html">Travel Tips</a></li>
      <li><a href="inquiry.html">Inquire</a></li>
    </ul>
    <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </nav>`;
}

/* ── SHARED FOOTER HTML ── */
function renderFooter() {
  const placeholder = document.getElementById('footer-placeholder');
  if (!placeholder) return;
  placeholder.outerHTML = `
  <footer>
    <div class="footer-grid">
      <div class="footer-brand">
        <h3>Marinduque</h3>
        <p>Heart of the Philippines — a heart-shaped island of festivals, pristine beaches, and warm Filipino hospitality in the MIMAROPA region.</p>
      </div>
      <div class="footer-col">
        <h4>Explore</h4>
        <ul>
          <li><a href="about.html">About the Province</a></li>
          <li><a href="destinations.html">Destinations</a></li>
          <li><a href="festivals.html">Festivals</a></li>
          <li><a href="food.html">Food &amp; Delicacies</a></li>
          <li><a href="gallery.html">Gallery</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Plan Your Trip</h4>
        <ul>
          <li><a href="tips.html">Travel Tips</a></li>
          <li><a href="inquiry.html">Inquiry Form</a></li>
          <li><a href="tips.html#getting-there">Getting There</a></li>
          <li><a href="tips.html#accommodation">Where to Stay</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 Marinduque Tourism. All rights reserved. | Made with &hearts; for the Heart of the Philippines</p>
    </div>
  </footer>`;
}

/* ── ICON SVGs (reused across pages) ── */
const ICONS = {
  image: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21,15 16,10 5,21"/></svg>`,
  food:  `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M12 6v6l4 2"/></svg>`,
  arrow: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`,
  pin:   `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
};

/* ── INIT ON DOM READY ── */
document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderFooter();
  // re-run after render
  requestAnimationFrame(() => {
    markActiveNavLinks();
    wireNavToggle();
    initFadeIn();
  });
});

function markActiveNavLinks() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === page);
  });
}

function wireNavToggle() {
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');
  if (!toggle || !links) return;
  toggle.addEventListener('click', () => links.classList.toggle('open'));
  document.addEventListener('click', e => {
    if (!toggle.contains(e.target) && !links.contains(e.target)) links.classList.remove('open');
  });
}