(function () {
  'use strict';

  app.List = class List extends app.Abstract.View {
    constructor(model) {
      super();
      this.setModel(model);
      this.setRootEl(document.createElement('ul'));

      // Arrow Function in following line provide correct scope handling by Babel.js
      model.addEventListener('change', () => this.loadListElements());
    }

    render() {
      this.rootEl.classList.add('list');
      this.loadListElements();
    }

    loadListElements() {
      this.getRootEl().innerHTML = '';
      this.getModel().getItems().forEach(itemModel => this.addListElement(itemModel));
    }

    addListElement(itemModel) {
      itemModel.addEventListener('remove', itemModel => {
        this.getModel().removeItem(itemModel);
        this.getModel().fireEvent('change');
      });
      const elem = new app.ListElement(itemModel);

      this.addChildNode(elem);
    }
  };
})();
