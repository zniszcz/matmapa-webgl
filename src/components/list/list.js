(function () {
  'use strict';

  app.List = {};

  app.List.View = class ListView {
    constructor() {
      this.el = document.createElement('ul');
      this.el.classList.add('list');
    }
    get node() {
      return this.el;
    }
    add(value) {
      const li = new app.ListElement.View(value);
      return this.el.appendChild(li.node);
    }
  };
})();
