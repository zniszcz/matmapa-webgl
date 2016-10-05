'use strict';

const clean = require('gulp-clean');
const gutil = require('gulp-util');
const config = require('./config');

module.exports = gulp => {


  // Task for cleaning dist directory.
  gulp.task('clean', () => {
    return gulp
      .src(config.dist+'/*', {read: false})
      .pipe(clean());
  });

};
