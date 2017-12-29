(function () {
  'use strict';

  const CONFIG = {
    CANVAS_WIDTH: 800,
    CANVAS_HEIGHT: 600,
    LESSON_STARTUP_WIDTH: 60,
    LESSON_GROWTH_TEMPO: 1,
  };

  app.Node = class Node extends app.Abstract.CanvasElementView {
    constructor(model) {
      super(model);
      this.position = {};
      this.setRootEl(new PIXI.Container());
    }
    createCircle() {
      // const currentLvl = app.levelService.getLvl();
      // const scale = ((currentLvl - this.model.get('from') + 1) * CONFIG.LESSON_GROWTH_TEMPO);
      this.circle = new PIXI.Graphics();
      this.circle.lineStyle(1, 0x000000, 1);
      this.circle.beginFill(this.model.get('bgColor'));
      this.circle.drawCircle(0, 0, CONFIG.LESSON_STARTUP_WIDTH);
      // this.circle.scale.set(scale, scale);
      this.circle.endFill();

      this.circle.x = 0;
      this.circle.y = 0;

      return this.circle;
    }
    createText() {
      const text = new PIXI.Text(this.model.get('title'), {
        fontFamily: 'Arial',
        fontSize: 12,
        fill: 0x000000,
        align: 'center',
        wordWrap: true,
        wordWrapWidth: 2 * CONFIG.LESSON_STARTUP_WIDTH,
      });

      const offset = {
        top: CONFIG.LESSON_STARTUP_WIDTH + 10,
        left: -(text.width / 2),
      };

      text.position.set(offset.left, offset.top);

      return text;
    }
    render() {
      this.rootEl.width = 2 * CONFIG.LESSON_STARTUP_WIDTH;
      this.rootEl.height = 3 * CONFIG.LESSON_STARTUP_WIDTH;

      const offset = {
        top: (-this.model.get('position').y + (CONFIG.CANVAS_HEIGHT / 2)),
        left: (this.model.get('position').x + (CONFIG.CANVAS_WIDTH / 2)),
      };

      this.rootEl.position.set(offset.left, offset.top);

      const circle = this.createCircle();
      const text = this.createText();
      this.rootEl.addChild(circle);
      this.rootEl.addChild(text);
    }
  };
})();
