'use strict';
const runSequence = require('run-sequence');
const config = require('./config');

module.exports = gulp => {
  gulp.task('watch', () => {
    
    gulp.watch(config.scss, cb => { runSequence('style', 'browser-sync-reload');});
    gulp.watch(config.html, cb => { runSequence('html', 'browser-sync-reload');});
    gulp.watch(config.es, cb => { runSequence('javascript', 'browser-sync-reload');});
  });
}
