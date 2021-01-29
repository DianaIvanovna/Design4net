import "./mobileye.css";
import "./mobileye.scss";
import imgSite from "../../images/mobileye/mobileye-pictures.jpg";
import Header from '../../js/components/Header';
import Form from '../../js/components/Form';

(function () {
  const header = new Header();

  const devices = document.querySelectorAll(".portfolio__site");
  devices.forEach((item)=>{
    item.style.backgroundImage = `url("${imgSite}")`;
  })

  const formContainer=document.querySelector('.portfolio');
  const form= new Form(formContainer);

})();
