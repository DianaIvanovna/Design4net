import "./style.css";
import "./main.scss";

(function () {
  const header = document.querySelector('.header');
  const headerBackground = document.querySelector('.background__mobile');
  const headerMenu = document.querySelector('.header__menu');


  headerMenu.addEventListener('click', openMobile);
  headerBackground.addEventListener('click',closeMobile);

  function openMobile(){ // открытие мобильной версии header
    header.classList.toggle('header_open-mobile');
    headerBackground.classList.toggle('background__mobile_active');
  };
  function closeMobile(){ // закрытие мобильной версии header
    header.classList.remove('header_open-mobile');
    headerBackground.classList.remove('background__mobile_active');
  };

})();

