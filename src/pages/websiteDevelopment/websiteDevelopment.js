import "./websiteDevelopment.css";
import "./websiteDevelopment.scss";
import OurClient from '../../js/components/OurClient';
import GoUpButton from '../../js/components/GoUpButton';
import Header from '../../js/components/Header';

(function () {
  const header = new Header();
  const goUpButton = new GoUpButton();

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
})();



