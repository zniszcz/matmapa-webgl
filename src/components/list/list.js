(function () {
  'use strict';

  const controller = class ListController extends app.Abstract.Controller {
    constructor(model) {
      super(model);
    }
  };

  app.List = class List extends app.Abstract.Component {
    constructor(model) {
      super(model, controller);
      this.setRootEl(document.createElement('ul'));
      this.rootEl.classList.add('list');
    }
  };
})();
