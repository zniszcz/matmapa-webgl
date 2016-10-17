(function () {
  'use strict';

  app.utils = {
    checkEventSupport() {
      return 'ontouchstart' in document.documentElement;
    },
  };
})();
