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

(function () { // ФУНКЦИЯ ДЛЯ КУРУСЕЛИ НАШИ КЛИЕНТЫ

  const clientContainer = document.querySelector('.our-client__container');
  const carousel = clientContainer.querySelector('.our-client__carousel');
  const clientsContainer = clientContainer.querySelector('.our-client__clients');
  const buttonLeft = clientContainer.querySelector('.our-client__button_left');
  const buttonRight = clientContainer.querySelector('.our-client__button_right');
  const clients = carousel.querySelectorAll('img');


  /* конфигурация */
  let count = 5; // видимое количество изображений
  let numberBigClient = 2;// какое изображение по счету будет большим
  let marginClient = 30;
  let position = 0; // положение ленты прокрутки
  let scaleBigPhoto = 1.5;

  const windowWidth = document.documentElement.clientWidth;
  if (windowWidth < 768 && windowWidth >=720 ){
    marginClient = 15;
  } else if (windowWidth < 720 && windowWidth >=500){
    count = 3;
    numberBigClient = 1;
    marginClient = 15;
  } else if (windowWidth < 500) {
    count = 2;
    numberBigClient = 1;
    scaleBigPhoto = 1;
    marginClient = 0;
  }
  let widthBigClient = (carousel.offsetWidth  - marginClient*count) / (count) * scaleBigPhoto;   // большая картинка
  let width = (carousel.offsetWidth - widthBigClient - marginClient*count) / (count -1); // ширина обычных картинок

  clients.forEach((client)=>{
    client.style.width = `${width}px`;
  })

  clients[numberBigClient].style.width = `${widthBigClient}px`; // картинка посередине большая
  buttonLeft.addEventListener('click', ()=>{ // сдвиг влево
    if ((position + width + marginClient <= 0)){
      clients[numberBigClient].style.width = `${width}px`; // старой большой картинке присваиваем маленький размер
      position = position + width + marginClient;
      numberBigClient--;
      clients[numberBigClient].style.width = `${widthBigClient}px`; // картинка посередине большая
      clientsContainer.style.transform = `translateX(${position}px)`;
    }
  })
  buttonRight.addEventListener('click', ()=>{     // сдвиг вправо
    if (!(-width * (clients.length - count) >= position - width)){
      clients[numberBigClient].style.width = `${width}px`; //
      position =position - width - marginClient;
      numberBigClient++;
      clientsContainer.style.transform = `translateX(${position}px)`;
      clients[numberBigClient].style.width = `${widthBigClient}px`; // картинка посередине большая
    }
  })
})();

(function () {

  const goUp = document.querySelector('.goUp');
  window.addEventListener('scroll',()=>{
    let scrolled = window.pageYOffset;
    if (scrolled > 500) {
      goUp.classList.add('goUp_show');
    }else {
      goUp.classList.remove('goUp_show');
    }
  })
  goUp.addEventListener('click', (event)=>{
    event.preventDefault();
    window.scroll({
      left:0,
      top: 0,
      behavior: 'smooth'
    });
  })


})();

