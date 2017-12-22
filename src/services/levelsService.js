(function () {
  'use strict';

  class LevelService {
    constructor() {
      this.url = 'http://localhost:8000/api/';
      this.lvl = 0;
      this.stream = new app.VisibleNodeCollection();
    }
    getLvl() {
      return this.lvl;
    }
    getStream() {
      return this.stream;
    }
    show() {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `${this.url}levels/${this.lvl}`);
        xhr.withCredentials = true;
        xhr.onload = () => {
          if (xhr.status === 200 || xhr.status === 201) {
            const result = (JSON.parse(xhr.responseText)).lessons;
            this.stream.set('nodes', result);
            this.stream.set('lvl', this.lvl);
            this.stream.fireEvent('updated');
            resolve();
          } else {
            reject(JSON.parse(xhr.responseText));
          }
        };
        xhr.send();
      });
    }
    zoomIn() {
      this.lvl++;
      this.stream.set('lvl', this.lvl);
      return this.show();
    }
    zoomOut() {
      this.lvl--;
      this.stream.set('lvl', this.lvl);
      return this.show();
    }
}

  app.levelService = new LevelService();
})();
