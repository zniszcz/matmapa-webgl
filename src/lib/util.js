(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => checkEventSupport());

  const checkEventSupport = () => {
    if ('ontouchstart' in document.documentElement) {
      document.body.classList.add('touch');
    }
  };
})();
