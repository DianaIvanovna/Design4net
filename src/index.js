import "./style.css";
import "./main.scss";

import "particles.js";

import Header from './js/components/Header';
import OurClient from './js/components/OurClient';
import GoUpButton from './js/components/GoUpButton';
import AnimationHeader from './js/components/AnimationHeader';

(function () {
  const ourClientContainer = document.querySelector('.our-client');
  const header = new Header();
  const ourClient = new OurClient("big", ourClientContainer);
  const goUpButton = new GoUpButton();

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
    console.log('callback - particles.js config loaded');
  });
  particlesJS.load('particles-js_bottom', "particles.json", function() {
    console.log('callback - particles.js config loaded');
  });
})();