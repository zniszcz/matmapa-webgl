(function () {
  'use strict';

  app.Zoom = class Zoom extends app.Abstract.View {
    constructor(model) {
      super(model);
      this.setRootEl(document.createElement('aside'));
      model.addEventListener('updated', this.update.bind(this));
    }
    increment() {
      app.levelService.zoomIn();
    }
    decrement() {
      app.levelService.zoomOut();
    }
    update() {
      this.lvlInput.value = this.model.get('lvl');
      this.decrementButton.disabled = !(this.model.get('lvl'));
    }
    render() {
      const rootEl = this.rootEl;

      this.incrementButton = document.createElement('button');
      this.lvlInput = document.createElement('input');
      this.decrementButton = document.createElement('button');

      this.incrementButton.textContent = 'Zoom in';

      this.lvlInput.value = 0;
      this.lvlInput.disabled = true;

      this.decrementButton.textContent = 'Zoom out';
      this.decrementButton.disabled = !(this.model.get('lvl'));

      rootEl.appendChild(this.decrementButton);
      rootEl.appendChild(this.lvlInput);
      rootEl.appendChild(this.incrementButton);

      this.incrementButton.addEventListener('click', this.increment.bind(this));
      this.decrementButton.addEventListener('click', this.decrement.bind(this));
    }
  };
})();
