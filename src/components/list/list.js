(function () {
  'use strict';

  app.List = class List {
    constructor() {
      const list = document.createElement('ul');

      list.classList.add('list');

      this.add = function (value) {
        const li = document.createElement('li');

        li.innerHTML = value;
        li.addEventListener('click', event => {
          if (event.target.tagName.toLowerCase() === 'li') {
            list.removeChild(event.target);
          }
        });

        list.appendChild(li);
      };

      this.node = list;
    }
  };
})();
