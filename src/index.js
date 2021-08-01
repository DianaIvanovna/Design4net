import "./style.css";
import "./main.scss";
import "particles.js";

(function () {
  // ДЛЯ РАБОТЫ ПОЛИГОНА
  particlesJS.load('particles-js', "particlesDevelopment.json", function() {
    console.log('callback - particles.js config loaded');
  });
})();