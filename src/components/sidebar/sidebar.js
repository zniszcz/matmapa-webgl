(function () {
  'use strict';

  app.Sidebar = class Sidebar extends app.Abstract.Component {
    constructor(model) {
      super(model);
      this.setRootEl(document.createElement('aside'));
      this.rootEl.classList.add('sidebar');

      const input = new app.Input(model);
      const list = new app.List(model);

      this.addChildNode(input);
      this.addChildNode(list);
    }
  };
})();
