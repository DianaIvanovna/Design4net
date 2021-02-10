import "particles.js";

export default class Popup{
  constructor(popup,popupOpen=undefined){
    this.popup=popup;
    this.popupClose=popup.querySelector('.popup__close');
    this.popupOpen=popupOpen;
    this.openAndCloseForm = this.openAndCloseForm.bind(this);
    this.setEventListeners();

  }

  openAndCloseForm(){
    if (!this.popup.classList.contains('popup_open')){
      this.popup.classList.add('popup_open');
      particlesJS.load('particles-js_popup', "./particles.json", function() {
      });
    }else{
      this.popup.classList.remove('popup_open');
      this.popup.classList.remove('popup_sent');
    }
  }
  setEventListeners(){
    if (this.popupOpen!=undefined){
      this.popupOpen.addEventListener('click',this.openAndCloseForm);
    }
    this.popupClose.addEventListener('click',this.openAndCloseForm);

  }
}


