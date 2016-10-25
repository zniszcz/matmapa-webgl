(function () {
  'use strict';
  window.app = {};

  document.addEventListener('DOMContentLoaded', () => {

    const bootstrap = {
      mainView: app.MainView,
      // mainController
      init() {
        console.log(this);
        return new this.mainView();
      },
    };

    bootstrap.init();
  });
})();
