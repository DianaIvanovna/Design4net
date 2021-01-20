export default class Header {
  constructor() {
    this._header = document.querySelector('.header');
    this._headerMenu = this._header.querySelector('.header__menu');
    this._headerBackground = document.querySelector('.background__mobile');
    this._headerDropdown = this._header.querySelectorAll('.header__dropdown');
    this._headerContainerDropdown = this._header.querySelectorAll('.header__dropdown-container');
    this._setHandlers();
  }

  _setHandlers() {
    this._headerMenu.addEventListener('click', this._openMobile.bind(this));
    this._headerBackground.addEventListener('click', this._closeMobile.bind(this));
    this._headerContainerDropdown.forEach((item, index)=>{
      item.addEventListener('click', this._openDropdown.bind(this, index));
    })
  }

  _openMobile() { // открытие мобильной версии
    this._header.classList.toggle('header_open-mobile');
    this._headerBackground.classList.toggle('background__mobile_active');
  }

  _closeMobile() { // закрытие мобильной версии
    this._header.classList.remove('header_open-mobile');
    this._headerBackground.classList.remove('background__mobile_active');
  }

  _openDropdown(numberDropdown){ // открытие выпадающего списка для мобильной версии, в комп он открывается при наведении
    this._headerDropdown.forEach((item,index)=>{
      if (numberDropdown == index) this._headerDropdown[index].classList.toggle('header__dropdown_open');
      else this._headerDropdown[index].classList.remove('header__dropdown_open');
    })
  }

}
