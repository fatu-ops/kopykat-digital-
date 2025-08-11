const carousel = document.querySelector('.testimonial-carousel');
let isDown = false;
let startX;
let scrollLeft;

if (carousel) {
  // Mouse events for desktop
  carousel.addEventListener('mousedown', e => {
    isDown = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
  });

  carousel.addEventListener('mouseleave', () => isDown = false);
  carousel.addEventListener('mouseup', () => isDown = false);

  carousel.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 3;
    carousel.scrollLeft = scrollLeft - walk;
  });

  // Touch events for mobile
  carousel.addEventListener('touchstart', e => {
    isDown = true;
    startX = e.touches[0].pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
  });

  carousel.addEventListener('touchend', () => isDown = false);
  carousel.addEventListener('touchcancel', () => isDown = false);

  carousel.addEventListener('touchmove', e => {
    if (!isDown) return;
    const x = e.touches[0].pageX - carousel.offsetLeft;
    const walk = (x - startX) * 3;
    carousel.scrollLeft = scrollLeft - walk;
  });
}
