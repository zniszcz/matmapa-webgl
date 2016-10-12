(function () {
  'use strict';
  app.ListElement = class ListElement {
    constructor(value = '') {
      const li = document.createElement('li');
      li.innerHTML = value;
      li.addEventListener('click', event => {
        if (event.target.tagName.toLowerCase() === 'li') {
          li.parentNode.removeChild(event.target);
        }
      });

      this.node = li;
    }
  };
})();
