(function () {
  'use strict';
  const defaultConfig = {
    value: '',
  };
  app.ListElement = class ListElement {
    constructor(options = defaultConfig) {
      const li = document.createElement('li');
      li.classList.add('listElement');
      li.innerHTML = options.value;
      li.addEventListener('click', event => {
        li.parentNode.removeChild(event.target);
      });

      this.node = li;
    }
  };
})();
