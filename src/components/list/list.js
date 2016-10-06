/* global document */

'use strict';

(function () {
  // Works for multiple occurings
  const userList = document.querySelectorAll('.user_list');

  userList.forEach(function (list) {
    // Assume that order of elements is constant
    // TODO: dynamicly get proper elements

    const form = list.children.item(0);
    const ul = list.children.item(1);

    form.addEventListener('submit', event => {
      event.preventDefault();
      const input = form.children.item(0);
      const newElement = document.createElement('li');

      newElement.innerHTML = input.value;
      ul.appendChild(newElement);
      input.value = '';
    });
  });
})();
