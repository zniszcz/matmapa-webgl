(function () {
  'use strict';

  app.Abstract.View = class View {
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

    setController(newController) {
      this.controller = newController;
    }
    setModel(newModel) {
      this.model = newModel;
    }
    setRootEl(el) {
      this.rootEl = el;
    }
    render() {
    }
  };

})();
