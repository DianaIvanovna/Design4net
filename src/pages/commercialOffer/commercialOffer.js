import "./commercialOffer.css";
import "./commercialOffer.scss";

import "particles.js";

import Header from '../../js/components/Header';
import Form from '../../js/components/Form';

(function () {
  const header = new Header();
  const formContainer = document.querySelector('.browser-page__content');
  const form = new Form(formContainer);

  if (window.sessionStorage.getItem('checkboxActive')!=null){
    document.querySelector(`input[type='checkbox'][id='${window.sessionStorage.getItem('checkboxActive')}']`).checked = true;
  }
})();

(function () {
  // ДЛЯ РАБОТЫ ПОЛИГОНА
  particlesJS.load('particles-js', "particles.json", function() {
  });
})();