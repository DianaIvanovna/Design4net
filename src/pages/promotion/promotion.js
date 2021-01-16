import "./promotion.css";
import "./promotion.scss";

(function () {
  // чтобы функция работала нормально, нужно чтобы этапы работы стояли в html по порядку. подумай как исправить
  const contextAdvertising = document.querySelector(".context-advertising");
  const stageTitles = contextAdvertising.querySelectorAll(".promotion-stage__title");
  const stageInfo = contextAdvertising.querySelectorAll(".promotion-stage__info");

  stageTitles.forEach((title, indexStage)=>{
    title.addEventListener('click',()=>{
      stageTitles.forEach((item,index)=>{
        if (index == indexStage) item.classList.add("promotion-stage__title_active");
        else item.classList.remove("promotion-stage__title_active")
      })
      stageInfo.forEach((item,index)=>{
        if (index == indexStage) item.classList.add("promotion-stage__info_active");
        else item.classList.remove("promotion-stage__info_active")
      })
    } )
  })
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
  let marginClient = 30;
  let position = 0; // положение ленты прокрутки

  const windowWidth = document.documentElement.clientWidth;
  if (windowWidth < 768 && windowWidth >=720 ){
    marginClient = 15;
  } else if (windowWidth < 720 && windowWidth >=500){
    count = 4;
    marginClient = 15;
  } else if (windowWidth < 500) {
    count = 3;
    marginClient = 5;
  }
  let width = (carousel.offsetWidth - marginClient*count) / (count); // ширина обычных картинок


  clients.forEach((client)=>{
    client.style.width = `${width}px`;
  })

  buttonLeft.addEventListener('click', ()=>{ // сдвиг влево
    if ((position + width + marginClient <= 0)){
      position = position + width + marginClient;
      clientsContainer.style.transform = `translateX(${position}px)`;
    }
  })
  buttonRight.addEventListener('click', ()=>{     // сдвиг вправо
    if (!(-width * (clients.length - count) >= position - width)){
      position =position - width - marginClient;
      clientsContainer.style.transform = `translateX(${position}px)`;
    }
  })
})();