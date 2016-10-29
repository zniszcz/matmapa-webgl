(function () {
  'use strict';

  app.MainView = class MainView extends app.Abstract.View {
    constructor(model, controller) {
      super(model, controller);

      this.setRootEl(document.body);
      this.sidebar = new app.Sidebar(model);
    }
    render() {
      this.addChildNode(this.sidebar);
      this.sidebar.render();

      if (app.utils.checkEventSupport()) {
        this.getRootEl().classList.add('touch');
      }
    }
  };
})();
