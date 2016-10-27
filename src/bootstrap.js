(function () {
  'use strict';
  window.app = {};

  document.addEventListener('DOMContentLoaded', function () {
    const model = new app.UserModel();
    const controller = new app.MainController(model);
    const view = new app.MainView(model, controller);

    view.render();
  });
})();
