import "./technicalSupport.css";
import "./technicalSupport.scss";

import Header from '../../js/components/Header';
import OurClient from '../../js/components/OurClient';
import GoUpButton from '../../js/components/GoUpButton';
import AnimationHeader from '../../js/components/AnimationHeader';
import Form from '../../js/components/Form';
import Popup from '../../js/components/Popup';

(function () {
  const ourClientContainer = document.querySelector('.our-client');
  const header = new Header();
  const ourClient = new OurClient("small", ourClientContainer);
  const goUpButton = new GoUpButton();

  const popupButton = document.querySelector('.browser-page__bunner');
  const popup = document.querySelector('.popup');
  const form= new Form(popup,popup);
  const popupNewCard = new Popup(popup, popupButton);

  const formContainer=document.querySelector('.pageTechnicalSupport');
  const formContainer2=document.querySelector('.technical-support');
  const form1= new Form(formContainer,popup);
  const form2= new Form(formContainer2,popup);

  const animationObject = [
    {
      item: ".title-container",
      classActive: "title-container_anim-active"
    },
    {
      item:".pageTechnicalSupport__item",
      classActive: "pageTechnicalSupport__item_anim-active"
    }
  ];

  const animationHeader = new AnimationHeader(animationObject);
})();

(function(){
  // для перехода на коммерческое предложение с отмеченной услогой
  const buttons = document.querySelectorAll('.button-commercialOffer');
  buttons.forEach((button)=>{
    button.addEventListener('click', (event)=>{
      window.sessionStorage.setItem('checkboxActive', 'technicalSupport');
      document.location.href = "./commercialOffer.html";
    })
  })
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
