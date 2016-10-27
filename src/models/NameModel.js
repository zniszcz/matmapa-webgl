(function () {
  'use strict';

  app.UserModel = class UserModel extends app.Abstract.Model {
    constructor() {
      super();
      this.set('name', []);
    }
    getNode(query) {
      // I'm trying to avoid allow acces to folowing variable by declaring it each method. Is it a good idea?
      const store = this.get('name');
      const result = (query) ? store.filter(elem => (elem === query)) : store;

      return result;
    }
    setNode(value) {
      const store = this.get('name');
      store.push(value);
      this.fireEvent('add', value);

      return store;
    }
    findNodes(query = '') {
      const store = this.get('name');
      const result = store.filter(elem => elem.includes(query));

      return result;
    }
    cleanNodes() {
      this.set('name', []);
      return this.get('name');
    }

  };

})();
