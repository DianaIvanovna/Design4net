import "./style.css";
import "./main.scss";

import Header from './js/components/Header';
import OurClient from './js/components/OurClient';

(function () {
  const header = new Header();
  const ourClient = new OurClient("big");
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

