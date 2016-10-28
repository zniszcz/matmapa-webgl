(function () {
  'use strict';

  app.UserModel = class UserModel extends app.Abstract.Model {
    constructor(name = '', surname = '', email = '') {
      super();
      this.set('name', name);
      this.set('surname', surname);
      this.set('email', email);

      return this;
    }

    getName() {
      return this.get('name');
    }
    getSurname() {
      return this.get('surname');
    }
    getEmail() {
      return this.get('email');
    }

    setName(name) {
      this.set('name', name);
      this.fireEvent('change', this.getUser());
    }
    setSurname(surname) {
      this.set('surname', surname);
      this.fireEvent('change', this.getUser());
    }
    setEmail(email) {
      this.set('email', email);
      this.fireEvent('change', this.getUser());
    }

    remove() {
      const user = this;
      console.dir(user);
      this.fireEvent('remove', user);
    }
  };

})();
