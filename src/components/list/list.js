(function () {
  'use strict';

  app.List = {};

  app.List.Controller = function (model, view) {
    this.listElements = new app.UserModel();
    
    return new app.List.View();
  };

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
