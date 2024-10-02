//BURGER MENU TOGGLE
const burgerMenuBtns = document.querySelectorAll('.burger-menu');
burgerMenuBtns.forEach(burgerMenuBtn => {
  burgerMenuBtn.addEventListener('click', function (e) {
    burgerMenuBtns.forEach(e => e.classList.toggle("burger-menu--active"))
    document.querySelector('.menu').classList.toggle("menu--open");
  });
});