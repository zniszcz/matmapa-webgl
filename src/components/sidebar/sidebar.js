(function () {
  'use strict';

  app.Sidebar = class Sidebar {
    constructor() {
      this.node = document.createElement('aside');
      this.node.classList.add('sidebar');
    }
    add(node) {
      return this.node.appendChild(node);
    }
  };
})();
