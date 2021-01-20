export default class GoUpButton {
  constructor() {
    this._goUp = document.querySelector('.goUp');
    this._footer = document.querySelector('.footer');
    this._setHandlers();
  }

  _setHandlers() {

    window.addEventListener('scroll',()=>{
      let scrolled = window.pageYOffset;
      if (scrolled > 500) {
        this._goUp.classList.add('goUp_show');
      }else {
        this._goUp.classList.remove('goUp_show');
      }
    })
    this._goUp.addEventListener('click', (event)=>{
      event.preventDefault();
      window.scroll({
        left:0,
        top: 0,
        behavior: 'smooth'
      });
    })


    function offset(el) {
      var rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }

  }
}
