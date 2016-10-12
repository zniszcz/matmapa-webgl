(function () {
  'use strict';

  app.Sidebar = class Sidebar {
    constructor() {
      const sidebar = document.createElement('aside');

      sidebar.classList.add('sidebar');

      this.add = function (node) {
        sidebar.appendChild(node);
      };
      this.node = sidebar;
    }
  };
})();
