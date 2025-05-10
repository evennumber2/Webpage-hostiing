// Sticky navigation bar on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  nav.classList.toggle('sticky', window.scrollY > 100);
});

// Toggle mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
