(function () {
  'use strict';

  app.Sidebar = {};

  app.Sidebar.View = class SidebarView {
    constructor() {
      this.el = document.createElement('aside');
      this.el.classList.add('sidebar');
    }
    add(node) {
      return this.el.appendChild(node);
    }
    get node() {
      return this.el;
    }
  };
})();
