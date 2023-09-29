const menuToggle = document.querySelector('.menu-toggle');
const navButtons = document.querySelector('.nav-buttons');

menuToggle.addEventListener('click', () => {
  navButtons.classList.toggle('nav-open');
});
