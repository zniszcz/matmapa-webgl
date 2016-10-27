(function () {
  'use strict';

  // Main view - should be treaten like a component; Append third-part components here;

  app.MainView = class MainView extends app.Abstract.View {
    constructor(model, controller) {
      super(model, controller);

      const list = new app.List();

      this.setRootEl(document.body);
      this.rootEl.appendChild(list.rootEl);

      if (app.utils.checkEventSupport()) {
        this.rootEl.classList.add('touch');
      }
    }
  };
})();
