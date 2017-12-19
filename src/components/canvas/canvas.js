(function () {
  'use strict';

  app.Canvas = class Canvas extends app.Abstract.View {
    constructor(model) {
      super(model);
      this.app = new PIXI.Application({
        width: 800,
        height: 600,
        antialias: true,
        transparent: false,
        resolution: 1,
      });
      this.setRootEl(this.app.view);

      model.addEventListener('updated', this.update.bind(this));
    }

    update() {
      this.container.getRootEl().destroy();
      this.container = null;
      this.container = new app.Level(this.model);
      this.container.render();
      this.app.stage.addChild(this.container.getRootEl());
    }

    render() {
      this.rootEl.classList.add('main-canvas');
      this.app.renderer.backgroundColor = 0xffffff;
      this.app.renderer.autoResize = true;

      this.container = new app.Level(this.model);
      this.container.render();
      this.app.stage.addChild(this.container.getRootEl());
    }
  };
})();
