'use strict';

const runSequence = require('run-sequence');

module.exports = gulp => {
  gulp.task('watch-style', done => { 
    runSequence('style', 'browser-sync-reload', done);
  });
};
