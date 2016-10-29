(function () {
  'use strict';

  app.Sidebar = class Sidebar extends app.Abstract.View {
    constructor(model) {
      super(model);
      this.setRootEl(document.createElement('aside'));
    }
    render() {
      const model = this.getModel();

      this.getRootEl().classList.add('sidebar');

      const input = new app.Input(model);
      const list = new app.List(model);

      input.render();
      list.render();

      this.addChildNode(input);
      this.addChildNode(list);
    }
  };
})();
