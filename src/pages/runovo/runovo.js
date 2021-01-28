import "./runovo.css";
import "./runovo.scss";

import imgSite from "../../images/runovo/runovo-pictures.jpg";
import Header from '../../js/components/Header';

(function () {
  const header = new Header();

  const devices = document.querySelectorAll(".portfolio__site");
  devices.forEach((item)=>{
    item.style.backgroundImage = `url("${imgSite}")`;
  })

})();
