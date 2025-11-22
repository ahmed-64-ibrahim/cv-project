// js/script.js

// Mobile nav toggle with ARIA updates
const navToggle = document.querySelector('.nav-toggle');
const navList = document.getElementById('nav-list');

if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navList.classList.toggle('show');
  });
}

// Animate skill bars on intersection
const fills = document.querySelectorAll('.skill-bar .fill');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const styleWidth = el.getAttribute('style')?.match(/width:\s*([\d.]+%)/)?.[1] || '0%';
      el.style.width = styleWidth;
      observer.unobserve(el);
    }
  });
}, { threshold: 0.3 });

fills.forEach(f => observer.observe(f));

// Contact form feedback (demo only — no backend)
const form = document.querySelector('.contact-form');
const statusEl = document.querySelector('.form-status');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      statusEl.textContent = 'Please fill out all fields.';
      statusEl.style.color = '#b45309';
      return;
    }

    // Basic feedback message
    statusEl.textContent = 'Thanks, your message was received (demo).';
    statusEl.style.color = '#1e40af';

    form.reset();
  });
}

// Keyboard support for social icons (Enter triggers click)
document.querySelectorAll('.social a').forEach(link => {
  link.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') link.click();
  });
});
