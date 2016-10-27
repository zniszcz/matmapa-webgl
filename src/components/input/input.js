(function () {
  'use strict';

  app.Input = class Input extends app.Abstract.Component {
    constructor(model) {
      super(model);

      const form = document.createElement('form');
      const input = document.createElement('input');
      const button = document.createElement('button');

      form.classList.add('input');
      input.classList.add('input__input');
      button.classList.add('input__button');

      button.type = 'submit';
      button.textContent = 'Add';

      form.appendChild(input);
      form.appendChild(button);

      form.addEventListener('submit', event => {
        event.preventDefault();
        const value = input.value;

        if (!value) {
          throw new Error('You are trying to add empty record.');
        }

        model.setNode(value);
        input.value = '';
      });

      this.setRootEl(form);
    }
  };

})();
