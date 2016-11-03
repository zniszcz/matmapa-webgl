(function () {
  'use strict';

  const InputController = class InputController extends app.Abstract.Controller {
    constructor(model) {
      super(model);
    }
    onSubmit(event) {
      event.preventDefault();

      if (app.UserModel.isValidUserName(this.getView().getInputValue())) {
        this.getModel().setItem(new app.UserModel(this.getView().getInputValue()));
        this.getView().reset();
      } else {
        this.getView().logNotValid('You are trying to add empty record.');
      }
    }
  };

  app.Input = class Input extends app.Abstract.View {
    constructor(model) {
      const controller = new InputController(model);
      super(model, controller);

      controller.setView(this);

      this.setRootEl(document.createElement('form'));
    }
    getInputValue() {
      return this.input.value;
    }
    reset() {
      this.input.value = '';
    }
    logNotValid(msg) {
      throw new Error(msg);
    }
    render() {
      const button = document.createElement('button');

      this.input = document.createElement('input');

      this.getRootEl().classList.add('input');
      this.input.classList.add('input__input');
      button.classList.add('input__button');

      button.type = 'submit';
      button.textContent = 'Add';

      this.getRootEl().appendChild(this.input);
      this.getRootEl().appendChild(button);

      this.getRootEl().addEventListener('submit', event => this.getController().onSubmit(event));
    }
  };

})();
