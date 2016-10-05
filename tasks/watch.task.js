'use strict';
const runSequence = require('run-sequence');
const config = require('./config');

module.exports = gulp => {
  
  // -- Unit watcher tasks
  gulp.task('watch-style', done => { 
    gulp.watch(config.glob.scss, () => {runSequence('style', 'browser-sync-reload', done)});
  });
  gulp.task('watch-html', done => { 
    gulp.watch(config.glob.html, () => {runSequence('html', 'browser-sync-reload', done)});
  });
  gulp.task('watch-javascript', done => { 
    gulp.watch(config.glob.js, () => {runSequence('javascript', 'browser-sync-reload', done)});
  });

  // -- Main watcher tasks
  gulp.task('watch', ['watch-style', 'watch-html', 'watch-javascript']);
}
