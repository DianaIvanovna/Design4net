import "./websiteDevelopment.css";
import "./websiteDevelopment.scss";
import OurClient from '../../js/components/OurClient';
import GoUpButton from '../../js/components/GoUpButton';
import Header from '../../js/components/Header';
import Form from '../../js/components/Form';


(function () {
  const header = new Header();
  const goUpButton = new GoUpButton();

  // БЛОК НАШИ КЛИЕНТЫ
  const ourClientContainerBusinessCard = document.querySelector('.block-BusinessCard');
  const ourClientContainerLanding = document.querySelector('.block-landing');
  const ourClientContainerCorporateWebsite = document.querySelector('.block-corporateWebsite');
  const ourClientContainerCatalog= document.querySelector('.block-catalog');
  const ourClientContainerOnlineStore= document.querySelector('.block-onlineStore');
  const ourClientContainerOnlineService= document.querySelector('.block-onlineService');

  const ourClientBusinessCard = new OurClient("big", ourClientContainerBusinessCard);
  const ourClientLanding = new OurClient("big", ourClientContainerLanding);
  const ourClientCorporateWebsite = new OurClient("big", ourClientContainerCorporateWebsite);
  const ourClientCatalog= new OurClient("big", ourClientContainerCatalog);
  const ourClientOnlineStore = new OurClient("big", ourClientContainerOnlineStore);
  const ourClientOnlineService= new OurClient("big", ourClientContainerOnlineService);

  // ФОРМЫ
  const formContainer1=document.querySelector('.block-BusinessCard');
  const formContainer2=document.querySelector('.block-landing');
  const formContainer3=document.querySelector('.block-corporateWebsite');
  const formContainer4=document.querySelector('.block-catalog');
  const formContainer5=document.querySelector('.block-onlineStore');
  const formContainer6=document.querySelector('.block-onlineService');

  const form1= new Form(formContainer1);
  const form2= new Form(formContainer2);
  const form3= new Form(formContainer3);
  const form4= new Form(formContainer4);
  const form5= new Form(formContainer5);
  const form6= new Form(formContainer6);

})();



