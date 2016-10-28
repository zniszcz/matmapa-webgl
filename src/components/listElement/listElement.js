(function () {
  'use strict';

  app.ListElement = class ListElement extends app.Abstract.Component {
    constructor(model, value) {
      super(model);
      this.setRootEl(document.createElement('li'));
      this.rootEl.textContent = value;
      this.rootEl.classList.add('listElement');
      this.rootEl.addEventListener('click', event => {
        event.target.parentNode.removeChild(event.target);
        model.removeItem(value);
      });
    }
  };
})();
