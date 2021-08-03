import "./newSite.css";
import "./newSite.scss";

import imgSite from "../../../images/runovo/runovo-pictures.jpg";
import imgSiteTablet from "../../../images/runovo/runovo-pictures-tablet.jpg" ;
import imgSiteMobile from "../../../images/runovo/runovo-pictures-mobile.jpg" ;
import Header from '../../../js/components/Header';
import Form from '../../../js/components/Form';
import Popup from "../../../js/components/Popup";

(function () {
  const header = new Header();

  const desktop = document.querySelector(".portfolio__site_desktop");
  const tablet = document.querySelector(".portfolio__site_tablet");
  const mobile = document.querySelector(".portfolio__site_mobile");

  desktop.style.backgroundImage = `url("${imgSite}")`;
  tablet.style.backgroundImage = `url("${imgSiteTablet}")`;
  mobile.style.backgroundImage = `url("${imgSiteMobile}")`;

  const popup = document.querySelector('.popup');
  const popupNewCard = new Popup(popup);

  const formContainer=document.querySelector('.portfolio');
  const form= new Form(formContainer,popup);
})();
