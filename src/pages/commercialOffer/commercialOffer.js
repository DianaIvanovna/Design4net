import "./commercialOffer.css";
import "./commercialOffer.scss";

import "particles.js";

import Header from '../../js/components/Header';
import Form from '../../js/components/Form';

(function () {
  const header = new Header();
  const formContainer = document.querySelector('.browser-page__content');
  const form = new Form(formContainer);
})();

(function () {
  // ДЛЯ РАБОТЫ ПОЛИГОНА
  particlesJS.load('particles-js', "particles.json", function() {
    console.log('callback - particles.js config loaded');
  });
})();