'use strict';

const browsersync = require('browser-sync').create();
const config = require('./config');

module.exports = gulp => {

  gulp.task('browser-sync', () => {
    browsersync.init({
      server: {
        baseDir: "./dist",
      }
    });

    gulp.task('browser-sync-reload', () => { 
      browsersync.reload();
    });

  });
};
