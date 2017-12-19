(function () {
  'use strict';

  app.Canvas = class Canvas extends app.Abstract.View {
    constructor(model) {
      super(model);
      this.setRootEl(document.createElement('canvas'));
      model.addEventListener('updated', () => {
        this.update();
      });
    }
    update() {
      const lessons = this.model.get('nodes');
      this.ctx.clearRect(0, 0, this.rootEl.width, this.rootEl.height);
      let topPadding = 22;
      lessons.forEach(lesson => {
        const model = app.NodeModel.fromJSON(lesson);
        const node = this.createNode(model, topPadding);
        node.render();
        topPadding += 22;
      });
    }
    createNode(model, topOffset) {
      const node = new app.Node(model);
      node.setContext(this.ctx);
      node.setCoordinates({
        top: topOffset,
        left: 10,
      });
      return node;
    }
    render() {
      this.rootEl.classList.add('main-canvas');

      this.rootEl.setAttribute('width', 800);
      this.rootEl.setAttribute('height', 600);

      this.ctx = this.rootEl.getContext('2d');
      this.ctx.font = '12px serif';
    }
  };
})();
