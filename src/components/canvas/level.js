(function () {
  'use strict';

  app.Level = class Level extends app.Abstract.CanvasElementView {
    constructor(model) {
      super(model);
      this.setRootEl(new PIXI.Container());
    }
    createNode(model, topOffset) {
      const node = new app.Node(model);
      node.setContext(this.ctx);
      node.setCoordinates({
        top: topOffset,
        left: 45,
      });
      return node;
    }
    render() {
      const lessons = this.model.get('nodes');
      let topPadding = 45;
      lessons.forEach(lesson => {
        const model = app.NodeModel.fromJSON(lesson);
        const node = this.createNode(model, topPadding);
        node.render();
        this.rootEl.addChild(node.getRootEl());
        topPadding += 100;
      });
    }
  };
})();
