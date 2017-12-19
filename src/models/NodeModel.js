(function () {
  'use strict';

  app.NodeModel = class NodeModel extends app.Abstract.Model {
    constructor(id, title, createdAt, updatedAt) {
      super();
      this.set('id', id);
      this.set('title', title);
      this.set('createdAt', createdAt);
      this.set('updatedAt', updatedAt);
    }
    static fromJSON(options) {
      const {id, title, createdAt, updatedAt} = options;
      const nodeModel = new app.NodeModel(id, title, createdAt, updatedAt);
      return nodeModel;
    }
  };

})();
