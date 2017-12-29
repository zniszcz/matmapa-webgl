(function () {
  'use strict';

  app.VisibleNodeCollection = class VisibleNodeCollection extends app.Abstract.Model {
    constructor(nodes = [], lvl = 0) {
      super();
      this.set('nodes', nodes);
      this.set('lvl', lvl);
    }
    update(feed = {}) {
      const nodes = [];
      this.set('lvl', feed.level);
      feed.lessons.forEach(lesson => {
        const lessonModel = app.NodeModel.fromJSON(lesson);
        nodes.push(lessonModel);
      });
      this.set('nodes', nodes);
      this.fireEvent('updated');
    }
  };

})();
