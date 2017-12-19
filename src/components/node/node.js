(function () {
  'use strict';

  app.Node = class Node extends app.Abstract.CanvasElementView {
    constructor(model) {
      super(model);
      this.position = {};
      this.setRootEl(new PIXI.Graphics());
    }
    setCoordinates(options) {
      const {top, left} = options;

      this.position.top = top;
      this.position.left = left;
    }
    render() {
      // this.ctx.fillText(this.model.get('title'), this.position.left, this.position.top);
      this.rootEl.beginFill(0x00ff00);
      this.rootEl.drawCircle(0, 0, 30);
      this.rootEl.endFill();

      this.rootEl.x = this.position.left;
      this.rootEl.y = this.position.top;
    }
  };
})();
