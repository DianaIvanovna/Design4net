import "./runovo.css";
import "./runovo.scss";

import imgSite from "../../images/runovo/runovo-pictures.jpg";
import imgSiteTablet from "../../images/runovo/runovo-pictures-tablet.jpg" ;
import imgSiteMobile from "../../images/runovo/runovo-pictures-mobile.jpg" ;
import Header from '../../js/components/Header';
import Form from '../../js/components/Form';

(function () {
  const header = new Header();

  const desktop = document.querySelector(".portfolio__site_desktop");
  const tablet = document.querySelector(".portfolio__site_tablet");
  const mobile = document.querySelector(".portfolio__site_mobile");

  desktop.style.backgroundImage = `url("${imgSite}")`;
  tablet.style.backgroundImage = `url("${imgSiteTablet}")`;
  mobile.style.backgroundImage = `url("${imgSiteMobile}")`;

  const formContainer=document.querySelector('.portfolio');
  const form= new Form(formContainer);
})();
