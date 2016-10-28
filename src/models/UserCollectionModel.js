(function () {
  'use strict';

  app.UserCollectionModel = class UserCollectionModel extends app.Abstract.Model {
    constructor() {
      super();
      this.set('collection', []);
      this.addEventListener('delete', item => this.removeItem(item));
    }
    getItems() {
      return this.get('collection');
    }
    findItem(query) {
      const store = this.get('collection');
      const result = store.filter(elem => (elem.getName() === query));

      return result;
    }
    setItem(value) {
      const item = new app.UserModel(value);
      this.get('collection').push(item);
      this.fireEvent('change', item);

      return this;
    }
    removeItem(item) {
      if (!item) {
        return;
      }

      const index = this.get('collection').indexOf(item);
      this.get('collection').splice(index, 1);
    }
    cleanItems() {
      this.set('collection', []);
      return this.get('collection');
    }

  };

})();
