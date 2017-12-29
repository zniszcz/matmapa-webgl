(function () {
  'use strict';

  app.NodeModel = class NodeModel extends app.Abstract.Model {
    constructor(options) {
      super();
      const {id, title, from, to, x, y, bgColor, createdAt, updatedAt} = options;
      this.set('id', id);
      this.set('title', title);
      this.set('from', from);
      this.set('to', to);
      this.set('position', {x, y});
      this.set('bgColor', bgColor || 0x00ff00);
      this.set('createdAt', createdAt);
      this.set('updatedAt', updatedAt);
    }
    static fromJSON(options) {
      const nodeModel = new app.NodeModel(options);
      const children = [];
      options.children.forEach(child => {
        const childModel = app.NodeModel.fromJSON(child);
        children.push(childModel);
      });
      nodeModel.set('children', children);
      return nodeModel;
    }
  };

})();
