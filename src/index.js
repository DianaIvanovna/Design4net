import "./style.css";
import "./main.scss";

import Header from './js/components/Header';
import OurClient from './js/components/OurClient';
import GoUpButton from './js/components/GoUpButton';

(function () {
  const header = new Header();
  const ourClient = new OurClient("big");
  const goUpButton = new GoUpButton();
})();

