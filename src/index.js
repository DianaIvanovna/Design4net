import "./style.css";
import "./main.scss";

import "particles.js";

import Header from './js/components/Header';
import OurClient from './js/components/OurClient';
import GoUpButton from './js/components/GoUpButton';
import AnimationHeader from './js/components/AnimationHeader';
import Form from './js/components/Form';

(function () {
  const ourClientContainer = document.querySelector('.our-client');
  const header = new Header();
  const ourClient = new OurClient("big", ourClientContainer);
  const goUpButton = new GoUpButton();

  const formContainer=document.querySelector('.creating-websites');
  const form= new Form(formContainer);
  const formContainer2=document.querySelector('.technical-support');
  const form2= new Form(formContainer2);

  const formContainerPopup=document.querySelector('.popup');
  const formPopup= new Form(formContainerPopup);

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

