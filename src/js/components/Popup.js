import "particles.js";

export default class Popup{
  constructor(popup,popupOpen){
    this.popup=popup;
    this.popupClose=popup.querySelector('.popup__close');
    this.popupOpen=popupOpen;
    this.openAndCloseForm = this.openAndCloseForm.bind(this);
    this.setEventListeners();

  }

  openAndCloseForm(){

    // при открытие формы, кнопка становится неактивной
    this.popup.classList.toggle('popup_open');
    if (this.popup.classList.contains('popup_open')){
      particlesJS.load('particles-js_popup', "./particles.json", function() {
      });
    }
  }
  setEventListeners(){
    this.popupOpen.addEventListener('click',this.openAndCloseForm);
    this.popupClose.addEventListener('click',this.openAndCloseForm);

  }
}


