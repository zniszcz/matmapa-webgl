(function () {
  'use strict';
  window.app = {};

  document.addEventListener('DOMContentLoaded', function () {

    return {
      MainView: new app.MainView(),
      MainController: new app.MainController(),
    };
  });
})();
