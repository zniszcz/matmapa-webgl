(function () {
  'use strict';
  console.log('Hello world!');

  window.app = {};

  window.onload = () => {
    // Temporary commented - singling sidebar component container out
    // const sidebar = new Sidebar();
    const list = new app.List();
    const input = new app.Input({onSubmit: list.add});

    document.body.appendChild(input.node);
    document.body.appendChild(list.node);
  };
})();
