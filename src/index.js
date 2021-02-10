import "./style.css";
import "./main.scss";

import "particles.js";

import Header from './js/components/Header';
import './js/components/OurClient';
import GoUpButton from './js/components/GoUpButton';
import AnimationHeader from './js/components/AnimationHeader';
import Form from './js/components/Form';
import Popup from './js/components/Popup';

(function () {
  const header = new Header();
  const goUpButton = new GoUpButton();

  const popup = document.querySelector('.popup');
  const popupNewCard = new Popup(popup);

  const formContainer=document.querySelector('.creating-websites');
  const form= new Form(formContainer, popup);
  const formContainer2=document.querySelector('.technical-support');
  const form2= new Form(formContainer2, popup);




  const animationObject = [
    {
      item: ".main-title", // объекты с каким классом имеют анимацию при скролле
      classActive: "main-title_anim-active", // класс для добавления анимации
    },
    {
      item: ".title-container",
      classActive: "title-container_anim-active"
    },
    {
      item: ".technical-support__item",
      classActive: "technical-support__item_anim-active"
    },
    {
      item: ".stages-work__icons-stage",
      classActive: "stages-work__icons-stage_anim-active"
    }
  ];

  const animationHeader = new AnimationHeader(animationObject);

})();

(function () {
  // ДЛЯ РАБОТЫ ПОЛИГОНА
  particlesJS.load('particles-js_top', "particles.json", function() {
  });
  particlesJS.load('particles-js_bottom', "particles.json", function() {
  });
  particlesJS.load('particles-js_popup', "particles.json", function() {
  });
})();

