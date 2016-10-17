(function () {
  'use strict';
  const defaultConfig = {
    value: '',
  };
  app.ListElement = class ListElement {
    constructor(options = defaultConfig) {
      this.el = document.createElement('li');
      this.el.innerHTML = options.value;

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
