(function () {
  'use strict';

  app.MainController = class MainController extends app.Abstract.Controller {
    constructor(model) {
      super(model);
      console.log('Hello world!');
    }
  };
})();
