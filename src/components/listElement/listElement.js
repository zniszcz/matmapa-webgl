(function () {
  'use strict';

  app.ListElement = class ListElement extends app.Abstract.Component {
    constructor(model) {
      super(model);
      this.setRootEl(document.createElement('li'));
      this.rootEl.textContent = model;
      this.rootEl.classList.add('listElement');
    }
  };

  /* app.ListElement.View = class ListElementView {
    constructor(options = defaultConfig) {
      this.el = document.createElement('li');
      this.el.textContent = options.value;

      this.el.classList.add('listElement');
      this.el.addEventListener('click', event => {
        this.el.parentNode.removeChild(event.target);
      });
    }
    get node() {
      return this.el;
    }
  };*/
})();
