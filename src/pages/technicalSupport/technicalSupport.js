import "./technicalSupport.css";
import "./technicalSupport.scss";

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

(function () { // для выпадающих списков
  const pageTechnicalSupport = document.querySelector(".pageTechnicalSupport");

  const stageContainer = document.querySelector(".browser-stage__container_stages");

  const stageTitles = pageTechnicalSupport.querySelectorAll(".browser-stage__title");
  const stageInfo = pageTechnicalSupport.querySelectorAll(".browser-stage__container");

  stageTitles.forEach((title, indexStage)=>{
    title.addEventListener('click',(event)=>{
      stageTitles.forEach((item,index)=>{
        if (index == indexStage) {
          item.classList.toggle("browser-stage__title_technicalSupport-active");
          stageInfo[indexStage].classList.toggle("browser-stage__container_technicalSupport-active");
        }
      })
    } )
  })
})();
