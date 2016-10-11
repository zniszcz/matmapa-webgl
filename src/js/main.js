(function () {
  'use strict';
  console.log('Hello world!');

  // Temporary commented - singling sidebar component container out
  // const sidebar = new Sidebar();
  const list = new List();
  const input = new Input({onSubmit: list.add});

  document.body.appendChild(input.node);
  document.body.appendChild(list.node);

})();
