import "./promotion.css";
import "./promotion.scss";
import Header from '../../js/components/Header';
import OurClient from '../../js/components/OurClient';
import GoUpButton from '../../js/components/GoUpButton';
import AnimationHeader from '../../js/components/AnimationHeader';

(function () {
  const ourClientContainer = document.querySelector('.our-client');
  const header = new Header();
  const ourClient = new OurClient("small", ourClientContainer);
  const goUpButton = new GoUpButton();

  const animationObject = [
    {
      item: ".title-container",
      classActive: "title-container_anim-active"
    }

  ];

  const animationHeader = new AnimationHeader(animationObject);

})();





(function () {
   // замена блоков в контексной рекламе
  // чтобы функция работала нормально, нужно чтобы этапы работы стояли в html по порядку. подумай как исправить
  const contextAdvertising = document.querySelector(".promotion__context-advertising");
  const stageTitles = contextAdvertising.querySelectorAll(".browser-stage__title");
  const stageInfo = contextAdvertising.querySelectorAll(".browser-stage__info");

  stageTitles.forEach((title, indexStage)=>{
    title.addEventListener('click',()=>{
      stageTitles.forEach((item,index)=>{
        if (index == indexStage) item.classList.add("browser-stage__title_active");
        else item.classList.remove("browser-stage__title_active")
      })
      stageInfo.forEach((item,index)=>{
        if (index == indexStage) item.classList.add("browser-stage__info_active");
        else item.classList.remove("browser-stage__info_active")
      })
    } )
  })
})();
(function () {
  // выпадающие список поисковое продвижение сайтов
  const searchPromotion = document.querySelector(".promotion__search-promotion");
  const stageTitles = searchPromotion.querySelectorAll(".browser-stage__title");
  const stageInfo = searchPromotion.querySelectorAll(".browser-stage__container");
  stageTitles.forEach((title, indexStage)=>{
    title.addEventListener('click',(event)=>{
      stageTitles.forEach((item,index)=>{
        if (index == indexStage) item.classList.toggle("browser-stage__title_search-promotion-active");
        else item.classList.remove("browser-stage__title_search-promotion-active")
      })
      stageInfo.forEach((item,index)=>{
        if (index == indexStage) item.classList.toggle("browser-stage__container_column_active");
        else item.classList.remove("browser-stage__container_column_active")
      })
    } )
  })
})();
