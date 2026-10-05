/* ============================================================
   PRESENTATION SKILLS v2 — Main Script (Light only)
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Hamburger Menu ---- */
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.header__nav');
  const overlay = document.querySelector('.nav-overlay');

  function closeMenu() {
    hamburger?.classList.remove('active');
    nav?.classList.remove('open');
    overlay?.classList.remove('open');
  }
  hamburger?.addEventListener('click', () => {
    nav.classList.toggle('open');
    hamburger.classList.toggle('active');
    overlay?.classList.toggle('open');
  });
  overlay?.addEventListener('click', closeMenu);
  document.querySelectorAll('.header__link').forEach(l => l.addEventListener('click', closeMenu));

  /* ---- Smooth Scroll ---- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href.length > 1) {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ---- Scroll Animations ---- */
  const els = document.querySelectorAll('.animate-in');
  if (els.length) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
    }, { threshold: 0.1 });
    els.forEach(el => io.observe(el));
  }

  /* ---- Progress Bar ---- */
  const bar = document.querySelector('.progress-bar');
  if (bar) {
    window.addEventListener('scroll', () => {
      const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
      bar.style.width = Math.min(pct, 100) + '%';
    });
  }

  /* ---- Scroll-to-Top ---- */
  const stt = document.querySelector('.scroll-top');
  if (stt) {
    window.addEventListener('scroll', () => stt.classList.toggle('visible', window.scrollY > 500));
    stt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ---- Hero Slideshow ---- */
  const slides = document.querySelectorAll('.hero__slideshow img');
  if (slides.length) {
    let i = 0;
    slides[0].classList.add('active');
    setInterval(() => {
      slides[i].classList.remove('active');
      i = (i + 1) % slides.length;
      slides[i].classList.add('active');
    }, 7000);
  }

});
