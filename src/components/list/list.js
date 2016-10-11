(function () {
  'use strict';
  // Works for multiple occurings
  const userList = document.querySelectorAll('aside.users');

  userList.forEach(function (container) {
    const form = container.querySelectorAll('form.search_box')[0];
    const input = form.querySelectorAll('input.search_box__input')[0];
    const list = container.querySelectorAll('ul.users__list')[0];

    form.addEventListener('submit', event => {
      event.preventDefault();
      const newUser = input.value.replace(/(<([^>]+)>)/ig, '');

      if (!newUser) {
        throw new Error('You are trying to add empty or unsafe record.');
      }

      const newElement = document.createElement('li');
      newElement.innerHTML = newUser;

      list.appendChild(newElement);
      input.value = '';
    });

    list.addEventListener('click', event => {
      if (event.target.tagName.toLowerCase() === 'li') {
        list.removeChild(event.target);
      }
    });
  });
})();
