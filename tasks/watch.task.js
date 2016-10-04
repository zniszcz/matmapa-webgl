'use strict';
const runSequence = require('run-sequence');
const config = require('./config');

module.exports = gulp => {
  gulp.task('watch', () => {
    gulp.watch(config.scss, () => { runSequence('style', 'browser-sync-stream');});
    gulp.watch(config.html, () => { runSequence('html', 'browser-sync-reload');});
    gulp.watch(config.es, () => { runSequence('javascript', 'browser-sync-reload');});
  });
}
