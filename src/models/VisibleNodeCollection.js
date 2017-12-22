(function () {
  'use strict';

  app.VisibleNodeCollection = class VisibleNodeCollection extends app.Abstract.Model {
    constructor(nodes = [], lvl = 0) {
      super();
      this.set('nodes', nodes);
      this.set('lvl', lvl);
    }
  };

})();
