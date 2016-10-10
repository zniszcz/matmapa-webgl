/* global document */

'use strict';

(function () {
  // Works for multiple occurings
  const userList = document.querySelectorAll('.user_list');

  userList.forEach(function (list) {
    const form = list.querySelectorAll('form.search_box')[0];
    const input = form.querySelectorAll('input.search_box__input')[0];
    const ul = list.querySelectorAll('ul.user_list__list')[0];

    form.addEventListener('submit', event => {
      event.preventDefault();
      const newElement = document.createElement('li');

      newElement.innerHTML = input.value.replace(/(<([^>]+)>)/ig, '');
      if (!newElement.innerHTML) {
        throw new Error('You are trying to add empty or unsafe record.');
      } else {
        ul.appendChild(newElement);
        input.value = '';
      }
    });

    ul.addEventListener('click', event => {
      if (event.target.tagName.toLowerCase() === 'li') {
        ul.removeChild(event.target);
      }
    });
  });
})();
