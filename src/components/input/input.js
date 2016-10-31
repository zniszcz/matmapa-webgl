(function () {
  'use strict';

  const InputController = class InputController extends app.Abstract.Controller {
    constructor(model) {
      super(model);
    }
    onSubmit(event) {
      event.preventDefault();

      if (!this.getView().getInput().value) {
        throw new Error('You are trying to add empty record.');
      }

      this.getModel().setItem(this.getView().getInput().value);
      this.getView().getInput().value = '';
    }
  };

  app.Input = class Input extends app.Abstract.View {
    constructor(model) {
      const controller = new InputController(model);
      super(model, controller);

      model.setView(this);

      const form = document.createElement('form');

      this.setRootEl(form);
    }
    setInput(input) {
      this.input = input;
    }
    getInput() {
      return this.input;
    }
    render() {
      this.setInput(document.createElement('input'));
      const button = document.createElement('button');

      this.getRootEl().classList.add('input');
      this.getInput().classList.add('input__input');
      button.classList.add('input__button');

      button.type = 'submit';
      button.textContent = 'Add';

      this.getRootEl().appendChild(this.getInput());
      this.getRootEl().appendChild(button);

      this.getRootEl().addEventListener('submit', event => this.getController().onSubmit(event));
    }
  };

})();
