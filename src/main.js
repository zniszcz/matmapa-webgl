(function () {
  'use strict';

  console.log('Hello world!');

  window.app = {};

  document.addEventListener('DOMContentLoaded', () => {
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

  });
})();
