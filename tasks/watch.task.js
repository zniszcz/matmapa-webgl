'use strict';

const config = require('./config');

module.exports = gulp => {
  // -- Main watcher tasks
  gulp.task('watch', () => {
    gulp.watch(config.glob.scss, ['watch-style']);
    gulp.watch(config.glob.js, ['watch-javascript']);
    gulp.watch(config.glob.html, ['watch-html']);
  });
}
