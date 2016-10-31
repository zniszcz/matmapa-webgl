(function () {
  'use strict';
  app.Abstract = {};

  app.Abstract.Observable = class Observable {
    constructor() {
      this.events = {};
    }

    addEventListener(eventName, callback) {
      if (!(eventName in this.events)) {
        this.events[eventName] = [];
      }
      this.events[eventName].push(callback);
    }

    fireEvent(eventName, data) {
      if (Array.isArray(this.events[eventName])) {
        const events = this.events[eventName].concat([]);
        events.forEach(evt => evt(data));
      }
    }
  };

  app.Abstract.Model = class Model extends app.Abstract.Observable {
    constructor() {
      super();
      this.properties = {};
    }

    get(key) {
      return this.properties[key];
    }

    set(key, value) {
      if (this.properties[key] === value) {
        return;
      }
      this.properties[key] = value;
      this.fireEvent('change');
    }

    remove(key) {
      delete this.properties[key];
      this.fireEvent('change');
    }

    cleanCollection() {
      this.properties = {};
      this.fireEvent('change');
    }
  };

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

  app.Abstract.Controller = class Controller {
    constructor(model) {
      this.model = model;
    }

    getView() {
      return this.view;
    }
    getModel() {
      return this.model;
    }

    setView(newView) {
      this.view = newView;
    }
    setModel(newModel) {
      this.model = newModel;
    }
  };

})();
