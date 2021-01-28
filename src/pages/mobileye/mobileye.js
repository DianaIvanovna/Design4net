import "./mobileye.css";
import "./mobileye.scss";
import imgSite from "../../images/mobileye/mobileye-pictures.jpg";
import Header from '../../js/components/Header';

(function () {
  const header = new Header();

  const devices = document.querySelectorAll(".portfolio__site");
  devices.forEach((item)=>{
    item.style.backgroundImage = `url("${imgSite}")`;
  })

})();
