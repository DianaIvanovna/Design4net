export default class Header {
  constructor() {
    this._header = document.querySelector('.header');
    this._headerMenu = this._header.querySelector('.header__menu');
    this._headerBackground = document.querySelector('.background__mobile');
    this._headerDropdown = this._header.querySelectorAll('.header__dropdown');
    this._setHandlers();
  }

  _setHandlers() {
    this._headerMenu.addEventListener('click', this._openMobile.bind(this));
    this._headerBackground.addEventListener('click', this._closeMobile.bind(this));
  }

  _openMobile() { // открытие мобильной версии
    this._header.classList.toggle('header_open-mobile');
    this._headerBackground.classList.toggle('background__mobile_active');
  }

  _closeMobile() { // закрытие мобильной версии
    this._header.classList.remove('header_open-mobile');
    this._headerBackground.classList.remove('background__mobile_active');
  }



}
