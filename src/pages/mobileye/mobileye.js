import "./mobileye.css";
import "./mobileye.scss";
import imgSite from "../../images/mobileye/mobileye-pictures.jpg";
import Header from '../../js/components/Header';
import Form from '../../js/components/Form';
import Popup from '../../js/components/Popup';

(function () {
  const header = new Header();

  const devices = document.querySelectorAll(".portfolio__site");
  devices.forEach((item)=>{
    item.style.backgroundImage = `url("${imgSite}")`;
  })

  const popup = document.querySelector('.popup');
  const popupNewCard = new Popup(popup);
  const formContainer=document.querySelector('.portfolio');
  const form= new Form(formContainer,popup);

})();
