(function () {
  'use strict';
  window.app = {};

  document.addEventListener('DOMContentLoaded', function () {
    const model = new app.UserCollectionModel();
    const view = new app.MainView(model);

    view.render();
  });
})();
