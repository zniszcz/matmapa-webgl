(function () {
  'use strict';
  const defaultConfig = {
    value: '',
  };

  app.ListElement = {};

  app.ListElement.View = class ListElementView {
    constructor(options = defaultConfig) {
      this.el = document.createElement('li');
      this.el.textContent = options.value;

      this.el.classList.add('listElement');
      this.el.addEventListener('click', event => {
        this.el.parentNode.removeChild(event.target);
      });
    }
    get node() {
      return this.el;
    }
  };
})();
