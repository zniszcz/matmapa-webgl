(function () {
  'use strict';

  const Controller = class ListController extends app.Abstract.Controller {
    constructor(model) {
      super(model);

      this.createElement = function (value) {
        return new app.ListElement(model, value);
      };
    }
  };

  app.List = class List extends app.Abstract.Component {
    constructor(model) {
      const controller = new Controller(model);
      super(model, controller);

      this.setRootEl(document.createElement('ul'));
      this.rootEl.classList.add('list');
      this.list = model.getItem();
      this.loadListElements(controller.createElement);

      // Arrow Function in following line provide correct scope handling by Babel.js
      model.addEventListener('add', value => this.addListElement(controller.createElement, value));
    }

    loadListElements(createElement) {
      this.list.forEach(value => createElement(value));
    }

    addListElement(createElement, value) {
      const newElem = createElement(value);
      this.addChildNode(newElem);
    }
  };
})();
