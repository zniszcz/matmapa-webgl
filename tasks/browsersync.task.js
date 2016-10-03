'use strict';

const browsersync = require('browser-sync').create();

module.exports = gulp => {

  gulp.task('browser-sync', () => {
    browsersync.init({
      server: {
        baseDir: "./dist",
      }
    });
  });
};

module.exports.browsersync = browsersync; 
