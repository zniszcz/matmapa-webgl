'use strict';
const runSequence = require('run-sequence');
const config = require('./config');

module.exports = gulp => {
  
  // -- Unit watcher tasks
  gulp.task('watch-style', done => { runSequence('style', 'browser-sync-reload', done);});
  gulp.task('watch-html', done => { runSequence('html', 'browser-sync-reload', done);});
  gulp.task('watch-javascript', done => { runSequence('javascript', 'browser-sync-reload', done);});

  // -- Main watcher tasks
  gulp.task('watch', ['watch-style', 'watch-html', 'watch-javascript']);
}
