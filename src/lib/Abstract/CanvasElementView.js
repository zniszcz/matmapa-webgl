(function () {
  'use strict';

  app.Abstract.CanvasElementView = class CanvasElementView {
    constructor(model, controller) {
      this.model = model;
      this.controller = controller;
    }

    getModel() {
      return this.model;
    }
    getController() {
      return this.controller;
    }
    getRootEl() {
      return this.rootEl;
    }
    getContext() {
      return this.ctx;
    }

    setController(newController) {
      this.controller = newController;
    }
    setModel(newModel) {
      this.model = newModel;
    }
    setRootEl(el) {
      this.rootEl = el;
    }
    setContext(ctx) {
      this.ctx = ctx;
    }
    render() {
    }
  };

})();
