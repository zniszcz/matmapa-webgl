(function () {
  'use strict';

  app.Node = class Node extends app.Abstract.CanvasElementView {
    constructor(model) {
      super(model);
      this.position = {};
    }
    setCoordinates(options) {
      const {top, left} = options;

      this.position.top = top;
      this.position.left = left;
    }
    render() {
      this.ctx.fillText(this.model.get('title'), this.position.left, this.position.top);
    }
  };
})();
