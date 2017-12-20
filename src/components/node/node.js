(function () {
  'use strict';

  const CONFIG = {
    CANVAS_WIDTH: 800,
    CANVAS_HEIGHT: 600,
    LESSON_STARTUP_WIDTH: 30,
    LESSON_GROWTH_TEMPO: 30,
  };

  app.Node = class Node extends app.Abstract.CanvasElementView {
    constructor(model) {
      super(model);
      this.position = {};
      this.setRootEl(new PIXI.Graphics());
    }
    render() {
      // this.ctx.fillText(this.model.get('title'), this.position.left, this.position.top);
      const currentLvl = app.levelService.getLvl();
      const radius = (CONFIG.LESSON_STARTUP_WIDTH +
          ((currentLvl - this.model.get('from')) * CONFIG.LESSON_GROWTH_TEMPO));
      this.rootEl.beginFill(this.model.get('bgColor'));
      this.rootEl.drawCircle(0, 0, radius);
      this.rootEl.endFill();

      this.rootEl.x = (this.model.get('position').x + (CONFIG.CANVAS_WIDTH / 2));
      this.rootEl.y = (-this.model.get('position').y + (CONFIG.CANVAS_HEIGHT / 2));
    }
  };
})();
