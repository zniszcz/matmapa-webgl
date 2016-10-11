'use strict';

const runSequence = require('run-sequence');

module.exports = gulp => {
  gulp.task('watch-html', done => { 
    runSequence('html', 'browser-sync-reload', done);
  });
};
