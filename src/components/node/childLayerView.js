(function () {
  'use strict';

  const CONFIG = {
    CHILDREN_LAYER_WIDTH: 50,
    CHILD_WIDTH: 5,
  };

  // from /assets/calcChildNodes.json, created by `npm run calculateChildNodes`
  const mock = {
    1: [
      {
        x: 0,
        y: 1,
      },
    ],
    2: [
      {
        x: 0,
        y: -1,
      },
      {
        x: 0,
        y: 1,
      },
    ],
    3: [
      {
        x: 0.866,
        y: -0.5,
      },
      {
        x: -0.866,
        y: -0.5,
      },
      {
        x: 0,
        y: 1,
      },
    ],
    4: [
      {
        x: 1,
        y: 0,
      },
      {
        x: 0,
        y: -1,
      },
      {
        x: -1,
        y: 0,
      },
      {
        x: 0,
        y: 1,
      },
    ],
    5: [
      {
        x: 0.9511,
        y: 0.309,
      },
      {
        x: 0.5878,
        y: -0.809,
      },
      {
        x: -0.5878,
        y: -0.809,
      },
      {
        x: -0.9511,
        y: 0.309,
      },
      {
        x: 0,
        y: 1,
      },
    ],
    6: [
      {
        x: 0.866,
        y: 0.5,
      },
      {
        x: 0.866,
        y: -0.5,
      },
      {
        x: 0,
        y: -1,
      },
      {
        x: -0.866,
        y: -0.5,
      },
      {
        x: -0.866,
        y: 0.5,
      },
      {
        x: 0,
        y: 1,
      },
    ],
    7: [
      {
        x: 0.7818,
        y: 0.6235,
      },
      {
        x: 0.9749,
        y: -0.2225,
      },
      {
        x: 0.4339,
        y: -0.901,
      },
      {
        x: -0.4339,
        y: -0.901,
      },
      {
        x: -0.9749,
        y: -0.2225,
      },
      {
        x: -0.7818,
        y: 0.6235,
      },
      {
        x: 0,
        y: 1,
      },
    ],
    8: [
      {
        x: 0.7071,
        y: 0.7071,
      },
      {
        x: 1,
        y: 0,
      },
      {
        x: 0.7071,
        y: -0.7071,
      },
      {
        x: 0,
        y: -1,
      },
      {
        x: -0.7071,
        y: -0.7071,
      },
      {
        x: -1,
        y: 0,
      },
      {
        x: -0.7071,
        y: 0.7071,
      },
      {
        x: 0,
        y: 1,
      },
    ],
    9: [
      {
        x: 0.6428,
        y: 0.766,
      },
      {
        x: 0.9848,
        y: 0.1736,
      },
      {
        x: 0.866,
        y: -0.5,
      },
      {
        x: 0.342,
        y: -0.9397,
      },
      {
        x: -0.342,
        y: -0.9397,
      },
      {
        x: -0.866,
        y: -0.5,
      },
      {
        x: -0.9848,
        y: 0.1736,
      },
      {
        x: -0.6428,
        y: 0.766,
      },
      {
        x: 0,
        y: 1,
      },
    ],
    10: [
      {
        x: 0.5878,
        y: 0.809,
      },
      {
        x: 0.9511,
        y: 0.309,
      },
      {
        x: 0.9511,
        y: -0.309,
      },
      {
        x: 0.5878,
        y: -0.809,
      },
      {
        x: 0,
        y: -1,
      },
      {
        x: -0.5878,
        y: -0.809,
      },
      {
        x: -0.9511,
        y: -0.309,
      },
      {
        x: -0.9511,
        y: 0.309,
      },
      {
        x: -0.5878,
        y: 0.809,
      },
      {
        x: 0,
        y: 1,
      },
    ],
    11: [
      {
        x: 0.5406,
        y: 0.8413,
      },
      {
        x: 0.9096,
        y: 0.4154,
      },
      {
        x: 0.9898,
        y: -0.1423,
      },
      {
        x: 0.7557,
        y: -0.6549,
      },
      {
        x: 0.2817,
        y: -0.9595,
      },
      {
        x: -0.2817,
        y: -0.9595,
      },
      {
        x: -0.7557,
        y: -0.6549,
      },
      {
        x: -0.9898,
        y: -0.1423,
      },
      {
        x: -0.9096,
        y: 0.4154,
      },
      {
        x: -0.5406,
        y: 0.8413,
      },
      {
        x: 0,
        y: 1,
      },
    ],
    12: [
      {
        x: 0.5,
        y: 0.866,
      },
      {
        x: 0.866,
        y: 0.5,
      },
      {
        x: 1,
        y: 0,
      },
      {
        x: 0.866,
        y: -0.5,
      },
      {
        x: 0.5,
        y: -0.866,
      },
      {
        x: 0,
        y: -1,
      },
      {
        x: -0.5,
        y: -0.866,
      },
      {
        x: -0.866,
        y: -0.5,
      },
      {
        x: -1,
        y: 0,
      },
      {
        x: -0.866,
        y: 0.5,
      },
      {
        x: -0.5,
        y: 0.866,
      },
      {
        x: 0,
        y: 1,
      },
    ],
  };

  app.ChildLayer = class ChildLayer extends app.Abstract.CanvasElementView {
    constructor(model) {
      super(model);
      this.setRootEl(new PIXI.Container());
    }
    createChildNode(childModel, coordinates) {
      const circle = new PIXI.Graphics();

      const x = coordinates.x * CONFIG.CHILDREN_LAYER_WIDTH;
      const y = coordinates.y * CONFIG.CHILDREN_LAYER_WIDTH;

      circle.beginFill(0x555555);
      circle.drawCircle(x, y, CONFIG.CHILD_WIDTH);
      circle.endFill();
      circle.lineStyle(1, 0x000000, 1);

      return circle;
    }
    render() {
      const children = this.model.get('children');
      const childPoints = (children.length <= 12)
        ? children.length
        : 12;
      const coordinates = mock[childPoints];

      children.forEach((childModel, index) => {
        const child = this.createChildNode(childModel, coordinates[index]);
        this.rootEl.addChild(child);
      });
    }
  };
})();
