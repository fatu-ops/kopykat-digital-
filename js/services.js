// services.js - tiny IntersectionObserver to reveal cards on scroll
document.addEventListener('DOMContentLoaded', function () {
  const reveals = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    reveals.forEach(el => io.observe(el));
  } else {
    // fallback: if no IO, just show them
    reveals.forEach(el => el.classList.add('is-visible'));
  }
});