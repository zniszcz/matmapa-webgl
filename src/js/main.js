(function () {
  'use strict';

  console.log('Hello world!');

  window.app = {};

  window.onload = () => {
    const sidebar = new app.Sidebar();
    const list = new app.List();
    // Arrow function on following line provide changing the 'this' context for Babel
    const input = new app.Input({onSubmit: val => list.add(val)});

    document.body.appendChild(sidebar.node);

    sidebar.add(input.node);
    sidebar.add(list.node);
  };
})();
