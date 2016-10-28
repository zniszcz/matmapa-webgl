(function () {
  'use strict';

  app.ListElement = class ListElement extends app.Abstract.Component {
    constructor(model) {
      super();
      this.setModel(model);
      this.setRootEl(document.createElement('li'));
      this.rootEl.textContent = model.getName();
      this.rootEl.classList.add('listElement');
      this.rootEl.addEventListener('click', () => model.remove());
    }
  };
})();
