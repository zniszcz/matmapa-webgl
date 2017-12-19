(function () {
  'use strict';

  app.VisibleNodeCollection = class VisibleNodeCollection extends app.Abstract.Model {
    constructor(nodes = [], lvl) {
      super();
      this.set('nodes', nodes);
      this.set('lvl', lvl);
    }
  };

})();
