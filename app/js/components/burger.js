let burger = () => {
  const menu = document.querySelector('.menu');
  const burger = document.querySelector('.header__burger');


  burger.addEventListener("click", function () {
    menu.classList.toggle('active');
    burger.classList.toggle('active');
    if (menu.classList.contains("active")) {
      menu.style.maxWidth = 100 + '%';
    } else {
      menu.style.maxWidth = '0';
    }
  });

  window.addEventListener('resize', function () {
    if (document.querySelector('body').scrollWidth >= 990) {
      menu.style.maxWidth = '100%';
    } else {
      menu.style.maxWidth = '0';
    }
  });
}
burger();