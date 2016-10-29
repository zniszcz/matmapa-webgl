(function () {
  'use strict';

  const InputController = class InputController extends app.Abstract.Controller {
    constructor(model) {
      super(model);
    }
    onSubmit(event, input) {
      event.preventDefault();

      if (!input.value) {
        throw new Error('You are trying to add empty record.');
      }

      this.getModel().setItem(input.value);
      input.value = '';
    }
  };

  app.Input = class Input extends app.Abstract.View {
    constructor(model) {
      super(model, new InputController(model));

      const form = document.createElement('form');

      this.setRootEl(form);
    }
    render() {
      const input = document.createElement('input');
      const button = document.createElement('button');

      this.getRootEl().classList.add('input');
      input.classList.add('input__input');
      button.classList.add('input__button');

      button.type = 'submit';
      button.textContent = 'Add';

      this.getRootEl().appendChild(input);
      this.getRootEl().appendChild(button);

      this.getRootEl().addEventListener('submit', event => this.getController().onSubmit(event, input));
    }
  };

})();
