export default class Form{
  constructor(container) {
    this._container = container;
    this._form = this._container.querySelector(".form");
    this._button = this._container.querySelector('.button');
    this._setHandlers = this._setHandlers.bind(this);
    this._setHandlers();
  }

  _setHandlers() {
    // Добавляет необходимые для валидации обработчики всем полям формы.
    this._form.elements.forEach((input) => {
      if (input !== this._button) input.addEventListener('input', this._checkInputValidity.bind(this));
    });
    this._button.addEventListener('click', this._formSubmission.bind(this));
  }

  _checkInputValidity(event) { // чтобы валидировать поля.
    this._validateForm();
    this._validateInputElement(event.target);
  }

  _formSubmission(event) { // отправка формы
    event.preventDefault();
    this._validateForm();
    console.log("отправка формы");
  }



  _validateInputElement(element) { // проверяет валидность отдельных инпутов
    if (!element.checkValidity()) {
      element.classList.add('error-input');
      return false;
    }
    element.classList.remove('error-input');
    return true;
  }

  _validateForm() { // проверяет валидность всей формы
    let flagValid = true;
    this._form.elements.forEach((elem) => {
      if (elem.classList.contains('input')) {
        if (!(this._validateInputElement(elem, this._form))) flagValid = false;
      }
    });
    this._setSubmitButton(flagValid);
  }

  _setSubmitButton(flag) { // делает кнопку активной/неактивной
    if (flag) {
      this._button.removeAttribute('disabled');
    } else {
      this._button.setAttribute('disabled', 'disabled');
    }
  }

}
