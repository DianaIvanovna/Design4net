import "./websiteDevelopment.css";
import "./websiteDevelopment.scss";
import '../../js/components/OurClient';
import GoUpButton from '../../js/components/GoUpButton';
import Header from '../../js/components/Header';
import Form from '../../js/components/Form';
import Popup from '../../js/components/Popup';


(function () {
  const header = new Header();
  const goUpButton = new GoUpButton();



  // БЛОК НАШИ КЛИЕНТЫ
  // const ourClientContainerBusinessCard = document.querySelector('.block-BusinessCard');
  // const ourClientContainerLanding = document.querySelector('.block-landing');
  // const ourClientContainerCorporateWebsite = document.querySelector('.block-corporateWebsite');
  // const ourClientContainerCatalog= document.querySelector('.block-catalog');
  // const ourClientContainerOnlineStore= document.querySelector('.block-onlineStore');
  // const ourClientContainerOnlineService= document.querySelector('.block-onlineService');

  // const ourClientBusinessCard = new OurClient("big", ourClientContainerBusinessCard);
  // const ourClientLanding = new OurClient("big", ourClientContainerLanding);
  // const ourClientCorporateWebsite = new OurClient("big", ourClientContainerCorporateWebsite);
  // const ourClientCatalog= new OurClient("big", ourClientContainerCatalog);
  // const ourClientOnlineStore = new OurClient("big", ourClientContainerOnlineStore);
  // const ourClientOnlineService= new OurClient("big", ourClientContainerOnlineService);

  //попап
  const popup = document.querySelector('.popup');
  const popupNewCard = new Popup(popup);

  // ФОРМЫ
  const formContainer1=document.querySelector('.block-BusinessCard');
  const formContainer2=document.querySelector('.block-landing');
  const formContainer3=document.querySelector('.block-corporateWebsite');
  const formContainer4=document.querySelector('.block-catalog');
  const formContainer5=document.querySelector('.block-onlineStore');
  const formContainer6=document.querySelector('.block-onlineService');

  const form1= new Form(formContainer1, popup);
  const form2= new Form(formContainer2, popup);
  const form3= new Form(formContainer3, popup);
  const form4= new Form(formContainer4, popup);
  const form5= new Form(formContainer5, popup);
  const form6= new Form(formContainer6, popup);

  // для перехода на коммерческое предложение с отмеченной услогой
  const buttons = document.querySelectorAll('.browser-stage__button-price');
  buttons.forEach((button)=>{
    button.addEventListener('click', (event)=>{

      switch (event.target.classList[1]) {
        case 'browser-stage__button-price_block-landing': {
          window.sessionStorage.setItem('checkboxActive', 'Landing');
         }break;
        case 'browser-stage__button-price_block-corporateWebsite': {
          window.sessionStorage.setItem('checkboxActive', 'corporateWebsite');
         }break;
        case 'browser-stage__button-price_block-onlineStore': {
          window.sessionStorage.setItem('checkboxActive', 'onlineStore');
         }break;
        default: break;
      }
      document.location.href = "./commercialOffer.html";
    })
  })

})();



