import "./commercialOffer.css";
import "./commercialOffer.scss";

import "particles.js";

import Header from '../../js/components/Header';
import Form from '../../js/components/Form';
import Popup from '../../js/components/Popup';

(function () {
  const header = new Header();

  const popup = document.querySelector('.popup');
  const popupNewCard = new Popup(popup);

  const formContainer = document.querySelector('.browser-page__content');
  const form = new Form(formContainer, popup);

  if (window.sessionStorage.getItem('checkboxActive')!=null){
    document.querySelector(`input[type='checkbox'][id='${window.sessionStorage.getItem('checkboxActive')}']`).checked = true;
  }
})();

(function () {
  // ДЛЯ РАБОТЫ ПОЛИГОНА
  particlesJS.load('particles-js', "particles.json", function() {
  });
})();