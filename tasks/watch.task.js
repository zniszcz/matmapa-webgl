'use strict';
const runSequence = require('run-sequence');
const config = require('./config');

module.exports = gulp => {
  gulp.task('watch', () => {
    gulp.watch(config.scss, done => { runSequence('style', 'browser-sync-stream', done);});
    gulp.watch(config.html, done => { runSequence('html', 'browser-sync-reload', done);});
    gulp.watch(config.es, done  => { runSequence('javascript', 'browser-sync-reload', done);});
  });
}
