(function () {
  'use strict';

  app.MainView = class MainView extends app.Abstract.View {
    constructor(model, controller) {
      super(model, controller);

      const sidebar = new app.Sidebar(model);

      this.setRootEl(document.body);
      this.rootEl.appendChild(sidebar.rootEl);

      if (app.utils.checkEventSupport()) {
        this.rootEl.classList.add('touch');
      }
    }
  };
})();
