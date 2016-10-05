'use strict';

const runSequence = require('run-sequence');

module.exports = gulp => {
  gulp.task('watch-javascript', done => { 
    runSequence('javascript', 'browser-sync-reload', done);
  });
};
