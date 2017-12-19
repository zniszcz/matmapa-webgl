(function () {
  'use strict';

  app.MainView = class MainView extends app.Abstract.View {
    constructor(model, controller) {
      super(model, controller);

      this.setRootEl(document.body);

      const visibleCollection = app.levelService.getStream();

      this.zoom = new app.Zoom(visibleCollection);
      this.canvas = new app.Canvas(visibleCollection);
    }
    render() {
      this.rootEl.appendChild(this.zoom.getRootEl());
      this.rootEl.appendChild(this.canvas.getRootEl());

      this.zoom.render();
      this.canvas.render();

      if (app.utils.checkEventSupport()) {
        this.getRootEl().classList.add('touch');
      }
    }
  };
})();
