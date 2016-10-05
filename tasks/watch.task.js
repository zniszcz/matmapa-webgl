'use strict';
const runSequence = require('run-sequence');
const config = require('./config');

module.exports = gulp => {
  gulp.task('watch', () => {
    gulp.watch(config.glob.scss, done => { runSequence('style', 'browser-sync-reload', done);});
    gulp.watch(config.glob.html, done => { runSequence('html', 'browser-sync-reload', done);});
    gulp.watch(config.glob.js, done  => { runSequence('javascript', 'browser-sync-reload', done);});
  });
}
