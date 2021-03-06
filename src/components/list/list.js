(function () {
  'use strict';

  app.List = class List extends app.Abstract.View {
    constructor(model) {
      super();
      this.setModel(model);
      this.setRootEl(document.createElement('ul'));

      // Arrow Function in following line provide correct scope handling by Babel.js
      model.addEventListener('change', () => this.update());
    }

    render() {
      this.rootEl.classList.add('list');
      this.update();
    }

    update() {
      this.getRootEl().innerHTML = '';
      this.getModel().getItems().forEach(itemModel => this.addListElement(itemModel));
    }

    addListElement(itemModel) {
      const elem = new app.ListElement(itemModel);
      this.getRootEl().appendChild(elem.getRootEl());
    }
  };
})();
