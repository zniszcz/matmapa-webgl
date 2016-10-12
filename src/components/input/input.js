(function () {
  'use strict';

  const defaultConfig = {
    onSubmit: () => {
      console.log('There\'s no action appended');
    },
  };

  app.Input = class Input {
    constructor(config = defaultConfig) {
      const form = document.createElement('form');
      const input = document.createElement('input');
      const button = document.createElement('button');

      form.classList.add('search_box');
      input.classList.add('search_box__input');
      button.classList.add('search_box__button');

      button.type = 'submit';
      button.innerHTML = 'Add';

      form.appendChild(input);
      form.appendChild(button);

      form.addEventListener('submit', event => {
        event.preventDefault();
        const value = input.value.replace(/(<([^>]+)>)/ig, '');

        if (!value) {
          throw new Error('You are trying to add empty or unsafe record.');
        }

        config.onSubmit(value);
        input.value = '';
      });

      this.node = form;
    }
  };
})();
