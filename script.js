const burger = document.getElementById('burger');
const mobileNav = document.getElementById('mobileNav');

burger.addEventListener('click', () => {
  mobileNav.style.display =
    mobileNav.style.display === 'flex' ? 'none' : 'flex';
});
