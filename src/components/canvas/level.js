(function () {
  'use strict';

  app.Level = class Level extends app.Abstract.CanvasElementView {
    constructor(model) {
      super(model);
      this.setRootEl(new PIXI.Container());
    }
    createNode(model) {
      const node = new app.Node(model);
      return node;
    }
    render() {
      const lessons = this.model.get('nodes');
      lessons.forEach(model => {
        const node = this.createNode(model);
        node.render();
        this.rootEl.addChild(node.getRootEl());
      });
    }
  };
})();
