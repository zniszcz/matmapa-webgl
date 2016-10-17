(function () {
  'use strict';

  app.List = class List {
    constructor() {
      this.el = document.createElement('ul');
      this.el.classList.add('list');
    }
    get node() {
      return this.el;
    }
    get rootNode() {
      return this.el.parentNode;
    }
    add(value) {
      const li = new app.ListElement(value);
      return this.el.appendChild(li.node);
    }
  };
})();
