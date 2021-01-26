import "./style.css";
import "./main.scss";

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
      item: ".technical-support",
      classActive: "technical-support_anim-active"
    }

  ];

  const animationHeader = new AnimationHeader(animationObject);

})();