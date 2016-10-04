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

    gulp.watch(config.scss, ['style', browsersync.reload]);
    gulp.watch(config.es, ['html', browsersync.reload]);
    gulp.watch(config.html, ['javascript', browsersync.reload]);

  });
};

module.exports.browsersync = browsersync; 
