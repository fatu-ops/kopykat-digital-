const carousel = document.querySelector('.testimonial-carousel');
let isDown = false;
let startX;
let scrollLeft;
let autoScrollInterval;
const scrollSpeed = 0.5; // pixels per 16ms ~ 30fps, tweak for speed

if (carousel) {
  // Drag to scroll (mouse)
  carousel.addEventListener('mousedown', e => {
    isDown = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
    stopAutoScroll();
  });

  carousel.addEventListener('mouseleave', () => {
    isDown = false;
    startAutoScroll();
  });
  carousel.addEventListener('mouseup', () => {
    isDown = false;
    startAutoScroll();
  });

  carousel.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 3;
    carousel.scrollLeft = scrollLeft - walk;
  });

  // Drag to scroll (touch)
  carousel.addEventListener('touchstart', e => {
    isDown = true;
    startX = e.touches[0].pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
    stopAutoScroll();
  });

  carousel.addEventListener('touchend', () => {
    isDown = false;
    startAutoScroll();
  });

  carousel.addEventListener('touchcancel', () => {
    isDown = false;
    startAutoScroll();
  });

  carousel.addEventListener('touchmove', e => {
    if (!isDown) return;
    const x = e.touches[0].pageX - carousel.offsetLeft;
    const walk = (x - startX) * 3;
    carousel.scrollLeft = scrollLeft - walk;
  });

  // Pause auto-scroll on hover for desktop
  carousel.addEventListener('mouseenter', stopAutoScroll);
  carousel.addEventListener('mouseleave', startAutoScroll);

  // Auto-scroll function
  function autoScroll() {
    carousel.scrollLeft += scrollSpeed;
    // Loop back to start if scrolled all the way right
    if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
      carousel.scrollLeft = 0;
    }
  }

  // Start and stop auto-scroll interval
  function startAutoScroll() {
    if (!autoScrollInterval) {
      autoScrollInterval = setInterval(autoScroll, 16); // roughly 60fps
    }
  }
  function stopAutoScroll() {
    clearInterval(autoScrollInterval);
    autoScrollInterval = null;
  }

  // Start auto-scroll by default
  startAutoScroll();
}
