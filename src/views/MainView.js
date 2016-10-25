(function () {
  'use strict';

  // Main view - should be treaten like a component; Append third-part components here;

  app.MainView = class MainView {
    constructor() {
      const sidebar = new app.Sidebar();
      const list = new app.List();
      // Function on following line provide changing the 'this' context for Babel
      const input = new app.Input({
        onSubmit(val) {
          return list.add(val);
        },
      });

      document.body.appendChild(sidebar.node);

      sidebar.add(input.node);
      sidebar.add(list.node);

      if (app.utils.checkEventSupport()) {
        document.body.classList.add('touch');
      }
    }
  };
})();
