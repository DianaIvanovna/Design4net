export default class OurClient {
  constructor(typeOurClient, container) {
    this._clientContainer = container.querySelector('.our-client__container');
    this._carousel = this._clientContainer.querySelector('.our-client__carousel');
    this._clientsContainer = this._clientContainer.querySelector('.our-client__clients');
    this._buttonLeft = this._clientContainer.querySelector('.our-client__button_left');
    this._buttonRight = this._clientContainer.querySelector('.our-client__button_right');
    this._clients = this._carousel.querySelectorAll('img');
    this._windowWidth = document.documentElement.clientWidth;
    this._typeOurClient = typeOurClient;

    /* конфигурация */
    this._count = 0;  // видимое количество изображений
    this._numberBigClient = 0;// какое изображение по счету будет большим
    this._marginClient = 0;
    this._position = 0; // положение ленты прокрутки
    this._scaleBigPhoto = 0;

    this._widthBigClient = 0;
    this._width = 0;

    this._setHandlers();
  }


  _setHandlers() {
    if (this._typeOurClient == "big"){
      this._configurationBig(); // начальные настройки

      this._widthBigClient = (this._carousel.offsetWidth  - this._marginClient*this._count) / (this._count) * this._scaleBigPhoto;   // расчет размера большой картинки
      this._width = (this._carousel.offsetWidth - this._widthBigClient - this._marginClient*this._count) / (this._count -1); // ширина обычных картинок

      this._clients.forEach((client)=>{
        client.style.width = `${this._width}px`;
      });
      this._clients[this._numberBigClient].style.width = `${this._widthBigClient}px`; // картинка посередине большая

      this._buttonLeft.addEventListener('click', this._leftShiftBig.bind(this));
      this._buttonRight.addEventListener('click', this._rightShiftBig.bind(this));

    }else if (this._typeOurClient == "small"){
      this._configurationSmall();
      this._width = (this._carousel.offsetWidth - this._marginClient*this._count) / (this._count); // ширина обычных картинок
      this._clients.forEach((client)=>{
        client.style.width = `${this._width}px`;
      });
      this._buttonLeft.addEventListener('click', this._leftShiftSmall.bind(this));
      this._buttonRight.addEventListener('click', this._rightShiftSmall.bind(this));
    }
  }


  _configurationBig(){
    this._count = 5;
    this._numberBigClient = 2;
    this._marginClient = 30;
    this._position = 0;
    this._scaleBigPhoto = 1.5;
    // настройки для адаптивности
    if (this._windowWidth < 768 && this._windowWidth >=720 ){
      this._marginClient = 15;
    } else if (this._windowWidth < 720 && this._windowWidth >500){
      this._count = 3;
      this._numberBigClient = 1;
      this._marginClient = 15;
    } else if (this._windowWidth <= 500) {
      this._count = 2;
      this._numberBigClient = 1;
      this._scaleBigPhoto = 1;
      this._marginClient = 0;
    }

    if (this._clients.length <= this._count){
      this._count = this._clients.length;
      this._numberBigClient = 1;
      this._scaleBigPhoto = 1;
      this._buttonLeft.classList.add('our-client__button_hidden');
      this._buttonRight.classList.add('our-client__button_hidden');
    }

  }
  _configurationSmall(){
    this._count = 5; // видимое количество изображений
    this._marginClient = 30;
    this._position = 0; // положение ленты прокрутки

    if (this._windowWidth < 768 && this._windowWidth >=720 ){
      this._marginClient = 15;
    } else if (this._windowWidth < 720 && this._windowWidth >=500){
      this._count = 4;
      this._marginClient = 15;
    } else if (this._windowWidth < 500) {
      this._count = 3;
      this._marginClient = 5;
    }
  }


  _leftShiftBig(){
    if ((this._position + this._width + this._marginClient <= 0)){
      this._clients[this._numberBigClient].style.width = `${this._width}px`; // старой большой картинке присваиваем маленький размер
      this._position = this._position + this._width + this._marginClient;
      this._numberBigClient--;
      this._clients[this._numberBigClient].style.width = `${this._widthBigClient}px`; // картинка посередине большая
      this._clientsContainer.style.transform = `translateX(${this._position}px)`;
    }
  }
  _rightShiftBig(){
    if (!(-this._width * (this._clients.length + 1 - this._count) >= this._position - this._width)){
      this._clients[this._numberBigClient].style.width = `${this._width}px`; //
      this._position = this._position - this._width - this._marginClient;
      this._numberBigClient++;
      this._clientsContainer.style.transform = `translateX(${this._position}px)`;
      this._clients[this._numberBigClient].style.width = `${this._widthBigClient}px`; // картинка посередине большая
    }
  }

  _leftShiftSmall(){
    if ((this._position + this._width + this._marginClient <= 0)){
      this._position = this._position + this._width + this._marginClient;
      this._clientsContainer.style.transform = `translateX(${this._position}px)`;
    }
  }
  _rightShiftSmall(){
    if (!(-this._width * (this._clients.length + 1 - this._count) > this._position - this._width)){
      this._position = this._position - this._width - this._marginClient;
      this._clientsContainer.style.transform = `translateX(${this._position}px)`;
    }
  }


}
