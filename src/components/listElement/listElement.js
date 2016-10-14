(function () {
  'use strict';
  const defaultConfig = {
    value: '',
  };
  app.ListElement = class ListElement {
    constructor(options = defaultConfig) {
      this.node = document.createElement('li');
      this.node.innerHTML = options.value;

      this.node.classList.add('listElement');
      this.node.addEventListener('click', event => {
        this.node.parentNode.removeChild(event.target);
      });
    }
  };
})();
