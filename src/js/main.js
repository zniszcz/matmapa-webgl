(function () {
  'use strict';

  console.log('Hello world!');

  window.app = {};

  window.onload = () => {
    const sidebar = new app.Sidebar();
    const list = new app.List();
    const input = new app.Input({onSubmit: list.add});

    document.body.appendChild(sidebar.node);

    sidebar.add(input.node);
    sidebar.add(list.node);
  };
})();
