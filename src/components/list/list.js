(function () {
  'use strict';

  app.List = class List {
    constructor() {
      const list = document.createElement('ul');

      list.classList.add('list');

      this.add = function (value) {
        const li = new app.ListElement(value);
        list.appendChild(li.node);
      };

      this.node = list;
    }
  };
})();
