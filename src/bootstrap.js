(function () {
  'use strict';
  window.app = {};

  document.addEventListener('DOMContentLoaded', function () {
    // this.model = new app.UserModel();
    this.view = new app.MainView();
    this.controller = new app.MainController(this.view);

  });
})();
