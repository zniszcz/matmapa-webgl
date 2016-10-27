(function () {
  'use strict';

  /* const controller = class ListController extends app.Abstract.Controller {
    constructor(model) {
      super(model);
      // this.update(model);
    }
  }; */

  app.List = class List extends app.Abstract.Component {
    constructor(model, controller = controller) {
      super(model, controller);

      this.setRootEl(document.createElement('ul'));
      this.rootEl.classList.add('list');
      this.list = model.getNode();
      this.loadListElements();

      // Arrow Function in following line provide correct scope handling by Babel.js
      model.addEventListener('add', val => this.addListElements(val));
    }

    loadListElements() {
      this.list.forEach(node => {
        const elem = new app.ListElement(node);
        this.addChildNode(elem);
      });
    }

    addListElements(value) {
      const newElem = new app.ListElement(value);
      this.addChildNode(newElem);
    }
  };
})();
