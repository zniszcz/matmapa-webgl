(function () {
  'use strict';

  app.UserModel = class UserModel extends app.Abstract.Model {
    constructor() {
      super();
      this.set('name', []);
    }
    getItem(query) {
      const store = this.get('name');
      const result = (query) ? store.filter(elem => (elem === query)) : store;

      return result;
    }
    setItem(value) {
      this.get('name').push(value);
      this.fireEvent('add', value);
    }
    removeItem(query) {
      if (!query) {
        return;
      }
      const elem = this.getItem(query);
      const index = this.get('name').indexOf(elem);
      this.remove(index);
      this.fireEvent('delete', elem);
    }
    // Folowing methods are prepparing to develop this structure
    findItem(query = '') {
      const store = this.get('name');
      const result = store.filter(elem => elem.includes(query));

      return result;
    }
    cleanItems() {
      this.set('name', []);
      return this.get('name');
    }

  };

})();
