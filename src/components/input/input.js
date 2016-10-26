(function () {
  'use strict';

  const defaultConfig = {
    onSubmit: () => {
      console.debug('There\'s no action appended');
    },
  };

  app.Input = {};

  app.Input.View = class InputView {
    constructor(config = defaultConfig) {
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

        config.onSubmit({value});
        input.value = '';
      });

      this.el = form;
    }
    get node() {
      return this.el;
    }
  };
})();
