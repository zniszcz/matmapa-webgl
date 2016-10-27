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
        this.events[eventName].forEach(evt => evt(data));
      }
    }
  };

  app.Abstract.Model = class Model extends app.Abstract.Observable {
    constructor() {
      super();
      this.properties = {};
    }

    get(key) {
      const result = (key) ? this.properties[key] : this.properties;
      return result;
    }

    set(key, value) {
      if (this.properties[key] === value) {
        return;
      }
      this.properties[key] = value;
      this.fireEvent('change');
    }

    cleanNodes() {
      this.properties = {};
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
      if (this.rootEl) {
        document.body.appendChild(this.rootEl);
      } else {
        throw new Error('This View has no root element.');
      }
    }
  };

  app.Abstract.Component = class Component extends app.Abstract.View {
    constructor(model, controller) {
      super(model, controller);
    }
    addChildNode(node) {
      this.rootEl.appendChild(node);
      return node;
    }
    removeChildNode(node) {
      this.rootEl.removeChild(node);
      return this.rootEl;
    }
    getChildNode(query) {
      const result = (query)
        ? this.rootEl.childNodes.querySelectorAll(query)
        : this.rootEl.childNodes;

      return result;
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
