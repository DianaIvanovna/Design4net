import "./commercialOffer.css";
import "./commercialOffer.scss";

import "particles.js";

import Header from '../../js/components/Header';

(function () {
  const header = new Header();
})();

(function () {
  // ДЛЯ РАБОТЫ ПОЛИГОНА
  particlesJS.load('particles-js', "particles.json", function() {
    console.log('callback - particles.js config loaded');
  });
})();