(function () {
  'use strict';

  app.UserModel = class UserModel {
    constructor(storage = []) {
      this.storage = storage;
    }
    getNode(query) {
      let result = [];

      if (query) {
        this.storage.find(record => {
          if (record === query) {
            result.push(record);
          }
        });
      } else {
        result = this.storage;
      }

      return result;
    }
    addNode(value) {
      return this.storage.push(value);
    }
    removeAll() {
      this.storage = [];
    }

  };

})();
